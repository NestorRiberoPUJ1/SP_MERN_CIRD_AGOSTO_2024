//Destructuración, operador spread y rest

// ECMAScript 6

//Destructuración

//Objetos
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    pais: 'Argentina',
    profesional: true,
    casado: false
}

//Destructuración de objetos
const { casado, pais } = persona; // Se extraen las propiedades casado y pais del objeto persona con la misma nomenclatura
console.log(casado, pais);
const { casado: married, pais: country } = persona; // Se extraen las propiedades casado y pais del objeto persona con una nomenclatura diferente
console.log(married, country);

//Arrays
const animales = ['chinchilla', 'alpaca', 'perro', 'gato', 'loro', 'pez', 'tortuga'];

//Destructuración de arrays
const [animal1, animal2, animal3] = animales; // Se extraen los elementos 1, 2 y 3 del array animales
console.log(animal1, animal2, animal3);


//Operador spread ...
//Arrays
const c = [10, 20];
const d = c;
const e = [...c];
console.log("c:" + c, "d:" + d, "e:" + e);
c.push(30);
console.log("c':" + c, "d':" + d, "e':" + e);

//Objetos
const carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'blanco'
}
const carro2 = carro;
const carro3 = { ...carro };

console.log(carro, carro2, carro3);
carro.color = 'rojo';
console.log(carro, carro2, carro3);


//Operador rest ...

//Arrays
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'verde', 'violeta'];
const [color1, color2, ...otrosColores] = colores; // Se extraen los elementos 1, 2 y el resto del array colores
console.log(color1, color2, otrosColores);

//Objetos

const avion = {
    marca: 'Boeing',
    modelo: '747',
    color: 'blanco',
    capacidad: 400,
    piloto: 'Juan Perez',
    copiloto: 'Maria Gomez',
    pasajeros: 398
}

const { marca, modelo, pasajeros, ...otrosDatos } = avion; // Se extraen las propiedades marca y modelo del objeto avion y el resto de las propiedades
console.log(marca, modelo, pasajeros, otrosDatos);

//Uniones de objetos
const  colores1=['rojo','verde','azul'];
const colores2=['amarillo','naranja','violeta'];
const todosLosColores=[...colores1,...colores2];
const todosLosColores2=[colores1,colores2];
const todosLosColores3=[...todosLosColores,"blanco"];
console.log(todosLosColores);
console.log(todosLosColores2);
console.log(todosLosColores3);