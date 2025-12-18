// import chalk from "chalk";

// console.log(chalk.magenta("Hello world!"));
// console.log(chalk.cyan("Ariii"));

// const args = process.argv;

// binary search
const numbers = [1, 2, 3, 4, 5, 6];
const targetNumber = 5;

// while - if works, it ends
// index - locate the target number

let highestNumber = numbers.length - 1;
let lowestNumber = 0;

const binarySearch = (numbers) => {
  while (lowestNumber <= highestNumber) {
    let middleIndex =
      lowestNumber + Math.floor((highestNumber - lowestNumber) / 2);

    if (numbers[middleIndex] === targetNumber) {
      console.log(middleIndex, "found the index of expected value!!!");
      break;
    } else if (numbers[middleIndex] > targetNumber) {
      highestNumber = middleIndex - 1;
      console.log("to the right");
    } else if (numbers[middleIndex] < targetNumber) {
      lowestNumber = middleIndex + 1;
      // console.log(lowestNumber);
      console.log("to the left");
    }
  }
};
console.log(binarySearch(numbers));
