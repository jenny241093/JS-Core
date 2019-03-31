function attachEvents() {
    let baseUrl = `https://baas.kinvey.com/appdata/kid_rJP-cWMdE/`;
    $(`.load`).on('click', loadAllCatches);
    $(`.add`).on('click', addNewCatch);
    

    const kinveyUsername = 'guest';
    const kinveyPassword = 'guest';
    const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`);
    const authHeaders = { 'Authorization': 'Basic ' + base64auth };
    async function loadAllCatches() {
        console.log('load');
        $('#catches').empty();

        try {
            let catches = await $.ajax({
                type: "GET",
                url: baseUrl + 'biggestCatches',
                headers: authHeaders
            });
            
            for (const currentCatch of catches) {
                const $appendCatch = $(`
                <div class="catch" data-id="${currentCatch._id}">
                    <label>Angler</label>
                    <input type="text" class="angler" value="${currentCatch.angler}"/>
                    <label>Weight</label>
                    <input type="number" class="weight" value="${currentCatch.weight}"/>
                    <label>Species</label>
                    <input type="text" class="species" value="${currentCatch.species}"/>
                    <label>Location</label>
                    <input type="text" class="location" value="${currentCatch.location}"/>
                    <label>Bait</label>
                    <input type="text" class="bait" value="${currentCatch.bait}"/>
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${currentCatch.captureTime}"/>
                    <button class="update">Update</button>
                    <button class="delete">Delete</button>
                </div>
                `);
    
                $('.delete').on('click', deleteCatch);
                $('.update').on('click', updateCatch);
    
                $('#catches').append($appendCatch);
            }

        } catch (error) {
            console.log(error);

        }
    }
    async function addNewCatch() {
        console.log('add');

        try {

            let angler = $('#addForm > .angler').val();
            let weight = +$('#addForm > .weight').val();
            let species = $('#addForm > .species').val();
            let location = $('#addForm > .location').val();
            let bait = $('#addForm > .bait').val();
            let captureTime = +$('#addForm > .captureTime').val();
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
    async function deleteCatch(e) {
        console.log('del');

        let catchId = $(e.target).parent().data("id");
            await $.ajax({
                type: "DELETE",
                url: baseUrl + 'biggestCatches/' + catchId,
                headers: authHeaders

            });
            
        loadAllCatches();

    }
    async function updateCatch(e) {

        let catchId = $(e.target).parent().data("id");
        console.log($(e.target).parent());
        
        console.log('id', catchId);

            let angler =$(this).parent().find('input.angler').val();
            let weight =+$(this).parent().find('input.weight').val();
            let species = $(this).parent().find('input.species').val();
            let location = $(this).parent().find('input.location').val();
            let bait =$(this).parent().find('input.bait').val();
            let captureTime =+$(this).parent().find('input.captureTime').val();
            let data ={
                angler,
                weight,
                species,
                location,
                bait,
                captureTime
            };
            try {
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
       loadAllCatches();
    }

}