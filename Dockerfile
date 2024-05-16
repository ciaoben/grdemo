FROM ruby:3.1

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN curl -s https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN corepack enable


# Update the package list, install required dependencies, and add a more recent g++ version
RUN apt-get update -qq && \
    apt-get install -y build-essential g++ libgmp-dev software-properties-common && \
    apt-get update -qq && \
    apt-get install -y g++-9


# RUN npm i -g yarn
RUN gem install bundler:2.3.26

# Set the working directory
WORKDIR /askmybook

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install gems
RUN bundle install

# Copy the application code
COPY . .

RUN ls -lah

# Install js deps
RUN /usr/bin/yarn

# Expose the port
EXPOSE 3000

# Start the server
CMD ["echo", "Hello World"]
