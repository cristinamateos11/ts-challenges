/**
 * WARM-UP and EASY TS Challenges explained
 */

// 01 -> Hello World
console.log("**** Exercise 1 ****");
type HelloWorld = string // expected to be a string
const result: HelloWorld = 'Hi everyone, hello world';
// console.log(result);

// 04 -> Pick
console.log("**** Exercise 4 ****");
/**
 * T -> tipo del que queremos extraer las propiedades.
 * K -> conjunto de propiedades que queremos seleccionar de T.
 * K extends keyof T -> K es un subconjunto de las propiedades de T. K solo puede contener las propiedades que existen en T.
 * [P in K]: T[P] -> notación de mapeo (mapping) que crea un nuevo tipo. 
 * [P in K] -> itera a través de todas las propiedades en K. P representa una propiedad en K.
 * T[P] ->estamos obteniendo el tipo de la propiedad P en T.
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
  
interface Book {
    title: string;
    description?: string; //opcional
    completed: boolean;
    author: string;
}

let result04: Book = {
    title: 'Typescript tutorial',
    //description: 'finish the easy ts-challenge tutorial',
    completed: false,
    author: 'Cristina'
}
// console.log(result04);
// console.log(result04.author);

type BookPreview = MyPick<Book, 'title' | 'completed' | 'author'>; // Usamos MyPick para seleccionar propiedades específicas de Book

let bookResult: BookPreview = { // Creamos una variable con un objeto que cumple con el tipo BookPreview
    title: 'Harvest Moon DS',
    completed: true,
    author: 'Natsume'
};
// console.log(bookResult);

function tooManyTodo(todo: BookPreview) {
    if (todo.completed === false) {
       return todo.author + ', You have to finish the lecture!';
    } else {
       return 'GREAT! ' + todo.author + ', you are doing well';
    }
 }
 
// console.log(tooManyTodo({ title: 'Sing', completed: true, author: 'Cris' }));
// console.log(tooManyTodo(bookResult)); // true
// console.log(tooManyTodo(result04)); // false


// 07 -> readonly
console.log("**** Exercise 7 ****");
/**
 * keyof -> mantiene los tipos originales y readonly hace que las propiedades sean solo de lectura.
 * si intentamos cambiar el valor de las propiedades, generará un error.
 * En cambio, si no ponemos keyof, como no mantendrá los tipos originales, TODAS las propiedades seran de tipo any
 * y si podremos cambiar el valor de esas propiedades sin que salga un error.
 */
type ReadonlyWithK<T extends keyof any> = {
    readonly [K in T]: any;
};

interface Person {
    name: string;
    age: number;
    weight: number;
    height: number;
}

type ReadonlyPerson = ReadonlyWithK<keyof Person>;

const resultWithoutK: ReadonlyPerson = {
    name: "Didac",
    age: 22,
    weight: 72,
    height: 183
};
// console.log(resultWithoutK);
// resultWithoutK.name = "Bob"; // genera error porque es una propiedad de solo lectura
// resultWithoutK.age = 40;

function displayResultPersonCute(person: ReadonlyPerson) {
    console.log(`Hi, ${person.name} ! This is your personal information:`);
    console.log(`Age: ${person.age}`);
    console.log(`Weight: ${person.weight}`);
    console.log(`Height: ${person.height}`);
}
// console.log(displayResultPersonCute(resultWithoutK));

// 11 -> Tuple of Object
console.log("**** Exercise 11 ****");
/**
 * as const -> significa que no se pueden modificar ni reasignar los valores de la tupla después de que se haya declarado.
 * tuple[0] = 'Jeep'; // Error
 */
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const; // tupla (array de tipos)

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K; // number accede a los tipos individuales de los elementos
};

type resultTuple = TupleToObject<typeof tuple>;

const objectResult: resultTuple = {
    'tesla': 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y'
};

// console.log(objectResult["model 3"]);
// console.log(objectResult);

// 14 -> First of Array
console.log("**** Exercise 14 ****");
/**
 * <T extends any[]> -> tipo generico de matriz, se asegura de que solo se pueden usar tipos que son arreglos (tuplas).
 * T extends [] ? never : T[0] -> operador condicional. Si T es una matriz vacía, el resultado es never, significa que no hay un primer elemento. 
 * Si T no es una matriz vacía, el resultado es T[0], que es el tipo del primer elemento de la matriz.
 */
type First<T extends any[]> = T extends [] ? never : T[0];

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// const value1: head1 = 'b'; // incorrecto
// const value2: head2 = 3; // correcto

// console.log(value1);


// 18 -> Length of tuple
console.log("**** Exercise 18 ****");

type Length<T extends any[]> = T["length"];

type teslaModels = ["model 3", "model X", "model Y", "model S"];
type teslaLength = Length<teslaModels>; // expected 4

// 43 -> Exclude
console.log("**** Exercise 43 ****");
/**
 * Devuelve un tipo que incluye todos los subtipos de T que NO son asignables a U.
 * Si T es un subtipo de U, el resultado es never.
 * Si T no es un subtipo de U, el resultado es T.
 */
type MyExclude<T, U> = T extends U ? never : T;
type Result = MyExclude<"a" | "b" | "c", "a">; // expected "b" | "c"
// let resultExclude: Result = "a"; // type ""a"" is not assignable to type 'Result'
let resultExclude: Result = "b"; // b
console.log(resultExclude);

// 268 -> If
console.log("**** Exercise 268 ****");
/**
 * If<C, T, F> es un tipo que te permite elegir entre dos tipos T y F basado en una condición booleana C.
 * C -> puede ser true o false
 * T y F -> pueden ser de cualquier tipo
 * Condicion ternaria -> Si C es true, el resultado es T, de lo contrario, el resultado es F.
 */
type If<C extends boolean, T, F> = C extends true ? T : F;
type A = If<true, "a", "b">; // como C es true, el tipo resultante es T que es -> 'a'
type B = If<false, "a", "b">; // como C es false, el tipo resultanto es F que es -> 'b'
let resultA: A = "a";
// let resultB: B = "a"; // ERROR
console.log(resultA);

// 533 -> Concat
console.log("**** Exercise 533 ****");
/**
 * T extends any[] y U extends any[] -> Significa que T y U deben ser tipos de tuplas.
 * [...T, ...U] -> es la sintaxis de propagacion, crea una nueva tupla que contiene todos los elementos de T seguidos por todos los elementos de U.
 */
type Concat<T extends any[], U extends any[]> = [...T, ...U];
type ResultConcat = Concat<[1, 1, 1], [2, 2, 2]>;
let resultConcat: ResultConcat = [1, 1, 1, 2, 2, 2];
console.log(resultConcat);

// 3057 -> Push
console.log("**** Exercise 3057 ****");
/**
 * La razón por la que solo propagamos T y no U es porque T es una tupla (un array de elementos),
 * mientras que U es un solo elemento. Queremos agregar U al final de la tupla T, no propagar sus elementos en la tupla.
 * Push agrega al final
 */
type Push<T extends any[], U> = [...T, U];
type ResultPush = Push<[1, 2], "3">; // [1, 2, "3"]
let resultPush: ResultPush = [1, 2, "3"];
console.log(resultPush);

// 3060 -> Unshift
console.log("**** Exercise 3060 ****");
/**
 * Unshift agrega al principio
 */
type Unshift<T extends any[], U> = [U, ...T];
type ResultUnshift = Unshift<[1, 2], 0>; // [0, 1, 2]
let resultUnshift: ResultUnshift = [0, 1, 2];
console.log(resultUnshift);