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

        // Pets
        this.get('#/addPet', handlers.getCreatePet);
        this.get('#/myPets', handlers.getMyPets);
        this.get('#/dashboard', handlers.getDashboard);
        this.get('#/edit:id', handlers.getEdit);

        this.post('#/addPet', handlers.createPet);



    });

    app.run('#/home');
});