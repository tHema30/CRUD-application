
// This line imports the 'express' module, which is a web application framework for Node.js.
const express = require('express');
// This line creates a new instance of the express Router, which is used to define routes for handling different HTTP requests.
const router = express.Router()

module.exports = router;// router exports router available for use in other files/modules.

const Model = require('../model/model'); //it is a file path of model 




//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })
//Post Method

router.post('/post', async (req, res) => { // Define a route for handling HTTP POST requests to '/post'
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })  // Create a new instance of the 'Model' (assumed to be a MongoDB model/schema)
    // and populate it with data from the request body

    try {
         // Try saving the newly created data to the database asynchronously
        const dataToSave = await data.save();
        
        res.status(200).json(dataToSave)// If successful, respond with a status code 200 and the saved data in JSON format
      }
    
    catch (error) { // If an error during the save operation, catch the error

        res.status(400).json({message: error.message})// Respond with a status code 400 and a JSON object containing an error message
    }
})


//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find(); //already created so find
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

//Get by ID Method

// Define a route for handling GET requests with a parameter ":id"
router.get('/getOne/:id', async (req, res) => {
    try{
           // Attempt to find a record in the database using the provided 'id' parameter
        const data = await Model.findById(req.params.id);
        res.json(data)// send data json response for cilent
    }
    catch(error){
        res.status(500).json({message: error.message})   // If there's an error the database operation, send a 500 Internal Server Error response
    }
})

//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

router.patch('/update/:id', async (req, res) => { // This is a route definition for handling HTTP PATCH requests to update data with a specific ID.
    try {
         // Extract the 'id' parameter from the request URL.
        const id = req.params.id;
           // Extract the data to be updated from the request body.
        const updatedData = req.body;

        // Options for the MongoDB findByIdAndUpdate method, indicating to return the updated document.
        const options = { new: true };
          
        // Use the Model to find and update the document with the specified ID.
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        // Send the updated document as a response.
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })  // If an error  the update process, send a 400 status with an error message.
    }
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})








