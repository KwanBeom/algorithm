function solution(rank, attendance) {
    const arr = rank.map((rank,index) => attendance[index] ? {rank,index} : '').filter(v => v !== '').sort((a,b) => a.rank - b.rank)
    

    return 10000 * arr[0].index + 100 * arr[1].index + arr[2].index
}