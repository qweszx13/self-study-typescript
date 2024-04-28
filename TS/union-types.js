var member = 123;
member = '123';
var arrayMember = [1, '2', 3];
var objectMember = { a: 123 };
var anyName = 'hi';
anyName = 123;
anyName = [123, 'hi'];
var littleBitSafe;
littleBitSafe = 123;
littleBitSafe = {};
//let test :string = littleBitSafe; Error
var test = anyName; //Warning noError
//littleBitSafe - 1; Error
anyName - 1; //Warning noError
var age;
//age + 1 Error X_X
var age2;
//age2 + 1 Error X_X 
var age3;
age3 + 1; // O_O
var age4;
age4 + 1; // O_O
var user = 'kim';
var userAge = undefined;
var userMarried = false;
var toms = [user, userAge, userMarried];
var tomi = [user, userAge, userMarried];
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
