
function solution(babbling) {
    const reg = /aya|ye|woo|ma/g;
    
    return babbling.map(word => word.replaceAll(reg, "")).filter(v => v === "").length;
}
