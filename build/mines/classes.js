"use strict";
/**
 *  Por convencion, los nombres de clase estan en PascalCase.
 *
 */
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) { // si doors es un numero par bien, si no, error
            this.doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    worker() {
        return this._make;
    }
}
let myCar = new Car('Jeep Company', 'black', 3);
console.log(myCar);
console.log(myCar.color);
console.log(myCar._color);
// console.log(myCar.doors = 5); // INCORRECTO
let myCar2 = new Car('Ferrari Company', 'red');
console.log(myCar2);
console.log(myCar.accelerate(50));
console.log(myCar.brake());
console.log(myCar.turn('right'));
