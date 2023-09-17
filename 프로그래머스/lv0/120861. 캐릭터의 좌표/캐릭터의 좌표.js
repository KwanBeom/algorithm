function solution(keyinput, board) {
    const answer = [0,0]
    const xMax = (board[0] - 1) / 2;
    const yMax = (board[1] - 1) / 2;
    
    for(let v of keyinput){
        const [xPos, yPos] = answer;

        switch(v){
            case "right":
                if(xPos !== xMax) answer[0]++;
                break;
            case "left":
                if(xPos !== -xMax) answer[0]--;
                break;
            case "down":
                if(yPos !== -yMax) answer[1]--;
                break;
            case "up":
                if(yPos !== yMax) answer[1]++;
                break;
        }
    }
    return answer;
}