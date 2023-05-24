# NodeJS, 'JWT token Auth' REST API with Express and Mysql

## Features
1. Register new user
2. Login user
3. Verify token

## API endpoints

1. `POST /api/registration`: Register new user
2. `POST /api/login`: Logs in a user
3. `GET /api/verify`: Verify token

## Body Payload
Signup expects

```js
{
    name: string,
    email: string,
    password: string,
}
```

Signin expects

```js
{
    email: string,
    password: string
}
```
## Tools
* NodeJS/Express: Server
* MySQL: Storage
* JWT: Token based authentication
* bcryptjs: Password security

## Available scripts
* `start`: Starts the server with node
* `start:dev`: Starts the server in watch mode

## Getting started

Clone it by starting your terminal, then change the directory to where you would like to save it and run

```sh
git clone https://github.com/anasasif/node-mysql-jwt-auth.git
```
Change to the downloaded directory with

```sh
cd node-mysql-jwt-auth.git
```

Rename the file named `.env.example` to `.env` and update the variable values with valid ones

Install the required dependencies with

```sh
npm install
```

Initialize the database with

```sh
npm run db:init
```

Start the app with

```sh
npm start
```

You can also start it in watch mode with

```sh
npm run start:dev
```