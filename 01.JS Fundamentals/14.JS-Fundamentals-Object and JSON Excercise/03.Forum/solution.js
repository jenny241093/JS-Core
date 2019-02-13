function solve() {


    document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
        event.preventDefault();
        let userName = document.querySelectorAll(".user-info input[type=text]")[0].value;
        let userEmail = document.querySelectorAll(".user-info input[type=text]")[1].value;
        let userPassword = document.querySelector(".user-info input[type=password]").value;
        let chks = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(p => p.value);

        let tr = document.createElement('tr');
        let tdUsername = document.createElement('td');
        tdUsername.innerHTML = userName;
        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = userEmail;
        let tdTopics = document.createElement('td');
        tdTopics.innerHTML = chks.join(' ');

        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        document.getElementsByTagName('tbody')[0].appendChild(tr);

    });
    document.getElementsByTagName('button')[1].addEventListener('click', () => {

        let searchedString = document.querySelectorAll("input[type='text']")[2].value;
        let tds = Array.from(document.querySelectorAll('table tbody tr td'));

        for (const td of tds) {
            td.parentNode.style.visibility = 'hidden';
        }
        for (const td of tds) {
            if (td.textContent.includes(searchedString)) {
                td.parentNode.style.visibility = 'visible';
            }

        }
    })

}