handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/pet/allPets.hbs');
    })

};