const express = require('express');
const app = express()
PORT = 3000
const connectDB = require('./connectDB');


app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({"success":true});
})
  

app.listen(PORT, async () => { 
    try {
        await connectDB(); 
    } catch (error) {
        
    }
    console.log("Server is running");
});