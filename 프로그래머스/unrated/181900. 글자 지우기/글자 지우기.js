function solution(my_string, indices) {
//     const arr = my_string.split('') // 배열로 만들기
    
//     for(let i=0; i<indices.length; i++){
//         arr.splice(indices[i], 1, ' ')
//     }
//     return arr.join('').replaceAll(' ', '');
    
    const arr = my_string.split('')
    indices.map(v => arr.splice(v, 1, ' '))
    return arr.join('').replaceAll(' ', '')
}