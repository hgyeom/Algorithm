function solution(participant, completion) {
    const peoples = new Map();
    
    for(let i = 0; i < participant.length; i++){
        let part = participant[i];
        let comp = completion[i];
        
        // key값이 이미 있으면 가져오고, 없으면 0을 초기값으로 설정. 그 후 + 1
        peoples.set(part, (peoples.get(part) || 0) + 1);
        peoples.set(comp, (peoples.get(comp) || 0) + 1);
        
    }
    
    for( let [key, value] of peoples){
        if(value % 2 == 1 ) return key
    }
}