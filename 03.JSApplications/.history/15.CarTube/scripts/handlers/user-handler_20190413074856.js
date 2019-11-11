handlers.getRegister = function(ctx) {
    ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
        .then(function() {
            this.partial('./templates/register.hbs');
        })
        .catch(function(err) {
            notifications.handleError(err);
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
            notifications.handleError(err);
        });
};

handlers.registerUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let englishLettersOnly = /^[A-Za-z0-9]*$/;
    if (username.length < 3 || username === '') {
        notifications.showError('Username must be at least 3 symbols');
        ctx.redirect('#/register');
    } else if (password.length < 6 || password === '') {
        notifications.showError('Password must be at least 6 symbols');
        ctx.redirect('#/register');
    } else if (!englishLettersOnly.test(password) || !englishLettersOnly.test(username)) {
        notifications.showError('Username and password must contain only english letters.');
        ctx.redirect('#/register');
    } else {

        userService.register(username, password)
            .then((res) => {
                userService.saveSession(res);
                notifications.showInfo('User registration successful.');
                ctx.redirect('#/home');
            })
            .catch(function(err) {
                notifications.handleError(err);
            });
    }
};

handlers.logoutUser = function(ctx) {
    userService.logout()
        .then(() => {
            sessionStorage.clear();
            notifications.showInfo('Logout successful.');

            ctx.redirect('#/home');
        })
};

handlers.loginUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let englishLettersOnly = /^[A-Za-z0-9]*$/;

    if (username.length < 3 || username === '') {
        notifications.showError('Username must be at least 3 symbols');
        ctx.redirect('#/login');
    } else if (password.length < 6 || password === '') {
        notifications.showError('Password must be at least 6 symbols');
        ctx.redirect('#/login');
    } else if (!englishLettersOnly.test(password) || !englishLettersOnly.test(username)) {
        notifications.showError('Username and password must contain only english letters.');
        ctx.redirect('#/login');
    } else {

        userService.login(username, password)
            .then((res) => {
                userService.saveSession(res);
                notifications.showInfo('Login successful.');

                ctx.redirect('#/home');
            })
            .catch(function(err) {
                notifications.handleError(err);
            });
    }
};