const loopyLighthouse = function (range, multiples, words) {
  for (let num = range[0]; num <= range[1]; num++) {
    let output = "";
    if (num % multiples[0] === 0 && num % multiples[1] === 0) {
      output += words[0] + words[1];
    } else if (num % multiples[0] === 0) {
      output += words[0];
    } else if (num % multiples[1] === 0) {
      output += words[1];
    } else {
      output += num;
    }
    console.log(output);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
