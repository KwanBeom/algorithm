function solution(numlist, n) {
    return numlist.sort((a,b) =>{
        console.log(Math.abs(a-n), Math.abs(b-n))
        if(Math.abs(b-n) === Math.abs(a-n)) return a - b
        return Math.abs(b-n) - Math.abs(a-n) 
    }).reverse()
}