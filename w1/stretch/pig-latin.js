const pigLatin = function(input) {
  for (let i = 0; i < input.length; i++) {
    let sliced = input[i].slice(1, input[i].length);
    let pig = sliced + input[i][0] + "ay";
    console.log(pig);
  }
};


const args = process.argv;
let input = args.slice(2,args.length);
pigLatin(input);
