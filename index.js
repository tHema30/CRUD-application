require('dotenv').config();/*Dotenv is a npm package which help us to import
 environment variables file .It will be available at Every place 
 if we require it in app file.This line simply means importing environment variables*/

const express = require('express');/*This declares a constant variable named 'express.*/
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)

