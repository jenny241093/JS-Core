const petService = (() => {
    function getDashboardAndAllPets() {
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={}&sort={"likes": -1}`);
    }
    return {
        getDashboardAndAllPets
    }
})();