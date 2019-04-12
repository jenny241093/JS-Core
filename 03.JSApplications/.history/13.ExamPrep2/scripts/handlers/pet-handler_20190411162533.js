handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    petService.getDashboard()
        .then(function(res) {
            let userId = sessionStorage.getItem('id');
            let pets = res;

            context.pets = pets;

            context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    pet: './templates/pet/pet.hbs'
                })
                .then(function() {
                    this.partial('./templates/pet/allPets.hbs');
                })
                .catch(function(error) {
                    notify.handleError(error);
                })
        });

};