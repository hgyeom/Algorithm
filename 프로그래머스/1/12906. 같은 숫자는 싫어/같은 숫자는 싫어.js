function solution(arr){
    // return arr.filter((num,index) => num!==arr[index+1])
   const stack = []

    for(const v of arr){
        if(stack[stack.length-1] !== v){
            stack.push(v)
        }
    }
    
    return stack
}