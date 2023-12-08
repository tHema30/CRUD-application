require('dotenv').config();/*Dotenv is a npm package which help us to import
 environment variables file .It will be available at Every place 
 if we require it in app file.This line simply means importing environment variables external file config(.env)*/

const express = require('express');/*This declares a constant variable named 'express it's framme work*/

const mongoose = require('mongoose');// mongoose library to connect and interact with a MongoDB database in a JavaScript/Node.js environment//


const mongoString = process.env.DATABASE_URL;/*constant variable named mongoString 
and assigns it the value of the environment variable DATABASE_URL using Node.js process environment.
*/

mongoose.connect(mongoString);// Connect to MongoDB using the provided connection string

const database = mongoose.connection;// Get a reference to the MongoDB connection

// Set up an event listener for any errors
database.on('error', (error) => {

    console.log(error) //console log error print
})

database.once('connected', () => { //succesfully connected to database
    console.log('Database Connected');// print console databae connected
})
const app = express(); // Create an instance of the Express application

app.use(express.json()); //use express JSON data in the request body


// Start the Express application to listen for incoming requests on port 3000
    app.listen(3000, () => {
    console.log(`Server Started at ${3000}`) //once server start log the message and which port
})

const routes = require('./routes/routes');// Import the routes defined in the 'routes' file

app.use('/api', routes) //use routes api path

