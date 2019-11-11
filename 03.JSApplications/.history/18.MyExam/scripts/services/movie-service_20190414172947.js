const movieService = (() => {

    function createMovie(data) {
        return kinvey.post('appdata', 'movies', 'kinvey', data);
    }

    function getAllMovies() {
        return kinvey.get('appdata', 'movies', 'kinvey', `?query={}&sort={"tickets": -1}`);
    }

    function getAMovie(id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function getAllMySongs() {
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}&sort={"likeCounter": -1, "listenCounter": -1}`);
    }

    function removeSong(id) {
        return kinvey.remove('appdata', `songs/${id}`, 'kinvey');
    }

    function likeSong(id, song) {
        return kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    function listenSong(id, song) {
        return kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }



    return {
        createMovie,
        getAllMovies,
        getAMovie,
        removeSong,
        likeSong,
        listenSong,
        getASong
    }

})();