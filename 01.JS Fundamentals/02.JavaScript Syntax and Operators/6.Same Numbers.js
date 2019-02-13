
function areAllDigitsTheSame(number) {
    let areTheSame = "false";
   
    if (/^\D*(\d)(?:\D*|\1)*$/.test(number)) {
        areTheSame = "true";
      
    }
    let str = number.toString(); 
    let sum = +str[0];
    for (let index = 1; index <str.length; index++) {
        sum += +str[index];  
    
    }
    console.log(areTheSame);
    console.log(sum);   
}
console.log(areAllDigitsTheSame(1234));