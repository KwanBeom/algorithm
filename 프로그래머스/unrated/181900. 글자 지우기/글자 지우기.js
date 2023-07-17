function solution(my_string, indices) {
    const arr = my_string.split('')
    for(let i=0; i<indices.length; i++){
        arr.splice(indices[i], 1, ' ')
    }
    return arr.join('').replaceAll(' ', '');
}