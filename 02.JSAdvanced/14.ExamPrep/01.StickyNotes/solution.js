function addSticker() {

    let $title = $('.title');
    let $text = $('.content');
    if ($title.val() && $text.val()) {
        let $ul = $('#sticker-list');
        let $li = $('<li>').addClass('note-content');

        let $deleteBtn = $('<a>x</a>').addClass('button');
        let $h2 = $(`<h2>${$title.val()}</h2>`);
        let $p = $(`<p>${$text.val()}</p>`);
        let $hr = $('<hr>');
        $li.appendTo($ul);
        $deleteBtn.appendTo($li);
        $h2.appendTo($li);
        $hr.appendTo($li)
        $p.appendTo($li);

        $title.val('');
        $text.val('');
        $deleteBtn.on('click', function(e) {
            this.parentElement.remove();
        });
    }

}