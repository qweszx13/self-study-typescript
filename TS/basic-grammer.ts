let stringName: string[] = ['kim','park'];

let objectName: { name: string, type : string  } = { name :'Jonh', type : 'string' };

let objectOptionName: { name? : string, type : string } = { type: 'string' };

let multipleName : string[] | number = 3;
let multipleName2 : string[] | number = ['jonh','john2'];

type MytypeStringNumber = string | number;

let multipleName3 : MytypeStringNumber = 5;
let multipleName4 : MytypeStringNumber = 'handsome';

function myFunction(x: number): string{
  return "I want return only string " + x  
}

type MyTupleMember = [number, boolean];
let john: MyTupleMember = [10, false];

type MyAllObjectMember = {
  [key : string] : string
  //全てのstringプロパティは string必要
}
let bob: MyAllObjectMember = {
  name : 'bob',
  age : '24',
  sex : 'male',
  //1(number) : 'backNumber'(string) ->numberはkeyになれないできない
  //tall(string) : 184(number) -> できない
}

class User {
 name: string;
 constructor(name: string){
  this.name = name;
 }
}