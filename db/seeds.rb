# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do
  u = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: '123456')
  2.times do
    q = Question.create(title: Faker::Hacker.say_something_smart, content: Faker::Lorem.paragraph, user_id: u.id)
    3.times do
      a = Answer.create(content: Faker::Hacker.say_something_smart, question_id: q.id, user_id: u.id)
      c1 = Comment.create(content: Faker::Hacker.say_something_smart, user_id: u.id, commentable_id: q.id, commentable_type: "Question")
      2.times do
        c = Comment.create(content: Faker::Hacker.say_something_smart, user_id: u.id, commentable_id: a.id, commentable_type: "Answer")
      end
    end
  end
end

