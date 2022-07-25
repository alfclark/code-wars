/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    let filter = arr.filter(a => a > 0)
    let sum = filter.reduce(function(a,b){return a+b}, 0);
    
    console.log(sum)
    return sum
  }
  
  positiveSum([1,2,3,4,5])