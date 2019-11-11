handlers.getHome = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    airlineService.getAllFlights().then(function(res) {
        let flights = res;
        ctx.flights = flights;
        ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            })
            .then(function() {
                this.partial('templates/home.hbs');
            })
            .catch(function(err) {
                notifications.showError(err);
            });
    })

};