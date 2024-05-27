const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express()
mongoose.connect ('mongodb://localhost:27017/health-guard-data',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema)

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/signup', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const newUser = new User({name, phone, email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// Start server
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});