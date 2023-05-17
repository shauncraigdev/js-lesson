// Objects - store data in-deptrh - composite / complex data type
// key-value pairs

/* let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.tags); */

// Create an object that represents an airbnb caste listing
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

/* let listing = {
  name: "Castle",
  isEmpty: true,
  cost: 100,
  beds: 45,
  types: ["single", "double", "king", "triple"],
};

console.log(listing.isEmpty);
console.log(listing.cost); */

/* let person = {
  name: "I am",
  age: "35 years old",
  country: "and I do live in Norwary",
};

function logData() {
  console.log(person.name + " " + person.age + " " + person.country);
}

logData(); */

let age = 75;

/* if (age < 6) {
  console.log("Free");
} else if (age > 5 && age < 18) {
  console.log("Child discount");
} else if (age > 17 && age < 27) {
  console.log("Student discount");
} else if (age > 26 && age < 67) {
  console.log("Full Price");
} else if (age > 66) {
  console.log("Senior citizen discount");
} */

// better way to do it, more efficient coding
if (age < 6) {
  console.log("Free");
} else if (age < 18) {
  console.log("Child discount");
} else if (age < 27) {
  console.log("Student discount");
} else if (age < 67) {
  console.log("Full Price");
} else {
  console.log("Senior citizen discount");
}
