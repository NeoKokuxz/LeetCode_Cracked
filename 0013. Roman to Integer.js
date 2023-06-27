/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // if prev < current = total = total - prev + ( current - prev)
    // if prev > current = total = total + prev
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    let prev = 0;
    let total = 0;
    for( x in s) {
        let current = map.get(s[x]);
        if(current > prev) {
            total = total - prev + (current - prev)
        } else {
            total += current;
        }
        prev = current;
    }

    return total
};
