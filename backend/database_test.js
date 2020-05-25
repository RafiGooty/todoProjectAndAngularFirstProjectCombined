const express=require('express');
const bodyParser=require('body-parser');
const Post =require('./models/post');
const mongoose=require('mongoose');
const app=express();

const postRouter=require("./routes/posts");
const userRouter=require("./routes/user");

const path=require("path");

// app.use("/fileStore",express.static(path.join("backend/fileStore")));
app.use("/fileStore",express.static(path.join("fileStore")));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://RafiGooty:WyxbdBZnNqfCxL4i@cluster0-fl562.mongodb.net/bootcamp18?retryWrites=true&w=majority",{useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
  console.log('connected to database!');
  exit;
})
.catch((err)=>{
  console.log(err,'connection failed!');
})