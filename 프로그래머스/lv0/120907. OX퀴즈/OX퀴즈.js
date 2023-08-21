function solution(quiz) {
    return quiz.map(v => {
        const [num1, operator, num2, n, answer] = v.split(' ')
        let sum
        switch(operator){
            case '+':
                sum = 1*num1 + 1*num2 
                break;
            case '-':
                sum = 1*num1 - 1*num2
                break;
        }
        return sum === 1*answer ? "O" : "X"
    })
}