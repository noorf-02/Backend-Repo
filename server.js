// npm init -y (the -y is a flag that gives a yes response to all queries to create a server)
// npm install express (express js is a node js (that lets devs to write code outside of browser typically to create backend server) framework that lets us write minimal code and use its features)
// npm install mongoose (it is a layer that we use to connect our database)
// npm install cors (cross origin resource sharing guars)
// npm install dotenv (provides a secure enviroment to store the information that we dont want to be exposed)
// npm install nodemon (we add it in our package.json so we dont have to restart the server again and again)

// initialize git 

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const port = process.env.URL;

app.get('/', (req,res)=>{
    res.send('This is the Homepage')
})

app.listen('port', ()=>{
    console.log('the backend is running')
})