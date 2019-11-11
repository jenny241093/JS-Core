const airlineService = (() => {

    function createListing(data) {
        return kinvey.post('appdata', 'cars', 'kinvey', data);
    }

    function getAllCars() {
        return kinvey.get('appdata', 'cars', 'kinvey');
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
        createListing,
        getAllCars,
        getACar,
        editListing,
        getMyCars,
        deleteCar,

    }
})();