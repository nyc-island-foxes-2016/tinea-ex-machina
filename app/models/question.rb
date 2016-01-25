class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :comments, as: :commentable
  has_many :votes, as: :votable

  validates :user_id, :content, :title, presence: true
  validates :title, length: { maximum: 200 }

  def vote_count
    self.votes.count
  end

  def best_answer
    Answer.find_by(id: self.best_answer_id)
  end

end
