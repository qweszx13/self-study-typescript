type AnimalType = string | number | undefined;

let animal :AnimalType = 'dolphin';
let animal2 :AnimalType = 123;
let animal3 :AnimalType = undefined;

type ObjectAnimalType = { name :string, age :number};
let animal4 :ObjectAnimalType = { name:'dolphine', age:20 };

const born = { region : 'tokyo' };
born.region = 'osaka';

type GirlFriendType = {
  readonly name :string 
}

const girlFriend :GirlFriendType = {
  name : 'ember'
}

//girlFriend.name = 'johny' readonlyで防いでくれる、でもJavaScriptに変換されたら作動する。

type BoyFriendType = {
  name? :string // === name :string | undefined
}

const boyFriend :BoyFriendType = {
}

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x :number };
type PositionY = { y :number };

type NewPositionXY = PositionX & PositionY; //extend

let position :NewPositionXY = { x : 10, y : 20 };