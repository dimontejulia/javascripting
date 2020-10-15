//Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {
  let myString = "";
  let caps = false;
  for (let letter of input) {
    if (letter === " ") {
      caps = true;
    } else if (caps === true) {
      myString += letter.toUpperCase();
      caps = false;
    } else {
      myString += letter;
    }
  }
  return myString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
