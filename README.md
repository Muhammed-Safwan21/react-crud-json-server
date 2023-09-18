# React CRUD Application with JSON Server

This is a simple React application that allows you to perform CRUD (Create, Read, Update, Delete) operations on user data using JSON Server as a mock API.

## Features

- View a list of users
- Add a new user
- Edit an existing user
- View user details
- Mark users as premium members

## Technologies Used

- React
- React Router
- React Bootstrap
- Axios for API requests
- JSON Server for simulating a REST API

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository:
```shell
   git clone https://github.com/Muhammed-Safwan21/react-crud-json-server.git
```
2.Navigate to the project directory:

    ```shell
    cd react-crud-json-server
    ```
3.install the dependencies:
```shell
     npm install
```
    
4.Start the JSON Server for simulating the API:
```shell
    json-server --watch db.json --port=8000
```
5.Start the React application:
```shell
    npm start
```
6.Open your browser and go to http://localhost:3000 to access the application.

## Usage

- Click on "HOME" in the navigation bar to view the list of users.
- Click on "ADD NEW" in the navigation bar to add a new user.
- Click on a user's name in the list to view their details.
- Click on "Edit" to edit a user's information.
- You can mark a user as a premium member by checking the "Premium Member" checkbox.