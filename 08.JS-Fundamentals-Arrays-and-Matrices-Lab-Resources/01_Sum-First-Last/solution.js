function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  console.log('arr'+arr);
  
  let arrLenght  = arr.length;
  console.log('lenght',arrLenght);
  
  let result = document.getElementById('result');
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    sum = +arrLenght * +element;
    let p = document.createElement('p');
    p.textContent = `${i} -> ${sum}`;
    result.appendChild(p);
  }

}