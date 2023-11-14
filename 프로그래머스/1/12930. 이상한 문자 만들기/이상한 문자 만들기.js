// function solution(s) {
//     const changeLetterCase = (item,index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    
//     return s.split(' ').map(item => item.split('').map((item,index) => changeLetterCase(item,index)).join('')).join(' ')
    
// }


function solution(s) {
    const changeLetterCase = (item, index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    return s.split(' ').map(word => word.split('').map(changeLetterCase).join('')).join(' ');
}