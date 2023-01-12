let sum = 0;
let num;
let ask = "";
let count = 0;

do {
  num = Number(prompt("Enter a number: "));
  count++;
  sum = num + sum;
  ask = prompt("Do you want to quit (C/Q)?");

} while (ask.toUpperCase() != "Q");

console.log(`Result: ${sum / count}`);
