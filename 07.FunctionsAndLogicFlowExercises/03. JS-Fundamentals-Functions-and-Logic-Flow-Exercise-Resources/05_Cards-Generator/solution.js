function solve() {
    let btn = document.getElementsByTagName('button')[0];
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];
    btn.addEventListener('click', getCards);

    function getCards() {
        let from = document.getElementsByTagName('input')[0].value;
        let to = document.getElementsByTagName('input')[1].value;
        var selCard = document.getElementsByTagName("select")[0];
      
        let cardSymbol = selCard.options[selCard.selectedIndex].value;
        let start = values.indexOf(from);
        let end = values.indexOf(to);

        if (start<=end) {
            appendCards();
        }
        function appendCards() {
            let resultDiv = document.getElementById('cards');
            for (let i = +start; i <= +end; ++i) {
                let carddiv = document.createElement('div');
                carddiv.classList.add('card');
                let firstP = document.createElement('p');
                let secondP = document.createElement('p');
                let thirdP = document.createElement('p');

                firstP.textContent = cardSymbol[cardSymbol.length - 1];
                thirdP.textContent = cardSymbol[cardSymbol.length - 1];
                secondP.textContent = values[i];
                carddiv.appendChild(firstP);
                carddiv.appendChild(secondP);
                carddiv.appendChild(thirdP);
                resultDiv.appendChild(carddiv);

                document.getElementsByTagName('input')[0].value ='';
                document.getElementsByTagName('input')[1].value = '';
            } 
        }

    }
}