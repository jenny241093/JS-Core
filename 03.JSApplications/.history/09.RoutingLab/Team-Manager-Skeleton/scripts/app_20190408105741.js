$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');

        this.get('#/home', displayHome);
        this.get('#/about', displayAbout);
        this.get('#/login', displayLoginForm);
        this.get('#/register', displayRegisterForm);

        this.post('#/login', login);
    });

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

function displayAbout() {
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/about/about.hbs');
    })
}

function displayLoginForm() {
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        loginForm: './templates/login/loginForm.hbs'
    }).then(function() {
        this.partial('./templates/login/loginPage.hbs')
    })
}

function displayRegisterForm() {
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        registerForm: './templates/register/registerForm.hbs'
    }).then(function() {
        this.partial('./templates/register/registerPage.hbs')
    })
}

function login(context) {
    console.log(context);
    this.loggedIn = !!sessionStorage.getItem('authtoken');
    this.username = sessionStorage.getItem('username');
    let { username, password } = context.params;
    auth.login(username, password)
        .then(function(res) {
            auth.saveSession(res);
            auth.showInfo('Login Successful');
        });


}