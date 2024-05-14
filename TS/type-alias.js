//function aliasFunction :FunctionType(){}このようにはできません、先に作ったTypeを関数に指定したい場合、関数表現式を使いましょう
var aliasFunction = function (input) {
    return parseInt(input);
};
var plusOne = function (input) {
    return parseInt(input);
};
var changeName = function (input) {
    this.name = input;
};
var signupInformation = {
    name: 'kim',
    plusOne: plusOne,
    changeName: changeName
};
signupInformation.plusOne('123');
signupInformation.changeName('john');
console.log(signupInformation.name);
var signupInformation2 = {
    name: 'kim',
    age: 24,
    plusOne: function (input) {
        return parseInt(input);
    },
    changeName: function (input) {
        this.name = input;
    }
};
signupInformation2.changeName('john');
console.log(signupInformation2.name);
var cutZero = function (input) {
    var result = '';
    if (input.charAt(0) === '0') {
        result = input.substring(1);
    }
    else {
        return input;
    }
    return result;
};
var removeDash = function (input) {
    var result = parseInt(input.replace(/-/g, ''));
    return result;
};
console.log(cutZero('10123424'));
console.log(removeDash('111-333-444'));
function callBackFunction(phoneNumber, cutZero, removeDash) {
    return removeDash(cutZero(phoneNumber));
}
console.log(callBackFunction('0112-4435-6666', cutZero, removeDash));
