class AnswerChannel < ApplicationCable::Channel
    # Called when the consumer has successfully
    # become a subscriber to this channel.
    def subscribed
        session_id = params['session_id']

        # give an identity to the new channel to be used later from
        # AI chat to stream the answer
        stream_from "session_#{session_id}"
    end
end

