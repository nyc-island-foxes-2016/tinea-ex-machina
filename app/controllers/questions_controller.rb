class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order(updated_at: :desc)
    if request.xhr?
      render @questions.sort{|a, b| b.vote_count <=> a.vote_count}
    end
  end

  def show
    @question = Question.includes(:comments, :votes, answers: [:comments]).find(params[:id])
    @answer = Answer.new
  end

  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)
    @question.user = current_user
    if @question.save
      redirect_to @question
    else
      render :new
    end
  end

  def update
    @answer = Answer.find(params[:answer_id])
    @question = @answer.question
    @question.update_attribute(:best_answer_id, @answer.id)
    redirect_to @question
  end

  private 

  def question_params
  	params.require(:question).permit(:title, :content)
  end
end
