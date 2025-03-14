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
