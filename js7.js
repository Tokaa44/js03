//Week 7
//1.1

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

console.log("-----------");
//----------------------------------
//1.2

let start1 = 10;
let end1 = 0;
let stop = 3;

for (let index = start1; index > end1; index--) {
  if (index < stop) {
    break;
  }
  if (index < 10) {
    console.log(`0${index}`);
  } else {
    console.log(index);
  }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

console.log("-----------");
//----------------------------------
//1.3

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let j = start2; j <= end2; j++) {
    console.log(j);
    for (let x = breaker; x < end2; x+=breaker) {
        console.log(`--${x}`);
    }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

console.log("-----------");
//----------------------------------
//1.4

let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < jump *jump) {
    break;
  }
}

// Output
10
8
6
4

console.log("-----------");
//----------------------------------
//1.5 ?

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

num=0;
for (let x = 0; x < friends.length; x++) {
  if (friends[x].toLocaleLowerCase().startsWith(letter)) {
    continue;
  }  
  else{
    num++;
    console.log(`${num} => ${x}`);
  }
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

console.log("-----------");
//----------------------------------
//1.6

let Start = 0;
let swappedName = "elZerO";
let newSN = "";

for (let y = Start; y < swappedName.length; y++) {
  if (swappedName[y]=== swappedName[y].toLocaleLowerCase()) {
    newSN += swappedName[y].toLocaleUpperCase();
  } else{
    newSN += swappedName[y].toLocaleLowerCase();
  } 
}
console.log(newSN);


// Output
"ELzERo"

console.log("-----------");
//----------------------------------
//1.7

let start3 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
mix.shift();

for (let z = start3; z < mix.length ; z++) {
  if (typeof(mix[z]) === "number" ) {
    console.log(mix[z]);
  }
}

// Output
2
3
4

console.log("-----------");
//======================================
//2.1 ?

let Friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;

while (index1 < Friends.length ) {
  if (Friends[index1].startsWith("A") || typeof(Friends[index1]) === "number") {
    index1 ++;
    continue
  }
  counter++;
  console.log(`${counter} => ${Friends[index1]}`);
  index1++;
}

// Output
"1 => Sayed"
"2 => Mahmoud"
