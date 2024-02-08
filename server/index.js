// server.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const {connectDatabase} = require('./Database/data_connection')

// connect to the database
connectDatabase();

// import the files 
const {userModal} = require('./models/UserModal')

const app = express();
const port =process.env.PORT;

// middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello from the server");
});

// register route
app.post('/api/register',(req,res)=>{
    try {
        // taking the data from the front end
        const { fullName, email, password } = req.body;
        

    } catch (error) {
        
    }


})




// starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});