const airlineService = (() => {

    function addFlight(data) {
        return kinvey.post('appdata', 'flights', 'kinvey', data);
    }

    function getAllFlights() {
        return kinvey.get('appdata', 'flights', 'kinvey');
    }

    function getACar(id) {
        return kinvey.get('appdata', `cars/${id}`, 'kinvey');
    }

    function editListing(id, data) {
        return kinvey.update('appdata', `cars/${id}`, 'kinvey', data);
    }

    function getMyCars() {

        return kinvey.get('appdata', encodeURI('cars?query={"seller":"' + sessionStorage.username + '"}&sort={"_kmd.ect": -1}'), 'kinvey');
    }

    function deleteCar(id) {
        return kinvey.remove('appdata', `cars/${id}`, 'kinvey');
    }

    return {
        addFlight,
        getAllFlights,
        getACar,
        editListing,
        getMyCars,
        deleteCar,

    }
})();