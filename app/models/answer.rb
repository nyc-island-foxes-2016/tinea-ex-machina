class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
  has_many :comments, as: :commentable
  has_many :votes, as: :votable

  validates :content, :question_id, :user_id, presence: true

  def vote_count
    self.votes.count
  end

  def best?
    self == self.question.best_answer
  end
end
