let member :(number | string) = 123;
member = '123';
let arrayMember :(number | string)[] = [1,'2',3];
let objectMember :{ a :string | number} = { a : 123 };

let anyName :any = 'hi';
anyName = 123;
anyName = [123,'hi'];

let littleBitSafe : unknown;
littleBitSafe = 123;
littleBitSafe = {};

//let test :string = littleBitSafe; Error
let test :string = anyName; //Warning noError

//littleBitSafe - 1; Error
anyName - 1 //Warning noError

let age :string | number;
//age + 1 Error X_X

let age2 : unknown;
//age2 + 1 Error X_X 

let age3 :string;
age3 + 1; // O_O

let age4 :number;
age4 + 1; // O_O

let user :string = 'kim';
let userAge :undefined | number = undefined;
let userMarried :boolean = false; 

let toms :[string,undefined | number, boolean] = [user, userAge, userMarried];
let tomi :(string | undefined | number | boolean)[] = [user, userAge, userMarried];

let school :{
  score :(number | boolean)[]
  teacher :string, 
  friend :string[] | string
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee' , school.teacher]