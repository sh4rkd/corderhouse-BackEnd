const express = require('express');
const personsRouter = express.Router();

const persons = [
    {
        id: 1,
        name: 'Pepito',
        surname: 'Pérez',
        age: 12,
    },
    {
        id: 2,
        name: 'Pepita',
        surname: 'Pérez',
        age: 33,
    }
];

personsRouter.get("/",(req,res)=>{
    res.send({persons: persons});
});

personsRouter.post("/",(req,res)=>{
    persons.push(req.body);
    res.send({persons: persons});
});

module.exports = personsRouter;