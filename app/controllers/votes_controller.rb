class VotesController < ApplicationController
	def create
		@votable = find_votable
			#### TODO write logic for downvote as well
			if Vote.where(user: current_user, votable_id: @votable.id).empty?
				@vote = @votable.votes.build(user: current_user)
				@vote.update_attributes(is_up_vote: true)
			else
				@vote = Vote.new
			end
			@question = Question.find_by(id: params[:question_id])
			if @vote.save

				if request.xhr?
					puts @votable.votes.count.to_json
			respond_to do |format|
        format.json {render json: @votable.votes.count}
        format.html {redirect_to @question}
      end





				else
					puts ("Nojson")
					redirect_to @question
				end
			else
				redirect_to @question
			end
		end

		private

		def vote_params
			vote_params = params.require(:vote).permit(:user_id)

		end

		def find_votable
			params.each do |name, value|
				if name =~ /(.+)_id$/
					return $1.classify.constantize.find(value)
				end
			end
			nil
		end

	end