function solution(num_list) {
    return num_list.map(num => {
        let count = 0;
        while(num > 1){
            if(num % 2 === 0) num = num / 2
            else num = (num - 1) / 2
            count++
        }
        return count
    }).reduce((acc, cur) => acc + cur, 0)    
}