function solution(progresses, speeds) {
    const whenFinish = (progress, speed) => {
        let day = 0, per = progress;
        
        while(per < 100) {
            per += speed;
            day++;
        }
        return day;
    }
    
    const days = progresses.reduce((acc,cur,index) => {
        const d =  whenFinish(cur, speeds[index]);
        if(acc[acc.length - 1]?.[0] >= d) {
            const [tmpD, tmpI] = acc.pop();
            return [...acc, [tmpD, tmpI+1]];
        }
        
        return [...acc, [d,1]];
    }, []);
    
    return days.map((d) => d[1]);
}