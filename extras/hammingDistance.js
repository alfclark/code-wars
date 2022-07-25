/*

Find the Hamming Distance.
TRANSLATION: Find how many values on string are different to the other in a certain position.

*/

function hammingDistance(val1, val2) {
    let distance= 0
    if(val1.length === val2.length){
      for(i = 0; i < val1.length; i++){
        if(val1[i] != val2[i]){
          distance++
        }
      }
      console.log(`Distance: ${distance}`)
    }else{
      console.log("Values don't have the same length. Distance: 0")
      return 0
    }
  }
  
  hammingDistance("hello","hallo")