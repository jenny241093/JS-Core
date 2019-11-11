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
        return kinvey.get('appdata', `pets?query={"_acl.creator":"${id}"}`, 'kinvey');
    }

    function deletePet(id) {
        return kinvey.remove('appdata', `pets/${id}`, 'kinvey');
    }

    function getPetDetails(id) {
        return kinvey.get('appdata', `pets/${id}`, 'kinvey');
    }

    function editPet(id, data) {
        return kinvey.update('appdata', `pets/${id}`, 'kinvey', data);
    }

    function likePet(id, data) {
        return kinvey.update('appdata', `pets/${id}`, 'kinvey', data);

    }

    return {

        getAllCars,
        getACar,
        editListing,
        getMyCars,
        editPet,
        likePet
    }
})();