"use strict";
/**
 * WARM-UP and EASY TS Challenges explained
 */
// 01 -> Hello World
console.log("**** Exercise 1 ****");
const result = 'Hi everyone, hello world';
// console.log(result);
// 04 -> Pick
console.log("**** Exercise 4 ****");
let result04 = {
    title: 'Typescript tutorial',
    //description: 'finish the easy ts-challenge tutorial',
    completed: false,
    author: 'Cristina'
};
let bookResult = {
    title: 'Harvest Moon DS',
    completed: true,
    author: 'Natsume'
};
// console.log(bookResult);
function tooManyTodo(todo) {
    if (todo.completed === false) {
        return todo.author + ', You have to finish the lecture!';
    }
    else {
        return 'GREAT! ' + todo.author + ', you are doing well';
    }
}
// console.log(tooManyTodo({ title: 'Sing', completed: true, author: 'Cris' }));
// console.log(tooManyTodo(bookResult)); // true
// console.log(tooManyTodo(result04)); // false
// 07 -> readonly
console.log("**** Exercise 7 ****");
const resultWithoutK = {
    name: "Didac",
    age: 22,
    weight: 72,
    height: 183
};
// console.log(resultWithoutK);
// resultWithoutK.name = "Bob"; // genera error porque es una propiedad de solo lectura
// resultWithoutK.age = 40;
function displayResultPersonCute(person) {
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
const tuple = ['tesla', 'model 3', 'model X', 'model Y']; // tupla (array de tipos)
const objectResult = {
    'tesla': 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y'
};
// console.log(objectResult["model 3"]);
// console.log(objectResult);
// 14 -> First of Array
console.log("**** Exercise 14 ****");
// const value1: head1 = 'b'; // incorrecto
// const value2: head2 = 3; // correcto
// console.log(value1);
// 18 -> Length of tuple
console.log("**** Exercise 18 ****");
// 43 -> Exclude
console.log("**** Exercise 43 ****");
// let resultExclude: Result = "a"; // type ""a"" is not assignable to type 'Result'
let resultExclude = "b"; // b
console.log(resultExclude);
// 268 -> If
console.log("**** Exercise 268 ****");
let resultA = "a";
// let resultB: B = "a"; // ERROR
console.log(resultA);
// 533 -> Concat
console.log("**** Exercise 533 ****");
let resultConcat = [1, 1, 1, 2, 2, 2];
console.log(resultConcat);
// 3057 -> Push
console.log("**** Exercise 3057 ****");
let resultPush = [1, 2, "3"];
console.log(resultPush);
// 3060 -> Unshift
console.log("**** Exercise 3060 ****");
let resultUnshift = [0, 1, 2];
console.log(resultUnshift);
