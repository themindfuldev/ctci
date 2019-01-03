function rotateMatrix(matrix) {
    const n = matrix.length;
    const depth = Math.floor(n/2);
    for (let j = 0; j < depth; j++) {
        const start = j;
        const end = n-1-j;
        if (start < end) {
            for (let i = 0; i < end-start; i++) {
                const temp = matrix[start][start+i];
                matrix[start][start+i] = matrix[end-i][start];
                matrix[end-i][start] = matrix[end][end-i];
                matrix[end][end-i] = matrix[start+i][end];
                matrix[start+i][end] = temp;
            }
        }
    }

    return matrix;
}

console.log(rotateMatrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]).join('\n'));
console.log(rotateMatrix([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]]).join('\n'));
console.log(rotateMatrix([[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4], [5, 5, 5, 5, 5]]).join('\n'));