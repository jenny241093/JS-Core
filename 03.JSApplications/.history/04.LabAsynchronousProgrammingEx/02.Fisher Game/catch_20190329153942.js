function attachEvents() {
    let baseUrl = `https://baas.kinvey.com/appdata/kid_rJP-cWMdE/`;
    $(`.load`).on('click', loadAllCatches);
    $(`.add`).on('click', addNewCatch);
    $(`.update`).on('click', updateCatch);

    const kinveyUsername = 'guest';
    const kinveyPassword = 'guest';
    const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`);
    const authHeaders = { 'Authorization': 'Basic ' + base64auth };
    async function loadAllCatches() {
        console.log('load');

        try {
            let catches = await $.ajax({
                type: "GET",
                url: baseUrl + 'biggestCatches',
                headers: authHeaders
            });

        } catch (error) {
            console.log(error);

        }
    }
    async function addNewCatch() {
        console.log('add');

        try {

            let angler = $('#addForm > .angler').val();
            let weight = $('#addForm > .weight').val();
            let species = $('#addForm > .species').val();
            let location = $('#addForm > .location').val();
            let bait = $('#addForm > .bait').val();
            let captureTime = $('#addForm > .captureTime').val();
            let data = {
                captureTime,
                bait,
                location,
                species,
                weight,
                angler
            };
            let catchToAdd = await $.ajax({
                type: "POST",
                url: baseUrl + 'biggestCatches',
                headers: authHeaders,
                contentType: 'application/json',
                data: JSON.stringify(data)
            });



        } catch (error) {
            console.log(error);

        }
    }
    async function updateCatch(e) {
        console.log('update');
        let catchParent = e.target.parentElement;
        console.log('parent', catchParent);

        let catchId = $(e.target).parent().attr("data-id");
        console.log('id', catchId);

        try {
            let catchId = 0;
            let angler = $('.catch > .angler').val();
            let weight = $('.catch > .weight').val();
            let species = $('.catch > .species').val();
            let location = $('.catch > .location').val();
            let bait = $('.catch > .bait').val();
            let captureTime = $('.catch > .captureTime').val();
            let data = {
                captureTime,
                bait,
                location,
                species,
                weight,
                angler
            };
            await $.ajax({
                type: "PUT",
                url: baseUrl + 'biggestCatches',
                headers: authHeaders,
                contentType: 'application/json',
                data: JSON.stringify(data)
            });



        } catch (error) {
            console.log(error);

        }
    }

}