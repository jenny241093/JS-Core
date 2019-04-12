handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    songService.getAllSongs()
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