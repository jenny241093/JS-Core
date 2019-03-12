function addItem() {
    // TODO
    let text = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let newOption = document.createElement('option');

    newOption.textContent = text.value;
    newOption.value = itemValue.value;
    menu.appendChild(newOption);
    text.value = '';
    itemValue.value = '';

}
