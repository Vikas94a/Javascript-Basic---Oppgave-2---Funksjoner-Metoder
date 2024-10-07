/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
/*
function evenNumber(num) {
  if (num % 2 === 0) {  //Check if the number is even (divisible by 2)
    return "It's an Even number";  // Return the answer and stop if the condition is true
  } else {
    return "It's a Odd Number";
  }
}

let result = evenNumber(51);
console.log(result);
*/
/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
/*

const capitalLetter = (str) => {
  const text = str.toUpperCase(); // Change the str into uppeecase
  return `"${text}!"`; // add "" and ! in the string
};

let result = capitalLetter("hei good morning");

console.log(result);
*/

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
/*
const greetingMesseg = (name, timing) => {
  if (timing < 0) {
    return "Invalid time";
  } else if (timing <= 5) {
    return `Good night ${name}`;
  } else if (timing <= 11) {
    return `Good morning ${name}`;
  } else if (timing <= 17) {
    return `Good day ${name}`;
  } else if (timing <= 23) {
    return `Good evening ${name}`;
  } else return "Invalid time ";
};

let result = greetingMesseg("Tommy", 24);
console.log(result);


*/

/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
/*
function removeFirstAndLast(array) {
  array.pop();
  array.shift();
  return array;
}

let result = removeFirstAndLast(["red", "green", "blue", "yellow"]);
let resuntSec = removeFirstAndLast([
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
]);
console.log(result, resuntSec);

*/

/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/
/*
const transformText = (str) => {
  const newText = str.replace("hard", "fun");
  return newText.trim();
};

let exampelText = transformText("  JavaScript is hard   ");
let methodTest = transformText(
  "                         It's hard to use method"
);
console.log(exampelText, methodTest);
*/
/******************************************************************************
6.

Use array metho
ds to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];

heroes.shift(1);
let finalResult = heroes.splice(2, 1, "skrull");
heroes.splice(0, 2, "Captain America ");
let heroEmoji = heroes.join("💪");
console.log(finalResult);
console.log(heroes, heroEmoji);

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/
/*
let parameterDetector = (str) => {
  if (typeof str === "string") {
    return `😎${str}😎`;
  } else if (typeof str === "number") {
    let newNum = str * 2;
    return String(`😎${newNum}😎`);
  } else if (typeof str === "boolean") {
    if (str === true) {
      return `"😎yeah😎"`;
    } else return `"😎chill😎"`;
  } else return `"😎Primitive value only😎"`;
};

let result = parameterDetector([3, 3]);
console.log(result);
*/
/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

// loops method
/*
function filterArrayByString(array, str) {
  // let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === str) {
      let newArray = array.splice(i, 1);
      return array;
    } else if (array[i] !== str) {
      let addArray = array.push(str);
      return array;
    }
  }
}

let result = filterArrayByString(["green", "red", "yellow"], "black");

console.log(result);
*/

// arrayFixer = (arr, str) => {
//   const index = arr.indexOf(str);
//   if (index !== -1) {
//     arr.splice(index, 1);
//   } else if (index === -1) {
//     arr.push(str);
//   }
//   return arr;
// };

// let result = arrayFixer(["red", "blue", "black"], "red");
// console.log(result);
