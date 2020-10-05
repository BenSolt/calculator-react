const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];

const specials = ["C", "+/-", "%"];

export {
  numbers,
  operators,
  specials
  }