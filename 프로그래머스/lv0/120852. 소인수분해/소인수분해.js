function solution(n) {
    var answer = [];
    if(isPrime(n)){
        return [n]
    } else {
        for(let i=2; i<n; i++){
            if(n%i===0 && isPrime(i)) answer.push(i)
        }
    }
    return answer
}


function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}