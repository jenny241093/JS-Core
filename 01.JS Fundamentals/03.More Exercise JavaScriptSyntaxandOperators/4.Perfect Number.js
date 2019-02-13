function perfectNumber(array) {
    let perfectNumber = [];
    let divisors = [];
for (let i = 0; i < array.length; i++) {
    divisors = [];
    const element = +array[i];
    if (element>0) {
        getDivisorsCnt(element);
       if (sumOfDivisors(divisors)==element&&halfSumOfDivisors(element,divisors)==element) {
        perfectNumber.push(element);
       } 
    }
   
}
if (perfectNumber.length>0) {
    console.log(perfectNumber.join(', '));
}
else{
    console.log('No perfect number');
}

    function getDivisorsCnt(n){
        for (let i=1;i<=n;i++) {
            if (n%i==0) 
            divisors.push(i);
        }
    }
    function sumOfDivisors(divisors) {
        let sum = 0;
        for (let i = 0; i < divisors.length-1; i++) {
            const element = +divisors[i];
            sum+= +element;
        }
        return +sum;

    }
    function halfSumOfDivisors(num,divisors) {
        let sum = 0;
        for (let i = 0; i < divisors.length; i++) {
            const element = divisors[i];
            sum+=element;
        }
        return sum = sum/2;
    }
    
}
perfectNumber([5, 32, 82]);