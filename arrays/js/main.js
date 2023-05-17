// Arrays - ordered lists of items

/* let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code for my project",
  "I've relaunced my portfolio",
];

console.log(featuredPosts.length); */

/* let careerPath = ["Computer Programmer", "Video Gamer", "Web Developer"];

console.log(careerPath[1]);
console.log(careerPath[2]);
console.log(careerPath[0]); */

/* let myself = ["my name", 23, true]; */

/* let cards = [7, 4];

cards.push(6);

console.log(cards); */

/* let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately",
];

let newMessage = "Same here!";

messages.push(newMessage);

messages.pop(3);
console.log(messages); */

/* let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

console.log("The 5 largest Countries:");
for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
} */

/* let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");
console.log(largeCountries);
 */

/* let dayOfMonth = 13;
let weekDay = "Friday";

if (dayOfMonth === 13 && weekDay === "Friday") {
  console.log("It is Friday the 13th, ooooh");
} */

/* let hands = ["rock", "paper", "scissor"];

function answer() {
  let newNumber = Math.floor(Math.random() * 3);
  return hands[newNumber];
}

console.log(answer()); */

let fruit = ["red", "orange", "red", "red", "orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "red") {
      appleShelf.textContent += fruit[i] + " ";
    } else if (fruit[i] === "orange") {
      orangeShelf.textContent += fruit[i] + " ";
    }
  }
}

sortFruit();
