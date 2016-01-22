class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
  has_many :comments, as: :commentable

  validates :content, :question_id, :user_id, presence: true

end
