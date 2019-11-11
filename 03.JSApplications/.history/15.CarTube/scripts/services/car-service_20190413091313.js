const carService = (() => {

    function createListing(data) {
        return kinvey.post('appdata', 'cars', 'kinvey', data);
    }

    function getAllCars() {
        return kinvey.get('appdata', 'cars', 'kinvey');
    }

    function getAllPets(filter) {
        let query = filter && filter != 'All' ?
            JSON.stringify({ category: filter }) :
            JSON.stringify({});

        return kinvey.get('appdata', `pets?query=${query}&sort={"likes": -1}`, 'kinvey');
    }

    function getMyPets(id) {
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
        createListing,
        getAllCars,
        getMyPets,
        getPetDetails,
        deletePet,
        editPet,
        likePet
    }
})();