// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  //using REGEX to find global characters that are UPPERCASE and replace them with the same character + a space
    let camelCase = string.replace(/([A-Z])/g,(el)=>` ${el}`)
    
  return camelCase
}
solution('camelCasing')