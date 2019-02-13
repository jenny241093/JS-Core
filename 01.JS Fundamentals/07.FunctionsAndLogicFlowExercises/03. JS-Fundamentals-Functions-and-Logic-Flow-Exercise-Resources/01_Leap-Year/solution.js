function leapYear() {

    let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', click);

    function click() {
        let input = document.getElementsByTagName('input')[0].value;
        var h2 = document.getElementById("year").querySelectorAll("h2")[0];
        var div = document.getElementById("year").querySelectorAll("div")[0];
        let isLeap = (year) => new Date(year, 1, 29).getDate() === 29;
        if (isLeap(input)) {
            h2.innerHTML = 'Leap Year';
            div.innerHTML = input;
            document.getElementsByTagName('input')[0].value = '';
        } else {
            h2.innerHTML = 'Not Leap Year';
            div.innerHTML = input;
            document.getElementsByTagName('input')[0].value = '';
        }
    }
}