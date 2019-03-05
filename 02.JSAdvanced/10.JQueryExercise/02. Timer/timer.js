function timer() {
    let isStarted = false;
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    let hoursCounter = 0;
    let minutesCounter = 0;
    let secondsCounter = 0;

    function incrementCounter() {
        isStarted = true;
        secondsCounter++;
        if (secondsCounter > 59) {
            secondsCounter = 0;
            minutesCounter++;
        } else if (minutesCounter > 59) {
            minutesCounter = 0;
            hoursCounter++;
        }

        if (hoursCounter < 10) {
            hours.text("0" + hoursCounter.toString());
        } else {
            hours.text(hoursCounter.toString());
        }

        if (minutesCounter < 10) {
            minutes.text("0" + minutesCounter.toString());
        } else {
            minutes.text(minutesCounter.toString());
        }
        if (secondsCounter < 10) {
            seconds.text("0" + secondsCounter.toString());
        } else {
            seconds.text(secondsCounter.toString());
        }
    }
    let intervalFunction;
    startBtn.on("click", () => {
        if (!isStarted) {
            intervalFunction = setInterval(incrementCounter, 1000);
        }
    });

    stopBtn.on("click", () => {
        isStarted = false;
        clearInterval(intervalFunction);
    });
}