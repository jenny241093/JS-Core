handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    songService.getAllSongs()
        .then(function(res) {
            let userId = sessionStorage.getItem('id');
            let pets = res;

            context.pets = pets;

            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    pets: './templates/pet/allPets.hbs'
                })
                .then(function() {
                    this.partial('./templates/dashboard.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });

};