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
 
console.log(tooManyTodo({ title: 'Sing', completed: true, author: 'Cris' }));
console.log(tooManyTodo(bookResult)); // true
console.log(tooManyTodo(result04)); // false



