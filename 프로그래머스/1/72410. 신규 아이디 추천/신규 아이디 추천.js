function solution(new_id) {
    const id = new_id.toLowerCase()
    .replace(/[^\w|\-|\.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '')
    
    return id.length < 3 ? id + id[id.length-1].repeat(3 - id.length) : id;
}