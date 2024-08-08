


/* VARIABLES */

var name = "Juan";  // Variable global
let lastName = "Perez"; // Variable local
const age = 30; // Constante

/* TIPOS DE DATOS */

/* BASICOS */

var edad = 30; // numero entero
var precio = 10.5; // numero decimal
var esMayor = true; // true o false
var nombre = "Marcos"; // texto
var nulo = null; // nulo
var indefinido = undefined; // indefinido

/* COMPUESTOS */

// array
var frutas = ["manzana", "pera", "uva"];
// objeto
var persona = {
    nombre: "Juan",
    edad: 30,
    casado: false
};

/* ANIDADOS */

/* OBJETO ANIDADO */
var persona = {
    nombre: "Juan",
    edad: 30,
    casado: false,
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    },
    amigos: ["Pedro", "Maria"]
};
var amigos = [
    { nombre: "Pedro", edad: 30 },
    { nombre: "Maria", edad: 25 }
];


/* OPERADORES */

// aritmeticos
var suma = 10 + 5;
var resta = 10 - 5;
var multiplicacion = 10 * 5;
var division = 10 / 5;
var modulo = 10 % 5;

// de asignacion
var x = 10;
x += 5; // x = x + 5;
x -= 5; // x = x - 5;
x *= 5; // x = x * 5;
x /= 5; // x = x / 5;
x %= 5; // x = x % 5;

// de comparacion
var a = 10;
var b = 5;
var igual = a == b;
var distinto = a != b;
var mayor = a > b;
var menor = a < b;
var mayorIgual = a >= b;
var menorIgual = a <= b;
var igualValoryTipo = a === b;
var distintoValoryTipo = a !== b;

// logicos

var and = true && false;
var or = true || false;


/* FUNCIONES */

function saludar(/* PARAMETROS */) {
    /* CUERPO DE LA FUNCION */
    console.log("Hola");
}

function sumar(a, b) {
    return a + b;
}

const sayHi = (/* PARAMETROS */) => {
    /* CUERPO DE LA FUNCIÓN */
    console.log("Hi");
}

let resultado = sumar(10, 5);
resultado++; // resultado = resultado + 1;
console.log(resultado);

saludar();  //Llamado a la función saludar
sayHi();    //Llamado a la función sayHi

/* CONDICIONALES */

var edad1 = 30;
var edad2 = 20;

if (edad1 > edad2) {
    console.log("La edad1 es mayor");
} else if (edad1 < edad2) {
    console.log("La edad2 es mayor");
} else {
    console.log("Las edades son iguales");
}

/* CICLOS */

// for
for (var i = 0; i < 10; i++) {
    console.log("FOR", i);
}

// while
var i = 0;
while (i <= 5) {
    i = Math.floor(Math.random() * 10);
    console.log("WHILE", i);
}

// do while
var i = 0;
do {
    i = Math.floor(Math.random() * 10);
    console.log("DO WHILE", i);
} while (i >= 5);

// for in
var persona = {
    nombre: "Juan",
    edad: 30,
    casado: false
};
for (var propiedad in persona) {
    console.log(propiedad, ":", persona[propiedad]);
}

// for of
var frutas = ["manzana", "pera", "uva"];
for (var fruta of frutas) {
    console.log(fruta);
}

