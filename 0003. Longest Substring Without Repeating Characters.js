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

// 2023-06-21
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let maxSize = 0;
    let left = 0;

    for(let i = 0; i < s.length; i++ ) {
        // if duplicate we delete something from set until no repeat
        while(set.has(s[i])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[i])
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) {
        return 1;
    }
    let longest = '';
    let currentLongest = '';
    for(let i = 0; i < s.length; i++) {
        // Current Char as starting string
        for( let j = i; j < s.length; j++) {
            let currentChar = s.charAt(j);
             //Is it repeated in the currentLongest
            if(!currentLongest.includes(currentChar)) {
                currentLongest += currentChar;
            } else {
                // We found duplicate and compare the current longest with Longest
                if(currentLongest.length > longest.length) {
                    longest = currentLongest;
                }
                currentLongest = ''
                break;

            }
        }       
    }
    console.log(longest)
    return longest.length;
};

