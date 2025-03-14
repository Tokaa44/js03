//week 5
// 1.1
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(+ -50 != +"-40"); // true
console.log(+ 10 <= -"-40"); // true
console.log(+ "10" === + 10); // true
console.log(! 20 == false); // true

console.log("-----------")
//----------------------------------

//1.2
let num1 = 10;
let num2 = 20;

console.log(!(num1 === num2)); // true
console.log(typeof num1 == typeof num2); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true
console.log(num1 != num2); // true

console.log("-----------")
//---------------------------------

//1.3
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a < b > a < c); // true
console.log(!!(a < b) && !(a > b) && !(a < c) && !!(a > c)); // true

console.log("-----------");
//============================================

//2.1
// Test Case 1
let num = 9; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
//let num = 110; // "110"

if (num < 10){
    console.log(`00${num}`)
}else if(num > 10 && num < 100){
    console.log(`0${num}`);
}else if(num >= 100){
    console.log(num);
}

console.log("-----------");
//---------------------------------

//2.2
let Num = 9;
let str = "9";
let str2 = "20";

// Output
"{Num} Is The Same Value As {str}"
"{Num} Is The Same Value As {str} But Not The Same Type"
"{Num} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if(Num === str){
    console.log("{Num} Is The Same Value As {str}");
}else if(Num == str && Num !== str){
    console.log("{Num} Is The Same Value As {str} But Not The Same Type");
}else if(Num !== str2 ){
    console.log("{Num} Is Not The Same Value Or The Same Type As {str2}");    
}else if(str!= str2 && typeof str == typeof str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

console.log("-----------");
//---------------------------------

//2.3
let Num1 = 10;
let Num2 = 30;
let Num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if(Num3 > Num1 && typeof Num3 != typeof Num2){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}else if(Num3 > Num1 && Num3 == Num2 && typeof Num3 != typeof Num2){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}else if(Num3 != Num1 && typeof Num3 != typeof Num2){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

console.log("-----------");
//---------------------------------

//2.4
// Edit What You Want Here

let NUM1 = 15;
let NUM2 = 5;
let NUM3 = 15;
let NUM4 = 46;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (NUM1 > NUM2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (NUM1 > NUM2 && NUM1 < NUM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (NUM1 > NUM2 && NUM1 === NUM3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((NUM1 + NUM2) < NUM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((NUM1 + NUM3) < NUM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((NUM1 + NUM2 + NUM3) < NUM4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (NUM4 - (NUM1 + NUM3) + NUM2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.log("-----------");
//============================================

//3
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

//let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

//let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

//let day = "World";
// Output => "Its Not A Valid Day"

switch (day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
}