handlers.getAllCars = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');



    carService.getAllCars().then(function(res) {
        let userId = sessionStorage.getItem('id');
        console.log(userId);
        console.log(res);
        let cars = res;

        cars.forEach((car) => car.isCreator = car._acl.creator === userId);

        ctx.cars = cars;

        ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            })
            .then(function() {

                this.partial('./templates/car/car-listing.hbs')
            })
            .catch(function(error) {
                notifications.handleError(error);
            })
    })

};

handlers.getCreateListing = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        })
        .then(function() {

            this.partial('./templates/car/createCarListing.hbs')
        })
        .catch(function(error) {
            notifications.handleError(error);
        })

};
handlers.createListing = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let data = {...ctx.params };
    data.seller = sessionStorage.getItem('username');
    if (data.title.length > 33) {
        notifications.showError('The title length must not exceed 33 characters!');
    } else if (data.description.length > 450 || data.description.length < 30) {
        notifications.showError('The description length must not exceed 450 characters and should be at least 30!');
    } else if (data.brand.length > 11 || data.fuelType.length > 11 || data.model.length > 11) {
        notifications.showError('The brand,fuelType and model length must not exceed 11 characters!');
    } else if (data.model.length < 4) {
        notifications.showError('The model length should be at least 4 characters!');
    } else if (data.year.length != 4) {
        notifications.showError('The year must be only 4 chars long!');
    } else if (+data.price > 1000000) {
        notifications.showError('The maximum price is 1000000$');
    } else if (!data.imageURL.startsWith(`http`)) {
        notifications.showError('Link url should always start with “http”.');
    } else {

        carService.createCar(data)
            .then(function() {

                notifications.showInfo('Car created.');

                ctx.redirect('#/allCars');

            })
            .catch(function(error) {
                notifications.handleError(error);
            })
    }
};

handlers.getDashboard = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let filter = ctx.params.category.slice(1);

    petService.getAllPets(filter)
        .then(function(res) {
            let userId = sessionStorage.getItem('id');

            let pets = res;

            pets.forEach((pet) => pet.isCreator = pet._acl.creator === userId);

            ctx.pets = pets;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function() {

                    this.partial('./templates/pet/dashboard.hbs')

                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        })
};

handlers.getMyPets = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let userId = sessionStorage.getItem('id');


    petService.getMyPets(userId)
        .then(function(res) {

            ctx.myPets = res;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function() {

                    this.partial('./templates/pet/myPets.hbs')

                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        })
};

handlers.deletePet = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    petService.deletePet(id)
        .then(function() {

            notifications.showInfo('Pet removed successfully!');

            ctx.redirect('#/home');
        })
        .catch(function(error) {
            notifications.handleError(error);
        })

};

handlers.getPetDetails = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    petService.getPetDetails(id)
        .then(function(res) {
            let userId = sessionStorage.getItem('id');

            ctx.name = res.name;
            ctx.description = res.description;
            ctx.imageURL = res.imageURL;
            ctx.likes = res.likes;

            ctx.isCreator = res._acl.creator === userId;
            ctx.id = id;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function() {

                    this.partial('./templates/pet/petDetails.hbs');
                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        })
        .catch(function(error) {
            notifications.handleError(error);
        })
};

handlers.editPetInfo = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    petService.getPetDetails(id)
        .then(function(res) {
            let data = {...res };

            data.description = ctx.params.description;

            petService.editPet(id, data)
                .then(function() {
                    notifications.showInfo('Updated successfully!');

                    ctx.redirect('#/dashboard');
                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        });
};

handlers.likePet = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    petService.getPetDetails(id)
        .then(function(res) {
            let pet = res;

            let newLikes = Number(pet.likes) + 1;
            pet.likes = newLikes;

            petService.likePet(id, pet)
                .then(function() {
                    notifications.showInfo('Liked');

                    ctx.redirect('#/dashboard');
                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        });
};