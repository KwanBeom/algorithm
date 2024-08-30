function solution(input) {
  const [a, b] = input.split(' ').map(Number);
  const result = [a + b, a - b, a * b, Math.floor(a / b), a % b];
  console.log(result.join('\n'));
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
