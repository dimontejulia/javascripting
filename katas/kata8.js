//Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.

const repeatNumbers = function (data) {
  let myString = "";
  for (let row = 0; row < data.length; row++) {
    for (let col = 1; col < data[row][1]; col++) {
      myString += data[row][0];
    }
    if (data.length > 1 && row != data.length - 1) {
      myString += ", ";
    }
  }

  return myString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
