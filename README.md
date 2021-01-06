# Kaleidoscope Frontend

This is the frontend repository for the Kaleidoscope app. It contains the code necessary for the client to view the app. It was designed to work with the app's [backend repository](https://github.com/jtreeves/budget-backend). To use the entire app, visit the [Kaleidoscope](https://kaleidoscope-budget.herokuapp.com) site.

**Contents**

1. [About](https://github.com/jtreeves/budget-frontend#about)
2. [Installation](https://github.com/jtreeves/budget-frontend#installation)
3. [Explanation](https://github.com/jtreeves/budget-frontend#explanation)
4. [User Stories](https://github.com/jtreeves/budget-frontend#user-stories)
5. [Features](https://github.com/jtreeves/budget-frontend#features)
6. [Dependencies](https://github.com/jtreeves/budget-frontend#dependencies)
7. [Designs](https://github.com/jtreeves/budget-frontend#designs)
8. [Views](https://github.com/jtreeves/budget-frontend#views)
9. [Further Thoughts](https://github.com/jtreeves/budget-frontend#further-thoughts)

## About

Kaleidoscope is an app for seeing how simple life changes can result in dramatic budget opportunities. It was made through the collaborative efforts of Alan Avery, Jackson Reeves, Jeremy Uriz, and Thomas Gilbert.

## Installation

### Create Local Repositories

1. Fork and clone this repository and the corresponding [backend repository](https://github.com/jtreeves/budget-backend) to your local computer (we recommend storing both directories in a common Kaleidoscope folder)
2. Run `npm i` to install all necessary dependencies
3. Set up a `.env` file to hold the `REACT_APP_SERVER_URL` variable (set it to `http://localhost:8000`)

### Set Up Local Database

1. Ensure you have MongoDB installed on your local computer by typing `mongo` into your terminal to launch the Mongo shell (install MongoDB if necessary)
2. Upon running the backend repo (see next step), a new database named `kaleidoscope` should automatically appear in your local MongoDB (confirm by typing `show dbs` while in the Mongo shell)

### Run Locally

1. Run `npm start` from within both the backend directory and the frontend directory
2. View the live version of the site at `http://localhost:3000` in the browser of your choosing

Alternatively, you may use the live version of the [Kaleidoscope](https://kaleidoscope-budget.herokuapp.com) app.

## Explanation

We started b.

## User Stories

- As a potential user, I want to sign up for Kaleidoscope, so I can use the service.
- As a user, I want the ability to log in, so I can securely access my data.
- As a user, I want to log out of the application, so I can keep my information secure.
- As a new user, I want to enter my financial data, so I can effectively budget my income.
- As a user, I want to see my monthly expenses, so I can track how my money is spent.
- As a user, I want to see how my spending in a category impacts my budget, so I can make informed decisions about managing my expenses.
- As a user, I want to see and modify expense details, so I can get an accurate view of my budget.
- As a user, I want to see a sum of sub-categories, so I can see how much I am spending on each sub-category.
- As a user, I want to easily navigate the application, so I can easily use it.
- As a user, I want to see my name displayed user's when I am logged in, so I can know I am logged in.
- As a user, I want to see the difference between my income and expenses, so I can either do nothing or make adjustments based on data.
- As a user, I want to see how my budget compares to my goal, so I can see where I stand financially in relation to my goal.

## Features

- Forms for signing up and logging in users
- Forms for creating budgets and adding elements to budgets
- Views for a homepage and about page
- Views for a budg

## Dependencies

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- dotenv
- jwt-decode
- react
- react-alert
- react-alert-template-basic
- react-dom
- react-router-dom
- react-scripts
- recharts
- web-vitals

## Designs

**Main Page**
![Main Page](/images/design1.jpg)

**Sign Up**
![Sign Up](/images/design2.jpg)

**Log In**
![Log In](/images/design3.jpg)

**Profile**
![Profile](/images/design4.jpg)

**Budget**
![Budget](/images/design5.jpg)

**Utilities**
![Utilities](/images/design6.jpg)

## Views

**Main Page**
![Main Page](/images/app1.png)

**Log In**
![Sign Up](/images/app2.png)

**Sign Up**
![Log In](/images/app3.png)

**Create First Budget**
![Create First Budget](/images/app4.png)

**Budget Overview**
![Budget Overview](/images/app5.png)

**Overview for Separate Budget**
![Overview for Separate Budget](/images/app6.png)

**Category Breakdown**
![Category Breakdown](/images/app7.png)

**Compare Budgets**
![Compare Budgets](/images/app8.png)

**Compare Locations**
![Compare Locations](/images/app9.png)

## Further Thoughts

Notes aboud stretch goals and problem areas TK.