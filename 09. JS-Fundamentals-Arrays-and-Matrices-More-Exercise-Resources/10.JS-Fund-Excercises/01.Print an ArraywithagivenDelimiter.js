function printWithDelimiter(array) {
   let convertedArr = '';
    let delimiter = array[array.length-1];
    array.pop();
  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (i!=array.length-1) {
        convertedArr+=element+delimiter;
      }
      else{
        convertedArr+=element;
      } 
  }
  return convertedArr;
}
printWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
