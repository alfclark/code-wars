/*

print for every number multiple of 3 the word "fizz"
print for every number multiple of 5 the word "buzz"

print for every number multiple of both 3 & 5 the word "fizzbuzz"


*/

function fizzBuzz(num) {
    for(i=1;i<=num;i++){
      if(i%3===0 && i%5===0){
        console.log("fizzbuzz")
      }
      else if(i%3===0){
        console.log("fizz")
      }
      else if(i%5===0){
        console.log("buzz")
      }else{
        console.log(i)
      }
    }
  }
  
  fizzBuzz(100)