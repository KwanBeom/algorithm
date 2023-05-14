function solution(str_list, ex) {
    var answer = '';
    return str_list.map(item => {
        return item.includes(ex) ? "" : item
    }).join("");
}