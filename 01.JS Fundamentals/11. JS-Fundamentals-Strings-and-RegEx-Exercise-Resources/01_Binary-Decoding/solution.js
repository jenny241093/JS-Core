function solve() {
  let inputText = document.getElementById('str').value;
  let resutElem = document.getElementById('result');
   let onesSum = findOnesSum(inputText);
   
   let end = inputText.length - onesSum;
   let result = inputText.slice(onesSum,end);
  
   let pattern = /[A-Za-z ]+/g;
    let parts  = result.split(/([\d]{8})/)
    .map((x)=>binaryToString(x))
    .filter((c)=>pattern.test(c))
    .join('');
   
    resutElem.textContent = parts;
   function findOnesSum(value) {
    let result = value;
    while (result.length > 1) {
      let temp = result
        .split('')
        .reduce((a, b) => +a + +b)
        .toString();
      result = temp;
    }
    return +result;
  }
   function binaryToString(element) {
    let decimal = parseInt(element, 2);
    return String.fromCharCode(decimal);
  }
}
