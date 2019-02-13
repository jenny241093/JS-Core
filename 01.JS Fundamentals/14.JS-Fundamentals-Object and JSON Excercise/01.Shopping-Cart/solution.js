function solve() {
    let products = [];
    for (let i = 0; i < 3; i++) {
        let element = document.getElementsByClassName("product")[i];
        let name = element.children[1].innerHTML;
        let price = +element.children[2].innerHTML.split(' ')[1];
        document.getElementsByTagName('button')[i].addEventListener('click', () => {

            products.push({ name, price });
            let textArea = document.getElementsByTagName('textarea')[0];
            textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
        })
    }
    document.getElementsByTagName('button')[3].addEventListener('click', () => {
        let list = products.map(p => p.name).filter((el, index, arr) => {
            if (arr.indexOf(el) === index) {
                return el;
            }
        });
        let totalPrice = products.map(p => p.price).reduce((a, b) => a + b);
        let textArea = document.getElementsByTagName('textarea')[0];
        textArea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.\n`

    })


}