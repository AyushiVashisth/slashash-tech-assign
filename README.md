<h1 align="center">🚀 slashash-tech-assign 🚀</h1>

<p align="center">
<h3>This is a simple web application that allows users to search for dad jokes from an external API and save their favorite jokes to a database. The application is built using Node.js, Express.js, MongoDB, and Bootstrap 5.</h3>

### Backend Respositry URL 👉 [Click here](https://joke-api-9w5q.onrender.com/)
### Frontend Respositry URL 👉 [Click here](https://joke-favorites.vercel.app/)  Wait for data to appear on page

</p>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Backend</b><br>
  <img src="https://img.shields.io/badge/expressjs-%777BB4.svg?style=for-the-badge&logo=express&logoColor=white" alt="express">
  <img src="https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=mongoose&logoColor=white" alt="mongoose">
  <img src="https://img.shields.io/badge/nodejs-%23007ACC.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs">
</p>

<p align="center">
  <b>Tools</b>
  <br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/NPM-%2300f.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

<p align="center">
  <b>Deployment</b>
   </br>
  <img src="https://img.shields.io/badge/render-100000.svg?style=for-the-badge&logo=render&logoColor=white" alt="render">
</p>

## Features

### 1. Search Jokes
   - Users can search for dad jokes using the search functionality.
   - The application fetches jokes from the external [icanhazdadjoke](https://icanhazdadjoke.com/api) API.
   - Jokes are displayed in a card layout for easy browsing.
   
### 2. Favorite Jokes
   - Users can mark jokes as favorites by clicking on the "Favorite" button displayed on each joke card.
   - Favorite jokes are saved to the database for future reference.
   - Provides a convenient way for users to save and revisit their preferred jokes.

### 3. View Favorites
   - Users can access a dedicated page to view all their saved favorite jokes.
   - The application retrieves favorite jokes from the database and displays them in a user-friendly list format.
   - Allows users to easily review and enjoy their collection of favorite dad jokes.

### 5. Simple and Intuitive UI
   - Features a clean and intuitive user interface (UI) for easy navigation and interaction.
   - Presents jokes in a visually appealing manner, enhancing the overall user experience.
   - Provides a seamless and enjoyable browsing experience for users searching for dad jokes.

### 6. Backend API Integration
   - Utilizes Node.js and Express.js for server-side development.
   - Integrates with MongoDB to store and manage favorite jokes data.
   - Implements RESTful API endpoints for searching jokes, saving favorites, and retrieving favorites.

## Technology Stack

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user and enquiry data.

## Project Structure

```
dad-jokes-app/
│   ├── models/         # Mongoose schema models
│   │   └── favoriteJoke.js  # Model for favorite jokes
│   ├── routes/         # Express.js route handlers
│   │   ├── jokeRoutes.js    # Routes for fetching jokes
│   │   └── favoriteRoutes.js  # Routes for handling favorites
│   ├── config/         # Database configuration
│   │   └── db.js       # MongoDB connection setup
│   ├── index.js          # Main application file
│   └── package.json    # Backend dependencies and scripts
│
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```
  
- **server/**: This directory contains all the backend-related files including models, routes, configuration, and the main application file.
  - **models/**: This subdirectory contains Mongoose schema models for interacting with the MongoDB database.
    - `favoriteJoke.js`: Mongoose schema for storing favorite jokes.
  - **routes/**: This subdirectory contains Express.js route handlers for different endpoints.
    - `jokeRoutes.js`: Express.js router for handling joke-related API requests.
    - `favoriteRoutes.js`: Express.js router for handling favorite-related API requests.
  - **config/**: This subdirectory contains configuration files.
    - `db.js`: MongoDB connection setup file.
  - `index.js`: The main Express.js application file where routes are defined and middleware is configured.

- **package.json**: This file contains information about project dependencies and scripts for both frontend and backend.

- **README.md**: This is the markdown file containing project documentation including setup instructions, project overview, and other relevant information.

## API Endpoints

1. **Search Jokes Endpoint**:
   - **URL**: `/api/jokes/search`
   - **Method**: GET
   - **Description**: Fetches dad jokes from an external API.
   - **Response**: Returns a JSON object containing the fetched joke data.
   - **Example**: 
     ```json
     {
        "jokeId": "987654321",
        "jokeText": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        "status": 200
     }
     ```

2. **Save Favorite Joke Endpoint**:
   - **URL**: `/api/favorites`
   - **Method**: POST
   - **Description**: Saves a favorite dad joke to the database.
   - **Request Body**: JSON object containing the joke ID and joke text.
   - **Example**:
     ```json
     {
        "jokeId": "987654321",
        "jokeText": "I told my wife she was drawing her eyebrows too high. She looked surprised."
     }
     ```
   - **Response**: Returns the saved favorite joke data.
   - **Example**:
     ```json
     {
        "_id":"65cdc8982af953f092a62e8e",
        "jokeId":"987654321","jokeText":"I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "createdAt":"2024-02-15T08:17:28.475Z",
        "__v":0
     }
     ```

3. **Get Favorite Jokes Endpoint**:
   - **URL**: `/api/favorites`
   - **Method**: GET
   - **Description**: Retrieves all saved favorite dad jokes from the database.
   - **Response**: Returns an array of JSON objects containing favorite joke data.
   - **Example**:
     ```json
     [
      {
        _id: "65cdc8562af953f092a62e8b",
        jokeId: "1",
        jokeText:
          "Why don't scientists trust atoms? Because they make up everything.",
        createdAt: "2024-02-15T08:16:22.542Z",
        __v: 0
      },
      {
        _id: "65cdc8982af953f092a62e8e",
        jokeId: "987654321",
        jokeText:
          "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        createdAt: "2024-02-15T08:17:28.475Z",
        __v: 0
      },
      {
        _id: "65cdc8a02af953f092a62e90",
        jokeId: "234567890",
        jokeText:
          "Parallel lines have so much in common. It's a shame they'll never meet.",
        createdAt: "2024-02-15T08:17:36.612Z",
        __v: 0
      },
      {
        _id: "65cdc8ab2af953f092a62e92",
        jokeId: "345678901",
        jokeText:
          "Why did the scarecrow win an award? Because he was outstanding in his field.",
        createdAt: "2024-02-15T08:17:47.139Z",
        __v: 0
      },
      {
        _id: "65cdc8b22af953f092a62e94",
        jokeId: "456789012",
        jokeText:
          "I'm reading a book on anti-gravity. It's impossible to put down.",
        createdAt: "2024-02-15T08:17:54.531Z",
        __v: 0
      },
      {
        _id: "65cdc8ba2af953f092a62e96",
        jokeId: "567890123",
        jokeText:
          "What do you get when you cross a snowman and a vampire? Frostbite.",
        createdAt: "2024-02-15T08:18:02.134Z",
        __v: 0
      }
     ];
     ```

<h2 align="center">Getting Started</h2>

1. Clone the repository: git clone <repository-url>
2. Install dependencies: npm install
3. Configure environment variables: Create a .env file based on .env.example and provide necessary details.
4. Start the server: npm start
5. The server will be running at http://localhost:<PORT>8080

<h3>This is an individual project that I developed as a solo backend developer within 2 hours.</h3>

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the slashash-tech-assign project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or valuable, please consider giving it a ⭐️.

<h1 align="center">🚘 Happy Exploring! 🚘</h1>
