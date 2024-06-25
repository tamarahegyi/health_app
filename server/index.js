/*const express = require('express');
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
});*/

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8181;


// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});