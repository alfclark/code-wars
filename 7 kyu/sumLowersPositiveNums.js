/*

Create a function that returns the sum of the two lowest 
positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

*/

function sumTwoSmallestNumbers(numbers) {  
    let ordered = numbers.sort((a,b) => a-b)
    let sum = ordered[0] + ordered[1]
    return sum
}


sumTwoSmallestNumbers([5, 8, 12, 19, 22])