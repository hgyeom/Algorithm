function solution(s) {
    let a = s.split(' ')
    return Math.min(...a) + ' ' + Math.max(...a);
}