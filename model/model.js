const mongoose = require('mongoose');//importing the mongoose library,

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})  // connect mongoDB database the create a new schema its means mongodb collection


module.exports = mongoose.model('Data', dataSchema)  //Create a Mongoose model named 'Data', a MongoDB collection named Data,  
// dataschema structure documents collection in mongoDB

