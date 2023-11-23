function solution(new_id) {
    const id = new_id.toLowerCase()
    .replaceAll(/[^\w|\-|\.]/g, '')
    .replaceAll(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '')
    
    return id.length < 3 ? id + id[id.length-1].repeat(3 - id.length) : id;
}