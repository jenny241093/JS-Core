const petService = (() => {
    function getDashboardAndAllPets() {
        return kinvey.get('appdata', 'pets', 'kinvey', `?query={}&sort={"likes": -1}`);
    }

    function createPet(data) {
        return kinvey.post('appdata', 'pets', 'kinvey', data);
    }

    function getPet(id) {
        return kinvey.get('appdata', `pets/${id}`, 'kinvey');
    }
    return {
        getDashboardAndAllPets,
        createPet,
        getPet
    }
})();