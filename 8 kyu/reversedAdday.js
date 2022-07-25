/*

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

function digitize(n) {
    let reversed = n.toString().split("").reverse().map(Number)
    console.log(reversed)
    return reversed
  }
  digitize(35231)