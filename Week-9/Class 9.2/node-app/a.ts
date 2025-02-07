// npm install -g typescript
// mkdir node-app
// cd node-app
// npm init -y
// npx tsc --init
// tsc -b to make .js file




// VARIABLES IN TYPESCRIPT
const x:number= 1;
console.log(x); // 1




// FUNCTIONS IN TYPESCRIPT
let greet1 = (firstName:string):string=>{
    return "Hello " + firstName; // Hello harkirat
}
console.log(greet1("harkirat"))




function sum(a: number, b: number):number{
    return a + b;
}
console.log(sum(2, 3)); // 5




function isLegal1(age:number):boolean {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}
console.log(isLegal1(12)); // false




// CALLBACK FUNCTIONS IN TYPESCRIPT
function delayedCall(fn:()=>string, delay: number) {
    setTimeout(() => {
        let ans=fn();
        console.log(ans);
    }, delay);
}

delayedCall(function() {
    return "hi there"; // Will log "hi there" after the specified delay
}, 1000);





// INTERFACE IN TYPESCRIPT
interface User {
	firstName: string;
	lastName: string;
	age: number;
}
function isLegal2(user: User):boolean {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}
function greet2(user : User):void{
    console.log("hi there " + user.firstName) // hi there mohit
}
const newObj={
    firstName:"mohit",
    lastName:"ahlawat",
    age: 21 
}
isLegal2(newObj)
isLegal2({
    firstName:"mohit",
    lastName:"ahlawat",
    age: 21
})
greet2({
    firstName:"mohit",
    lastName:"ahlawat",
    age: 21
})




// IMPLEMENTING INTERFACE IN TYPESCRIPT
interface Person {
    name: string;
    age: number;
    greet(phrase: string):string;
}
class Employee implements Person {
    name;
    age;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        return phrase + " " + this.name
    }
}
const e= new Employee("rohit",12)
console.log(e.name) // rohit
console.log(e.greet("hello")) // hello rohit




// UNION USING INTERFACE
interface abc{
    age:number | string
}
function print(id: abc) {
    console.log(`ID: ${id.age}`);
  }
print({
    age:23
})
 print({
    age:"23"
 })



 
// TYPES IN TYPESCRIPT
type StringOrNumber = string | number | boolean; // Union
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}
printId(101); // 101
printId("202"); // 202
printId(true); // true

type Employe = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employe & Manager; // Intersection using type not done by interface
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate : new Date(),
    department: "Software developer"
};

console.log(teamLead)




// ARRAYS IN TYPESCRIPT
type Numberop=number[] | string[]
// interface Numberop2{number[]}  // shows error
function chlja(arr: Numberop) {
    for (let i = 0; i < arr.length; i++) {
   console.log(arr[i])
    }
}

chlja([1, 3, 2]); 
chlja(["1", "3", "2"]);




// ENUMS IN TYPESCRIPT
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}
function doSomething(keyPressed: Direction) {
    if(keyPressed==Direction.Up) console.log("up")
    else if(keyPressed==Direction.Down) console.log("down")
    else if(keyPressed==Direction.Left) console.log("left")
	else if (keyPressed==Direction.Right) console.log("right")
    else console.log("m ni btaunga safed kapda")
}
doSomething(Direction.Up)
doSomething(Direction.Left)


enum Direction1 { // we can fix values also 
    Up=11, // 11
    Down, // 12
    Left=16, // 16
    Right // 17
}
console.log(Direction1.Up)
console.log(Direction1.Down)
console.log(Direction1.Left)
console.log(Direction1.Right)




// ENUMS USECASE IN EXPRESS
const express = require("express")
const app = express();
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req:any, res:any) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json("error h bhai kuch to dal de")
    }
		res.status(ResponseStatus.Success).json(" sab chnga h dar mat ho jayega sab shi");
})
app.listen(3000)




// GENERICS IN TYPESCRIPT
function getFirstElement<T>(arr: T[]):T {
    return arr[1];
}
const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
const e2 = getFirstElement<number>([1,2]);
console.log(el.toUpperCase())
console.log(e2)

// type a = string[] | number[]
// function getSecondElement(arr:a){
//     return arr[1]
// }
// const e3 = getSecondElement(["harkiratSingh", "ramanSingh"])
// console.log(e3.toUpperCase()) // this will show error as arr[1] can be string or number so use generics
