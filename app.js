const express = require('express');
const app = express();
const port = 8080;
const content = require('./products.js');

app.get('/', (req, res) => {
    res.send(`
        <a href="/productos">ver todos los productos</a>
        <br/>
        <a href="/productoRandom">ver un producto aleatorio</a>
    `);
});

app.get('/productos', (req, res) => {
    res.send(content.read());
});

app.get('/productoRandom', (req, res) => {
    res.send(content.readRandom());
});

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});