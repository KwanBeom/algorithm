const addZero = (num) => num < 10 ? `0${num}` : num.toString();

const toTimeString = (time) => time.map(addZero).join(':');

const addTime = (t, m) => {
    const res = [t[0], t[1]];
    const min = t[1] + m;

    if(min >= 60) {
        res[0] += Math.floor(min / 60);
        res[1] = min % 60;
    } else {
        res[1] = min;
    }
    
    return res;
}

const minusTime = (t, m) => {
    const res = [t[0], t[1]].map(Number);
    const min = t[1] - m;

    if(min < 0) {
        res[0] += Math.floor(min / 60);
        res[1] = 60 + min;
    } else {
        res[1] = min;
    }
    
    return res;
} 

// 1. 1분 간격 1회 도착, 5명 탑승 가능 -> 09:00에 탑승 가능한 인원이 1명 남기 때문에 09:00 반환

// 2. 10분 간격 2회 도착, 2명 탑승 가능 -> 09:00에 도착하는 셔틀은 08:00 도착 인원만 1명만 탑승 가능
// 09:10 도착 셔틀 -> 09:09, 09:10에 도착하는 인원이 있음 -> 09:10에 도착하는 크루보다 1분 빠르게 09:09분에 도착

// 3. 1분 간격 2회 도착, 2명 탑승 가능 -> 버스에 탈 수 있는 최대 인원이 4명인데, 4명의 크루가 모두 09시에 도착하기 때문에 그보다 1분 일찍 도착한 08:59

// 4. 09시에 1대 도착, 5명 탑승 가능 -> 버스에 탈 수 있는 최대 인원이 5명인데, 5명의 크루가 모두 00:01에 도착하기 때문에 그보다 1분 일찍 도착한 00:00

// 5. 09시에 1대 도착, 1명 탑승 가능 -> 막차가 떠난 이후에 크루 1명이 도착하기 때문에 09시에 도착

// 6. 09시부터 1시간 간격으로 10대 도착 -> 그치만 막차가 떠난 이후 크루들만 있으니까 걍 막차타면 됨


function solution(n, t, m, timetable) {
    const time = [9, 0];
    const lastCar = toTimeString(addTime(time, t * n - t));
    
    // 정렬
    timetable.sort();
    // 막차보다 늦게 오는 크루 필터링
    timetable = timetable.filter((crueTime) => crueTime <= lastCar);
    
    if(timetable.length === 0) {
        return lastCar;
    }
    
    if(timetable.length > 0) {
        for(let i=1; i<=n; i+=1) {
            // 첫차 이후에 시간 추가
            if(i > 1) {
                [time[0], time[1]] = [...addTime(time, t)];    
            }

            const now = toTimeString(time);
            const isLastCar = lastCar === toTimeString(time);
            let possible = m;
            
            for(let j=0; j<m; j++) {
                console.log(i, j);
                // 크루가 버스보다 일찍 도착한 경우에 탑승 처리
                if(now >= timetable[0]) {
                    const prevCrue = timetable.shift();
                    possible -= 1;
                    
                    // 마지막으로 탑승하는 크루보다 1분 일찍 도착
                    if(isLastCar && possible === 0) {
                        const answer = minusTime(prevCrue.split(':'), 1);
                        return toTimeString(answer);
                    }
                }
            }
        }
    }
    
    return toTimeString(time);
}