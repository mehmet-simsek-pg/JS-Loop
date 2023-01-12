let randomNumber;
let ask;
do {
  let count = 5;
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber); //for testing purposes

  while (count > 0) {
    const number = +prompt("Enter a number between 0-100: ");

    count--;

    if (randomNumber == number) {
      console.log("congratulations 🥳");
      break;
    } else if (count == 0) {
      console.log("lose game 😞");
      console.log("Correct Answer: ", randomNumber);
    } else if (randomNumber > number) {
      console.log("INCREASE 📈");
      console.log(count, "left guess");
    } else {
      console.log("DECREASE 📉");
      console.log(count, "left guess");
    }
  }
  ask = prompt("Do you want to play again? (y/n): ");
} while (ask.toLowerCase() == "y");

console.log("Thanks for playing");
