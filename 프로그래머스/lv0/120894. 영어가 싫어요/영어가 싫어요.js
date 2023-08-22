function solution(numbers) {
    const datas = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i=0; i<datas.length; i++){
        numbers = numbers.replaceAll(datas[i], i)
    }
    return 1*numbers;
}