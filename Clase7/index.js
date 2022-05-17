const express = require('express');
const app = express();
const port = 8080;

const autos = [
    {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2019,
        color: 'Blanco',
        precio: 100000
    },
    {
        id: 2,
        marca: 'Chevrolet',
        modelo: 'Spark',
        anio: 2019,
        color: 'Blanco',
        precio: 100000
    },
    {
        id: 3,
        marca: 'Ford',
        modelo: 'Fiesta',
        anio: 2019,
        color: 'Blanco',
        precio: 100000
    }
]

app.get("",(req,res)=>{
    res.send(`
        <a href="/autos">/autos</a>
    `);
});

app.get("/autos", (req, res) => {
    req.query.marca ? res.send(autos.filter(auto => auto.marca === req.query.marca)) : res.send(autos);
});

app.get("/autos/:id", (req, res) => {
    autos.find(auto => auto.id === parseInt(req.params.id))? res.send(autos.find(auto => auto.id === parseInt(req.params.id))) : res.status(404).send('No existe el auto');
});

const frase = "Hola mundo cómo están?";
app.get("/frase", (req, res) => {
    res.send({frase: frase});
});

app.get("/letras/:num",(req,res)=>!Number.isInteger(parseInt(req.params.num)) ? res.status(404).send('No es un número') : req.params.num-1<0 || req.params.num>frase.length ? res.status(404).send('El parametro esta fuera de rango') : res.send(frase[req.params.num-1]));

app.get("/palabras/:num", (req, res) => !Number.isInteger(parseInt(req.params.num)) ? res.status(404).send('No es un número') : req.params.num-1<0 || req.params.num>frase.split(" ").length ? res.status(404).send('El parametro esta fuera de rango') : res.send(frase.split(" ")[req.params.num-1]));

app.get("/api/sumar/:numberOne/:numberTwo", (req, res) => res.send({resultado: parseInt(req.params.numberOne) + parseInt(req.params.numberTwo)}));

app.get("/api/sumar", (req, res) => res.send({resultado: parseInt(req.query.n1) + parseInt(req.query.n2)}));

app.get("/api/sumar/:operacion",(req,res)=>{
    arrayOperacion = req.params.operacion.split("+");
    res.send({resultado: parseInt(arrayOperacion[0]) + parseInt(arrayOperacion[1])});
})

app.post("/api", (req, res) => res.send("POST recibido"));

app.put("/api/:id", (req, res) => {
    const auto = autos.find(auto => auto.id === parseInt(req.params.id));
    if (auto) {
        auto.marca = req.body.marca;
        auto.modelo = req.body.modelo;
        auto.anio = req.body.anio;
        auto.color = req.body.color;
        auto.precio = req.body.precio;
        res.send(auto);
    } else {
        res.status(404).send('No existe el auto');
    }
});

app.delete("/api/:id", (req, res) => {
    const auto = autos.find(auto => auto.id === parseInt(req.params.id));
    if (auto) {
        autos.splice(autos.indexOf(auto), 1);
        res.send(auto);
    } else {
        res.status(404).send('No existe el auto');
    }
});

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));