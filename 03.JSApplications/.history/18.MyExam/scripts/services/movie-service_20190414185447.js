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

    function updateTickets(id, movie) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', movie);
    }

    function getAllMyMovies() {
        return kinvey.get('appdata', 'movies', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}&sort={"tickets": -1}`);
    }

    function removeMovie(id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function editMovie(id, movie) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', movie);
    }

    return {
        createMovie,
        getAllMovies,
        getAMovie,
        removeMovie,
        updateTickets,
        getAllMyMovies,
        editMovie
    }

})();