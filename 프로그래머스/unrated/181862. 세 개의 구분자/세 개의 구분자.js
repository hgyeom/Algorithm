function solution(myStr) {
    let answer = myStr.split('a').join(';').split('b').join(';').split('c').join(';').split(';').filter((item) => item.length!==0)
    return answer.length ? answer : ["EMPTY"];
}