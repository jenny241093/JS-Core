const handlers = {};
$(() => {
    const app = Sammy('#root', function() {
        this.use('Handlebars', 'hbs');

    });
    app.run();
})