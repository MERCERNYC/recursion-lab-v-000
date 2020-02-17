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
      return true;
    }else if(str[0] !== str[str.length-1]){
      return false;
    }
      return isPalindrome(str.slice(1,-1));
  }
  