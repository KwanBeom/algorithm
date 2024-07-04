// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(line);		
	}
	
	rl.close();
	
	const [n, m] = input[0].split(' ');
	const k = input[1].split(' ');
	const home = Array.from({length: n}, (_, i) => Number(k[i]));
	const map = input.slice(2);
	const queue = [];
	
	for(let i=0; i<m; i++) {
		const [start,end] = map[i].split(' ');
		
		queue.push([start,end]);
		
		for(let j=start-1; j<end; j++) {
			home[j] += 1;
		}
		
		// 배수 시스템
		if((i + 1) % 3 === 0) {
			const visited = Array.from({length: n}, () => false);
			for(let k=0; k<3; k++) {
				const [s, e] = queue.shift();
				
					for(let n=s-1; n<e; n++) {
						if(visited[n] === false) {
							visited[n] = true;
							home[n] -= 1;
						}
					}
			}
		}
	}
	
	console.log(home.join(' '));
	
	process.exit();
})();

// 1번 집부터 N번 집까지 총 N개의 집이 순서대로 세워져있음
// i번째 집의 땅 높이는 ki
// 땅 높이의 기준은 해수면이기 때문에 낮은 위치에 집이 있다면 높이가 음수일 수도 있다.

// 장마가 시작되면 M일동안 멈추지 않고 비가 옴

// 장마 i일이 되는 날에는 si번 집부터 ei번 집 위치까지 비가 내림
// 어떤 집에 비가 내리면 그 집에 쌓인 물 높이가 1 증가


// 장마가 시작된지 3의 배수가 되는 날마다 물이 빠짐
// 작동 날짜를 기준으로 2일 이내 비가 내린 위치에ㅓ서만 작동
