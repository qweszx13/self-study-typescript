import { isNumber } from "util";

class Word{
  num :number[];
  str :string[];

  constructor(...param :(string | number)[]){
    let conNumber :number[] = [];
    let conString :string[] = [];

    param.map((i)=>{
      if(typeof(i) === 'number'){
        conNumber.push(i)
      }else{
        conString.push(i)
      }
    })
    this.num = conNumber;
    this.str = conString; 
  }
}

const word = new Word("123",123,"494949",123,11,"5436");

console.log(word.num);
console.log(word.str);