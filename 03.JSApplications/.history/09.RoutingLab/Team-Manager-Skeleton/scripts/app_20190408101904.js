$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');
    });

    app.run('#/home');
});