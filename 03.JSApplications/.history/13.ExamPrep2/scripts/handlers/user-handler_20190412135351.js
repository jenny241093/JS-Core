handlers.getRegister = function(ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/user/register.hbs');
    }).catch(function(err) {
        notify.showError(err);
    });
}

handlers.getLogin = function(ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/user/login.hbs');
    }).catch(function(err) {
        notify.showError(err);
    });
}

handlers.registerUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    if (username.length < 3) {
        notify.showError('Username must be at least 3 symbols');
        ctx.redirect('#/register');
        return;
    }
    if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols');
        ctx.redirect('#/register');
        return;
    }

    userService.register(username, password).then((res) => {
        userService.saveSession(res);
        notify.showSuccess('User registration successful');
        ctx.redirect('#/home');
    }).catch(function(err) {
        notify.showError(err);
    });
}

handlers.logoutUser = function(ctx) {
    userService.logout().then(() => {
        sessionStorage.clear();
        notify.showSuccess('Logout successful.');
        ctx.redirect('#/home');
    })
}

handlers.loginUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;

    if (username.length < 3) {
        notify.showError('Username must be at least 3 symbols');
        ctx.redirect('#/register');
        return;
    }
    if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols');
        ctx.redirect('#/register');
        return;
    }
    userService.login(username, password).then((res) => {
        userService.saveSession(res);
        notify.showSuccess('Login successful');
        ctx.redirect('#/dashboard');
    }).catch(function(err) {
        notify.showError(err);
    });
}