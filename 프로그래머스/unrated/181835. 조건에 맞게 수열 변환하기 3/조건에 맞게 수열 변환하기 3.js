function solution(arr, k) {
    var answer = [];
    if(k % 2 === 1){
        answer = arr.map(v => v * k)
    }else{
        answer = arr.map(v => v + k)
    }
    return answer;
}