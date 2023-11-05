"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
class Identity {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    process() {
        return this.value;
    }
}
const res = Math.random() > 5 ? 'Es mas grande que 5' : 3;
const process = new Identity('hola', 'bye'); // especificamos forzndo que es de tipo string
const process2 = new Identity(res, 3); // no forzamos nada
//const process3 = new Identity<string, number>(res, 2); // da error porque esa condicion puede devolver string o number
