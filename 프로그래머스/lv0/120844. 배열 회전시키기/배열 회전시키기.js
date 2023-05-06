function solution(numbers, direction) {
    if(direction === "left"){
        let a= numbers.shift()
        numbers.push(a)
    }else if(direction === "right"){
        let b = numbers.pop()
        numbers.unshift(b)
    }
    return numbers
}