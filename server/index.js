const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect ("mongodb://localhost:27017/health-guard-data")

const UserSchema = mongoose.Schema({
  name: String
})

const UserModel = mongoose.model("user", UserSchema)

app.get ("/getUsers", (req, res)=>{
  UserModel.find({}).then(function(users){
    res.json (users)
  }).catch (function(err){
    console.log (err)
  })
})

app.listen(3000,()=>{
  console.log("Server is running")
})