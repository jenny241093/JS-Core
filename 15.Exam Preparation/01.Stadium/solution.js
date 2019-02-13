function solve() {
    let buttons = document.getElementsByClassName('seat');
    let obj = {
        'Levski': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'Litex': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP': {
            'A': 25,
            'B': 15,
            'C': 10
        },
        'summary': {
            'fans': 0,
            'profit': 0
        }
    }
    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', clickEvent);
    })
    let summaryBtn = document.getElementById('summary').addEventListener('click', summary);
    let output = document.getElementById('output');
    let result = document.getElementsByTagName('span')[0];

    function clickEvent(e) {
        let seat = e.target;
        let team = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65 + e.target.parentNode.cellIndex);

        if (seat.style.backgroundColor === '') {
            seat.style.backgroundColor = "rgb(255,0,0)";
            obj.summary.profit += obj[team][sector];
            obj.summary.fans++;
            output.innerHTML += ` Seat ${seat.innerHTML} in zone ${team} sector ${sector} was taken.\n`;

        } else {
            output.innerHTML += ` Seat ${seat.innerHTML} in zone ${team} sector ${sector} is unavailable.\n`;

        }

    }

    function summary() {
        result.innerHTML = `${obj.summary.profit} leva, ${obj.summary.fans} fans.`
    }
}