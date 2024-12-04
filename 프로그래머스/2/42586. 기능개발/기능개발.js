// function solution(progresses, speeds) {
//     const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//     const result = [0]; 
//     let maxDay = days[0];

//     for (let i = 1, pointer = 0; i < days.length; i++) { 
//         if (days[i] <= maxDay) {
//             result[pointer] += 1; 
//         } else {
//             result[++pointer] = 1; 
//             maxDay = days[pointer];
//         }
//     }

//     return result;
// }

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}