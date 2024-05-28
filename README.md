# README

## How to run the project locally on Linux/Mac

1 - Create a `.env` file based on `.env.default` and fill it with the configuration variables needed.

2 - Start the app:
Both backend and frontend are server from a single docker container, so we only need:

```
docker compose up
```

3 - generate the embeddings of the book from the PDF:.
This step generate 2 types of artifacts:

- the embeddings to be use for cosine similarity comparison
- the single, text-only, file containing the full book. Since the context window allow us, we now prefer use the whole book in the prompt to get amazing results.

```
docker compose exec web rake book:generate_embeddings
docker compose exec web rake book:generate_full_text_file
```

4 - done! Visit `localhost:3333` and play with it.

## Run in prod

1 - Create a `.env.production` file based on `.env.default` and fill it with the configuration variables needed.

```
docker compose -f docker-compose-prod.yml up
``
```

## Deploy new version

```
git pull;
docker compose -f docker-compose-prod.yml stop;
docker compose -f docker-compose-prod.yml rm -f;
docker compose -f docker-compose-prod.yml up -d;
docker compose -f docker-compose-prod.yml logs -f
```
