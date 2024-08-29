// FUNCIONES FLECHA Y OPERADOR TERNARIO


//Funciones

//Funcion normal

function nombreDelaFuncion(parametro1, parametro2) {
    //Cuerpo de la función
    return parametro1 + parametro2;
}

//Funcion flecha

const nombreDelaFuncionFlecha = (parametro1, parametro2) => {
    //Cuerpo de la función
    return parametro1 + parametro2;
}
// sintaxis simplificada
const suma = (a, b) => a + b;
//Reemplazo de una funcion tradicional
function sumar(a, b) {
    return a + b;
}


// Funciones compuestas

const caidaLibre = (alturaInicial, tiempo) => {
    const gravedad = 9.8;
    return alturaInicial - 0.5 * gravedad * tiempo ** 2;
}

const caidaLibre2 = (gravedad) => (alturaInicial, tiempo) => alturaInicial - 0.5 * gravedad * tiempo ** 2;

console.log(caidaLibre(100, 2));
console.log(caidaLibre2(9.6));


//Operador ternario

const edad = 18;

if (edad >= 18) {
    console.log('Es mayor de edad lega');
} else {
    console.log('Es menor de edad lega');
}

//Operador ternario
edad >= 18 ? console.log('Es mayor de edad') : console.log('Es menor de edad');

const esMayorDeEdad = edad >= 18 ? true : false;
console.log(esMayorDeEdad);

esMayorDeEdad && console.log('Es mayor de edad simplificado');
if (esMayorDeEdad) {
    console.log('Es mayor de edad tradicional');
}

const msg = undefined;
const msg2= null;

const mayor = msg || msg2 || 'No hay mensaje';
console.log(mayor);
