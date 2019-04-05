function attachEvents() {
    $('#btnLoadTowns').on('click', function() {
        console.log('ook');
        let towns = $('#towns').val().split(',');
        console.log(JSON.stringify(towns));

    });
}