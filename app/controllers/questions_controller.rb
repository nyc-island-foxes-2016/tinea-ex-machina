class QuestionsController < ApplicationController
  def index
    @questions = Question.all
    @answer = Answer.new
    render 'index'
  end

  def show
    @question = Question.includes(:answers).find(params[:id])
  end
end
