class AnswersController < ApplicationController
	def create
		@answer = Answer.new(answer_params)
		@answer.update_attributes(user: current_user, question_id: params[:question_id])
		redirect_to question_path(params[:question_id])
	end

  def update
    @answer = Answer.find(params[:id])
    @answer.update_attribute(:best, true)
    redirect_to @answer.question
  end

  private 

  def answer_params
  	params.require(:answer).permit(:content, :user_id)

  end
end
