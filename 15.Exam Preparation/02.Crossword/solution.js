function solve() {
    let buttons = document.getElementsByTagName('button');
    let inputElement = document.getElementById('input');
    let output = document.getElementById('output').children[0];


    buttons[0].addEventListener('click', filter);
    buttons[1].addEventListener('click', sort);
    buttons[2].addEventListener('click', rotate);
    buttons[3].addEventListener('click', get);

    function filter() {
        let input = inputElement.value;
        let sel = document.getElementById("filterSecondaryCmd").value;
        let position = +document.getElementById('filterPosition').value - 1;
        if (sel === 'uppercase') {
            output.textContent += input.split('').filter(x => x === x.toUpperCase())[position];
        } else if (sel === 'lowercase') {
            output.textContent += input.split('').filter(x => x === x.toLowerCase())[position];
        } else {
            output.textContent += input.split('').filter(x => !isNaN(x))[position];
        }

    }

    function sort() {
        let input = inputElement.value;
        let sel = document.getElementById("sortSecondaryCmd").value;
        let position = +document.getElementById('sortPosition').value - 1;
        if (sel === 'A') {
            output.textContent += input.split('').sort((a, b) => a.localeCompare(b))[position];
        } else if (sel === 'Z') {
            output.textContent += input.split('').sort((a, b) => b.localeCompare(a))[position];
        }
    }

    function rotate() {
        let input = inputElement.value.split('');
        let sel = document.getElementById('rotateSecondaryCmd').value;
        let position = (+document.getElementById('rotatePosition').value) - 1;
        let rotations = sel % input.length;
        while (rotations > 0) {
            let element = input.pop();
            input.unshift(element);
            rotations -= 1;
        }
        output.textContent += input[position];
    }

    function get() {
        let input = inputElement.value.split('');
        let position = +document.getElementById('getPosition').value - 1;
        output.textContent += input[position];
    }
}