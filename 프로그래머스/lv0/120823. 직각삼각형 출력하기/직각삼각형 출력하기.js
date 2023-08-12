const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = ''
    let str = '*'
    for(let i=0; i<Number(input[0]); i++){
        result += str
        result += '\n'
        str+="*"
    }
    console.log(result);    
    
});