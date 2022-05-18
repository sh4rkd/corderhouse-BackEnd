const express = require('express');
const content = require('./products.js');
const appRouter = express.Router();

appRouter.use(express.json());
appRouter.use(express.urlencoded({extended: true}));

appRouter.get('/productos', (req, res) => {
    res.send(content.read());
});

appRouter.get('/productoRandom', (req, res) => {
    res.send(content.readRandom());
});

appRouter.get("/productos/:id", (req, res, next) => {
    product = content.readById(parseInt(req.params.id));
    product !== null ? res.send(product) : next(new Error("No existe el producto"));
});

appRouter.post("/productos", (req, res) => {
    content.create(req.body.title, req.body.price, req.body.thumbnail);
    res.send(content.read());
});

appRouter.put("/productos/:id", (req, res, next) => {
    content.update(parseInt(req.params.id), req.body) ? res.send(content.read()) : next(new Error("No existe el producto"));
});

appRouter.delete("/productos/:id", (req, res, next) => {
    content.deleteProduct(parseInt(req.params.id)) ? res.send(content.read()) :  next(new Error("No existe el producto"));
});

appRouter.use((err, req, res, next) => {
    res.status(500).send({error:"producto no encontrado"});
});

module.exports = appRouter;