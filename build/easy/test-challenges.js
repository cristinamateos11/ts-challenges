"use strict";
/**
 * WARM-UP and EASY TS Challenges explained
 */
// 01 -> Hello World
console.log("**** Exercise 1 ****");
const result = 'Hi everyone, hello world';
console.log(result);
// 04 -> Pick
console.log("**** Exercise 4 ****");
let result04 = {
    title: 'Typescript tutorial',
    //description: 'finish the easy ts-challenge tutorial',
    completed: false,
    author: 'Cristina'
};
// console.log(result04);
// console.log(result04.author);
function tooManyTodo(todo) {
    if (todo.completed === false) {
        return todo.author + ', You have to finish the task!';
    }
    else {
        return 'GREAT!' + todo.author + ', you are doing well';
    }
}
console.log(tooManyTodo({ title: 'Sing', completed: false, author: 'Cris' }));
console.log(tooManyTodo(result04));
