class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false, limit: 200
      t.string :content, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
