function solve() {
    //TODO
    let rightAnswersCount = 0;
    let sections = Array.from(document.getElementsByTagName('section'));
    let firstQuestion = sections[0];
    console.log(firstQuestion);

    let buttons = Array.from(document.getElementsByTagName('button'));
    let fistButton = buttons[0];
    fistButton.addEventListener('click', clickEvent);
    let secondButton = buttons[1];
    secondButton.addEventListener('click', clickEvent2);
    let thirdBtn = buttons[2];
    thirdBtn.addEventListener('click', clickEvent3);

    function clickEvent() {
        var radios = document.querySelectorAll('input[name="softUniYear"]:checked');
        var value = radios.length > 0 ? radios[0].value : null;
        sections[1].style.display = 'block';
        if (value == '2013') {
            rightAnswersCount++;
        }
        console.log(radios);
        console.log(value);
    }

    function clickEvent2() {
        var radios = document.querySelectorAll('input[name="popularName"]:checked');
        var value = radios.length > 0 ? radios[0].value : null;
        sections[2].style.display = 'block';
        if (value == 'Pesho') {
            rightAnswersCount++;
        }
        console.log(radios);
        console.log(value);
    }

    function clickEvent3() {
        var radios = document.querySelectorAll('input[name="softUniFounder"]:checked');
        var value = radios.length > 0 ? radios[0].value : null;
        sections[2].style.display = 'block';
        if (value == 'Nakov') {
            rightAnswersCount++;
        }
        console.log(radios);
        console.log(value);
        let divRes = document.getElementById('result');

        if (+rightAnswersCount == 3) {
            divRes.innerHTML = `You are recognized as top SoftUni fan!`;
        } else {
            divRes.innerHTML = `You have ${rightAnswersCount} right answers`
        }
    }
}