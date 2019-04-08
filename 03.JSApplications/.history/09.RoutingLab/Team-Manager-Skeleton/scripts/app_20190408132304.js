$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');

        this.get('#/home', displayHome);
        this.get('#/about', displayAbout);
        this.get('#/login', displayLoginForm);
        this.get('#/register', displayRegisterForm);
        this.get('#/catalog', displayCatalog);
        this.get('#/logout', logout);
        this.get('#/create', displayCreateForm);

        this.post('#/login', login);
        this.post('#/register', register);
        this.post('#/create', createTeam);
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

function displayCreateForm() {
    this.loggedIn = !!sessionStorage.getItem('authtoken');
    this.username = sessionStorage.getItem('username');
    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        createForm: './templates/create/createForm.hbs'
    }).then(function() {
        this.partial('./templates/create/createPage.hbs')
    })
}

function login(context) {
    let that = this;

    let { username, password } = context.params;
    auth.login(username, password)
        .then(function(res) {
            auth.saveSession(res);
            auth.showInfo('Login Successful');
            that.redirect('#/home');
        })
        .catch(auth.handleError);
}

function logout() {

    let that = this;

    auth.logout().then(function(res) {
            sessionStorage.clear();
            auth.showInfo('Thank you for visiting our website. We hope to see you back soon.');
            that.redirect('#/home');
        })
        .catch(auth.handleError);
}

function register(context) {
    let that = this;
    let { username, password, repeatPassword } = context.params;
    auth.register(username, password, repeatPassword)
        .then(function(res) {
            console.log(res);

            auth.saveSession(res);
            auth.showInfo('Registered Successfully');
            that.redirect('#/home');
        })
        .catch(auth.handleError);
}

function createTeam(context) {
    let that = this;

    let { name, comment } = context.params;
    teamsService.createTeam(name, comment)
        .then(function(res) {
            console.log(res);
            teamsService.joinTeam(res._id)
                .then(function(updatedData) {
                    console.log(updatedData);

                    auth.saveSession(updatedData);
                    auth.showInfo('Team created successfully');
                    displayCatalog(context);;
                }).catch(auth.handleError);

        });
}

function displayCatalog(context) {

    teamsService.loadTeams()
        .then(function(data) {
            context.loggedIn = !!sessionStorage.getItem('authtoken');
            context.username = sessionStorage.getItem('username');
            context.hasNoTeam = !!sessionStorage.getItem('teamId');
            context.teams = data;
            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                team: './templates/catalog/team.hbs'
            }).then(function() {
                this.partial('./templates/catalog/teamCatalog.hbs')
            })
        })

}