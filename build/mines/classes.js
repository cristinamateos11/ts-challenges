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
        Car.numberOfCars++; // Incrementa el valor de la propiedad estatica
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
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
// Properties
Car.numberOfCars = 0; // New static property
let myCar = new Car('Jeep Company', 'black', 3);
console.log(myCar);
console.log(myCar.color);
// console.log(myCar._color); // al ser private no se puede 
// console.log(myCar.doors = 5); // INCORRECTO
let myCar2 = new Car('Ferrari Company', 'red');
console.log(myCar2);
console.log(myCar.accelerate(50));
console.log(myCar.brake());
console.log(myCar.turn('right'));
console.log(Car.getNumberOfCars());
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Acessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
}
