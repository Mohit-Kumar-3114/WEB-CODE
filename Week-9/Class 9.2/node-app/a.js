"use strict";
const x = 1;
console.log(x);
let greet1 = (firstName) => {
    return "Hello " + firstName;
};
console.log(greet1("harkirat"));
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal1(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal1(12));
function delayedCall(fn, delay) {
    setTimeout(() => {
        console.log(fn());
    }, delay);
}
delayedCall(function () {
    return "hi there";
}, 1000);
function isLegal2(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet2(user) {
    console.log("hi there " + user.firstName);
}
isLegal2({
    firstName: "mohit",
    lastName: "ahlawat",
    age: 21
});
greet2({
    firstName: "mohit",
    lastName: "ahlawat",
    age: 21
});
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        return phrase + " " + this.name;
    }
}
const e = new Employee("rohit", 20);
console.log(e.name);
console.log(e.greet("hello"));
function print(id) {
    console.log(`ID: ${id.age}`);
}
print({
    age: 23
});
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101);
printId("202");
printId(true);
const teamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
console.log(teamLead);
function chlja(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
chlja([1, 3, 2]);
chlja(["1", "3", "2"]);
