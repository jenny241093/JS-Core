function solve() {


    let output = document.getElementById('output');
    let button = document.querySelector('button');
    button.addEventListener('click', extract);

    function extract() {
        let input = document.getElementById('input').value;
        const regexPattern = /^\d+/gm;
        let startNumber = +input.match(regexPattern)[0];
        input = input.replace(regexPattern, '').substring(0, startNumber);
        console.log(input);
        let lastElement = input.slice(-1);
        console.log(lastElement);
        let separator = input.split(lastElement)[0];
        let regex = new RegExp(`[${separator}]+`, 'g');

        console.log(regex);
        let string = input.split(lastElement)[1];
        console.log(string);
        let result = string.split(regex).join('').split('#').join(' ');
        console.log(result);
        output.value = result;

    }
}