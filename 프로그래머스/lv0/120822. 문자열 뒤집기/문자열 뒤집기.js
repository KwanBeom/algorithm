function solution(my_string) {
    var answer = '';
    for(i in my_string){
        answer = my_string[i] + answer
    }
    return answer;
}