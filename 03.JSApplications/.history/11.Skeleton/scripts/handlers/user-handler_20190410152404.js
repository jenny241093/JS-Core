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
    let username = ctx.params.username;
    let password = ctx.params.password;

    let repeatPassword = ctx.params.repeatPassword;
    if (repeatPassword !== password) {
        notifications.showError('Passwords must match');
        return;
    }
    userService.register(username, password).then((res) => {
        userService.saveSession(res);
        notifications.showSuccess('User registered successfully!');
        ctx.redirect('#/home');
    }).catch(function(err) {
        console.log(err);

    })
}