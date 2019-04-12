const handlers = {};
$(() => {
    const app = Sammy('#root', function() {
        this.use('Handlebars', 'hbs');

        this.get('/index.html', handlers.getHome);
        this.get('#/home', handlers.getHome);
        this.get('#/login', handlers.getLogin);
        this.get('#/register', handlers.getRegister);

        this.post('#/register', handlers.register);
        // this.post('#/login', handlers.loginUser);

    });
    app.run();
})