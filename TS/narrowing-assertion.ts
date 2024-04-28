function myNarrowing(x :number|string){
  let array :number[] = [];
  if(typeof x === 'number'){//以外にも in, instanceOfみたいに現在変数変数のタイプ変数のタイプがなんなのかを特定できればOK
    array[0] = x;
    console.log(array);
  }else{
    return console.log('come in string type');
  }
}

function myAssertion(x :number|string){
  let array :number[] = [];
  array[0] = x as number;
  //簡単だからAssertion使うとダメです。
  //いつ使うのか？
  //1.narrowingするとき使います。→UnionTypeを確定する時のみです。
  //let name :string = 'kim';
  //name as number; →こんなふうにタイプをAからBに変更するとき使うわけじゃないです。
  //2.どのタイプが確実に入ってくるのか分かる時のみ使ってください。
  
  //少し古いassertionは下記のように使う
  array[1] = <number>x
  console.log(array);
}


myNarrowing(123);
myNarrowing('123');
myAssertion(123);
myAssertion('123');//Error が出てこないので気をつけましょう。

function numberArrayCleaning(input :(number|string)[]){
  let result :number[] = [];

  input.forEach((b)=>{
    if(typeof b === 'string'){
      result.push(parseInt(b));
    }else{
      result.push(b);
    }
  })
  
  return result;
}

console.log(numberArrayCleaning([123,'24','55'])); 

let johnTeacher = { subject : 'math' };
let bobTeacher = { subject : ['science', 'english'] };
let eimiTeacher = { subject : ['science', 'art', 'japanese'] };

function returnSubject(input :{subject :string|string[]}){
  if(Array.isArray(input.subject)){
    return input.subject[input.subject.length-1];
  }else if(typeof input.subject === 'string'){
    return input.subject;
  }else{
    return 'nope';
  }
}
console.log(returnSubject(johnTeacher));
console.log(returnSubject(bobTeacher));
console.log(returnSubject(eimiTeacher));
