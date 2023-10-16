function solution(s) {
    return [...s].map((val, idx) => {
        if(s.indexOf(val) !== idx) {
            let index = 0;
            for(let i=idx-1; i>=0; i--){
                index++;
                if(val === s[i]) break;
            }
            return index;
        } else {
            return -1;
        }
    });
}