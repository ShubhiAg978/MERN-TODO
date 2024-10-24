# MERN To-Do Application

## Introduction

A simple To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates CRUD operations, where users can create, read, update, and delete tasks.

## Features

- Add, edit, and delete to-do items
- Mark tasks as complete or incomplete
- Persistent task storage with MongoDB
- Responsive user interface built with React

## Technologies Used

- MongoDB
- Express
- React
- Node.js
- Mongoose (for MongoDB interaction)
- Axios (for making API requests)
- Material UI (for styling)

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB (running locally or a cloud-based instance)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShubhiAg978/MERN-TODO.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MERN-TODO
   ```

3. Install server dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install client dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start MongoDB server if running locally.
2. In the backend directory, create a `.env` file and add your MongoDB connection string:
   ```bash
   MONGO_URI=your-mongodb-connection-string
   PORT=5050
   ```
3. In the backend directory, run the server:

   ```bash
   npm start
   ```

4. In the frontend directory, run the React app:
   ```bash
   npm start
   ```

The app should now be running at `http://localhost:3000`.

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Video

https://github.com/user-attachments/assets/20a3c5c1-9ec2-4da3-b297-62dc4e5e71cb
