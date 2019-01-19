function sumOfNumbers(n,m) {
    let sum = 0;
    
    for (let index = Number(n); index <=Number(m); index++) {
        sum+=index;
    }
    return sum;
}
console.log(sumOfNumbers('1', '5' ));