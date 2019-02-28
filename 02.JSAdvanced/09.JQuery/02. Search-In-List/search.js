function search() {

    let searchText = $('#searchText').val();
    $("#towns li").css('font-weight', '');
    let matchedElements =
        $(`#towns li:contains('${searchText}')`)
        .css('font-weight', 'bold');


    $("#result").text(matchedElements.length + ' maches found.');
}