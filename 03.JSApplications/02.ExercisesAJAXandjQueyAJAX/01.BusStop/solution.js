function getInfo() {
    $('#buses').text('');

    $('#stopName').text('');
    let stopId = $("#stopId").val();
    const baseUrl = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    $('#stopId').val('');
    $.ajax({
        type: "get",
        url: baseUrl,
        success: onStopsLoad,
        error: errorMessage
    });

    function onStopsLoad(data) {
        let buses = $('#buses');
        $('#stopName').text(data.name);
        for (let [busNum, busMinutes] of Object.entries(data.buses)) {
            buses.append($(`<li>Bus ${busNum} arrives in ${busMinutes} minutes</li>`));
        }
    }

    function errorMessage() {
        $('#stopName').text('Error');

    }
}