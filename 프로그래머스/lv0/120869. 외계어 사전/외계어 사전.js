function solution(spell, dic) {
    const sp = spell.sort().join('')
    for(s of dic){
        const str = s.split('').sort().join('');
        if(str.includes(sp)) return 1
    }
    return 2;
}