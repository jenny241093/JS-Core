$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');
    });
    this.get('#/home', displayHome);
    this.get('#/about', displayAbout);
    this.get('#/login', displayLogin);
    this.get('#register', displayRegister);

    app.run('#/home');
});