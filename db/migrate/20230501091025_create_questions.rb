class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :question, null: false
      t.string :answer, null: true
      t.boolean :answered, null: false, default: false
      t.date :asked_on, null: false, default: -> { 'CURRENT_DATE' }
    end
  end
end
