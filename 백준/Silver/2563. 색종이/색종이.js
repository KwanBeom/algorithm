function solution(input) {
  const n = Number(input[0]);
  const data = input.slice(1).map((v) => v.split(' ').map((v) => Number(v)));

  // 100x100 2차원 배열 초기화
  const board = Array.from({ length: 100 }, () => Array(100).fill(0));
  let result = 0;

  // 각 색종이 영역을 배열에 표시
  data.forEach(([x, y]) => {
    for (let i = x; i < x + 10; i++) {
      for (let j = y; j < y + 10; j++) {
        if (board[i][j] === 0) {
          board[i][j] = 1;
          result++; // 겹치지 않은 영역만 카운트
        }
      }
    }
  });

  console.log(result);
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
