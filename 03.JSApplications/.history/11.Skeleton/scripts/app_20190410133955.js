const handlers = {};
$(() => {
    const app = Sammy('#root', function() {
        this.use('Handlebars', 'hbs');

        this.get('/index.html', handlers.getHome);
    });

})
app.run();