let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function addNumber() {
  let result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}

function subtractNumber() {
  let result = num1 - num2;
  sumEl.textContent = "Sum: " + result;
}

function divideNumber() {
  let result = num1 / num2;
  sumEl.textContent = "Sum: " + result;
}

function multiplyNumber() {
  let result = num1 * num2;
  sumEl.textContent = "Sum: " + result;
}
