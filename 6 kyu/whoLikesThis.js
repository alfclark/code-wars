/*

You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to 
create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of 
people that like an item. It must return the display text as shown in 
the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/


function likes(names) {
    var msg =""
    if(names.length > 0){
      if(names.length ===1){
        let people = names.toString().split(",").join(" and ")
        msg =`${people} likes this` 
      }else if(names.length === 2){
        let people = names.toString().split(",").join(" and ")
        msg =`${people} like this` 
      }else if(names.length === 3){
        let people = names.toString().split(",")
        msg = `${people[0]}, ${people[1]} and ${people[2]} like this` 
      }else if(names.length > 3){
        let people = names.toString().split(",")
        msg = `${people[0]}, ${people[1]} and ${people.length-2} others like this`
      }
    }
    else{
      msg ='no one likes this'
    }
    console.log(msg)
    return msg;
  }
  
  likes(['Alex', 'Jacob', 'Mark', 'Max'])


  // TERNIARY

  function likes(names) {
    let msg = ""
    names.length === 0 ? msg = "no one likes this" : msg
    names.length === 1 ? msg = `${names[0]} likes this` : msg
    names.length === 2 ? msg = `${names[0]} and ${names[1]} like this` : msg
    names.length === 3 ? msg = `${names[0]}, ${names[1]} and ${names[2]} like this` : msg
    names.length > 3 ? msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this` : msg
    
    
    console.log(msg)
    return msg
  }
  
  likes([])
  likes(['Peter'])
  likes(['Jacob', 'Alex'])
  likes(['Max', 'John', 'Mark'])
  likes(['Alex', 'Jacob', 'Mark', 'Max'])