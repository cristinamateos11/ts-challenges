/**
 * WARM-UP and EASY TS Challenges explained
 */

// 01 -> Hello World
console.log("**** Exercise 1 ****");
type HelloWorld = string // expected to be a string
const result: HelloWorld = 'Hi everyone, hello world';
console.log(result);

// 04 -> Pick
console.log("**** Exercise 4 ****");
interface Todo {
    title: string;
    description?: string; //opcional
    completed: boolean;
    author: string;
}

let result04: Todo = {
    title: 'Typescript tutorial',
    //description: 'finish the easy ts-challenge tutorial',
    completed: false,
    author: 'Cristina'
}
console.log(result04);
console.log(result04.author);

// function tooManyScoops(dessert: IceCream) {
//     if (dessert.scoops >= 4) {
//        return dessert.scoops + ' is too many scoops!';
//     } else {
//        return 'Your order will be ready soon!';
//     }
//  }
 
//  console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));