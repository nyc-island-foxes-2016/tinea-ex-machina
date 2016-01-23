class QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render 'index'
  end

  def show
    @question = Question.includes(:answers).find(params[:id])
  end
end
