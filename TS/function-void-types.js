function multiTwo(num) {
    return num * 2;
}
multiTwo(30);
//multiTwo() Error you need parameter
//パラメタがoptionsである場合は下記のようにしましょう
function multiThree(num) {
    return num * 2;
}
multiThree();
function voidType(num) {
    num * 2;
}
function showName(name) {
    if (name) {
        console.log("your name is" + name);
    }
    else {
        console.log("there is no name");
    }
}
showName();
showName("bob");
function lengthCounter(input) {
    let result;
    result = input.toString().length;
    return result;
}
lengthCounter(102);
lengthCounter("20240428");
function marryPossiblelity(monthlyIncome, haveHouse, humanityGrade) {
    let totalScore;
    totalScore += monthlyIncome / 1000;
    totalScore += haveHouse ? 500 : 0;
    totalScore += humanityGrade === 'top' ? 100 : 0; //->もっと厳しいタイプ指定ができますLiteral type
    if (totalScore >= 600)
        return 'you can marry';
}
marryPossiblelity(400000, true, 'top');
