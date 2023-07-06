/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString()  
  let i = 0;
  let j = str.length - 1;
  while(i < j) {
      if(str[i] !== str[j]) {
          return false;
      }
      i++;
      j--;
  }
  return true;
};

// Without convert to string: 
var isPalindrome = function(x) {
    let newNum = 0 //Store new number
    let temp = x //Get copy of x

    // While copy isn't empty
    while (temp > 0) {
      // Add last digit from copy to newNum
      newNum = newNum + temp % 10 
      // Move up by 1 for next 1s from copy
      newNum = newNum * 10
      temp = Math.floor(temp / 10)
    }
    return newNum / 10 == x
};
