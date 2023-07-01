/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let i = 0;
    let j = 0;
    let res = []
    while(matrix.length > 0) {
        while( j < matrix[0].length) {
            res.push(matrix[i][j])
            matrix.shift();
            j+= 1;
        }
    }
    //Condition check if J is out of bound
    if(j >= matrix[0].count - 1) {
        matrix = rotate(matrix)
        j = 0
    }
};

var rotate = function(matrix) {
    let matrixCount = matrix[0].length;
    let newI = matrix.length;

    let j = martix[0].length - 1;
    let i = 0

    let rotated = []

    while (j >= 0 ) {
        // Loop through i 
        // [4,5, 6] [7,8,9] => 2 i's sub-arrays and 3 J's
        let newArr = []
        if(j >= 0 && i < matrix[0].length ) {
            //Add i0 and i1 with J to the new array
            newArr = [matrix[i][j]]
            i+=1;
        } else {
            i = 0;
            j -= 1;
            rotated.push(newArr)
        }
       return roated;
    }
}
