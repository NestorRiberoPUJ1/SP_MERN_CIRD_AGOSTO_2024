// FUNCIONES DE CALLBACK

const saludoPositivo = (nombre) => {
    console.log("Hola, buen día " + nombre);
}
const saludoNeutro = () => {
    console.log("Hola");
}

const saludo = (fnSaludo) => {
    const aleatorio = Math.random();
    if (aleatorio > 0.5) {
        fnSaludo("Nestor");
    }
}

saludo(saludoPositivo);

//  CALLBACKS COMPUESTO


const caidaLibre = (gravedad) => (tiempo) => {
    return 0.5 * gravedad * Math.pow(tiempo, 2);
}

console.log(caidaLibre(9.8)(10));


const clavadosOlimpicos = (fnCallback) => {
    console.log("Clavado perfecto: " + fnCallback(2));
}

clavadosOlimpicos(caidaLibre(9.6));
clavadosOlimpicos(caidaLibre(9.8));


// FUNCIONES DE ARREGLOS

const paises = ["México", "Colombia", "Perú", "Argentina", "Chile", "Ecuador", "Bolivia", "Venezuela", "Uruguay", "Paraguay"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// MAP

/* Nos permite recorrer un arreglo y modificar cada uno de los elementos del arreglo original,
 y nos regresa un nuevo arreglo con los elementos modificados */


const numerosDublicados = numeros.map((item, index, array) => {
    return item * 2;
});
console.log(numerosDublicados);
const paisesMayusculas = paises.map((item, index, array) => {
    return item.toUpperCase();
});
console.log(paisesMayusculas);

// FILTER
const numerosPares = numeros.filter((num, indice, arreglo) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
});

console.log(numerosPares);

const paisesSinA = paises.filter((pais) => {
    if (pais.includes("a") || pais.includes("A")) {
        return false;
    }
    return true;
});
console.log(paisesSinA);


//forEach
paises.forEach((pais, indice, arreglo) => {
    console.log(indice, pais);
});

numeros.forEach((num, indice, arreglo) => {
    console.log(indice, num);
});


// find
const paisesConDatos = [
    {
        nombre: "México",
        capital: "CDMX",
        idioma: "Español",
    },
    {
        nombre: "Colombia",
        capital: "Bogotá",
        idioma: "Español",
    },
    {
        nombre: "Perú",
        capital: "Lima",
        idioma: "Español",
    },
    {
        nombre: "Argentina",
        capital: "Buenos Aires",
        idioma: "Español",
    },
    {
        nombre: "Chile",
        capital: "Santiago",
        idioma: "Español",
    },
    {
        nombre: "Ecuador",
        capital: "Quito",
        idioma: "Español",
    }
    ,
    {
        nombre: "Brasil",
        capital: "Brasilia",
        idioma: "Portugués",
    },
    {
        nombre: "Bolivia",
        capital: "La Paz",
        idioma: "Español",
    },
    {
        nombre: "Venezuela",
        capital: "Caracas",
        idioma: "Español",
    },
    {
        nombre: "Uruguay",
        capital: "Montevideo",
        idioma: "Español",
    },
    {
        nombre: "Potugal",
        capital: "Lisboa",
        idioma: "Portugués",
    },
    {
        nombre: "Paraguay",
        capital: "Asunción",
        idioma: "Español",
    }
]

const paisDeHablaPortugues = paisesConDatos.find((pais) => {
    if (pais.idioma === "Portugués") {
        return true;
    }
    return false;
})

console.log(paisDeHablaPortugues);


// REDUCE

const suma = numeros.reduce((acumulador, item, indice, arreglo) => {
    return acumulador + item;
}, 0);
console.log(suma);

const esPrimo = (numero) => {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const sumaDePrimos = numeros.reduce((acumulador, item, indice, arreglo) => {
    if (esPrimo(item)) {
        console.log(item);
        return acumulador + item;
    }
    return acumulador;
}, 0);
console.log(sumaDePrimos);


let time = performance.now();
const sumaPares = numeros.filter((num) => num % 2 === 0).reduce((acumulador, item) => acumulador + item, 0);
let time2 = performance.now();
console.log(time2 - time, sumaPares);

time = performance.now();
let sumaPares2 = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        sumaPares2 += numeros[i];
    }
}
time2 = performance.now();
console.log(time2 - time, sumaPares2);

time = performance.now();
const sumaPares3 = numeros.reduce((acumulador, item) => {
    if (item % 2 === 0) {
        return acumulador + item;
    }
    return acumulador;
}, 0);
time2 = performance.now();
console.log(time2 - time, sumaPares3);



//INMUATIBILIDAD


const nums = [1, 2, 3, 4];

//nums = [1, 2, 3, 4, 5]; //ERROR
nums.push(5);
console.log(nums);

const nums2 = Object.freeze([1, 2, 3, 4]);
console.log(nums2);
nums2[0] = 10; //ERROR
console.log(nums2);

const nums3 = [...nums2];
nums3.push(5);
console.log(nums3);

[...nums2].sort();

