function subsum(arr,firstIdx,secondIdx) {
    if (arr.length===0) {
        return 0;
    }
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (firstIdx<0) {
        firstIdx=0;
    }
    if (secondIdx>=arr.length) {
        secondIdx=arr.length-1;
    }
    let subArr =arr.slice(firstIdx,secondIdx+1);
    if (!subArr.every(Number)) {
        return NaN;
    }
   
    return    subArr
               .map(Number)
               .reduce((a,b)=>a+b);
}
console.log(subsum([10, 'twenty', 30, 40], 0, 2));