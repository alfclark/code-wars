/*

Find if a given word is inside a string

*/

function countValue(str, val) {
    let ans = str.toLowerCase().split(" ").filter(v => v === val).length
    console.log(ans)
  }
  
  countValue("This is a string and this is not a drill","is")