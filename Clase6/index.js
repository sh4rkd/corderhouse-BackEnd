/*
//creado con http
const http = require('http');

const server = http.createServer((req, res) => {
    const hour = new Date().getHours();
    if(hour >= 6 && hour <= 12) {
        res.end('Good morning');
    } else if(hour <= 19) {
        res.end('Good afternoon');
    } else {
        res.end('Good evening');
    }
});

server.listen(8080,() => {
    console.log(`Server running in http://localhost:${server.address().port}`);
});
*/

const express = require('express');
const app = express();
const port = 8080;
let visitas = 1;

app.get('/', (req, res) => {
    res.send("<h1 style='background-color:powderblue;'>Welcome to express server</h1>");
});

app.get('/visitas', (req, res) => {
    res.send(`visitas totales: ${visitas}`);
    visitas++;
});

app.get('/fyh', (req, res) => {
    const date = new Date();
    //full date format (dd/mm/yyyy)
    const fullDate = date.toLocaleDateString();
    //hour format (hh:mm:ss)
    const hour = date.toLocaleTimeString();
    res.send({"fyh": `${fullDate} ${hour}`});
});


app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});