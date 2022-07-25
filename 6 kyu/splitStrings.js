/*

Complete the solution so that it splits the string into pairs 
of two characters. If the string contains an odd number of 
characters then it should replace the missing second character 
of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
    let ans= []
    let i = 0
    
    if(str.length % 2 != 0){
      str+= "_"
    }
   while(i < str.length){
     ans.push(str[i] + str[i+1])
     i += 2
   }
   return ans
 }
 
 solution("abcde")