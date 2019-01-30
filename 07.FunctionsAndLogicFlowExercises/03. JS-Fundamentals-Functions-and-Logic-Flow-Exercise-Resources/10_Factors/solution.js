function solve() {
   let num = document.getElementById('num').value;

   var half = Math.floor(num / 2), // Ensures a whole number <= num.
       str = '1', // 1 will be a part of every solution.
       i, j;

   // Determine our increment value for the loop and starting point.
   num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

   for (i; i <= half; i += j) {
       num % i === 0 ? str += ' ' + i : false;
   }

   str += ' ' + num; // Always include the original number.
   let result = document.getElementById('result');
   result.textContent = str;

}
