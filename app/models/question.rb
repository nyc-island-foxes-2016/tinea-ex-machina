class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :comments, as: :commentable

  validates :user_id, :content, :title, presence: true
  validates :title, length: { maximum: 200 }
end