/*

Build a pyramid-shaped tower given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]

*/

function towerBuilder(nFloors) {
    let star = ""
    let space = ""
    let pyramid = []
    
    for(i=1; i <= nFloors; i++){
      star = ("*").repeat((2*i) -1)
      space = (" ").repeat(nFloors-i)
      pyramid.push(space + star + space)
    }
    console.log(pyramid)
    return pyramid
  }
  
  towerBuilder(3)