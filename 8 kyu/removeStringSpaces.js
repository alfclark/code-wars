/*

Simple, remove the spaces from the string, then return the resultant string.

*/

function noSpace(x){
    let ans = x.replace(/ /g, "")
    console.log(ans)
    return ans
  }
  
  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')