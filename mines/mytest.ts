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

/**
 * El uso de la interfaz ayuda a asegurarte de que el objeto 
 * cumpla con la estructura de datos esperada y te proporciona 
 * ventajas de tipado estático.
 */
interface Sprites {
    name: string,
    team: string,
    birthday: string;
    likes: string[];
    hates: string[];
    acquired: string;
}

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
const sprites: Sprites[] = [
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
]
console.log(sprites);

// Imprimir solo los likes de los duendes
for (const sprite of sprites) {
    console.log(`${sprite.name} Likes: ${sprite.likes.join(', ')}`);
}