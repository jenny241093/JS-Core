function solve(arr) {

    let matrix = [];
    for (let row = 0; row < arr.length; row++) {
        matrix[row] = [];
        let tokens = arr[row].split(' ').map(Number);
        for (let col = 0; col < tokens.length; col++) {
            matrix[row][col] = tokens[col];
        }
    }
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                leftDiagSum += matrix[row][col];
            }
            if (row + col === matrix[row].length - 1) {
                rightDiagSum += matrix[row][col];
            }
        }
    }
    if (leftDiagSum === rightDiagSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row == col) {
                    continue;
                }
                if (row + col === matrix[row].length - 1) {
                    continue;
                }
                matrix[row][col] = leftDiagSum;
            }
        }
    }
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);