require 'csv'
require 'numo/narray'

class Embeddings
    def self.extract_from_api_response(response)
      response["data"].map { |item| item["embedding"] }
    end
  
    def self.store_to_csv(embeddings, file_name)
      file = Rails.root.join("tmp", file_name)
      CSV.open(file, "wb") do |csv|
        embeddings.each do |embedding|
          csv << embedding
        end
      end
    end
  
    def self.get_embedding_for_string(input_string)
      response = Ai.create_embeddings(input_string)
      embedding = extract_from_api_response(response).first
    end
  
    def self.load_from_csv(file_name)
      CSV.read(file_name)
    end
  
    def self.cosine_similarity(vec1, vec2)
        vec1 = Numo::NArray.cast(vec1.map(&:to_f))
        vec2 = Numo::NArray.cast(vec2.map(&:to_f))
        dot_product = vec1.dot(vec2)
        norm1 = Math.sqrt(vec1.dot(vec1))
        norm2 = Math.sqrt(vec2.dot(vec2))
        dot_product / (norm1 * norm2)
    end
  end