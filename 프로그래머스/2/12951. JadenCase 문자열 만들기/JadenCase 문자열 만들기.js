function solution(s) {
    return s.split(' ').map((v) => {
        if(typeof v === 'string' && v !== '') {
         return v[0].toUpperCase() + v.slice(1, v.length).toLowerCase()  
        }
    }).join(' ')
}