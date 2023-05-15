function solution(n)
{
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return n.toString().split('').reduce((acc,cur) => {return 1*acc+1*cur},0)
}