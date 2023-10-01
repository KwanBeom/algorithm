function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        if(div(i) % 2 === 0) answer += i
        else answer -= i
    }
    return answer;
}

const div = (num) => {
    let cnt = 0;
    for(let i=0; i<=num; i++){
        if(i*i===num) cnt++
        else if(num%i===0) cnt+=2
    }
    return cnt
}