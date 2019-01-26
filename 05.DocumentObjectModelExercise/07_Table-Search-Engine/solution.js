function solve() {

    let button = document.getElementById('searchBtn');;
    button.addEventListener('click', searchEngine);

    function searchEngine() {
        let inputText = document.getElementById('searchField').value;
        console.log(inputText);
        let input, filter, found, table, tr, td, i, j;
        table = document.querySelector('tbody');
        console.log(table);
        filter = inputText.toUpperCase();
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].setAttribute('class', 'select');
                tr[i].style.display = "";
                found = false;
                let clear = document.getElementById('searchField').value = '';

            } else {
                // tr[i].style.display = "none";
            }
        }
    }
}