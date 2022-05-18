const express = require('express');
const userRouter = require("./userRouter");
const petsRouter = require("./petsRouter");
const personsRouter = require("./personsRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRouter);
app.use("/persons", personsRouter);
app.use("/pets", petsRouter);

app.listen(8080, ()=>{
    console.log("Servidor corriendo en el puerto 8080");
});