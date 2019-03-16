function addDestination() {
    let $city = $('.inputData').eq(0);
    let $country = $('.inputData').eq(1);

    if ($city.val() && $country.val()) {
        let $season = $(".custom-select option:selected").text();
        let $tbody = $('#destinationsList');
        let tableRow = $(`<tr><td>${$city.val()}, ${$country.val()}</td><td>${$season}</td></tr>`);

        $tbody.append(tableRow);
        $city.val('');
        $country.val('');
        updateScore($season);
    }

    function updateScore(season) {
        let seasonToLower = season.toLowerCase();
        $(`#${seasonToLower}`).val(function(i, oldval) {
            return ++oldval;
        });
    }
}