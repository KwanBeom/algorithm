// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = await readline.createInterface({ input: process.stdin });
	
	let money = 0;
	
	for await (const line of rl) {
		const [type, value] = line.split(' ');
		
		if(type && value) {
			if(type === 'in') {
				money += Number(value);
			}
			
			if(type === 'out') {
				money -= Number(value);
			}
		}
		
		if(money < 0) {
			console.log('fail');
			return;
		}
	}
	
	console.log('success');
	
	process.exit();
})();
