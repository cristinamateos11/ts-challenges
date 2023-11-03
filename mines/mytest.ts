/**
 * <T> -> es un tipo que va a detectar por si mismo
 * :T[] -> lo que devuelve, en este caso un array de tipos
 */
function allSprites<T>(sprites: T[]) :T[] {
    return new Array<T>().concat(sprites);
}

let redTeam = allSprites(['Red Ribbon', 'Wooly', 'Laine', 'Essa', 'Betty', 'Chamy', 'Ole', 'Sue', 'Magic', 'Bali', 'Mick', 'Woohoo']);
let orangeTeam = allSprites(['Oran', 'Bran', 'Decoy', 'Woody', 'Pierre', 'Tilus', 'Stony', 'Rosh', 'Alpen', 'Rocky', 'Valie', 'Fen']);

// console.log(redTeam);
// console.log(redTeam[0]);
// console.log(redTeam.length);
// console.log(orangeTeam + '' +  redTeam);

function identity<T, U>(value:T, message: U) :T {
    return value;
}

let s = identity('team1', 'team2');
console.log(s);
