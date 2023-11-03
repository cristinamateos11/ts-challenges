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
console.log(resultWithoutK);
// resultWithoutK.name = "Bob"; // genera error porque es una propiedad de solo lectura
// resultWithoutK.age = 40;
function displayResultPersonCute(person) {
    console.log(`Hi, ${person.name} ! This is your personal information:`);
    console.log(`Age: ${person.age}`);
    console.log(`Weight: ${person.weight}`);
    console.log(`Height: ${person.height}`);
}
console.log(displayResultPersonCute(resultWithoutK));
