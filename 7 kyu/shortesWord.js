/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let splitted = s.split(" ").sort((a,b) => a.length - b.length)
    let ans = splitted [0].length
    console.log(ans)
    return ans
  }
  
  findShort("bitcoin take over the world maybe who knows perhaps")