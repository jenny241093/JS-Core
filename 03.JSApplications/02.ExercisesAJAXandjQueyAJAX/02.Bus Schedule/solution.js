function solve() {
    let nextStopId = 'depot';

    function depart() {
        let baseUrl = 'https://judgetests.firebaseio.com/schedule/';

        $.ajax({
            url: baseUrl + nextStopId + '.json',
            success: departSuccess
        })
    }

    function departSuccess(data) {
        console.log(data);
        let $departBtn = $('#depart');
        $departBtn.prop('disabled', true);
        let $arriveBtn = $('#arrive');
        $arriveBtn.prop('disabled', false);
        let $info = $('.info');
        $info.text(`Next stop ${data.name}`);
        nextStopId = data.next;
    }

    function arrive() {
        let $departBtn = $('#depart');
        $departBtn.prop('disabled', false);
        let $arriveBtn = $('#arrive');
        $arriveBtn.prop('disabled', true);
        let $info = $('.info');
        let stopName = $info.text().split(' ')[2];
        $info.text(`Arriving at ${stopName}`);

    }
    return {
        depart,
        arrive
    };
}
let result = solve();