class AddSessionIdToQuestions < ActiveRecord::Migration[7.0]
  def change
    add_column :questions, :session_id, :string
  end
end
