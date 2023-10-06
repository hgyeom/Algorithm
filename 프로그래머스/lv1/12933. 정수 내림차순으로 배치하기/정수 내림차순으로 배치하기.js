function solution(n) {
    return [...String(n)].sort().reverse().join('') * 1;
}