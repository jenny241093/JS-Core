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
    }).then(function() {
        this.partial('./templates/pet/createPet.hbs');
    }).catch(function(error) {
        notify.handleError(error);
    })

};
handlers.createPet = function(context) {
    let data = {...context.params, likes: 0 };
    songService.createPet(data)
        .then(function(res) {

            notify.showInfo('Pet created successfully.');
            context.redirect('#/dashboard');
        })
        .catch(function(error) {
            notify.handleError(error);
        });
};