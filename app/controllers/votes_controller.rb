class VotesController < ApplicationController
	def create
		@votable = find_votable
		@vote = @votable.votes.build(user: current_user) #Might 
		#### TODO write logic for downvote as well
			@vote.update_attributes(is_up_vote: true)
		binding.pry
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