var literalName;
//literalName = 456; 123のみ入れます。
var myInformation;
myInformation = 'rightStart';
//いつ使うのか？１。変数をもっと厳しく管理するとき、２。自動完成機能が使えます。
function myFunctionLiteral(i) {
    console.log(i);
    return 1;
}
//myFunction('hi') できませんOnly helloのみです。
myFunctionLiteral('hello');
function rsp(userInput) {
    return [userInput];
}
rsp('rock');
rsp('sissor');
rsp('paper');
var objectError = {
    name: 'kim' // objectError.name => typeof string
};
function myFunctionError(name) {
    return name;
}
//myFunctionError(objectError.name);//だからこのobjectError.nameは値が'kim'でありタイプはstringなので入れないのです。
//でわ、どうすればいいのか？
var objectFix = {
    name: 'kim'
};
//object value の値をそのままTypeで指定してくれます。 objectFix.name => typeof 'kim'
//readonly objectFix.name と同じ効果を持つことになる→修正できなくなります。
//objectFix.name = 'john' X_X
function myFunctionFix(name) {
    return name;
}
myFunctionFix(objectFix.name);
