/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.sort();
    let firstWord = strs[0];
    let lastWord = strs[strs.length - 1];
    let res = []
    for(let i = 0; i < firstWord.length; i++) {
        if(firstWord[i] == lastWord[i]) {
            res.push(firstWord[i])
        } else {
            break;
        }
    }
    return res.join("")
};
