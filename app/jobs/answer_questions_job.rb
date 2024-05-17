class AnswerQuestionsJob < ApplicationJob
  queue_as :default

  def perform(question_id)
    question = Question.find(question_id)
    if !question.answer.nil? or question.nil?
      # do nothing
      return 
    end
    
    # Uncomment this to use embeddings search
    # # Load book embeddings from the CSV file
    # book_embeddings = Embeddings.load_from_csv(Rails.root.join('tmp', 'book_embeddings-new.csv'))

    # book_embeddings_by_page = {}
    # book_embeddings.each { |embedding| book_embeddings_by_page[embedding[0]] = embedding[1..] }
    
    # Create an embedding for the question
    # question_embedding = Embeddings.get_embedding_for_string(question.question)
    # relevant_pages = []
    # book_embeddings_by_page.each do |page, embedding|
    #     similarity = Embeddings.cosine_similarity(question_embedding, embedding)
    #     # p "page: #{page} - similarity: #{similarity}"
    #     if similarity >= 0.8
    #         relevant_pages << page.gsub(/[^\d]/, '').to_i
    #     end
    # end

    # relevant_content = Pdf.read_lines(Rails.root.join('tmp', 'book_content.txt'), relevant_pages)
    # query = Ai.compose_prompt question.question, relevant_pages

    # we pass the whole generated content of the book to the LLM
    # because it fits in the context of the model and perform way better.
    # What a time to be alive.
    query = Ai.compose_whole_book_prompt question.question


    answer = Ai.ask query, lambda { |chunk| 
      ActionCable.server.broadcast("session_#{question.session_id}", { body: chunk })
    }

    question.answer = answer
    question.status = :answered

    question.save
  rescue => e
    puts "Error in AnswerQuestionsJob: #{e}"

    # We catch the error and send it as generic to the frontend
    ActionCable.server.broadcast("session_#{question.session_id}", { errored: true })

    question.status = :errored
    question.save
  end
end
