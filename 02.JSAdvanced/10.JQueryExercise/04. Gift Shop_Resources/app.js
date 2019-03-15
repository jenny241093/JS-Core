function solution() {
    let section = $('#christmasGiftShop');
    let toyType = $('#toyType');
    let toyPrice = $('#toyPrice');
    let toyDescription = $('#toyDescription');
    if (toyType.val() && +toyPrice.val() && toyDescription.val()) {
        let newDiv = $('<div>', { 'class': 'gift' });
        let img = $('<img src="gift.png" />');
        let h2 = $('<h2>');
        let p = $('<p>');
        let buyBtn = $('<button>');
        h2.text(toyType.val());
        p.text(toyDescription.val());
        buyBtn.text(`Buy it for $${toyPrice.val()}`);

        section.append(newDiv);
        newDiv.append(img).append(h2, p, buyBtn);
        buyBtn.on('click', () => newDiv.remove());
    };
    toyType.val("");
    toyPrice.val("");
    toyDescription.val("");
}