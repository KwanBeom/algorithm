function solution(input) {
  const total = parseInt(input[0]);
  let sum = 0;
  for(let i=0; i<input[1]; i++) {
    const [price, count] = input[i+2].split(' ');
    sum += price * count;
  }
  console.log(total === sum ? "Yes" : "No");
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
