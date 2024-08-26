// 1
let textOne = "Hello World";
console.log(textOne);

// 2
stringTest = "5"; //data type = string
numberTest = 5; //data type = number

// 3
let year = 2024;
console.log(year);

// 4
let taskFour = true;
console.log(taskFour);

// 5
let isGreater = 100 > 1000; 
console.log(isGreater); //comparison operator

let andLogic = (10 > 4) && (10 < 100);
console.log(andLogic); //logical operator

// 6
let textSix = "Hello";
console.log(textSix.toUpperCase());

// 7
let textSeven = "World";
console.log(textSeven.toLowerCase());

// 8
let text = 'Hello';
text.toUpperCase();
console.log(text); //value of "text" is the same ("Hello") before and after the method is called

// 9
// let text;
// console.log(text); //error - Output is undefined, variable has no value

// 10
// let text = 'Hello';
// console.log(text.toLowercase());

let textTen = 'Hello';
console.log(text.toLowerCase()); //lower case "C"

// 11
// let age = prompt('How old are you?');
// let nextAge = age + 1;
// console.log(`Next year you will be ${nextAge}`);

let age = prompt('How old are you?');
let nextAge = Number(age) + 1; //implicit value of "age" is string, unable to perform arithmetic operators
console.log(`Next year you will be ${nextAge}`);

// 12
let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = (age > 59) && (age < 70);
console.log(`${name} is in sixties: ${isInSixties}`);

// 13
let x = 5;
console.log(x++); //increments afterwards
console.log(x);

// 14
let y = 5;
console.log(++y); //returns value after incrementing
console.log(y);

// 15
// x++ --> adds one;
// x-- --> decreases value by one;

// 16
// x++ --> first returns the value and then increases by one;
// ++x --> returns value after adding one;

// 17
// undefined

// 18
let isEqualStrict = 1 === "1";
console.log(isEqualStrict);
let isEqualLoose = 1 == "1";
console.log(isEqualLoose);

// 19
let isNotEqual = 1 != "1"; //loose
console.log(isNotEqual);

// 20
let stringNum = "17";
let numberNum = 5;
console.log(stringNum + numberNum); //both values joined in one string, not arithmetically added