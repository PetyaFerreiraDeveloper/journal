# Journal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

I am using [Softuni practise server](https://github.com/softuni-practice-server/softuni-practice-server) as a backend. Please download it from the github repo and run it before starting the frontend app.

## Running the project for the first time:

1. Clone the repository from github.
2. Run `npm i` to install the libraries and get access to node_modules folder for the front end
3. Make sure the backend server is up and running.
3. Run `ng serve` to start the project.

## Users access

Unauthenticated users will have access to the following routes:

- Home
- About
- Blogs (you can see all journal entries, which are marked as Blog by the author, and thereby are publicly available)
- Details page (full information about each blog entry)
- Login
- Register

Authenticated users will have access to all routes above and to the following routes:

- My Journal (you can see all journal entries, which are private and only accessible to the user who wrote them)
- Create Journal or Blog Entry
- Edit Journal Entry
- Delete Journal Entry
- Logout

## User ready for testing

There is a user provided by Softuni's server, that you can use for logging in.
Use the following credentials:

email: peter@abv.bg
password: 123456

## Styling

I am using Tailwind for styling of my components.

## Route Guards

I have created guards to protect most of the routes unauthenticated users are not supposed to see.
