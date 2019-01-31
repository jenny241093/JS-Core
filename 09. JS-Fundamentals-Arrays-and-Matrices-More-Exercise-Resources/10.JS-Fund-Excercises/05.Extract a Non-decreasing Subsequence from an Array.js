function extract(arr) {
 
    arr = arr.map(Number);
    let result = [arr[0]];
    let biggestNumber = [arr[0]];
 
    for (let i = 1; i < arr.length; i++) {
 
        let currentNumber =arr[i];
 
        if (currentNumber >= biggestNumber) {
            result.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }
 
    return(result.join('\n'));
}extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )