function solution(num_list) {
    var answer = [];
let b = []
let c = []
let a = num_list.forEach(a => {
    if(a % 2 == 0){
        b.push(a)
    } else {
        c.push(a)
        
    }
});
answer.push(b.length);
answer.push(c.length);
    return answer;
}