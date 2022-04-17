/**
 * @param {string} s
 * @return {number}
 */

// #1
var lengthOfLongestSubstring = function(s) {
    if(s === null || s === '') {
        return 0;
    } else if(s.length === 1) {
        return 1;
    }
    
    let longest = new Set();
    let left = 0;
    let maxLength = 0;
    for(let i = 0; i < s.length; i++) {
        while(longest.has(s[i])) {
            longest.delete(s[left]);
            left++;
        }
        longest.add(s[i]);
        maxLength = Math.max(maxLength, longest.size);
    }
    return maxLength;
};

// #2
var lengthOfLongestSubstring = function(s) {
    if(s === null || s === '') {
        return 0;
    } else if(s.length === 1) {
        return 1;
    }
    
    let longest = new Set();
    let length = 1;

    for(let left = 0; left < s.length; left++) {
        //Compare Left and right first
        let right = left + 1;
        longest.add(s.charAt(left));
        let count = 1;
        while(!longest.has(s.charAt(right)) && s.charAt(right) !== '' ) {
            longest.add(s[right]);
            count++;
            right++;
        }
        
        if(count > length) {
            length = count;
        }
        longest.clear();
    }
    return length;
};

