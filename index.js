const { expect } = require("chai")

function isPalindrome(abba) {
  if(abba === abba){
    return true
  }else{    
    return false
  }

  if(racecar === racecar) {
    return true
  }else {
    return false
  }

  if(robot === robot) {
    return false
  }else {
    return true
  }
  if(ab === ba) {
    return false
  }else {
    return true
  }
  // Write your algorithm here
    //reverse the input string
    //if input is the same as reversed input 
  //   if(word === reversedWord) {
  //     return true
  //   }else {
  //     return false
  //   }
    
  // }

  describe("isPalindrome", () => {
    it("returns true for 'abba'", () => {
      expect(isPalindrome("abba")).to.be.true;
    });
    it("return true for 'racecar'", () => {
      expect(isPalindrome("racecar")).to.be.true;
    });

    it("return true for 'a'", () => {
      expect(isPalindrome("a")).to.be.true;
    });

    it("returns false for 'robot'",).to.be.false;
  });

  it("returns false for 'ab'", ()=> {
    expect(isPalindrome("ab")).to.be.false;
  });
  
}

/* 
  Add your pseudocode here

  that means if the word is the same as the wrd in reverse i should return true
   reverse the input string
   if the input is the same as the reversed input 
   return true
   else
   return false
*/

/*
  Add written explanation of your solution here

  Write a function that returns true if a word is a palindrome and false if not
  That means if a word is the same as word in reverse, i should return true.

  mom === mom
  abc === cba

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
