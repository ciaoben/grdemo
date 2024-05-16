class ApplicationController < ActionController::Base
    def index
        render 'custom'
    end

    def current_session
        session_id = request.headers['X-Session-Id']
        @questions = Question.order(id: :desc).limit(10)
        render json: { session_id: session_id, questions: @questions }
    end
end
