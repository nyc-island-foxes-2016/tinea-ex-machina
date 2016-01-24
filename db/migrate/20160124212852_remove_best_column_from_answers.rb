class RemoveBestColumnFromAnswers < ActiveRecord::Migration
  def change
    remove_column :answers, :best
  end
end
