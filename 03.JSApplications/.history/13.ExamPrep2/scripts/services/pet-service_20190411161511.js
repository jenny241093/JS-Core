const petService = (() => {
    function getAllSongs() {
        return kinvey.get('appdata', 'songs', 'kinvey');
    }
    return {
        getAllSongs
    }
})();