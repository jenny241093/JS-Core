function calorieObj(arr) {
 
    let sentence = '{';
for (let index = 0; index < arr.length; index++) {
   if (index%2==0) {
      sentence+=' '+arr[index]+':'; 
   }
   else{
    if (index == arr.length-1) {
        sentence+=' '+arr[index]
    }else{
        sentence+=' '+arr[index]+',';

    }
   }
}
console.log(sentence+' }')
}
calorieObj(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])