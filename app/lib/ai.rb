class Ai
    MAX_PROMPT_LENGTH = 8000
    CHAR_PER_TOKEN = 4.1 # https://platform.openai.com/tokenizer

    # Use the Ruby OpenAI gem to create embeddings based on input
    def self.create_embeddings input
        client = OpenAI::Client.new
        client.embeddings(
            parameters: {
                model: "text-embedding-ada-002",
                # model: "text-search-curie-doc-001",
                input: input
            }
        )
    end

    def self.ask(query, lmbda = nil)
        client = OpenAI::Client.new

        answer = ''
        part_counter = 0
        response = client.chat(
            parameters: {
                model: "gpt-4o", 
                messages: [{ role: "user", content: query}],
                temperature: 0,
                stream: proc do |chunk, _bytesize|
                    part = chunk.dig("choices", 0, "delta", "content")
                    part_counter += 1

                    if part
                        answer += part 
                        lmbda.call(part, part_counter) if lmbda
                    end
                end
            }
        )

        return answer
    end

    def self.compose_whole_book_prompt question
        File.open(Rails.root.join("tmp",'book_content.txt'), "r") do |file|
            whole = ''
            file.each_line do |line|
                whole += line
            end

            prompt = <<-PROMPT
                Sahil Lavingia is the founder and CEO of Gumroad, and the author of the book The Minimalist Entrepreneur (also known as TME). These are questions and answers by him. Please keep your answers to three sentences maximum, and speak in complete sentences. Stop speaking once your point is made. Here is the content of the book The Minimalist Entrepreneur:
                #{whole}
            
                --- END CONTENT
            
                IMPORTANT: if you don't find it in the book, clearly tell me that you could find something about the topic in the book.
                IMPORTANT 2: If it is not a question or a request about the book or its author, suggest that you only can answer to requests about the book itself.
            
                Here some examples of interactions with Sahil:
                How to choose what business to start?
                
                First off don't be in a rush. Look around you, see what problems you or other people are facing, and solve one of these problems if you see some overlap with your passions or skills. Or, even if you don't see an overlap, imagine how you would solve that problem anyway. Start super, super small.
                ---
                Here is my question:
                #{question}
                PROMPT
        end
    end

    def self.compose_prompt question, relevant_pages
        base_prompt_size = 820
        response_size = 250

        max_relevant_page_size = MAX_PROMPT_LENGTH - (base_prompt_size + response_size)

        relevant_content = ''
        relevant_pages.each do |page|
            relevant_content += page.strip
            if relevant_content.length >= max_relevant_page_size
                # remove the eccess content
                relevant_content = relevant_content[0..max_relevant_page_size]
                break
            end
        end

        prompt = <<-PROMPT
            Sahil Lavingia is the founder and CEO of Gumroad, and the author of the book The Minimalist Entrepreneur (also known as TME). These are questions and answers by him. Please keep your answers to three sentences maximum, and speak in complete sentences. Stop speaking once your point is made. Context that may be useful, pulled from The Minimalist Entrepreneur:
            #{relevant_content}

            --- END RELEVANT CONTENT

            IMPORTANT: if you don't find it in the relevant content, clearly tell me that you could find something about the topic in the book.

            Here some examples of interactions with Sahil:
            How to choose what business to start?
            
            First off don't be in a rush. Look around you, see what problems you or other people are facing, and solve one of these problems if you see some overlap with your passions or skills. Or, even if you don't see an overlap, imagine how you would solve that problem anyway. Start super, super small.
            ---
            Here is my question:
            #{question}
        PROMPT

        p prompt

        return prompt
    end
end

