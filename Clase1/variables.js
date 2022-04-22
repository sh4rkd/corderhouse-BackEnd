/*
    Definir variables que almacenen los siguientes datos:
    Nombre
    Edad
    Precio
    Nombres de mis series favoritas
*/

let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let series = ["Dark", "Mr Robot", "Castlevania"];

const peliculas = [
    {
        nombre: "Dark",
        estreno: 2019,
        protagonistas: ["Bruce Wayne", "Clark Kent"]
    },
    {
        nombre: "Mr Robot",
        estreno: 2015,
        protagonistas: ["Will Smith", "Jaden Smith"]
    },
    {
        nombre: "Castlevania",
        estreno: 2018,
        protagonistas: ["Dracula", "Vampire"]
    }
];

console.log(nombre, edad, precio, series);

function incrementarEdad(edad) {
    return edad + 1;
}

edad = incrementarEdad(edad);

console.log(nombre, edad, precio, series);

series.push("The Flash");

console.log(nombre, edad, precio, series);

/* no modifica el numero original
let miNumero = 2;

function sumarUno(args) {
    args += 1;
    console.log(args);
}

sumarUno(miNumero);

console.log(miNumero);*/

/* si deja modificar el objeto original por el parametro
const persona = {nombre: "richard"}

function reasignarObjeto(args) {
    args = {nombre:"pepe"}
    console.log(args);
}

reasignarObjeto(persona);

console.log(persona);
*/

/*
const persona = {nombre: "richard"}
persona.nombre = "pepe";
console.log(persona);
*/