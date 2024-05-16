namespace :book do
    desc 'Create embeddings for each page of the book and store them in a csv file'
    task generate_embeddings: :environment do
      file_name = 'book_embeddings.csv'

      puts 'Parsing pdf file in pages'
      book_pages = Pdf.parse_in_pages

      puts 'Create embeddings for each page'

      pages_embeddings = book_pages.map.with_index do |page, index| 
        response = Ai.create_embeddings(page) 
        embedding = Embeddings.extract_from_api_response(response).first
        [ "page#{index + 1}", *embedding ]
      end

      puts "Store embeddings to csv file in tmp directory. File name: #{file_name}"
      Embeddings.store_to_csv(pages_embeddings, file_name)

      puts "Done! File stored in tmp directory. File name: #{file_name}"
    end


    desc 'Dump the whole content of the book from the PDF to a ready to use txt file'
    task generate_full_text_file: :environment do
      file_name = 'book_content.txt'

      puts 'Parsing pdf file in pages'
      book_pages = Pdf.parse_in_pages

      puts 'Save pages to file'
      Pdf.save_in_file book_pages, file_name


      puts "Done!"
    end
end
  

