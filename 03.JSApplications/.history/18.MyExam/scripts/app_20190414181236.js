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
        this.get('#/movie/all', handlers.getAllMovies);
        this.get('#/addMovie', handlers.getAddMovie);
        this.get('#/details/:id', handlers.getDetails);
        this.get('#/buyTicket/:id', handlers.buyTicket);
        this.get('#/myMovies', handlers.getMyMovies);

        this.post('#/addMovie', handlers.createMovie);

        this.get('#/delete/:id', handlers.removeSong);
        this.get('#/edit/:id', handlers.removeSong);



    });

    app.run('#/home');
});