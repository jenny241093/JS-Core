handlers.getAddMovie = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
        .then(function() {
            this.partial('./templates/movie/addMovie.hbs');
        })
        .catch(function(error) {
            notify.handleError(error);
        })
};
handlers.createMovie = function(context) {
    let data = {...context.params };

    if (data.title.length < 6) {
        notify.showError('The title should be at least 6 characters long!')
    } else if (data.description.length < 10) {
        notify.showError('The description should be at least 10 characters long.');
    } else if (!data.imageUrl.startsWith('https://') || !data.imageURL.startsWith('http://')) {
        notify.showError('The image should start with "http://" or "https://"')
    } else {

        movieService.createMovie(data)
            .then(function(res) {

                notify.showInfo('Song created successfully.');
                context.redirect('#/home');
            })
            .catch(function(error) {
                notify.handleError(error);
            });
    }
};
handlers.getAllSongs = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    movieService.getAllSongs()
        .then(function(res) {
            let userId = sessionStorage.getItem('id');
            let songs = res;

            songs.forEach((song) => song.isCreator = song._acl.creator === userId);
            songs = songs.sort((a, b) => a.isCreator - b.isCreator);

            context.songs = songs;

            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    song: './templates/song/song.hbs'
                })
                .then(function() {
                    this.partial('./templates/song/allSongs.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });

};
handlers.getMySongs = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    movieService.getAllMySongs()
        .then(function(res) {
            let userId = sessionStorage.getItem('id');
            let songs = res;

            songs.forEach((song) => song.isCreator = song._acl.creator === userId);

            context.songs = songs;

            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    song: './templates/song/song.hbs'
                })
                .then(function() {
                    this.partial('./templates/song/mySongs.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });
};



handlers.removeSong = function(context) {
    let id = context.params.id;

    movieService.removeSong(id)
        .then(function() {
            notify.showInfo('Song removed successfully!');
            context.redirect('#/allSongs');
        })
        .catch(function(error) {
            notify.handleError(error);
        })

};

handlers.likeSong = function(context) {
    let id = context.params.id;

    movieService.getASong(id)
        .then(function(res) {
            let song = res;

            let newLikes = Number(song.likeCounter) + 1;
            song.likeCounter = newLikes;

            movieService.likeSong(id, song)
                .then(function() {
                    notify.showInfo('Liked');
                    context.redirect('#/allSongs');
                })
                .catch(function(error) {
                    notify.showError(error);
                })
        });
};

handlers.listenSong = function(context) {
    let id = context.params.id;

    movieService.getASong(id)
        .then(function(res) {
            let song = res;

            let newListen = Number(song.listenCounter) + 1;
            song.listenCounter = newListen;

            movieService.likeSong(id, song)
                .then(function() {

                    notify.showInfo(`You just listened ${song.title}`);
                    context.redirect('#/allSongs');
                })
                .catch(function(error) {
                    notify.showError(error);
                })
        });
};