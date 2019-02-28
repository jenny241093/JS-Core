function search() {
<<<<<<< HEAD
   // TODO:
=======
    let searchText = $('#searchText').val();
    $("#towns li").css('font-weight', '');
    let matchedElements =
        $(`#towns li:contains('${searchText}')`)
        .css('font-weight', 'bold');


    $("#result").text(matchedElements.length + ' maches found.');
>>>>>>> bab0fb2bcae2b3cb3194b5b49ea999b48e380af6
}