handlers.getRegister = function(ctx) {
    ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
        .then(function() {
            this.partial('./templates/register.hbs');
        })
        .catch(function(err) {
            notify.handleError(err)
        });
};

handlers.getLogin = function(ctx) {
    ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
        .then(function() {
            this.partial('./templates/login.hbs');
        })
        .catch(function(err) {
            notify.handleError(err)
        });
};

handlers.registerUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;

    if (username.length < 3) {
        notify.showError('Username must be at least 3 symbols.')
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols.')
    } else {
        userService.register(username, password)
            .then((res) => {
                userService.saveSession(res);
                notify.showInfo('User registration successful.');

                ctx.redirect('#/home');
            })
            .catch(function(err) {
                notify.handleError(err)
            });
    }
};

handlers.logoutUser = function(ctx) {
    userService.logout()
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/login');
        })
};

handlers.loginUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    if (username.length < 3) {
        notify.showError('Username must be at least 3 symbols.')
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols.')
    } else {
        userService.login(username, password)
            .then((res) => {

                userService.saveSession(res);
                notify.showInfo('Login successful.');

                ctx.redirect('#/home');

            })
            .catch(function(err) {
                username.value = '';
                password.value = '';
                notify.handleError(err)
            });
    }
};