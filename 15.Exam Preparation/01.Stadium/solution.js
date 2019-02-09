function solve() {
    let buttons = document.getElementsByClassName('seat');
    let obj = {
        "Levski": {
            'A': 10,
            'B': 7,
            'C': 5
        },
        "Litex": {
            'A': 10,
            'B': 7,
            'C': 5
        },
        "VIP": {
            'A': 25,
            'B': 15,
            'C': 10
        },
        "__summary__": {
            'fans': 0,
            'totalProfit': 0,
        }
    }
    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click', clickEvent);
    })
    document.getElementById('summary').addEventListener('click', summary);

    function summary() {
        let span = document.getElementsByTagName('span')[0];
        span.innerHTML = `${obj.__summary__.totalProfit} leva, ${obj.__summary__.fans} fans.`;
    }

    function clickEvent(e) {

        let seat = e.target;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65 + e.target.parentNode.cellIndex);

        let area = document.getElementById('output');
        if (seat.style.backgroundColor === '') {
            seat.style.backgroundColor = "rgb(255,0,0)";
            area.value += ` Seat ${seat.innerHTML} in zone ${zone} sector ${sector} was taken.\n`;
            obj.__summary__.totalProfit += obj[zone][sector];
            obj.__summary__.fans++;

        } else {
            area.value += ` Seat ${seat.innerHTML} in zone ${zone} sector ${sector} is unavailable.\n`;
        }
    }
}