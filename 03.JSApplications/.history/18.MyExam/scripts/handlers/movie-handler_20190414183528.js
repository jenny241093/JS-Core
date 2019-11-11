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
        notify.showError('The title should be at least 6 characters long!');
        context.redirect('#/addMovie');
    } else if (data.description.length < 10) {
        notify.showError('The description should be at least 10 characters long.');
        context.redirect('#/addMovie');
    } else if (!data.imageUrl.startsWith('http')) {
        notify.showError('The image should start with "http://" or "https://"');
        context.redirect('#/addMovie');
    } else if (isNaN(data.tickets)) {
        notify.showError('The available tickets should be a number.');
        context.redirect('#/addMovie');
    } else {

        movieService.createMovie(data)
            .then(function(res) {

                notify.showInfo('Movie created successfully.');
                context.redirect('#/home');
            })
            .catch(function(error) {
                notify.handleError(error);
            });
    }
};
handlers.getAllMovies = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    movieService.getAllMovies()
        .then(function(res) {
            let movies = res;
            context.movies = movies;
            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    movie: './templates/movie/movie.hbs'
                })
                .then(function() {
                    this.partial('./templates/movie/cinema.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });

};

handlers.getDetails = function(context) {
    let id = context.params.id;
    console.log(id);
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');


    movieService.getAMovie(id)
        .then(function(res) {
            console.log(res);
            let movie = res;
            context.movie = movie;

            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                })
                .then(function() {
                    this.partial('./templates/movie/details.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });
};
handlers.buyTicket = function(context) {
    let id = context.params.id;

    movieService.getAMovie(id)
        .then(function(res) {
            let movie = res;

            let updatedTickets = Number(movie.tickets) - 1;
            movie.tickets = updatedTickets;

            movieService.updateTickets(id, movie)
                .then(function() {

                    notify.showInfo(`Successfully bought ticket for ${movie.title}!`);
                    context.redirect('#/movie/all');
                })
                .catch(function(error) {
                    notify.showError(error);
                })
        });
};
handlers.getMyMovies = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    movieService.getAllMyMovies()
        .then(function(res) {
            let userId = sessionStorage.getItem('id');
            let movies = res;

            movies.forEach((movie) => movie.isCreator = movie._acl.creator === userId);

            context.movies = movies;

            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    movie: './templates/movie/myMovie.hbs'
                })
                .then(function() {
                    this.partial('./templates/movie/myMovies.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });
};



handlers.getRemoveMovie = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    let id = context.params.id;
    movieService.getAMovie(id)
        .then(function(res) {
            console.log(res);

            context.movie = res;
            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                })
                .then(function() {
                    this.partial('./templates/movie/deleteMovie.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        })
};
handlers.removeMovie = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    let id = context.params.id;
    movieService.removeMovie(id)
        .then(function(res) {
            console.log(res);

            notify.showInfo(`Movie removed successfully`);
            context.redirect('#/home');
        })
};