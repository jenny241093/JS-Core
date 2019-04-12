handlers.getLogin = function(ctx) {
    ctx.loadPartials({
        header: '.templates/common/header.hbs',
        footer: '.templates/common/header.hbs'
    }).then(function() {
        this.partial('templates/login.hbs');
    }).catch(function(err) {
        console.log(err);

    })
}