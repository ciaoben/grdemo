class QuestionsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def create
        question = Question.new(question_params)
        question.save

        AnswerQuestionsJob.perform_later(question.id)
    
        if question.save
            render json: { message: 'Question created successfully', question_id: question.id }, status: :created
        else
            render json: { errors: question.errors.full_messages }, status: :unprocessable_entity
        end
    end
  
    private
  
    def question_params
    #   params.require(:question)
      params.permit(:question, :session_id)
    end
end
        # book_embeddings = Embeddings.load_from_csv(file_name)
        # input_embedding = Embeddings.get_embedding_for_string(question_params[:question])
        # similar_embeddings = Embeddings.find_similar_embeddings(input_embedding, embeddings, threshold)

