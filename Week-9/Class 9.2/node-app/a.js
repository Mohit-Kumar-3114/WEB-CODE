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
        let ans = fn();
        console.log(ans);
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
const newObj = {
    firstName: "mohit",
    lastName: "ahlawat",
    age: 21
};
isLegal2(newObj);
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
const e = new Employee("rohit", 12);
console.log(e.name);
console.log(e.greet("hello"));
function print(id) {
    console.log(`ID: ${id.age}`);
}
print({
    age: 23
});
print({
    age: "23"
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up)
        console.log("up");
    else if (keyPressed == Direction.Down)
        console.log("down");
    else if (keyPressed == Direction.Left)
        console.log("left");
    else if (keyPressed == Direction.Right)
        console.log("right");
    else
        console.log("m ni btaunga safed kapda");
}
doSomething(Direction.Up);
doSomething(Direction.Left);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 11] = "Up";
    Direction1[Direction1["Down"] = 12] = "Down";
    Direction1[Direction1["Left"] = 16] = "Left";
    Direction1[Direction1["Right"] = 17] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
const express = require("express");
const app = express();
const ResponseStatus = {
    Success: 200,
    NotFound: 404,
    Error: 500
};
app.get("/", (req, res) => {
    if (!req.query.userId) {
        res.status(ResponseStatus.Error).json("error h bhai kuch to dal de");
    }
    res.status(ResponseStatus.Success).json(" sab chnga h dar mat ho jayega sab shi");
});
app.listen(3000);
function getFirstElement(arr) {
    return arr[1];
}
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
const e2 = getFirstElement([1, 2]);
console.log(el.toUpperCase());
console.log(e2);
