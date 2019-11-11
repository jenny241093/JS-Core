const carService = (() => {



    function getAllCars() {
        return kinvey.get('appdata', 'cars', 'kinvey');
    }

    function getACar(id) {
        return kinvey.get('appdata', `cars/${id}`, 'kinvey');
    }

    function editListing(id, data) {
        return kinvey.update('appdata', `cars/${id}`, 'kinvey', data);
    }

    function getAllPets(filter) {
        let query = filter && filter != 'All' ?
            JSON.stringify({ category: filter }) :
            JSON.stringify({});

        return kinvey.get('appdata', `pets?query=${query}&sort={"likes": -1}`, 'kinvey');
    }

    function getMyCars(id) {
        return kinvey.get('appdata', `cars?query={"_acl.creator":"${id}"}`, 'kinvey');
    }

    function deleteCar(id) {
        return kinvey.remove('appdata', `car/${id}`, 'kinvey');
    }

    return {

        getAllCars,
        getACar,
        editListing,
        getMyCars,
        deleteCar,

    }
})();