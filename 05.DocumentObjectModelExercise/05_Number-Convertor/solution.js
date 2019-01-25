function solve() {
    let selectMenuTo = document.getElementById('selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    let hexadeicmalOption = document.createElement('option');
    hexadeicmalOption.value = 'hexadecimal';
    hexadeicmalOption.textContent = 'Hexadecimal';

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadeicmalOption);

    document.getElementsByTagName('button')[0].addEventListener('click', clickEvent);

    function clickEvent(e) {
        let to = Array.from(selectMenuTo.children).filter(x => x.selected)[0];
        console.log(to);
        let input = document.getElementById('input').value;

        if (to.value === 'binary') {
            document.getElementById('result').value = (+input).toString(2);
        } else if (to.value === 'hexadecimal') {
            document.getElementById('result').value = (+input).toString(16).toUpperCase();
        }
    }
}