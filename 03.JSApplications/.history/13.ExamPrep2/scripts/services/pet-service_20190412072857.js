const petService = (() => {
    function getDashboardAndAllPets() {
        return kinvey.get('appdata', 'pets', 'kinvey', `?query={}&sort={"likes": -1}`);
    }
    return {
        getDashboardAndAllPets
    }
})();