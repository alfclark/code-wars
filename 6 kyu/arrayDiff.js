/*

Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in 
list b keeping their order.

EX.
arrayDiff([1,2],[1]) == [2]

*/

function arrayDiff(a, b) {
    let array= a.filter(e => !b.includes(e))
    console.log(array)
    return array
  }
  
  arrayDiff([1,2,2], [1])