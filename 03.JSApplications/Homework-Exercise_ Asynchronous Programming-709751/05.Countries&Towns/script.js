const baseURL = 'https://baas.kinvey.com/';
const appKey = 'kid_rJsN7tRuV';
const username = 'testUser';
const password = 'testPass';
const headers = {'Authorization': `Basic ${btoa(username + ":" + password)}`};

function loadCountries() {
    $('#accordion').empty();

    $.ajax({
        method: "GET",
        url: baseURL + 'appdata/' + appKey + '/Country',
        accepts: 'application/json',
        headers: headers,
        success: renderCountries
    });

    function renderCountries(data) {


        for (let country of data) {
            $('#accordion').append(`
                           <h3>${country.name}
                            <div style="display: none" data-id="${country._id}">
                       <input type="text" placeholder="Enter new name" >
                       <button onclick="cancel()">Cancel</button>
                       <button onclick="editCountry()">Edit</button>
                    </div>
                    <button onclick="renderEdit()">Edit</button>
                    <button onclick="deleteCountry()">Delete</button></h3>
                            <div class="towns" data-id="${country._id}">
                            <p><input type="text" placeholder="Enter town name"><button onclick="addTown()">AddTown</button></p>
                            </div>`);

            loadTowns(country);
        }
        $("#accordion").accordion();
        $("#accordion").accordion('refresh');
    }
}

function loadTowns(country) {
    $.ajax({
        method: "GET",
        url: baseURL + 'appdata/' + appKey + '/Town',
        accepts: 'application/json',
        headers: headers,
        success: renderTowns
    });

    function renderTowns(data) {
        let countryId = country._id;
        let towns = data.filter(d => d.country === country.name);
        if (towns.length > 0) {
            for (const town of data.filter(d => d.country === country.name)) {
                $(`div.towns[data-id=${countryId}]`).append(`<p><div town-id="${town._id}">${town.name}
                                                                    <div style="display: none"><input type="text" placeholder="Enter town new name"><button onclick="cancelTown()">Cancel</button><button onclick="editTown()">Edit</button></div>
                                                                    <button onclick="renderEditTown()">Edit</button>
                                                                    <button onclick="deleteTown()">Delete</button></div></p>`)
            }
        } else {
            $(`div.towns[data-id=${countryId}]`).append('<p>No Towns</p>');
        }
        $("#accordion").accordion();
        $("#accordion").accordion('refresh');
    }
}

function addTown() {
    let name = $(event.target).parent().children().eq(0).val();
    let id = $(event.target).parent().parent().attr('data-id');

    if (name.trim() === '') {
        return;
    }
    $.ajax({
        url: baseURL + 'appdata/' + appKey + '/Country/' + id,
        contentType: 'application/json',
        headers: headers,
        success: addTownToDB,
    });

    function addTownToDB(country) {
        $.ajax({
            method: "POST",
            url: baseURL + 'appdata/' + appKey + '/Town',
            contentType: 'application/json',
            headers: headers,
            data: JSON.stringify({
                country: country.name,
                name: name
            }),
            success: loadCountries,
            error: () => {
                console.log('Something went wrong!');
            }
        })
    }

    $('#townName').val('');
}

function renderEditTown() {
    event.stopPropagation();
    $(event.target).hide();
    $(event.target).parent().children().eq(0).css('display', 'inline');
}

function cancelTown() {
    event.stopPropagation();
    $(event.target).parent().hide();
    $(event.target).parent().parent().children().eq(1).show();
}

function editTown() {
    let townId = $(event.target).parent().parent().attr('town-id');
    let newName = $(event.target).parent().children().eq(0).val();
    let countryId = $(event.target).parent().parent().parent().attr('data-id');

    if (newName.trim() === '') {
        return;
    }
    $.ajax({
        url: baseURL + 'appdata/' + appKey + '/Country/' + countryId,
        contentType: 'application/json',
        headers: headers,
        success: editTownDB,
    });

    function editTownDB(country) {
        $.ajax({
            method: 'PUT',
            url: baseURL + 'appdata/' + appKey + '/Town/' + townId,
            contentType: 'application/json',
            data: JSON.stringify({
                country: country.name,
                name: newName,
            }),
            headers: {'Authorization': 'Basic ' + btoa('testUser' + ":" + 'testPass')},
            success: loadCountries,
            error: () => {
                console.log('Something went wrong!');
            }
        })
    }
}

function deleteTown() {
    let id = $(event.target).parent().attr('town-id');

    $.ajax({
        method: "DELETE",
        url: baseURL + 'appdata/' + appKey + '/Town/' + id,
        contentType: 'application/json',
        headers: headers,
        success: loadCountries,
        error: () => {
            console.log('Something went wrong!');
        }
    });
}

function renderEdit() {
   event.stopPropagation();
    $(event.target).parent().children().eq(1).css('display', 'inline');
    $(event.target).parent().children().eq(2).hide();
}

function cancel() {
    event.stopPropagation();
    $(event.target).parent().hide();
    $(event.target).parent().parent().children().eq(2).show();
}

function editCountry() {
    let id = $(event.target).parent().attr('data-id');
    let newName = $(event.target).parent().children().eq(0).val();
    if (newName.trim() === '') {
        return;
    }

    $.ajax({
        method: 'PUT',
        url: baseURL + 'appdata/' + appKey + '/Country/' + id,
        contentType: 'application/json',
        data: JSON.stringify({
            name: newName,
        }),
        headers: {'Authorization': 'Basic ' + btoa('testUser' + ":" + 'testPass')},
        success: loadCountries,
        error: () => {
            console.log('Something went wrong!');
        }
    });
}

function deleteCountry() {
    let id = $(event.target).parent().children().eq(1).attr('data-id');
    $.ajax({
        method: "DELETE",
        url: baseURL + 'appdata/' + appKey + '/Country/' + id,
        contentType: 'application/json',
        headers: headers,
        success: loadCountries,
        error: () => {
            console.log('Something went wrong!');
        }
    });
}


function createCountry() {
    let name = $('#name').val();
    $('#name').val('');

    if (name) {
        $.ajax({
            method: "POST",
            url: baseURL + 'appdata/' + appKey + '/Country',
            contentType: 'application/json',
            headers: headers,
            data: JSON.stringify({
                name: name
            }),
            success: loadCountries,
            error: () => {
                console.log('Something went wrong!');
            }
        });
    }
}