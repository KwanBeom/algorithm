function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    arr.map((v,i) => v !== arr[i+1] && answer.push(v))
    
    return answer;
}