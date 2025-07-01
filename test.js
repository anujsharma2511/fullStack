// npm init
// Initialize a new Node.js project
// npm init -y
// -y flag to accept all defaults

// Semantic versioning
// MAJOR.MINOR.PATCH
// Increment the MAJOR version for incompatible API changes
// Increment the MINOR version for added functionality in a backwards-compatible manner
// Increment the PATCH version for backwards-compatible bug fixes

// Example of semantic versioning
// Initial version 1.0.0

// require vs import
// require is used in CommonJS modules
// import is used in ES6 modules

// express js
// command : npm install express
// Express is a web application framework for Node.js
// It simplifies the process of building web applications and APIs

// nodemon
// command : npm install -g nodemon
// Nodemon is a utility that monitors for changes in your source code and automatically restarts your server
// It is useful during development to avoid manually restarting the server after every change
// Example of using nodemon
// nodemon index.js
// This command will start your application and watch for changes in the files
// If any changes are detected, it will automatically restart the server
// Example of a simple Express application

// dotenv
// command : npm install dotenv
// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// It is useful for managing configuration settings and sensitive information
// Example of using dotenv
// require('dotenv').config();
// const port = process.env.PORT;

// CORS
// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent malicious websites from making requests to a different domain than the one that served the web page.
// It is important to configure CORS properly in your API to allow legitimate requests from your frontend application.
// To enable CORS in an Express application, you can use the `cors` middleware.
// command : npm install cors
// Example of using CORS in an Express application

// mongoose
// command : npm install mongoose
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js
// It provides a schema-based solution to model your application data and interact with MongoDB.
// Example of using Mongoose
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));
