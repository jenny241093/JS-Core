function solve() {
    //TODO

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', clickevent);

    function clickevent() {
        let input = document.querySelector('input[type="text"]').value;
        console.log(input);
        let toString = input.split(' ');
        console.log(toString);
        let areAllDigitsFrom1To49 = true;
        for (let index = 0; index < toString.length; index++) {
            const element = toString[index];
            if (+element < 1 && +element > 49) {
                areAllDigitsFrom1To49 = false;
            }
        }
        console.log(areAllDigitsFrom1To49);
        let divRes = document.getElementById('allNumbers');

        if (toString.length == 6 && areAllDigitsFrom1To49) {
            for (let i = 1; i <= 49; i++) {
                const element = i;
                let div = document.createElement('div');
                div.classList.add('numbers');
                if (toString.some(x => Number(x) === +element)) {
                    div.style.backgroundColor = 'orange';
                }
                div.textContent = element;
                divRes.appendChild(div);

            }
        }
        button.disabled = true;
        document.getElementsByTagName('input')[0].disabled = true;
    }
}