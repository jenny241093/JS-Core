function solution() {
    // TODO

    let addBtn = document.getElementsByTagName('button')[0];
    addBtn.addEventListener('click', addGift);

    function addGift() {
        let toyType = $('#toyType').val();
        let toyPrice = Number($('#toyPrice').val());
        let toyDescription = $('#toyDescription').val();
        let section = $('#christmasGiftShop');
        if (!toyType.lenght || !isNaN(toyPrice) || !toyDescription.lenght < 50) {

            let div = $('<div>').addClass('gift');
            let h2 = $(`<h2>${toyType}</h2>`);
            let p = $(`<p>${toyDescription}</p>`)
            let btn = $(`<button>Buy it for $${toyPrice}</button>`)
            section.append(div);
            div.append("<img src='gift.png'>");
            div.append(h2);
            div.append(p);
            div.append(btn);
            btn.on('click', function() {
                $(this).parent().hide();
            })
        }
    }
}