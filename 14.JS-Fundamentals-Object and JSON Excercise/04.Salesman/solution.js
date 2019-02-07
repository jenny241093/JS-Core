function solve() {
    let storage = {};
    let profit = 0;
    document.getElementsByTagName('button')[0].addEventListener('click', add);
    document.getElementsByTagName('button')[1].addEventListener('click', buy);
    document.getElementsByTagName('button')[2].addEventListener('click', end);


    function add() {
        let productList = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        for (const product of productList) {
            if (!storage.hasOwnProperty(product.name)) {
                storage[product.name] = {
                    price: product.price,
                    quantity: product.quantity
                }
            } else {
                storage[product.name] = {
                    price: product.price,
                    quantity: storage[product.name].quantity + product.quantity
                }
            }
            document.getElementsByTagName('textarea')[2].value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;

        }
    }

    function buy() {
        let product = JSON.parse(document.getElementsByTagName('textarea')[1].value);
        if (storage.hasOwnProperty(product.name) && storage[product.name].quantity >= product.quantity) {
            storage[product.name].quantity -= product.quantity;
            document.getElementsByTagName('textarea')[2].value += `${product.quantity} ${product.name} sold for ${product.quantity * storage[product.name].price}.\n`;
            profit += product.quantity * storage[product.name].price;
        } else {
            document.getElementsByTagName('textarea')[2].value += "Cannot complete order.\n";
        }
    }

    function end() {
        document.getElementsByTagName('textarea')[2].value += `Profit: ${profit.toFixed(2)}.\n`;
        document.getElementsByTagName('button')[0].removeEventListener('click', add);
        document.getElementsByTagName('button')[1].removeEventListener('click', buy);
        document.getElementsByTagName('button')[2].removeEventListener('click', end);
    }
}