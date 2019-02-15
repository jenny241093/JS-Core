function findMaxElement(arr) {
    let max = Math.max.apply(Math, arr);
    return max;
}
console.log(findMaxElement([10, 20, 5]));