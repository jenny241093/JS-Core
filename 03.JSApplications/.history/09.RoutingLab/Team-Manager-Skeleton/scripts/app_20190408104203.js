$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');
    });
    this.get('#/home', displayHome);


    app.run('#/home');
});

function displayHome() {
    this.loggedIn = !!sessionStorage.getItem('authtoken');
    this.username = sessionStorage.getItem('username');

    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/home/home.hbs');
    })
}