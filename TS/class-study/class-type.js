class Person2 {
    constructor(name) {
        this.name = name;
    }
    prototypeFunc() {
        console.log('hello introduce myself' + name);
    }
}
let human1 = new Person2('kim');
let human2 = new Person2('lee');
class Car {
    constructor(name, number) {
        this.modelName = name;
        this.carNumber = number;
    }
    tax() {
        console.log(this.carNumber / 10);
    }
}
let myCar = new Car('Sonata', 2000);
let yourCar = new Car('granzer', 3000);
console.log(myCar.modelName);
console.log(myCar.carNumber);
console.log(myCar.tax());
console.log(yourCar.modelName);
console.log(yourCar.tax());
