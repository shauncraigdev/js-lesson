// document.getElementbyId("count-el").innerText = 5

/* let firstBatch = 5;
let secondBatch = 7; */

/* let count = 5;

count = count + 1;

console.log(count); */

/* function increment() {
  console.log("the button was clicked");
}
 */

/* function countDown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

countDown();
countDown(); */

/* function callNumber() {
  console.log(42);
}

callNumber(); */

/* let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function addTotal() {
  console.log(lap1 + lap2 + lap3);
}

addTotal(); */

/* let lapsCompleted = 0;

function countNumber() {
  lapsCompleted = lapsCompleted + 1;
}

countNumber();
countNumber();
countNumber();

console.log(lapsCompleted); */

/* let username = "myself";

let message = "You have logged in";

let messageToUser = username + ", " + message + "!";

console.log(messageToUser); */

/* let name = "myself";

let greeting = "Hi, my name is ";

let myGreeting = greeting + name;

console.log(myGreeting);

console.log(4 + 5); // 9;
console.log("2" + "4"); // 24;
console.log("5" + 1); // 51;
console.log(100 + "100"); // 100100; */

// pass in arguements
let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let storeCount = count + " - ";
  /* saveEl.innerText = saveEl.innerHTML + storeCount; */
  saveEl.textContent += storeCount;
  count = 0;
  countEl.textContent = 0;
  /* console.log(count); */
}
