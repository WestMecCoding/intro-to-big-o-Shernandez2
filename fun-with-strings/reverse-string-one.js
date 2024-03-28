
//create a name function that takes an argument 'str'
let str = "hello world"
//in the function reverse 'str'
//return 'str'
//outside of the function log the function and pass some string 

function reverseString(someStr){
   someStr = someStr.split('').reverse().join('');
    return someStr;
    
}
 
console.log(reverseString("fortnite"))