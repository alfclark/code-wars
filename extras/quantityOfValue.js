/*

Find the amount of times a value is in a string.
Where countValue(string, value)

*/

function countValue(str, val) {
    let ans = str.toLowerCase().split("").filter(v => v === val).length
    console.log(ans)
  }
  
  countValue("aaaaaAAassssssSsdDdddddeeeeEgGhHHHHhhhhhhnnnn","g")