# README

## How to run the project locally

1 - Open the `docker-compose.yml` file and put your OPENAI API KEY in the environment section.

2 - Start the app:
Both backend and frontend are server from a single docker container, so we only need:

```
docker-compose up
```

3 - generate the embeddings of the book from the PDF:.
This step generate 2 types of artifacts:

- the embeddings to be use for cosine similarity comparison
- the single, text-only, file containing the full book. Since the context window allow us, we now prefer use the whole book in the prompt to get amazing results.

```
docker-compose exec web rake book:generate_embeddings
docker-compose exec web rake book:generate_full_text_file
```

4 - done! Visit `localhost:3333` and play with it.

## TODO

- README
- upload on github in an opaque way
- test a new run from github download without container

- proof read the cover letter

- clean test questions from db
