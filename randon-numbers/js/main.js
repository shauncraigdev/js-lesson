/* let randomNumber = Math.floor(Math.random() * 6) + 1;

let flooredNumber = Math.floor(3.45632);

console.log(randomNumber); */

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());
