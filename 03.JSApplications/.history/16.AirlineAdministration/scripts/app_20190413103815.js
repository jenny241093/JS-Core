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

        // ADD YOUR ROUTES HERE
        this.get('#/allCars', handlers.getAllCars);
        this.get('#/createListing', handlers.getCreateListing);
        this.get('#/edit/:id', handlers.getEditListing);
        this.get('#/details/:id', handlers.getDetails);
        this.get('#/myCars', handlers.getMyCars);

        this.post('#/createListing', handlers.createListing);
        this.post('#/editListing', handlers.editListing);
        this.get('#/delete/:id', handlers.deleteCar);

    });

    app.run('#/home');
});