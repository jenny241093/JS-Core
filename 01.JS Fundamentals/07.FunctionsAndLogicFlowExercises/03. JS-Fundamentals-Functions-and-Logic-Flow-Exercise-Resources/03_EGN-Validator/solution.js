function validate() {
    let btn = document.querySelector("button");
    btn.addEventListener('click', getEgn);
    let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let weightSum = 0;
    let egn;


    function getEgn() {

        let year = document.getElementById('year').value;
        let month = document.getElementById('month');
        let selectedMonth = month.options[month.selectedIndex].text;
        let date = document.getElementById('date').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let code = document.getElementById('region').value;
        year = year.slice(2);
        let convertedDate = (Number(date) > 9) ? date : ("0" + date);
        let convertedMonth = getMonth(selectedMonth);
        let convertedCode = code.slice(0, 2);
        let convertedGender = gender == 'Female' ? 1 : 2;
        egn = year + convertedMonth + convertedDate + convertedCode + convertedGender;
        let reminder = getReminder(weightPosition, egn);

        egn = year + convertedMonth + convertedDate + convertedCode + convertedGender + reminder;
        document.getElementById('year').value = '';
        document.getElementById('month').value = '';
        document.getElementById('date').value = '';
        document.getElementById('male').checked = false;
        document.getElementById('female').checked = false;
        document.getElementById('region').value = '';

        document.getElementById('egn').textContent = `Your EGN is: ${egn}`;



        function getMonth(month) {
            let months = ["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            if (months.indexOf(month) + 1 > 9) {
                return months.indexOf(month) + 1;
            } else {
                return '0' + (months.indexOf(month) + 1);
            }
        }

        function getReminder(weightPosition, egn) {
            for (let i = 0; i < egn.length; i++) {
                weightSum += +egn[i] * +weightPosition[i];
            }
            let reminder = (weightSum % 11) === 10 ? 0 : (weightSum % 11);
            return reminder;
        }
    }

}