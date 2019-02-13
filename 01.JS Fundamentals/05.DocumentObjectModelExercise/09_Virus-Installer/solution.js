function solve() {
    //TODO
    let nextBtn = document.getElementsByTagName('button')[0];
    let cancelBtn = document.getElementsByTagName('button')[1];
    let count = 0;
    nextBtn.addEventListener('click', click);

    function click() {
        count++;
        if (count == 1) {
            let contentBckg = document.getElementById('content');
            contentBckg.style.background = 'none';
            let agreeDiv = document.getElementById('firstStep');
            agreeDiv.style.display = 'block';
        }

        if (count == 2) {
            count++;
            let agreed = true;
            let arrRadio = Array.from(document.querySelectorAll('input[type="radio"]'));
            arrRadio.forEach(rad => {
                rad.addEventListener('click', currRadio);

                function currRadio(event) {
                    agreed = true
                    if (event.target.value == "I Disagree") {
                        agreed = false;
                    } else if (event.target.value == "I Agree") {
                        agreed = true;
                    };
                };
            });
            console.log('agreed?', agreed);
            if (agreed == true) {
                let agreeDiv = document.getElementById('firstStep');
                agreeDiv.style.display = 'none';
                let secondStep = document.getElementById('secondStep');
                secondStep.style.display = 'block';
                setTimeout(function() {

                    nextBtn.style.display = "inline";

                    nextBtn.addEventListener("click", function() {
                        document.getElementById('secondStep').style.display = "none";
                        document.getElementById('thirdStep').style.display = "block";
                    })

                }, 3000);
            }
        }

    }

}