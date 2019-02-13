function solve() {
    let chopBtn = document.getElementsByTagName('button')[0];
    let diceBtn = document.getElementsByTagName('button')[1];
    let spiceBtn = document.getElementsByTagName('button')[2];
    let bakeBtn = document.getElementsByTagName('button')[3];
    let filletBtn = document.getElementsByTagName('button')[4];
    let input = document.getElementsByTagName('input')[0];
    let p = document.getElementById('output');

    let result = 0;
    chopBtn.addEventListener('click', chop);

    function chop() {

        result = getNumber() / 2;
        p.textContent = result;

    }
    diceBtn.addEventListener('click', dice);

    function dice() {

        result = Math.sqrt(getNumber());
        p.textContent = result;

    }

    spiceBtn.addEventListener('click', spice);

    function spice() {
        result = getNumber() + 1;
        p.textContent = result;

    }

    bakeBtn.addEventListener('click', bake);

    function bake() {

        result = getNumber() * 3;
        p.textContent = result;

    }

    filletBtn.addEventListener('click', fillet);

    function fillet() {

        result = getNumber() * 0.8;
        p.textContent = result;
    }

    function getNumber() {
        let number = document.getElementById('output').textContent ||
            document.querySelector('#exercise input').value;

        return Number(number);
    }
}