class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order(updated_at: :desc)
    if request.xhr?
      respond_to do |format|
        format.json {
          json_questions = @questions.map { |question|
            { id: question.id,
              title: question.title,
              content: question.content,
              vote_count: question.vote_count,
              update_time: std_format_date(question.updated_at),
              user_id: question.user.id,
              username: question.user.username,
              trendiness: question.comments.count + question.answers.count
              }.as_json(root: false)
          }.to_json
          render json: json_questions
        }
      end
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
