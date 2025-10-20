function solution(strArr) {
    let arr = new Array(31).fill(0);
    strArr.map(str => arr[str.length]++)

    return Math.max(...arr);
}