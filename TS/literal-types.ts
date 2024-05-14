let literalName :123;
//literalName = 456; 123のみ入れます。

let myInformation : 'rightStart' | 'BigBoy';
myInformation = 'rightStart';
//いつ使うのか？１。変数をもっと厳しく管理するとき、２。自動完成機能が使えます。

function myFunctionLiteral(i :'hello') :1|0{
  console.log(i);
  return 1;
}

//myFunction('hi') できませんOnly helloのみです。
myFunctionLiteral('hello');

function rsp(userInput :'rock'|'sissor'|'paper') :('rock'|'sissor'|'paper')[]{
  return [userInput];
}

rsp('rock');
rsp('sissor');
rsp('paper');

let objectError = {
  name : 'kim' // objectError.name => typeof string
}

function myFunctionError(name :'kim'){//ここで「'kim'と言う値が入れます」ではなく'kim'と言うTypeが入れますと言う意味です
  return name
}

//myFunctionError(objectError.name);//だからこのobjectError.nameは値が'kim'でありタイプはstringなので入れないのです。
//でわ、どうすればいいのか？

let objectFix = {
  name : 'kim'
} as const
//object value の値をそのままTypeで指定してくれます。 objectFix.name => typeof 'kim'
//readonly objectFix.name と同じ効果を持つことになる→修正できなくなります。
//objectFix.name = 'john' X_X

function myFunctionFix(name :'kim'){//ここで「'kim'と言う値が入れます」ではなく'kim'と言うTypeが入れますと言う意味です
  return name
}

myFunctionFix(objectFix.name);