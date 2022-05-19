const PORT = 3000;

const path = require("path");

const express = require ("express");
const app = express();

const publicPath = path.join(__dirname,'./public');
app.use (express.static(publicPath));

app.listen(PORT,() =>{
console.log("Servidor corriendo en el puerto"+ PORT);
});

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"views/home.html"))
});
app.get("/register",(req,res) =>{
    res.sendFile(path.join(__dirname,"views/register.html"))
});

app.get("/login",(req,res) =>{
    res.sendFile(path.join(__dirname,"views/login.html"))
});



;

