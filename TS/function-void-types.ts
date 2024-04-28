function multiTwo(num :number) :number{
  return num * 2;
}

multiTwo(30);
//multiTwo() Error you need parameter

//パラメタがoptionsである場合は下記のようにしましょう
function multiThree(num? :number) :number{//(num? :number は　num :number | undefined と同じです)
  return num * 2;
}
multiThree();

function voidType(num :number) :void{
   num * 2;
}

function showName(name? :string) :void{
  if(name){
    console.log("your name is" + name);
  }else{
    console.log("there is no name");
  }
}

showName();
showName("bob");

function lengthCounter(input :number | string) :number{
  let result :number;
  result = input.toString().length;
  return result
}

lengthCounter(102);
lengthCounter("20240428");

function marryPossiblelity(monthlyIncome :number, haveHouse :boolean, humanityGrade :string) :string | void{
  let totalScore :number;

  totalScore += monthlyIncome/1000;
  totalScore += haveHouse ? 500 : 0;
  totalScore += humanityGrade === 'top' ? 100 : 0; //->もっと厳しいタイプ指定ができますLiteral type
  
  if(totalScore >= 600) return 'you can marry';
}

marryPossiblelity(400000, true, 'top');
