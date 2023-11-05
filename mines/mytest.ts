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
    },
    {
        name: 'Laine',
        team: 'Red Team',
        birthday: 'Summer 12',
        likes: ['Apple Pie', 'Tomato', 'Red Grass'],
        hates: ['Strawberry Milk', 'Wool', 'Fodder'],
        acquired: 'Ship at least 500 milk, eggs, and wool.'
    },
    {
        name: 'Essa',
        team: 'Red Team',
        birthday: 'Spring 26',
        likes: ['Ice Cream', 'Diamond', 'Red Grass'],
        hates: ['Sashimi', 'Bell Pepper', 'Stone'],
        acquired: 'Ship at least 1000 milk, eggs, and wool.'
    },
    {
        name: 'Betty',
        team: 'Orange Team',
        birthday: 'Summer 10',
        likes: ['Buckwheat Noodles', 'Wool', 'Red Grass'],
        hates: ['Sweet Potatoes', 'Bamboo Shoots', 'Perfume'],
        acquired: 'Use the Touch Glove 100 times to cut wool. You need to have the glove and the Cutting Sheers equipped, then press Y in front of a sheep that has wool. You can then rub off the wool using the stylus.'
    }

]
console.log(sprites);

/**
 * Imprimir nombre y likes de los sprites de 2 formas distintas
 */
for (const sprite of sprites) {
    console.log(`${sprite.name} Likes: ${sprite.likes.join(', ')}`);
}

sprites.forEach((sprite) => {
    console.log(`${sprite.name} Likes: ${sprite.likes.join(', ')}`);
});

/**
 * Te pregunta sobre el team del sprite y te da toda la informacion
 */
function chooseTeam(teamName: string) {
    const foundSprites = sprites.filter((sprite) =>
        sprite.team.toLowerCase() === teamName.toLowerCase()
    )

    if (foundSprites.length > 0) {
        foundSprites.forEach((sprite) => {
            console.log(`${sprite.name} - Birthday: ${sprite.birthday}`);
        });
    } else {
        console.log("No existe ningún sprite en el equipo " + teamName);
    }
  
}

chooseTeam('red team');