handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    petService.getDashboard()
        .then(function(res) {
            let userId = sessionStorage.getItem('id');
            let pets = res;
            console.log(pets);

            pets.forEach((pet) => pet.isCreator = pet._acl.creator !== userId);

            context.pets = pets;

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function() {
                this.partial('./templates/pet/allPets.hbs');
            }).catch(function(error) {
                notify.handleError(error);
            })
        });
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');



};