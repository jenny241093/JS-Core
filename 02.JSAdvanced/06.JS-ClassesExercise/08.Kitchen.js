class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
        this.menuCount = 0;
    }
    loadProducts(products) {
        Array.from(products).forEach((product) => {
            let arr = product.split(' ');
            let productName = arr[0];
            let productQuantity = +arr[1];
            let productPrice = +arr[2];
            if (this.budget >= productPrice) {
                this.budget -= productPrice;
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        })

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        //  let arrProducts = neededProducts.split(' ');
        //let productName = arrProducts[0];
        //  let productQuantity = arrProducts[1];

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal].price = price;
            this.menu[meal].products = neededProducts;
            return `Great idea! Now with the ${meal} we have ${Object.entries(this.menu).length} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in our menu, try something different.`;

    }
    showTheMenu() {
        let meals = Object.keys(this.menu);
        if (meals.length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        return meals.map(meal => `${meal} - $ ${this.menu[meal].price}`).join('\n') + '\n';
    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let neededProducts = this.menu[meal].products;

        for (const product of neededProducts) {
            let [productName, productQuantity] = product.split(/\s+/);
            let quantityNeeded = Number(productQuantity);

            if (!this.productsInStock.hasOwnProperty(productName) || this.productsInStock[productName] < quantityNeeded) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        neededProducts.forEach((product) => {
            let [productName, productQuantity] = product.split(/\s+/);
            this.productsInStock[productName] -= Number(productQuantity);
        });

        let price = this.menu[meal].price;
        this.budget += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }
}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());