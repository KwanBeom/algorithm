function solution(strArr) {
    const maxLeng = strArr.map(v => v.length).sort((a,b)=>b-a)[0]
    let result = 0;
    console.log(maxLeng)
    for(let i=1; i <= maxLeng; i++){
        const filterArr = strArr.filter(v => v.length === i);
        if(filterArr.length > result) result = filterArr.length
    }
    
    return result
}


