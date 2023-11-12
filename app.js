const { log } = require('console');
const express = require ('express')
const path = require('path')

const app = express ()

const publicPath = path.resolve(__dirname, './public');
app.use (express.static(publicPath))

let puerto = 3000;

app.listen(puerto, () => {
    console.log("Servidor On");
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})


app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})
/*
app.post("/register", (req, res) => {
    console.log(req);
    res.send("recibido")
})

/*Otra=?????
app.post("/register", (req, res) => {
    console.log(req);
    res.sendFile("recibido")
}*/