/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let leftBound = 0;
    let rightBound = 0;
    let res = [];
    const dictMap = new Map();
    for(let i = 0; i < s.length; i++) {
        dictMap.set(s[i], i);
    }
    
    for(let i = 0; i < s.length; i ++) {
        //Get current character's right boundry
        let currentRightMost = dictMap.get(s[i]);
        rightBound = Math.max(currentRightMost, rightBound); 
        //check if we still inside the boundry or extend to new boundry
        if( i === rightBound ) {
            res.push(rightBound - leftBound + 1);
            leftBound = i + 1;
        }
    }
    return res;
};
