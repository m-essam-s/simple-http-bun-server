# Simple HTTP bun server

## Features

- Create, Read, Update, and Delete (CRUD) operations on an array of users
- Lightweight and fast
- Easy to set up and use

## Requirements

- [Bun](https://bun.sh/) - A fast JavaScript runtime

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/m-essam-s/simple-http-bun-server.git
    ```

2. Navigate to the project directory:

    ```sh
    cd simple-http-bun-server
    ```

3. Install dependencies:

    ```sh
    bun install
    ```

## Usage

1. Start the server:

    ```sh
    bun run server.js
    ```

2. The server will be running at `http://localhost:3003`

## API Endpoints

- `GET /users` - Retrieve all users
- `GET /useres/:id/info` - fetch user by id
- `POST /users/create` - Create a new user
- `PUT /users/:id/update` - Update a user by ID
- `DELETE /users/:id/delete` - Delete a user by ID
