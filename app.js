const express = require ('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath)); 

const dotenv = require('dotenv').config();


app.listen (process.env.PORT, () => {
    console.log('servidor corriendo en el puerto' + process.env.PORT + "http://localhost:" + process.env.PORT)
});

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});