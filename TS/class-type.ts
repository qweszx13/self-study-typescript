class Person{
  name :string;


  constructor(name){
    this.name = name;
  }

  prototypeFunc(){
    console.log('hello introduce myself' + name);
  }
}

let human1 = new Person('kim');
let human2 = new Person('lee');

class Car{
  modelName :string;
  carNumber :number;

  constructor(name :string, number :number){
    this.modelName = name;
    this.carNumber = number;
  }

  tax(){
    console.log(this.carNumber/10);
  }
}


let myCar = new Car('Sonata',2000);
let yourCar = new Car('granzer',3000);

console.log(myCar.modelName);
console.log(myCar.carNumber);
console.log(myCar.tax());

console.log(yourCar.modelName);
console.log(yourCar.tax());