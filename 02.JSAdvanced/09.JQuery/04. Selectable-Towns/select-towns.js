function attachEvents() {
<<<<<<< HEAD
	// TODO:
=======
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

>>>>>>> bab0fb2bcae2b3cb3194b5b49ea999b48e380af6
}