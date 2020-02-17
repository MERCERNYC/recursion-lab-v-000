// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  //recursive function to reverse a string

  function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }
  
  //recursive function to see if a word is a palindrome

  function isPalindrome(myString){
    str = myString.toLowerCase();
    if(str.length === 1){
      return true;//returns 'true' when a string is a palindrome
    }else if(str[0] !== str[str.length-1]){
      return false;//returns 'false' when a string is not a palindrome
    }
      return isPalindrome(str.slice(1,-1));//makes the proper recursive calls
  }
  
  function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }
  
  