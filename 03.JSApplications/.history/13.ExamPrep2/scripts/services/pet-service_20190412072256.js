const petService = (() => {
    function getDashboard() {
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={}&sort={"likes": -1}`);
    }
    return {
        getDashboard
    }
})();