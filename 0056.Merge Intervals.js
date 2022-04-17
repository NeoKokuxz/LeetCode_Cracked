/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]); //Sort first
    let res = [intervals[0]]; //Initial first interval

    for(let i = 1; i < intervals.length; i++) {
        //Keep track of start and end of current
        let start = intervals[i][0];
        let end = intervals[i][1];
                
        //Compare with previous end 
        //Greater means the previous ended before current
        if(start > res[res.length-1][1]) {
            res.push(intervals[i]);
        } else {
            //Less than means merge previous end with current end
            res[res.length-1][1] = Math.max(res[res.length-1][1], end);
        }
    }
    return res;
};
