function attachEvents() {
    let baseUrl = `https://baas.kinvey.com/appdata/kid_rJP-cWMdE/`;
    $(`.load`).on('click', loadAllCatches);
    $(`.add`).on('click', addNewCatch);
    $(`.update`).on('click', updateCatch);
    $("#catches .catch .delete").on('click', deleteCatch);

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
            for (const c of catches) {
                console.log(c);

                let divCatch = $(`<div class="catch" data-id=${c._id}>
                <label>Angler</label>
                <input type="text" class="angler" value=${c.angler}>
                <label>Weight</label>
                <input type="number" class="weight" value=${c.weight}>
                <label>Species</label>
                <input type="text" class="species" value=${c.species}>
                <label>Location</label>
                <input type="text" class="location"  value=${c.location}>
                <label>Bait</label>
                <input type="text" class="bait"  value=${c.bait}>
                <label>Capture Time</label>
                <input type="number" class="captureTime"  value=${c.captureTime}>
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </div>`);
                $('#catches').append(divCatch);
            }


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
    async function deleteCatch() {
        console.log('del');

        let catchId = $(e.target).parent().attr("data-id");

        try {
            await $.ajax({
                type: "DELETE",
                url: baseUrl + 'biggestCatches/' + catchId,
                headers: authHeaders,
                contentType: 'application/json',
                data: JSON.stringify(data)
            });
            loadAllCatches();
        } catch (error) {

        }

    }
    async function updateCatch(e) {

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
                url: baseUrl + 'biggestCatches/' + catchId,
                headers: authHeaders,
                contentType: 'application/json',
                data: JSON.stringify(data)
            });



        } catch (error) {
            console.log(error);

        }
    }

}