function solution(array, commands) {
    const answer = [];
    // commands = [[i,j,k],[i,j,k]]
    // commands를 반복하며 array에서 i > j만큼 자른 후 정렬, k번째를 return
    commands.forEach((item) => {
        const startNumber = item[0] - 1
        const endNumber = item[1]
        const index = item[2] - 1
        const number = array.slice(startNumber, endNumber).sort((a,b) => a-b)[index]
        answer.push(number)
    })
    
    return answer;
}