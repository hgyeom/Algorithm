function solution(n, arr1, arr2) {
    let answer = [];
    //arr1을 2진수로 변경, 자릿수가 n과 맞지 않을경우 n이 될때까지 앞에서부터 0을 채워준다
    for(let i = 0; i < n; i++){
        arr1[i] = arr1[i].toString(2).padStart(n,0)
    }
    //arr2를 2진수로 변경, 자릿수가 n과 맞지 않을경우 n이 될때까지 앞에서부터 0을 채워준다
    for(let i = 0; i < n; i++){
        arr2[i] = arr2[i].toString(2).padStart(n,0)
    }
    
    //for문으로 2진수를 #과 공백으로 변경한다. 
    for(let i = 0; i < n; i++){
        let temp ='';
        for(let j = 0; j < n; j++){
            if(arr1[i][j] == 1 || arr2[i][j] == 1){
                temp += '#'
            }else{
                temp += ' '
            }
            console.log('2중 내부 : ',temp)
        }
        console.log('2중 탈출 : ',temp)
        answer.push(temp)
    }
    console.log('answer : ',answer)
    return answer;
}