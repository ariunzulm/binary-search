import chalk from "chalk";

console.log(chalk.magenta("Hello world!"));
console.log(chalk.cyan("Ariii"));

const args = process.argv;

// binary search
// while - if works, it ends
// index - locate the target number

const numbers = [1, 2, 3, 4, 5, 6];
const targetNumber = 5;

// let high low numbers
// let middle,
// check conditions if target middle equal // if target higher or lower than middle
// be careful middle is an Index, not a number
// it should be function, means should be logged, and param
// learn from your fucking mistake bro

let toTheRight = numbers.length - 1;
let toTheLeft = 0;

const binarySearching = (a) => {
  while (toTheLeft <= toTheRight) {
    let middleIndex = toTheLeft + Math.floor((toTheRight - toTheLeft) / 2);
    console.log(middleIndex);

    if (a[middleIndex] === targetNumber) {
      console.log("found it", middleIndex);
      break;
    }
    if (a[middleIndex] > targetNumber) {
      toTheRight = middleIndex - 1;
      console.log("to the right", middleIndex);
    }
    if (a[middleIndex] < targetNumber) {
      toTheLeft = middleIndex + 1;
      console.log("to the left", middleIndex);
    }
  }
};
console.log(binarySearching(numbers));

// let highestNumber = numbers.length - 1;
// let lowestNumber = 0;

// const binarySearch = (numbers) => {
//   while (lowestNumber <= highestNumber) {
//     let middleIndex =
//       lowestNumber + Math.floor((highestNumber - lowestNumber) / 2);

//     if (numbers[middleIndex] === targetNumber) {
//       console.log(middleIndex, "found the index of expected value!!!");
//       break;
//     } else if (numbers[middleIndex] > targetNumber) {
//       highestNumber = middleIndex - 1;
//       console.log("to the right");
//     } else if (numbers[middleIndex] < targetNumber) {
//       lowestNumber = middleIndex + 1;
//       // console.log(lowestNumber);
//       console.log("to the left");
//     }
//   }
// };
// console.log(binarySearch(numbers));
