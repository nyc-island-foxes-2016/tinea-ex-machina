class QuestionsController < ApplicationController
  def index
    @questions = Question.all
    @user = User.new
    render 'index'
  end

  def show
    @question = Question.includes(:comments, answers: [:comments]).find(params[:id])
    @answer = Answer.new
  end

  def new
    @question = Question.new
  end

  private 

  def question_params
  	params.require(:question).permit(:title, :content, :user_id)
  end
end
