const petService = (() => {
    function getDashboard() {
        return kinvey.get('appdata', 'songs', 'kinvey');
    }
    return {
        getDashboard
    }
})();