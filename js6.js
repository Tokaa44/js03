//Week6
//1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log("-----------")
//----------------------------------
//2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

console.log("-----------")
//----------------------------------
//3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr=arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("-----------")
//----------------------------------
//4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

console.log("-----------")
//----------------------------------
//5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
let answer1= haystack.includes(needle) === true ? console.log("Found") : console.log("");

let answer2= haystack[1] === "JS" ? console.log("Found") : console.log("");

let answer3= haystack.indexOf(needle) ? console.log("Found") : console.log("0");

console.log("-----------")
//----------------------------------
//6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2.concat(arr1).sort().slice(arr2.length).join("").toLocaleLowerCase();

console.log(allArrs); // fxy