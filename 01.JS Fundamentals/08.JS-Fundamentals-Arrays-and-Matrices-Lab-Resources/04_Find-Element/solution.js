function solve() {
  let inputNumText = parseInt(document.getElementById('num').value);
  let inputArrText = document.getElementById('arr').value;
  let arr = JSON.parse(inputArrText);
  let resultArr = [];
  console.log(arr);
  for (const element of arr) {  
      let hasValue = element.includes(inputNumText); 
       let index = element.indexOf(inputNumText);
       resultArr.push(`${hasValue} -> ${index}`);
  }
  let res = document.getElementById('result');
  res.innerHTML = resultArr.join(',');
}