"use strict";
/**
 * GENÉRICOS
 * Los genéricos son plantillas de código que puede definir y reutilizar en todo el código base.
 * Proporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar al llamarlas.
 * Permitir la reutilización de código.
 *
 * https://learn.microsoft.com/es-es/training/modules/typescript-generics/8-summary-resources
 */
/**
 * T -> es un nombre comun para un generico. pero puede asignarle el nombre que quiera.
 * Pero dado que se usa el tipo any, no hay nada que impida que el código inserte una cadena (string) o un número (number).
 * @param items acepta cualquier tipo de dato
 * @returns devuelve un array de cualquier tipo de dato
 */
console.log("**** Exercise 1 ****");
function getArray(items) {
    return new Array().concat(items);
}
let resultGen = getArray([1, 2, 3]);
resultGen.push("cristina", "didac", 4, 5, ["demo"]);
resultGen.push(["mum", "dad", "sister"]);
console.log(resultGen);
/**
 * Aqui se escribe la funcion mediante GENERICOS
 * TS hace la comprobacion de tipos de los valores que e pasan para asegurarse de que son del tipo especificado.
 * Podemos indicarle a la funcion que solo acepte una matriz de valores tipo number, o tipo string, etc.
 * Se producira un error si intentamos insertar un valor de tipo diferente.
 * @param items acepta valores de cualquier tipo de dato
 * @returns devuelve un array de cualquier tipo de dato
 */
console.log("**** Exercise 2 ****");
function getArray2(items) {
    return new Array().concat(items);
}
let resultGen2 = getArray2([1, 2, 3, 4, 5]);
// resultGen2.push("cris"); // ERR -> no se puede insertar un string porque se ha especificado que el tipo de dato es number
console.log(resultGen2);
/**
 * Acepta 2 parametros de tipo generico (cualquier tipo de dato) y devuelve un mensaje.
 * Pero no podremos sumar valores, porque no sabemos si son de tipo number.
 * @param name
 * @param age
 * @returns - un mensaje que incluye el nombre y la edad.
 */
console.log("**** Exercise 3 ****");
function persona(name, age) {
    let msg = `Hola, ${name} ! Tienes ${age} años.`;
    return msg;
}
let result3 = persona("Cristina", 23);
console.log(result3);
let result4 = persona(true, 22);
console.log(result4);
// RESTRICCION GENERICA
/**
 * <T extends validTypes> -> restringe el tipo de dato que se puede pasar a la funcion.
 */
console.log("**** Exercise 4 ****");
/**
 * De este modo pasandole una TUPLA como un valor de tipo generico, podemos asegurarnos de que la funcion solo acepte valores de tipo number o string.
 * @param name
 * @param price
 * Aqui devolvemos un string pero tabien podemos devoler un tipo, en plan -> : T
 */
function helado(name, price) {
    let msg = "";
    if (typeof name === "number") {
        msg = `NUMBER: El helado ${name} cuesta ${price} euros.`;
    }
    else if (typeof name === "string") {
        msg = `STRING: El helado ${name} cuesta ${price} euros.`;
    }
    return msg;
    //return name;
}
let comanda = helado("chocolate", 2.5);
let comanda2 = helado(2, 2.8);
console.log(comanda); // -> STRING: El helado chocolate cuesta 2.5 euros.
console.log(comanda2); // -> NUMBER: El helado 2 cuesta 2.8 euros.
console.log(comanda, comanda2);
/**
 * Se usa K extends keyof T para garantizar que el parámetro de clave es del tipo correcto para el tipo asignado a pet.
 * @param pet es el objeto que estamos pasando a la funcion, que seria pets1 o pets2.
 * @param key es la clave de la propiedad seria cats, dogs, parrots o fish.
 */
console.log("**** Exercise 5 ****");
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "cats"));
console.log(getPets(pets2, 1));
// INSTANCE OF
console.log("**** Exercise 6 ****");
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`;
    }
}
let pet = new Dog("Silver", 17); // creando un nuevo objeto de la clase Dog
console.log(pet instanceof Dog); // true
console.log(pet);
console.log(pet.bark());
/**
 * Clase que representa una identidad de proceso con dos tipos genéricos T y U.
 */
class processIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        //console.log(this._message);
        return this._value;
    }
    /**
     * Obtiene tanto el valor como el mensaje de la identidad de proceso como una tupla.
     * @returns Una tupla que contiene el valor y el mensaje de la identidad de proceso.
     */
    getAllIdentity() {
        return [this._value, this._message];
    }
    getAllIdentity2() {
        return `${this._value}, ${this._message}`;
    }
    getMessage() {
        return this._message;
    }
}
let processResult = new processIdentity(100, "hello world");
console.log(processResult.getIdentity()); // 100
console.log(processResult.getMessage()); // hello world
console.log(processResult.getAllIdentity()); // [100, hello world]
console.log(processResult.getAllIdentity2()); // 100, hello world
