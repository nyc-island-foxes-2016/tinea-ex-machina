class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
  belongs_to :user
  has_many :votes, as: :votable

  validates :content, :user_id, presence: true

  def vote_count
    self.votes.count
  end
end
