function solution(babbling) {
    const able = ['aya', 'ye', 'woo', 'ma'];
    
    return babbling.reduce((acc, cur, idx) => {
        for(let babble of able) {
            if(cur.includes(babble.repeat(2))) return acc;
        }
        
        for(let babble of able) {
            cur = cur.replaceAll(babble, ' ');
        }

        return acc + (cur.trim() === '');
    }, 0)
}