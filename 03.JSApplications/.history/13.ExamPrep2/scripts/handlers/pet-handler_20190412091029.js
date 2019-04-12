handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    petService.getDashboardAndAllPets()
        .then(function(res) {

            let userId = sessionStorage.getItem('id');
            let pets = res;
            pets.forEach((pet) => pet.isCreator = pet._acl.creator === userId);
            pets = pets.filter(p => p.isCreator === false);
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
    petService.createPet(data)
        .then(function(res) {
            notify.showInfo('Pet created successfully.');
            context.redirect('#/dashboard');
        })
        .catch(function(error) {
            notify.handleError(error);
        });
};
handlers.getMyPets = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');

    petService.getDashboardAndAllPets()
        .then(function(res) {

            let userId = sessionStorage.getItem('id');
            let pets = res;
            pets.forEach((pet) => pet.isCreator = pet._acl.creator === userId);
            pets = pets.filter(p => p.isCreator === true);
            context.pets = pets;

            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                pet: './templates/pet/myPet.hbs'
            }).then(function() {
                this.partial('./templates/pet/myPets.hbs');
            }).catch(function(error) {
                notify.handleError(error);
            })
        });

};