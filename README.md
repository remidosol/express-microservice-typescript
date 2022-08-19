# Microservice Architecture and Singleton Design Pattern Experiment with ExpressJS, Sequelize, JWT

I wanted to experience Singleton and Microservice techs in Node.js, therefore I created this project.


## Requirements

- Node.js 16.16.0+ and yarn or npm



The API consists two microservices that respectively client-service and books-service.

client-service has built to authenticate users for adding books that have been fetching from book service to their bookmarks.

book-service has built to provide the books data for searching books and creating bookmarks.

### `Tech Stack`: ExpressJS, JSON Web Token, Sequelize(Typescript), Umzug, Winston(logger), Axios, Express-Gateway, Bcrypt | Argon2, ESlint & Prettier, axios-logger



# Configuration

API Gateway port is set to `8080` by default.
## Environment Variables' Configurations

There are  `.env.example` files in both [`book-service`](./book-service/.env.example) and [`client-service`](./client-service/.env.example).

Feel free to change them.
## Public and Private Keys

You should provide private key named as `private.pem` and public key names as `public.pem` in root directories of services.

### You may use [`this`](http://travistidwell.com/jsencrypt/demo/) RSA key generator.
I had generated as 2048 bits key size to use.

Feel free to change them.

## ESLint and Prettier Configuration

ESLint and Prettier configurations have been done in [`book-service/.eslintrc.json`](./book-service/.eslintrc.json), [`book-service/.prettierrc.json`](./book-service.prettierrc.json) files and [`client-service/.prettierrc.json`](./client-service.prettierrc.json),[`client-service/.prettierrc.json`](./client-service.prettierrc.json), 

There are not much rules, so you're free to change the rules.


# Install & Run

### Note: There are `yarn.lock` files in both services folders. You'd better to use `yarn`.

<hr>

You must go to both services and run command below to install dependencies:
```sh
cd book-service
yarn

#and

cd client-service
yarn
```

There are `nodemon.json` in services' folders. So you can run servers in development and watch mode:
```sh
cd book-service
yarn watch

#and

cd client-service
yarn watch
```

After do that for 2 services, you can run API gateway like below while 2 services run:
```sh
cd api-gateway
node server.js
```

## API Documentation

### You take a glance at at [`Postman API Docs`](https://documenter.getpostman.com/view/6383857/VUqoRyqS).



# Learn More & Resources

They will be added soon.