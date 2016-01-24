class AnswersController < ApplicationController
	def create
		@answer = Answer.new(answer_params)
		@answer.update_attributes(user: current_user, question_id: params[:question_id])
		binding.pry
		redirect_to question_path(params[:question_id])
	end

  private 

  def answer_params
  	params.require(:answer).permit(:content, :user_id)

  end
end
