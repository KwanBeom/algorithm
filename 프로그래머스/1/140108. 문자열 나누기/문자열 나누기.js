const algorithm = (str) => {
    const firstLetter = str[0];
    const count = [0, 0];

    for(let i=0; i<str.length; i+=1) {
        if(str[i] === firstLetter) count[0] += 1;
        else count[1] += 1;
        
        if(count[0] === count[1]) {
            return str.slice(i + 1)
        };
    }
};

function solution(s) {
    let count = 0;
    
    while(typeof s === 'string' && s.length) {
        s = algorithm(s);
        count += 1;
    }
    
    return count;
}