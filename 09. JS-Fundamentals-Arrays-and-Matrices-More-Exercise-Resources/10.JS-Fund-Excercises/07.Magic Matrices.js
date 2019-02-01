function magicMatrix(matrix) {
let rowSum = 0;

for (let row = 0; row < matrix.length; row++) {
    let currRowSum = 0 ;
    for (let col = 0; col < matrix[row].length; col++) {
        currRowSum += matrix[row][col];
        console.log(matrix[row][col]);
        
    }
    if (row==0) {
        rowSum=currRowSum;
    }else if(rowSum!==currRowSum){
        return false;
    }
    
}

for (let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        colSum+=matrix[row][col];
        
    }
    if (colSum!=rowSum) {
        return false;
    }
}
return true;

}
console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]   
   ));