/**
 * <T> -> es un tipo que va a detectar por si mismo
 * :T[] -> lo que devuelve, en este caso un array de tipos
 */
function allSprites<T>(sprites: T[]) :T[] {
    return new Array<T>().concat(sprites);
}

let redTeam = allSprites([]);