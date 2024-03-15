# Vue Weather App

This Vue.js application with Tailwind CSS provides a clean and responsive UI for displaying current weather details based on the user's location. Users can sign in or sign up to access the system.

## Features

- Clean and responsive UI design
- Display of current temperature, weather description, and weather icon representing the weather condition
- User authentication system with sign-in and sign-up functionality
- Ability to detect current location and retrieve weather details
- Error handling for network requests

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd client
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run serve
    ```

5. Open your browser and navigate to the provided address to view the application.

## Configuration

1. Modify the `.env` file to configure any environment-specific variables or API keys required for weather data retrieval.

## Technologies Used

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for building custom designs quickly.
- Axios: A promise-based HTTP client for making network requests.
- Vue Router: The official router for Vue.js for handling navigation within the application.


## Folder Structure

- `src/components/`: Contains Vue components used to build the UI.
- `src/views/`: Vue components representing different views of the application.
- `src/router/`: Vue Router configuration files.



## Usage

1. Upon launching the application, users will be prompted to sign in or sign up to access the weather information.
2. After authentication, users can detect their current location and retrieve weather details.
3. The application will display the current temperature, weather description, and an icon representing the weather condition.
4. Users can navigate through different views of the application as per their requirements.

## Error Handling

The application includes error handling mechanisms for network requests, ensuring a smooth user experience even in the event of network issues or API failures.

## server
# JWT Authentication Server

This project provides a simple authentication system using JSON Web Tokens (JWT) for server-side login and registration functionality.

## Features

- User registration with encrypted password storage
- User login with JWT authentication
- Token-based authentication for accessing protected routes
- Express.js server for handling HTTP requests

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd server
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

 Modify the `.env` file to configure your environment variables, including database connection details, JWT secret key, etc.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:<port>` where `<port>` is the port number specified in your `.env` file or defaults to 3000.

3. You can now access the following endpoints:

    - `POST /api/register`: Register a new user.
    - `POST /api/login`: Log in with an existing user and receive a JWT token.
  



## Dependencies

- `bcrypt`: Library for hashing passwords.
- `bcryptjs`: An implementation of bcrypt in JavaScript. (You may choose one of `bcrypt` or `bcryptjs` depending on your preference)
- `cookie-parser`: Middleware to parse cookies attached to the client request object.
- `cors`: Middleware to enable Cross-Origin Resource Sharing (CORS).
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `express`: Web application framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JSON Web Tokens.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `nodemon`: Utility that monitors for changes in your source code and automatically restarts your server.


