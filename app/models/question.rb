class Question < ApplicationRecord
    enum status: [:to_answer, :answering, :answered, :errored]
end
