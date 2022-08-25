# Microservice Architecture and Singleton Design Pattern Experiment with ExpressJS, Sequelize, Google Books API, JWT

I wanted to experience Microservice infrastructure in Node.js, therefore I created this project.

`Database per Microservice` microservice design pattern has been used for both services.

Singleton pattern has been used in both microservices.

## **Table of Contents**

1. [Requirements](#requirements)
2. [Overview](#overview)
3. [Configuration and Initialization](#configuration-and-initialization)
   - [Environment Variables Configurations](#env)
   - [API Gateway Configuration](#gateway)
   - [Public and Private Keys](#keys)
   - [MySQL Configuration](#mysql)
   - [Redis Configuration](#redis)
4. [Install & Run](#install-run)
5. [API Documentation](#api-docs)
6. [TODO](#to-do)
7. [Learn More & Resources](#learn)
8. [NOTE](#note)


## Requirements <a id="requirements"></a> [🔝][@jump-to-top]

- Node.js 16.16.0+ 
- yarn 1.22.19 or npm 8.18.0 (the versions I used for installing/updating dependencies)
- ts-node (optional due to package.json files already include it but you may install globally)

## Overview <a id="overview"></a> [🔝][@jump-to-top]

The API consists two microservices that client-service and books-service.

client-service has built to authenticate users for adding books that have been fetching from book service to their bookmarks.

book-service has built to provide the books data for searching books on Google Books API and creating bookmarks.

`Tech Stack`: Google Books API, ExpressJS, JSON Web Token, Sequelize(Typescript), MySQL, Umzug, Winston(logger), Axios, Express-Gateway, Bcrypt | Argon2, ESlint & Prettier, axios-logger, Redis



## Configuration and Initialization <a id="configuration-and-initialization"></a> [🔝][@jump-to-top]

API Gateway port is set to `8080` by default.

### Environment Variables Configurations <a id="env"></a> [🔝][@jump-to-top]

There are  `.env.example` files in both [`book-service`](./book-service/.env.example) and [`client-service`](./client-service/.env.example).

Feel free to change their name as `.env` and set variables.

### API Gateway Configuration <a id="gateway"></a> [🔝][@jump-to-top]

There are another configurations in [`gateway.config.yml`](./api-gateway/config/gateway.config.yml)

```yml
http:
  port: 8080 # api gateway port 
admin:
  port: 9876
  host: localhost
apiEndpoints: # api gateway configuration
  auth:
    host: localhost #auth service host in api gateway
    paths: '/auth/*' #auth service path in api gateway
  book:
    host: localhost #book service host in api gateway
    paths: '/books/*' #book service path in api gateway
serviceEndpoints: # both services configurations
  auth-service:
    url: 'http://localhost:8000/auth/' # auth service base uri
  book-service:
    url: 'http://localhost:8001/books/' # book service base uri
policies:
  - cors
  - log
  - proxy
pipelines:
  auth:
    apiEndpoints:
      - auth
    policies:
      - cors:
          - action:
              origin: false
      - proxy:
          - action:
              serviceEndpoint: auth-service 
              changeOrigin: true
              prependPath: false # for passing query strings and another nested paths
      - log:
        - action:
            message: ${req.method} ${req.originalUrl}
  book:
    apiEndpoints:
      - book
    policies:
      - cors:
          - action:
              origin: false
      - proxy:
          - action:
              serviceEndpoint: book-service 
              changeOrigin: true
              prependPath: false # for passing query strings and another nested paths
      - log:
        - action:
            message: ${req.method} ${req.originalUrl}

```

You can change this configuration. Here is the [reference](https://www.express-gateway.io/docs/).


### Public and Private Keys <a id="keys"></a> [🔝][@jump-to-top]

You should provide private key named as `private.pem` and public key named as `public.pem` in root directories of services.

We read the keys in [here](./book-service/src/utils/ReadKeyUtils.ts) and [there](./client-service/src/utils/ReadKeyUtils.ts).

### You may use [`this`](http://travistidwell.com/jsencrypt/demo/) RSA key generator. (RSA256)
I had generated keys with 2048 bits key size to use.

### MySQL Configuration <a id="mysql"></a> [🔝][@jump-to-top]

You should create your schemas for both of services in MySQL
I said MySQL because I only tested MySQL not others. 
You may give it a try for other DBs.

e.g. I had created schemas as *book_service* and *auth_service* with `utf8mb4` as **charset** and `utf8mb4_unicode_ci` as **collation**.

### Redis Configuration <a id="redis"></a> [🔝][@jump-to-top]

Redis has been used caching book searches for 30 minutes.

You must install the redis-server([Windows](https://github.com/microsoftarchive/redis/releases), [wsl](https://developer.redis.com/create/windows/) or [linux](https://redis.io/docs/getting-started/installation/install-redis-on-linux/)).

## Install & Run <a id="install-run"></a> [🔝][@jump-to-top]

Note: There are `yarn.lock` files in both services' folders. You'd better to use `yarn`.

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

## API Documentation <a id="api-docs"></a> [🔝][@jump-to-top]

You can take a glance at [`Postman API Docs`](https://documenter.getpostman.com/view/6383857/VUqoRyqS).


## TODO <a id="to-do"></a>[🔝][@jump-to-top]
- API Tests ([Mocha](https://mochajs.org/#getting-started) & [Chai](https://www.chaijs.com/guide/) || [supertest](https://github.com/visionmedia/supertest) || [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress))
- sh script to run 2 services with API Gateway || [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)
- Rearranging file and variable names and providing a TypeScript path resolver solution instead of relative paths.
- Discussion about monorepo ([Lerna?](https://lerna.js.org/docs/getting-started)) or polyrepo approaches on microservice architecture. If monorepo approach will be implemented, consider to discuss applying a bundler ([webpack](https://webpack.js.org/concepts/) etc.).


## Learn More & Resources <a id="learn"></a>[🔝][@jump-to-top]

Will be added soon.


<hr>


## NOTE <a id="note"></a> [🔝][@jump-to-top]
If you're going to develop bigger project, please consider to use IoC design paradigm with SOLID principles for implementing Dependency Injection pattern due to Singleton pattern've been started to seem as Anti-pattern.
([InversifyJS](https://github.com/inversify/InversifyJS/blob/master/wiki/readme.md) || [TypeDI](https://docs.typestack.community/typedi/v/develop/01-getting-started))


[@jump-to-top]: #table-of-contents