class ApplicationController < ActionController::Base
    def index
        render 'custom'
    end

    def current_session
        session_id = request.headers['X-Session-Id']
        @questions = Question.where(status: 2).where.not(answer: nil).order(id: :desc).limit(10)
        render json: { session_id: session_id, questions: @questions }
    end

    def product_demo_page
        # in the real world this will
        # be a list of font files
        # grabbed based on the current product
        # and configurations
        files = Dir.glob("public/products/fonts-files/*").map { |file_path| File.basename(file_path) }

        @font_files = []

        files.each do |file|
            if file.include?(".woff2")
                @font_files.push({
                    # improve the naming to show in the UI
                    name: file.gsub(".woff2", "").gsub("-", " ").gsub("_", " "),
                    url: "/products/fonts-files/#{file}"
                })
            end
        end

        render 'product_demo_page'
    end
end
