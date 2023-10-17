function solution(food) {
    const arr = food.map((v,i) => i.toString().repeat(Math.floor(v/2)));
    return arr.join("") + '0' + arr.reverse().join("");
}