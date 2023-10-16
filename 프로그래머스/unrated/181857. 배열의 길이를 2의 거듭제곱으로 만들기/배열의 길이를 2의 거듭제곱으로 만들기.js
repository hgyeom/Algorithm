function solution(arr) {
    let i = 0;
    while(Math.pow(2,i) < arr.length){
        i++;
    }
    for(let j = 0; Math.pow(2,i) - arr.length; j++){
        arr.push(0)
    }
    return arr;
}