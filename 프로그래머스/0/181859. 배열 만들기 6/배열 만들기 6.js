function solution(arr) {
    var answer = [];
    // arr = 0 || 1
    // arr로 새로운 배열 stk
    // i = 0; i < arr.length
    // if stk.length == 0 stk.push(arr[i]); i++
    // stk.length != 0 && stk.at(-1) == arr[i] stk.pop  i++
    // stk.length != 0 && stk.at(-1) != arr[i] stk.push(arr[i]) i++
    // return stk
    
    let i = 0;
    let stk = [];
    while(i < arr.length){
        if(stk.length == 0){
            stk.push(arr[i])
            i++
        }else if(stk.at(-1) == arr[i]){
            stk.pop()
            i++
        }else if(stk.at(-1) != arr[i]){
            stk.push(arr[i])
            i++
        }
    }
     
    
    return stk.length == 0 ? [-1] : stk;
}