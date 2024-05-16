# Notes

book_pages = Pdf.parse_in_pages
pages_embeddings = book_pages.map.with_index { |page, index|
response = Ai.create_embeddings(page)
embedding = Embeddings.extract_from_api_response(response).first
[ "page#{index + 1}", *embedding ]
}

Embeddings.store_to_csv(pages_embeddings, 'book_embeddings.csv')

# Store page embeddings

    # Store paragraph embeddings
    paragraph_embeddings = paragraphs.map { |paragraph| Embeddings.get_embedding_for_string(paragraph) }
    Embeddings.store_to_csv(paragraph_embeddings, 'paragraph_embeddings.csv')
