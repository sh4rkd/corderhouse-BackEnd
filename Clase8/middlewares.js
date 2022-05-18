const express = require('express');
const app = express();

const primerMiddleware = (req, res, next) => {
    console.log("Middleware 1");
    next();
};

const segundoMiddleware = (req, res, next) => {
    console.log("Middleware 2");
    next();
};

app.get("/ruta1", primerMiddleware, (req, res, next) => {
    console.log("ruta1");
    res.send("ruta1");
    next();
});

app.get("/ruta2", primerMiddleware, segundoMiddleware, (req, res, next) => {
    console.log("ruta2");
    res.send("ruta2");
    next();
});

app.get("/ruta3", (req, res, next) => {
    console.log("ruta3");
    next(new Error("Error en ruta3"));
});

app.use((err, req, res, next) => {
    console.log("Error en la ruta");
    res.status(500).send("Error en la ruta");
});

app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});