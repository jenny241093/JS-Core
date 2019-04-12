handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function() {
        this.partial('./views/pet/allPets.hbs');
    })

};