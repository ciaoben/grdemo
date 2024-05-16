module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      puts 'WebSocket connected'
    end
  end
end
