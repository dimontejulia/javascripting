//Kata 1: In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.
const sumLargestNumbers = function (data) {
  let max1 = 0;
  let max2 = 0;
  for (var i = 0; i <= data.length; i++) {
    if (data[i] > max1) {
      max2 = max1;
      max1 = data[i];
    } else if (data[i] > max2) {
      max2 = data[i];
    }
  }
  return max1 + max2;
};

console.log(sumLargestNumbers([1]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
