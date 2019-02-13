function primeNumberChecker(number) {
    if (number%2!==1&&number%number!==1) {
        console.log('true');
    }
    else{
        console.log('false');
    }
}
primeNumberChecker(7);