// Write your algorithm here
function reversed(word) {
  const wordArray = word.split("");
  const reversedArray = wordArray.reverse();
  const reversedWord = reversedArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  let reversedWord = reversed(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("hey"));

/* 
  function needs to return true if the reversed string is equall to the original string.
*/

/*
  isPalindrome takes in a word which is reversed by the function reversed(word) then a if statement is used to output true if the value is 
  is equal to the original or false if its not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: ih");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: tobor");
  console.log("=>", reverseString("robot"));

  console.log("");

  console.log("Expecting: mom");
  console.log("=>", reverseString("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
