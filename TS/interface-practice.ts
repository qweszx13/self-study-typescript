interface Square{ 
  color :string, 
  width :number 
}

let square :Square = { color : 'red', width : 100 }

interface Student{
  name :string
}


interface Student{
  score : number
}

interface Teacher extends Student{
  age :20
}

let student :Student= { name : 'kim', score : 20 }
let teacher :Teacher= { name : 'kim', age : 20 , score : 30}

type Animal = { name :string }
type Cat = { age : number } & Animal//intersction type 両方満足しなさい

type Dog = { age : number , name : number } & Animal
//let dog :Dog = { age : 20, name : 'string' } -> error Never type

interface Struct{ brand :string, serialNumber :number, model :string[] };

let struct :Struct = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone']};

interface Cart{ product :string, price :number }

let cart :Cart[] = [{product : "whiper",price : 4000},{product : "samdasu", price : 1200}]

interface Cart2 extends Cart { card : boolean }

interface PlusMinus{
  plus :(x:number,y:number) => number,
  minus :(x:number,y:number) => number
}

const plusMinus :PlusMinus = {
  plus : (x,y) => x+y,
  minus : (x,y) => x-y
}

