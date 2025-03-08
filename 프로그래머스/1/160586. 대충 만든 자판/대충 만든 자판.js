function algo(keymap, target) {
    let result = -1;
    for(let i=0; i<keymap.length; i++) {
        for(let j=0; j<keymap[i].length; j++) {
            if(target == keymap[i][j]) {
                if(result >= 0 && result <= j) continue;
                result = j+1;
            }
        }
    }
    return result;
}

function solution(keymap, targets) {
    return targets.map((target,idx) => {
        let flag = true;
        const sum = target.split("").reduce((acc, cur) => {
            const cnt = algo(keymap, cur);
            if(cnt == -1) {
                flag = false;
            }
            return acc + cnt;
        }, 0);
        return flag ? sum : -1;
    })
}