// EXTRA IMPORTANT STUFF 

let age=23
console.log(age, typeof age) // 23 number
let age2="23"
console.log(age2, typeof age2) // 23 string




let $=10
console.log($) // 10
// let *=10
// console.log(*) // error




console.log(NaN+1) // NaN
console.log(NaN-1) // NaN
console.log(NaN*1) // NaN
console.log(NaN/1) // NaN
let big=123456789078967890987n
console.log(big, typeof big) // 123456789078967890987n bigint




let a="30"
let a1=Number(a);
console.log(a1, typeof a1) // 30 number
let a2=parseInt(a)
console.log(a2,typeof a2) // 30 number
let a3 = +a
console.log(a3, typeof a3) // 30 number




let b=1167
let b1=String(b)
console.log(b1, typeof b1) // 1167 string
let b2=b.toString()
console.log(b2,typeof b2) // 1167 string
let b3=b.toString(2)
console.log(b3, typeof b3) // 10010001111 string
let b4=b.toString(16).toUpperCase();
console.log(b4, typeof b4) // 48F string
let b5=b.toString(8);
console.log(b5, typeof b5) // 2217 string
let b6= parseInt(b3)
console.log(b6 , typeof b6) // 10010001111 number
let b7= parseInt(b3 , 2)
console.log(b7 , typeof b7) // 1167 number
let b8=parseInt(b4)
console.log(b8 ,typeof b8) // 48 number
let b9=parseInt(b4 , 16)
console.log(b9 ,typeof b9) // 1167 number
let b10=parseInt(b5)
console.log(b10 ,typeof b10) // 2217 number
let b11=parseInt(b5 , 8)
console.log(b11 ,typeof b11) // 1167 number




console.log(isNaN("abc")) // true
console.log(isNaN(23)) // false
console.log(isNaN(" ")) // false
console.log(isFinite(23/0)) // false
console.log(isFinite(23/"3")) // true
console.log(isFinite(23/true)) // true 
console.log(isFinite(23/false)) // false
console.log(isFinite(23/(21%7))) // false 
console.log(isFinite(56/((90%18)/5))) // false
console.log(isFinite(56/((90/18)/5))) // true




let arr=[1,"3", true , abc=()=>{console.log("hello")}]
console.log(arr[3]) // [Function: abc]
console.log(arr[3]()) // hello undefined
arr[3]() // hello




// The reduce() method in JavaScript is used to reduce an array to a single value by executing a callback function 
// on each element of the array, from left to right. The method takes two arguments: a callback function and an 
// optional initial value. Syntax- array.reduce(callback, initialValue)
// Callback: A function that is called for each element of the array. It has the following arguments:
// 1. accumulator: The accumulated value returned from the last callback execution (or the initialValue for the 
// first iteration).
// 2. currentValue: The current element being processed in the array.
// If initial value is not given then arr[0] is treated as initial value.

const numbers = [11, 2, 13, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 30
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // 13




// In JavaScript, prototypes are a mechanism by which objects inherit properties and methods from other objects. 
// Every JavaScript object has an internal property called [[Prototype]], which points to another object. This
// other object is called the object's prototype.

const obj={
    name:"virat",
    age:21,
    // walk(){console.log("hi there")} 
    walk:function(){console.log("hi there")}
}

const p1=Object.create(obj)
console.log(obj) // { name: 'virat', age: 21, walk: [Function: walk] }
// p1 itself doesn't have its own properties—it's an empty object, but it can access all properties and methods of 
// obj via the prototype chain
console.log(p1) // {}
p1.walk() // hi there
obj.name="harsh"
console.log(obj.name) // harsh
console.log(p1.name) // harsh

p1.name="mohit"
console.log(obj.name) // harsh
console.log(p1.name) // mohit




// In JavaScript, a constructor function is a special type of function used to create and initialize objects. It 
// serves as a blueprint for creating multiple objects with similar properties and methods.

function person(name, age) { // no meaning of static keyword in this
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

// Creating objects using the constructor function
const person1 = new person("Alice", 25);
const person2 = new person("Bob", 30);

console.log(person1.name); // Alice
console.log(person2.age);  // 30

person1.sayHello(); // Hello, my name is Alice
person2.sayHello(); // Hello, my name is Bob

// class person {
//     constructor(name, age) { // here constructor keyword is required
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// // Creating objects using the class
// const person1 = new person("Alice", 25);
// const person2 = new person("Bob", 30);

// console.log(person1.name); // Alice
// console.log(person2.age);  // 30

// person1.sayHello(); // Hello, my name is Alice
// person2.sayHello(); // Hello, my name is Bob




// In JavaScript, rest parameters allow a function to accept an indefinite number of arguments as an array. This is 
// useful when the exact number of arguments a function will receive is unknown. The syntax for rest parameters uses
// three dots (...) followed by the parameter name.
// function test(a, b, ...rest) { } // Valid
// function test(...rest, a, b) { } // Error

function add(a,b,...arr){
    console.log(arr) 
    return a+b
}
console.log(add(1,2,3,4,5,6)) // [3,4,5,6] 3




// The spread operator in JavaScript is represented by three dots (...). It allows expanding an iterable (like an 
// array, string, or object) into individual elements. The spread operator is widely used for tasks like combining 
// arrays, cloning objects, or passing arguments to functions.

const numbers1 = [1, 2, 3];
console.log(...numbers1); // 1 2 3

const newNumbers = [...numbers1, 4, 5]; // Combines arrays
console.log(newNumbers); // [1, 2, 3, 4, 5]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const combined2 = [...array1, ...array1];
console.log(combined2); // [1, 2, 3, 1, 2, 3]

const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]
console.log(copy === original); // false as different references

const string = "hello";
const chars = [...string]; // spreading strings
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

const obj2 = { name: "Alice", age: 25 };
const copy2 = { ...obj2 };

console.log(copy2); // { name: "Alice", age: 25 }
console.log(copy2 === obj2); // false as different references

const obj3 = { name: "Alice" };
const obj4 = { age: 25, city: "Paris" };

const merged = { ...obj3, ...obj4 };
console.log(merged); // { name: "Alice", age: 25, city: "Paris" }

const merged2 = { ...obj3, ...obj3 };
console.log(merged2); // { name: "Alice"}

const obj5 = { name: "Alice", age: 25 };
const updated = { ...obj5, age: 30 }; // update the object
console.log(updated); // { name: "Alice", age: 30 }

let array3=[1,2,3]
let objec={...array3}
console.log(objec) // { '0': 1, '1': 2, '2': 3 }
console.log(Math.max(array3)) // NaN
console.log(Math.max(...array3)) // 3 
console.log(Math.max(12,array3)) // NaN
console.log(Math.max(12,...array3,13)) // 13




// Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects
// into distinct variables in a clean and concise way.

const array5 = [1, 2, 3];
const [x, y, z] = array5;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

var[x1,,z1]=array5
console.log(x1); // 1
console.log(z1); // 3

const array6 = [1];
const [x3, y3 = 2] = array6;

console.log(x3); // 1
console.log(y3); // 2

const obj7 = { names: "Alice", ages: 25 };
const { names, ages } = obj7;
console.log(names); // Alice
console.log(ages);  // 25
const { names: personName, ages: personAge } = obj7;
console.log(personName); // Alice
console.log(personAge);  // 25

const obj8={names1:"Alice", ages1:23}
const{ names1 , ages1, gender1="male"}= obj8
console.log(names1) // Alice
console.log(ages1) // 23
console.log(gender1) // male




// The join() method joins all the elemnts of an array into a string
let arrr=[1,2,3]
console.log(arrr.join(" and ")) // 1 and 2 and 3
console.log(arrr) // [1,2,3]




// The split() method spilts a string into an array of substrings
let str="hi my name is mohit"
console.log(str.split(" ")) // [ 'hi', 'my', 'name', 'is', 'mohit' ]
console.log(str) // hi my name is mohit




// IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is executed immediately after it 
// is defined.

(function() {
    console.log("This is an IIFE!"); // This is an IIFE!
})(); 
  
((param) => {
    console.log(`Hi ${param} IIFE with an arrow function!`); // Hi alice IIFE with an arrow function!
})("alice");




// A polyfill is a piece of code (usually JavaScript) that implements feature or functionality that is not 
// natively supported by certain browsers or environments. Polyfills are used to ensure that modern JavaScript 
// features work in older browsers or environments that do not support them.
