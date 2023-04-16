
# Kobi Education Mini Project Challenge

This is a mini project challenge for applying to Kobi Education. This project is built using Express JS with TypeScript and MySQL as the database. Below are the requirements for this project:

## Requirements

-   Node.js
-   MySQL

## Steps

1.  Clone this repo
2.  Run `npm install` or `yarn install` in the project directory to install the dependencies
3.  Rename or copy `.env.example` file to `.env`
4.  Set `.env` configuration according to your MySQL settings
5.  Run `npx sequelize-cli db:migrate`, then `npx sequelize-cli db:seed:all` to set up the database tables and seed data
6.  Run `npm run dev` to start the server in development mode or `npm run build` then `npm run start` to start in production mode
7.  The default preview port is `8000`

## Routes

1.  Login: `/api/v1/auth/login` (POST). Request body: `username`, `password`
2.  Register: `/api/v1/auth/register` (POST). Request body: `username`, `password`
3.  Get all questions: `/api/v1/practice/getQuestions` (GET). Use Bearer Token for authentication
4.  Update my answer: `/api/v1/practice/updateAnswer` (POST). Request body: `answer`, `questionId`. Use Bearer Token for authentication
5.  Get my answers: `/api/v1/practice/answers` (GET). Use Bearer Token for authentication

Note: For routes that require authentication, you need to pass the Bearer Token in the Authorization header.