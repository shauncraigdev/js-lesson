// Counting

//       START      FINISH     STEP SIZE
/* for (let count = 10; count < 21; count += 1) {
  console.log(count);
}
 */

// naming convention for loops to use let i = number
/* for (let i = 10; i < 101; i += 10) {
  console.log(i);
} */

/* let messages = [
  "How, how's it going?",
  "I'm great, thank you!",
  "All good. Been working on my portfolio lately",
  "Same here!",
  "Great to hear",
  "+",
];

for (let i = 0; i < messages.length; i += 1) {
  console.log(messages[i]);
} */

/* let cards = [7, 3, 9];

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
} */

let sentence = ["Hello", "my", "name", "is", "me"];
let greetingEl = document.getElementById("greeting-el");

// render the sentence array in the greetingEl paragraph
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}
