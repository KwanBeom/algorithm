function solution(numbers) {
    var answer = 0;
    let a = numbers.sort((a,b) => b-a)
    return a[0] * a[1] > a[a.length-1] * a[a.length-2] ? 
        a[0] * a[1] : a[a.length-1] * a[a.length-2]
}