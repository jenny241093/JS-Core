function greatestCD() {

     let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let gsDiv=gcd(num1,num2);
    let span = document.getElementById('result');
    span.textContent = gsDiv;
     function gcd(a, b) {
        if ( ! b) {
            return a;
        }
    
        return gcd(b, a % b);
    }
  
}