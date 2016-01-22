class User < ActiveRecord::Base
  has_secure_password

  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true
  validates :username, length: { maximum: 15 }
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }


  has_many :questions
  has_many :answers
  has_many :comments, as: :commentable
end
