function solution(dots) {
    console.log('가로 : ' +dots[0][0], dots[2][0])
    console.log('세로 : ' +dots[3][1], dots[2][1])
    return Math.abs((dots[3][1] - dots[2][1]) * (dots[0][0] - dots[2][0]))
}

// 