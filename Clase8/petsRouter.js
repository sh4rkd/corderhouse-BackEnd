const express = require('express');
const petsRouter = express.Router();

const pets = [
    {
        id: 1,
        name: 'Pepito',
        surname: 'Pérez',
        type: 'Perro',
        age: 2,
    },
    {
        id: 2,
        name: 'Pepita',
        surname: 'Pérez',
        type: 'Perro',
        age: 3,
    },
    {
        id: 3,
        name: 'Pepa',
        surname: 'Pérez',
        type: 'Perro',
        age: 4,
    }
];

petsRouter.get("/",(req,res)=>{
    res.send({pets: pets});
});

petsRouter.post("/",(req,res)=>{
    pets.push(req.body);
    res.send({pets: pets});
});

module.exports = petsRouter;