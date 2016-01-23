class AnswersController < ApplicationController
	def create
		@answer = Answer.create(answer_params)
		binding.pry
	end

  private 

  def answer_params
  	params.require(:answer).permit(:content, :user_id)
  end
end
