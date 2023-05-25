function solution(num_list, n) {
    var answer = [];
    for(let i=0; i<num_list.length/2; i+n){
        answer.push(num_list.splice(0, n))
    }
    return answer;
}