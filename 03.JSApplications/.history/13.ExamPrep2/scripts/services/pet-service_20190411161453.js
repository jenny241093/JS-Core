const petService = (() => {
    function getAllPets() {
        return kinvey.get('appdata', 'songs', 'kinvey');
    }
})();