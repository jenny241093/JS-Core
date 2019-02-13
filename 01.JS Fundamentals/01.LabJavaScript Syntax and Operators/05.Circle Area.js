function circleArea(input) {
    let varType = typeof(input);
    if (varType==='number') {
        return (Math.pow(input,2)*Math.PI).toFixed(2);
    }
    else {
        return `We can not calculate the circle area, because we receive a ${varType}.`
    }
}
console.log(circleArea(5));