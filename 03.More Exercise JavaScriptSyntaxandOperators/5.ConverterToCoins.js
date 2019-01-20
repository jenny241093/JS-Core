function amountToCoins(num, arr) {
    
   arr = sortCoins(arr);
   function sortCoins(coinValues) {
   
    coinValues.sort((a, b) => a - b)
   return coinValues.reverse();
   
}
var res = [];
  
for (var i = 0; i < arr.length; i++) {
  while (num >= arr[i]) {
    num -= arr[i];
    res.push(arr[i]);
  }
}

return res.join(", ");

  }

console.log(amountToCoins(123, [5, 50, 2, 1, 10]));


