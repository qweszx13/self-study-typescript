let member = 123;
member = '123';
let arrayMember = [1, '2', 3];
let objectMember = { a: 123 };
let anyName = 'hi';
anyName = 123;
anyName = [123, 'hi'];
let littleBitSafe;
littleBitSafe = 123;
littleBitSafe = {};
//let test :string = littleBitSafe; Error
let test = anyName; //Warning noError
//littleBitSafe - 1; Error
anyName - 1; //Warning noError
let age;
//age + 1 Error X_X
let age2;
//age2 + 1 Error X_X 
let age3;
age3 + 1; // O_O
let age4;
age4 + 1; // O_O
let user = 'kim';
let userAge = undefined;
let userMarried = false;
let toms = [user, userAge, userMarried];
let tomi = [user, userAge, userMarried];
let school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
