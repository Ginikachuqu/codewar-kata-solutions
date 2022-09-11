// Task
// Complete the solution so that it splits the string into pairs of two
// characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Solution
function solution(str){
    return str.length % 2 == 0 ? str.match(/.{1,2}/g) || [] : str.concat('_').match(/.{1,2}/g) || []    
}