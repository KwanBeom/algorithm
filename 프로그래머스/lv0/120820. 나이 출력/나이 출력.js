function solution(age) {
    const date = new Date();
    const year = date.getFullYear();
    if(0 < age <= 120){
        var answer = year-age;
    } else {
        alert("0 이상  120이하의 나이를 입력하세요")
    }
return answer;
}