var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.prototypeFunc = function () {
        console.log('hello introduce myself' + name);
    };
    return Person;
}());
var human1 = new Person('kim');
var human2 = new Person('lee');
var Car = /** @class */ (function () {
    function Car(name, number) {
        this.modelName = name;
        this.carNumber = number;
    }
    Car.prototype.tax = function () {
        console.log(this.carNumber / 10);
    };
    return Car;
}());
var myCar = new Car('Sonata', 2000);
var yourCar = new Car('granzer', 3000);
console.log(myCar.modelName);
console.log(myCar.carNumber);
console.log(myCar.tax());
console.log(yourCar.modelName);
console.log(yourCar.tax());
