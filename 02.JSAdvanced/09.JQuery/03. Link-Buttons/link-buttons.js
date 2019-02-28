function attachEvents() {
<<<<<<< HEAD
    // TODO:
=======
    $('a.button').on('click', buttonClicked);

    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        // "this" is the event source (the hyperlink clicked)
    }

>>>>>>> bab0fb2bcae2b3cb3194b5b49ea999b48e380af6
}