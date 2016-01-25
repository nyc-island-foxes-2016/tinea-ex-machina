class AnswersController < ApplicationController
	def create
		@answer = Answer.new(answer_params)
    @question = Question.find_by(id: params[:question_id])

		@answer.user = current_user
    @answer.question = @question
    @question.touch if @answer.save

		redirect_to question_path(@question)
	end

  private 

  def answer_params
  	params.require(:answer).permit(:content, :user_id)
  end
end
