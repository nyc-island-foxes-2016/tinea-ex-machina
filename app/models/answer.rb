class Answer < ActiveRecord::Base
  def change
    create_table :answer do |t|
      t.string :content, null: false
      t.integer :user_id, null: false
      t.integer :question_id, null: false

      t.timestamps null: false
    end
  end
end
