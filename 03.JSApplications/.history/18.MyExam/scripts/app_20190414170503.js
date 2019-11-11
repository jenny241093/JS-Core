const handlers = {};

$(() => {
    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        // home page routes
        this.get('/index.html', handlers.getHome);
        this.get('/', handlers.getHome);
        this.get('#/home', handlers.getHome);

        // user routes
        this.get('#/register', handlers.getRegister);
        this.get('#/login', handlers.getLogin);

        this.post('#/register', handlers.registerUser);
        this.post('#/login', handlers.loginUser);

        this.get('#/logout', handlers.logoutUser);

        // Movies
        this.get('#/movie/all', handlers.getAllSongs);
        this.get('#/addMovie', handlers.getAddMovie);
        this.get('#/mySongs', handlers.getMySongs);

        this.post('#/addMovie', handlers.createMovie);

        this.get('#/remove/:id', handlers.removeSong);
        this.get('#/like/:id', handlers.likeSong);
        this.get('#/listen/:id', handlers.listenSong);

    });

    app.run('#/home');
});