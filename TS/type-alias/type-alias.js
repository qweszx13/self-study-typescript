//function aliasFunction :FunctionType(){}このようにはできません、先に作ったTypeを関数に指定したい場合、関数表現式を使いましょう
let aliasFunction = function (input) {
    return parseInt(input);
};
let plusOne = function (input) {
    return parseInt(input);
};
let changeName = function (input) {
    this.name = input;
};
let signupInformation = {
    name: 'kim',
    plusOne,
    changeName
};
signupInformation.plusOne('123');
signupInformation.changeName('john');
console.log(signupInformation.name);
let signupInformation2 = {
    name: 'kim',
    age: 24,
    plusOne(input) {
        return parseInt(input);
    },
    changeName(input) {
        this.name = input;
    }
};
signupInformation2.changeName('john');
console.log(signupInformation2.name);
let cutZero = function (input) {
    let result = '';
    if (input.charAt(0) === '0') {
        result = input.substring(1);
    }
    else {
        return input;
    }
    return result;
};
let removeDash = function (input) {
    let result = parseInt(input.replace(/-/g, ''));
    return result;
};
console.log(cutZero('10123424'));
console.log(removeDash('111-333-444'));
function callBackFunction(phoneNumber, cutZero, removeDash) {
    return removeDash(cutZero(phoneNumber));
}
console.log(callBackFunction('0112-4435-6666', cutZero, removeDash));
