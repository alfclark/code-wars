/*

Given a number, rearrange in ascendant order and set even first, odds second

*/

function orderNum(num) {
    let arrayNum = num.toString().split("").map(el => parseInt(el))
    let odds = arrayNum.filter(el => el%2!=0).sort((a,b) => a-b)
    let evens = arrayNum.filter(el => el%2===0).sort((a,b) => a-b)
  
    let ans = evens.concat(odds).join("")
    
    console.log(ans)
  }

  
  orderNum(540613788)