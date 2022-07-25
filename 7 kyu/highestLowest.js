/*

In this little assignment you are given a string of 
space separated numbers, and have to return the highest 
and lowest number.

 */

function highAndLow(numbers){
    let splitted = numbers.split(" ").sort((a,b) => b - a)
    let higher = splitted[0]
    let lower = splitted.slice(-1)[0]
    let result = higher + " " + lower
    
    console.log(result)
    return result
  }
  
  highAndLow("1 2 3 4 5")