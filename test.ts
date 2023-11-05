function addNumbers(x:number, y:number) {
    return x + y;
}
console.log(addNumbers(3, 6));

// Prueba interface con tipos genericos
interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class Identity<X, Y> implements ProcessIdentity<X, Y> {
    value: X
    message: Y

    constructor(value: X, message: Y) {
        this.value = value;
        this.message = message;
    }

    process(): X {
        return this.value;
    }
}

const res = Math.random() > 5 ? 'Es mas grande que 5' : 3;

const process = new Identity<string, string>('hola', 'bye'); // especificamos forzndo que es de tipo string
const process2 = new Identity(res, 3); // no forzamos nada
//const process3 = new Identity<string, number>(res, 2); // da error porque esa condicion puede devolver string o number


/**
 * no devuelve nada (never)
 * @param message 
 */
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError('hi');

