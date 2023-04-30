function solution(my_string) {
    return (my_string.match(new RegExp('[0-9]+', 'g')) ?? [])
            .reduce((arr, cur) => parseInt(arr)+parseInt(cur), 0) 
}