function attachEvents() {
    // TODO:
    let townsArr = [];


    $('#items li').click(selectTown);

    function selectTown() {
        let currentListItem = $(this);
        if (currentListItem.attr('data-selected') === 'true') {
            currentListItem.attr('data-selected', 'false');
            currentListItem.css('background', '');
            townsArr.splice(townsArr.indexOf(currentListItem.text()), 1);

        } else {
            currentListItem.attr('data-selected', 'true');
            townsArr.push(currentListItem.text());
            currentListItem.css('background', '#DDD');
        }
    }

    $('#showTownsButton ').click(showTowns);

    function showTowns() {
        $('#selectedTowns').text(townsArr.join(', '));
    }

}