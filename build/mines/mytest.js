"use strict";
/**
 * <T> -> es un tipo que va a detectar por si mismo
 * :T[] -> lo que devuelve, en este caso un array de tipos
 */
function allSprites(sprites) {
    return new Array().concat(sprites);
}
let redTeam = allSprites(['Red Ribbon', 'Wooly', 'Laine', 'Essa', 'Betty', 'Chamy', 'Ole', 'Sue', 'Magic', 'Bali', 'Mick', 'Woohoo']);
let orangeTeam = allSprites(['Oran', 'Bran', 'Decoy', 'Woody', 'Pierre', 'Tilus', 'Stony', 'Rosh', 'Alpen', 'Rocky', 'Valie', 'Fen']);
// console.log(redTeam);
// console.log(redTeam[0]);
// console.log(redTeam.length);
// console.log(orangeTeam + '' +  redTeam);
function identity(value, message) {
    return value;
}
let s = identity('team1', 'team2');
console.log(s);
// OBJETO (manera lenta)
// const redRibbon: Sprites = {
//     name: 'Red Ribbon',
//     team: 'Red Team',
//     birthday: 'Winter 12',
//     likes: ['Cheese Fundue', 'Ruby', 'Red Grass'],
//     hates: ['Jam Bun', 'Toadstool', 'Weed'],
//     acquired: 'Have a total of 10 adult Cows and Sheep. You will need to have 3 Livestock barns constructed to fit the 10 animals.'
// }
// console.log(redRibbon);
/**
 * Arreglo de OBJETOS
 * donde cada objeto representa a un sprite
 */
const sprites = [
    {
        name: 'Red Ribbon',
        team: 'Red Team',
        birthday: 'Winter 12',
        likes: ['Cheese Fundue', 'Ruby', 'Red Grass'],
        hates: ['Jam Bun', 'Toadstool', 'Weed'],
        acquired: 'Have a total of 10 adult Cows and Sheep. You will need to have 3 Livestock barns constructed to fit the 10 animals.'
    },
    {
        name: 'Wooly',
        team: 'Red Team',
        birthday: 'Summer 22',
        likes: ['Stew', 'Pumpkin', 'Red Grass'],
        hates: ['Bamboo Rice', 'Curry Powder', 'Junk Ore'],
        acquired: 'Ship at least 300 milk, eggs, and wool. You will need a total of 300 between the 3 types of items available, not 300 milk, 300 eggs, and 300 wool.'
    }
];
console.log(sprites);
// Imprimir solo los likes de los duendes
for (const sprite of sprites) {
    console.log(`${sprite.name} Likes: ${sprite.likes.join(', ')}`);
}
