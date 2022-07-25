/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

function validatePIN (pin) {
    let regex4 = /\d{4}/g
    let regex6 = /\d{6}/g
    
    
    if(pin.length === 4){
      console.log(regex4.test(pin))
      return regex4.test(pin) ? true : false
    }else if(pin.length === 6){
      console.log(regex6.test(pin))
      return regex6.test(pin) ? true : false
    }else{
      console.log(false)
      return false
    }
    
  }
  
  validatePIN("0106")