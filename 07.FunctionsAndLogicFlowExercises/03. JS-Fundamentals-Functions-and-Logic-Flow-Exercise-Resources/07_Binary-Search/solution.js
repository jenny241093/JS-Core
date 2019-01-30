function binarySearch() {
    let str = document.getElementById('arr').value;
    let numberTofind = document.getElementById('num').value;
    let arr = str.split(', ');
    let result = document.getElementById('result');
if (arr.includes(numberTofind)) {
    let index = arr.indexOf(numberTofind);
    result.textContent = `Found ${numberTofind} at index ${index}`;
}
else{
    result.textContent = `${numberTofind} is not in the array`;
}

}