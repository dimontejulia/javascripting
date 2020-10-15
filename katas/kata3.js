//In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = function (data) {
  const vowels = "aeiou";
  let count = 0;
  for (let letter of data) {
    if (vowels.includes(letter)) {
      count += 1;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
