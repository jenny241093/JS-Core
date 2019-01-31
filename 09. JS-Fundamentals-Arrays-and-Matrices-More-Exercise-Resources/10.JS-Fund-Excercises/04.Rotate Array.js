function rotateArray(array) {
    
    let rotations = array[array.length-1];
    array.pop();
    let result = '';
   for (let i = 0; i <rotations; i++) {
       const lastElement = array[array.length-1];
       array.pop();
       array.unshift(lastElement);
      
   }
   result = array.join(' ');
   return result;
}
console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
))