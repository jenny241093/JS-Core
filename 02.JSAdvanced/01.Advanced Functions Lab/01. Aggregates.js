function aggregate(arr) {
    
    let sum = arr.reduce((a,b)=>a+b);
    console.log('Sum = ',sum);
    let min = arr.reduce((a,b)=>Math.min(a,b));
    console.log('Min = ',min);
    let max = arr.reduce((a,b)=>Math.max(a,b));
    console.log('Max = ',max);
    let product = arr.reduce((a,b)=>a*b);
    console.log('Product = ',product);
    let join = arr.reduce((a,b)=>''+a+b);
    console.log('Join = ',join);
}
aggregate([2, 3, 10, 5]);