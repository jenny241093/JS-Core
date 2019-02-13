function mathOperations(num1,num2,symbol) {
    switch(symbol) {
        case '+':
          return num1+num2;
          break;

          case '-':
          return num1-num2;
          break;

          case '*':
          return num1*num2;
          break;

          case '/':
          return num1/num2;
          break;

          case '%':
          return num1%num2;
          break;

          case '**':
          return num1**num2;
          break;
      }
}
console.log(mathOperations(5, 6, '+'));