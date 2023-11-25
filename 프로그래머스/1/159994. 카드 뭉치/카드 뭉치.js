function solution(cards1, cards2, goal) {
    let str = [];
    goal.forEach((v) => {
        if(cards1[0] === v) str.push(cards1.shift());
        if(cards2[0] === v) str.push(cards2.shift());
    })

    return str.toString() === goal.toString() ? 'Yes' : 'No'
}

 