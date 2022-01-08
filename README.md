# Remotejobs

A full-stack code-kata app that explores a few practices for layered and scalable application code.

Links:
- [Web app](https://web-dot-briet-practice-projects.uc.r.appspot.com/)
- [Graphql Playground](https://service-dot-briet-practice-projects.uc.r.appspot.com/graphql)

Backend: 
- TypeScript
- Apollo Server
- Graphql
- Knex
- Postgres

Frontend
- TypeScript
- React
- Nextjs
- Material UI

Implementation highlights:
- infinite scroll
- cursor-based pagination
- scalable, non-ORM data-access layer
- dataloading for performant graphql queries
- tab-ability and other accessibility concerns
- language i18n/translations
- UI view-layer decoupling

## Dependencies
- Node
- Docker with docker-compose

## Setup
1. Clone the repo
1. run the server
1. populate data fixtures
1. run the web app

### Run the server
1. cd into /service
1. run `yarn install`
1. run `docker compose up` to start the local postgres container
1. copy .env.development over to .env
1. run `yarn db:up` to migrate the db schema
1. run `yarn dev` to start the dev server
1. in a browser, go to `http://localhost:3001/graphql` to see the graphql playground

### Populate data fixtures
1. Send a request to `POST http://localhost:3001/fixtures`

### Run the web app
1. cd into /web
1. run `yarn install`
1. ensure the server is running
1. in a browser, go to `http://localhost:3000`
