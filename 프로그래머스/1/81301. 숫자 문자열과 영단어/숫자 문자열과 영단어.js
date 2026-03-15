function solution(s) {
    const nums = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    nums.forEach((word, i) => {
        s = s.replaceAll(word, i);
    });
    
    
    
    return Number(s);
}