function createKeymapMap(keymap) {
    const keymapMap = new Map();
    
    keymap.forEach((keys, index) => {
        keys.split("").forEach((char, idx) => {
            if (!keymapMap.has(char) || keymapMap.get(char) > idx + 1) {
                keymapMap.set(char, idx + 1);
            }
        });
    });

    return keymapMap;
}

function solution(keymap, targets) {
    const keymapMap = createKeymapMap(keymap);
    
    return targets.map(target => {
        let sum = 0;
        
        for (let char of target) {
            if (!keymapMap.has(char)) return -1;  // 찾을 수 없는 문자면 바로 -1 리턴
            sum += keymapMap.get(char);
        }
        
        return sum;
    });
}