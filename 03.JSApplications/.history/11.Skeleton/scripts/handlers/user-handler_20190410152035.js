handlers.getLogin = function(ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('templates/login.hbs');
    }).catch(function(err) {
        console.log(err);

    })
}
handlers.getRegister = function(ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('templates/register.hbs');
    }).catch(function(err) {
        console.log(err);

    })
}
handlers.loginUser = function(ctx) {

}