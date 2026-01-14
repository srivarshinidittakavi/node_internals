// Import boxen module
const boxen = require("boxen");

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default) box
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1
  })
);

// 2. SingleDouble style box
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble"
  })
);

// 3. Round style box
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round"
  })
);
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor: "green",
    borderColor: "yellow"
  })
);
