type FunctionType = (input :string) => number;//string引数、numberをreturnするようにしてくれます。

//function aliasFunction :FunctionType(){}このようにはできません、先に作ったTypeを関数に指定したい場合、関数表現式を使いましょう
let aliasFunction :FunctionType = function(input){
  return parseInt(input);
}

let plusOne :FunctionType = function(input){
  return parseInt(input);
}

type ChangeNameType = (input :string) => void;

let changeName :ChangeNameType = function(input){
  this.name = input
}

let signupInformation = {
  name :'kim',
  plusOne,
  changeName
}

signupInformation.plusOne('123');
signupInformation.changeName('john');
console.log(signupInformation.name);

type MoreSimpleSignupInformation = {
  name :string,
  age :number,
  plusOne :(input :string) => number,
  changeName :(input :string) => void
}

let signupInformation2 :MoreSimpleSignupInformation = {
  name : 'kim',
  age : 24,
  plusOne(input){
    return parseInt(input);
  },
  changeName(input){
    this.name = input
  }
}

signupInformation2.changeName('john');
console.log(signupInformation2.name);

type CutZeroType = ( input :string ) => string;
type RemoveDashType = ( input :string ) => number;

let cutZero :CutZeroType = function(input){
  let result :string = '';

  if(input.charAt(0) === '0'){
    result = input.substring(1);
  }else{
    return input;
  }
  return result;
}

let removeDash :RemoveDashType = function(input){
  let result :number = parseInt(input.replace(/-/g,''));
  return result;
}

console.log(cutZero('10123424'));
console.log(removeDash('111-333-444'));

function callBackFunction(phoneNumber :string, cutZero :CutZeroType, removeDash :RemoveDashType){
  return removeDash(cutZero(phoneNumber));
}

console.log(callBackFunction('0112-4435-6666',cutZero,removeDash));