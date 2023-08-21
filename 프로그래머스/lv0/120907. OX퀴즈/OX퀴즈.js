function solution(quiz) {
    return quiz.map(v => {
        const arr = v.split(' '),
              num1 = Number(arr[0]),
              num2 = Number(arr[2]),
              operator = arr[1],
              answer = Number(arr[arr.length-1])
        let result
        switch(operator){
            case '+':
                result = num1 + num2 === answer;
                break;
            case '-':
                result = num1 - num2 === answer;
                break;
        }
        return result ? "O" : "X"
    })
}