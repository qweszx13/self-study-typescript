var stringName = ['kim', 'park'];
var objectName = { name: 'Jonh', type: 'string' };
var objectOptionName = { type: 'string' };
var multipleName = 3;
var multipleName2 = ['jonh', 'john2'];
var multipleName3 = 5;
var multipleName4 = 'handsome';
function myFunction(x) {
    return "I want return only string " + x;
}
var john = [10, false];
var bob = {
    name: 'bob',
    age: '24',
    sex: 'male',
    //1(number) : 'backNumber'(string) ->numberはkeyになれないできない
    //tall(string) : 184(number) -> できない
};
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
