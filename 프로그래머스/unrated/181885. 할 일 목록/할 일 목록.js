function solution(todo_list, finished) { 
    return todo_list.filter((v,idx) => {
        if(finished[idx] === false) return v
    })
}