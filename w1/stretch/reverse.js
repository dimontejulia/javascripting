const reverse = function () {
  const args = process.argv;
  let input = args.slice(2, args.length);
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    for (let j = input[i].length - 1; j >= 0; j--) {
      temp += input[i][j];
    }
    console.log(temp);
  }
};

reverse();
