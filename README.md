<h1 align="center">A minimal Twitter clone built with NextJS and NestJS</h1>

## Setting up a development environment

- Install [PostgreSQL](https://www.postgresql.org/) and create a database named `twitter`
- `git clone https://github.com/raviranchod/twitter-clone.git`
- Within `/api`, rename `.env.example` to `.env`
- Set the environment variables for `DATABASE_USERNAME`, `DATABASE_PASSWORD` and [`COOKIE_PASSWORD`](https://github.com/vvo/next-iron-session#withironsessionhandler--password-cookiename-ttl-cookieoptions-)
- `cd api`
  - `npm install`
  - `npm run start:dev`
  - GraphQL playground running on `http://localhost:4000/graphql`
  - Update GraphQL playground setting `"request.credentials": "same-origin"` to allow cookies to be set
- `cd client`
  - `npm install`
  - `npm run dev`
  - App running on `http://localhost:3000`

## Feature list

- Authentication system (Login and Register)
- Ability to compose a tweet
- Profile tweet list
