function solve() {
    let products = [];
    let totalPrice = 0;
    let factors = [];
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        let furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);

        for (let furniture of furnitureList) {

            let div = document.createElement('div');
            div.setAttribute('class', 'furniture');

            let name = document.createElement('p');
            name.innerHTML = `Name: ${furniture.name}`;

            let img = document.createElement('img');
            img.setAttribute('src', furniture.img);

            let price = document.createElement('p');
            price.innerHTML = `Price: ${furniture.price}`;

            let decFactor = document.createElement('p');
            decFactor.innerHTML = `Decoration factor: ${furniture.decFactor}`;

            let checkBox = document.createElement('input');
            checkBox.setAttribute("type", "checkbox");

            div.appendChild(name);
            div.appendChild(img);
            div.appendChild(price);
            div.appendChild(decFactor);
            div.appendChild(checkBox);
            document.getElementById('furniture-list').appendChild(div);
        }

    })
    document.getElementsByTagName('button')[1].addEventListener('click', () => {

        let array = Array.from(document.getElementById('furniture-list').children);
        for (let furniture of array) {
            let isChecked = furniture.getElementsByTagName('input')[0].checked;
            if (isChecked) {
                let name = furniture.getElementsByTagName('p')[0].innerHTML.split(': ')[1];
                products.push(name);
                let price = +furniture.getElementsByTagName('p')[1].innerHTML.split(': ')[1];
                totalPrice += price;
                let decFactor = +furniture.getElementsByTagName('p')[2].innerHTML.split(': ')[1];
                factors.push(decFactor);
            }
        }
        let textarea = document.getElementsByTagName('textarea')[1];
        textarea.innerHTML += `Bought furniture: ${products.join(', ')}\n`;
        textarea.innerHTML += `Total price: ${totalPrice.toFixed(2)}\n`;
        let averageDecFac = factors.reduce((a, b) => a + b) / factors.length;
        textarea.innerHTML += `Average decoration factor: ${averageDecFac}`;
    })
}