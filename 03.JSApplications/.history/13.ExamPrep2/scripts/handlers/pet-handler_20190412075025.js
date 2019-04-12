handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    petService.getDashboardAndAllPets()
        .then(function(res) {
            console.log('res', res);

            let userId = sessionStorage.getItem('id');
            let pets = res;
            console.log(pets);

            pets.forEach((pet) => pet.isCreator = pet._acl.creator !== userId);

            context.pets = pets;

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                pet: './templates/pet/pet.hbs'
            }).then(function() {
                this.partial('./templates/pet/allPets.hbs');
            }).catch(function(error) {
                notify.handleError(error);
            })
        });

};
handlers.getCreatePet = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');



    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        pet: './templates/pet/pet.hbs'
    }).then(function() {
        this.partial('./templates/pet/allPets.hbs');
    }).catch(function(error) {
        notify.handleError(error);
    })

};