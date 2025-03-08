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
    const answer = [];
    
    for(let i=0; i<targets.length; i++) {
        let sum = 0;
        for(let j=0; j<targets[i].length; j++) {
            const target = targets[i][j];
            const count = algo(keymap, target);
            if(count == -1) {
                sum = -1;
                break;
            }
            sum += count;
        }
        answer.push(sum);
    }
    return answer;
}