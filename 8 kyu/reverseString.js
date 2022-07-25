/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/



function solution(str){
    let ans = str.split("").reverse().join("")
    console.log(ans)
    return ans
  }
  
  solution('world')