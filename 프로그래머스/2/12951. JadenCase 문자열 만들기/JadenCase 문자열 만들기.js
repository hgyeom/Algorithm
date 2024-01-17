function solution(s) {
    // let answer = ' ' + s.toLowerCase()
    // console.log(answer)
    // for(let i = 1; i <= answer.length; i++){
    //     if(answer[i-1] === " " && answer[i] !== ' '){
    //         answer = answer.replace(answer[i], answer[i].toUpperCase())
    //     }
    // }
    // return answer.replace(' ','');
    let answer = (' ' + s.toLowerCase()).split('')
    for(let i = 1; i <= answer.length; i++){
        if(answer[i] && answer[i-1] === ' ' && answer[i] !== ' '){
            answer[i] = answer[i].toUpperCase()
        }
    }
    return answer.join('').slice(1)
    // return s.split(' ').map((item) => item?item[0].toUpperCase() + item.slice(1).toLowerCase():'').join(' ')
}