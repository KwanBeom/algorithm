function solution(my_string) {
  let answer = "";

  let newWord = new Set([...my_string]);

  for (let i of newWord) {
    answer += i;
  }

  return answer;
}