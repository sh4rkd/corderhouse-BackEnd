/*
IIFE FUNCTIONS
(function(numero){
    console.log(numero+1);
})(20);

const multiplicarPorDos = function(a){
    console.log(a*2);
};

const multiplicarPorDos = (a) => a*2;

//SCOPE
function miFuncion(){
    let x = 20;
    function otraFuncion(){
        let y = 10;
        console.log(x);
    }
    otraFuncion();
    //falla aqui por que y esta dentro de otra funcion
    console.log(y);
}

miFuncion();


const generarMultiplicador = (multiplicador) => {
    return (numero) => numero*multiplicador;
};

const multiplicarPorDiez = generarMultiplicador(100);

console.log(multiplicarPorDiez(20));


const nombre = 'Juan';
const nombreCompleto = `${nombre} Perez`;
console.log(nombreCompleto);


function mostrarLista(lista){
    lista.length > 0 ? console.log(lista) : console.log('No hay elementos');
}

(function (lista){
    lista.length > 0 ? console.log(lista) : console.log('No hay elementos');
})([]);

function crearMultiplicador(multiplicador){
    return (numero) => numero*multiplicador;
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
const cuadruplicar = crearMultiplicador(4);

console.log(duplicar(10));
console.log(triplicar(10));
console.log(cuadruplicar(10));


//-----------------------------------------------CLASES-----------------------------------------------------
class Client{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
*/

class Contador{
    constructor(nombre){
        this.nombre = nombre;
        this.valor = 0;
    }

    static valor = 0;

    obtenerResponsable(){
        return this.nombre;
    }

    obtenerCuentaIndividual(){
        return this.valor;
    }

    obtenerCuentaGlobal(){
        return Contador.valor;
    }

    contar(){
        this.valor++;
        Contador.valor++;
    }
}

contador1 = new Contador('Juan');
contador2 = new Contador('Pedro');
contador3 = new Contador('Maria');

contador1.contar();
contador2.contar();
contador3.contar();

console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());
console.log(contador1.obtenerCuentaGlobal());

