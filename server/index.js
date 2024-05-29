const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const uri = 'mongodb+srv://Tamara:zqZkMOHyntfs6rxm@cluster0.u6cjai1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const PORT = process.env.PORT || 3000;

async function connect(){
  try{
    await mongoose.connect(uri)
    console.log ("Connected to MongoDB");
  } catch (error){
    console.error(error);
  }
}

connect();

// Start server
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});