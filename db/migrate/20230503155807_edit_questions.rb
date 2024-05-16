class EditQuestions < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :status, :string
    remove_column :questions, :answered
  end
end
