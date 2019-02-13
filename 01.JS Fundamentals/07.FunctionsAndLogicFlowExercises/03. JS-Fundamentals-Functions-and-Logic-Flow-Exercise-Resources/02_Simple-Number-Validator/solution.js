function validate() {
    let btn = document.getElementsByTagName('button')[0];
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    let response = document.getElementById('response');

    btn.addEventListener('click', click);

    function click() {
        let input = document.getElementsByTagName('input')[0].value.toString();
        let lastDigit = input[input.length - 1];

        for (let i = 0; i < weights.length; i++) {
            let temp = +input[i];
            let temp2 = +weights[i];
            sum += +temp * +temp2;
        }
        let reminder = sum % 11;
        reminder == 10 ? 0 : reminder;

        if (+lastDigit === reminder) {
            response.textContent = 'This number is Valid!'
        } else {
            response.textContent = 'This number is NOT Valid!'

        }
    }
}