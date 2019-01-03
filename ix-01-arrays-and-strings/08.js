function zeroRowAndColumns(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    // Marking zeros
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = null;
                matrix[i][0] = null;
            }
        }
    }

    // Zeroing rows and cols
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] === null) {
            for (let k = 0; k < m; k++) {
                matrix[i][k] = 0;
            }
        }
    }
    for (let j = 0; j < m; j++) {
        if (matrix[0][j] === null) {
            for (let k = 0; k < n; k++) {
                matrix[k][j] = 0;
            }
        }
    }

    return matrix;
}

console.log(zeroRowAndColumns([[1, 2, 3], [4, 0, 6], [7, 8, 9]]).join('\n'));
console.log(zeroRowAndColumns([[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 1, 2]]).join('\n'));