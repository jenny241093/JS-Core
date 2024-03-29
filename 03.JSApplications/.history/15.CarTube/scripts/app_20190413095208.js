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

        this.post('#/createListing', handlers.createListing);
        // this.post('#/editListing', handlers.createListing);

        this.get('#/dashboard(/:category)?', handlers.getDashboard);

        this.get('#/myPets', handlers.getMyPets);

        this.get('#/delete/:id', handlers.deletePet);

        this.get('#/details/:id', handlers.getPetDetails);

        this.post('#/details/:id', handlers.editPetInfo);

        this.get('#/like/:id', handlers.likePet);
    });

    app.run('#/home');
});