function solve() {
    let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', getCards);

    function getCards() {
        let from = document.getElementsByTagName('input')[0].value;
        let to = document.getElementsByTagName('input')[1].value;
        var selCard = document.getElementsByTagName("select")[0];
        let arrLenght = +to - +from;
        let cardSymbol = selCard.options[selCard.selectedIndex].value;
        for (let i = 0; i < arrLenght; i++) {
            let div = document.createElement('div').classList.add('card');
            let firstP = document.createElement('p');
            let secondP = document.createElement('p');
            let thirdP = document.createElement('p');
            firstP.textContent = cardSymbol[cardSymbol.length - 1];
            thirdP.textContent = cardSymbol[cardSymbol.length - 1];


        }
    }
}