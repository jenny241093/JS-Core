handlers.getAllCars = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');



    carService.getAllCars().then(function(res) {
        let userId = sessionStorage.getItem('id');

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
            footer: './templates/common/footer.hbs'
        })
        .then(function() {
            this.partial('./templates/car/createCarListing.hbs');
        })
        .catch(function(err) {
            notifications.handleError(err);
        });
};

handlers.getEditListing = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    carService.getACar(id)
        .then(function(res) {

            ctx.title = res.title;
            ctx.description = res.description;
            ctx.brand = res.brand;
            ctx.model = res.model;
            ctx.year = res.year;
            ctx.fuel = res.fuel;
            ctx.imageUrl = res.imageUrl;
            ctx.price = res.price;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function() {
                    this.partial('./templates/car/editListing.hbs');
                })
                .catch(function(err) {
                    notifications.handleError(err);
                });
        });
};


handlers.createListing = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');


    let data = {...ctx.params };
    console.log(data);

    data.seller = sessionStorage.getItem('username');


    if (data.title.length > 33 || data.title === '') {
        notifications.showError('The title length must not exceed 33 characters and should be at least 1');
    } else if (data.description.length < 30 || data.description.length > 450) {
        notifications.showError('The description length must not exceed 450 characters and should be at least 30!')
    } else if (data.brand.length > 11 || data.fuel.length > 11 || data.model.length > 11 || data.brand === '' || data.fuel === '' || data.model === '') {
        notifications.showError('The brand, fuel and model length must not exceed 11 characters and should be at least 1');
    } else if (data.model.length < 4) {
        notifications.showError('The model length should be at least 4 characters!')
    } else if (data.year.length !== 4 || data.year === '') {
        notifications.showError('The year must be only 4 chars long!')
    } else if (Number(data.price) > 1000000 || data.price === '') {
        notifications.showError('The maximum price is 1000000$ and should not be empty')
    } else if (!data.imageUrl.startsWith('http')) {
        notifications.showError('Link url should always start with “http”.')
    } else {

        carService.createListing(data)
            .then(function() {
                notifications.showInfo('listing created.');

                ctx.redirect('#/allCars');
            })
            .catch(function(error) {
                notifications.handleError(error);
            });
    }

};
handlers.editListing = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let id = ctx.params.carId;

    let data = {...ctx.params };
    console.log(data);

    data.seller = sessionStorage.getItem('username');


    if (data.title.length > 33 || data.title === '') {
        notifications.showError('The title length must not exceed 33 characters and should be at least 1');
    } else if (data.description.length < 30 || data.description.length > 450) {
        notifications.showError('The description length must not exceed 450 characters and should be at least 30!')
    } else if (data.brand.length > 11 || data.fuel.length > 11 || data.model.length > 11 || data.brand === '' || data.fuel === '' || data.model === '') {
        notifications.showError('The brand, fuel and model length must not exceed 11 characters and should be at least 1');
    } else if (data.model.length < 4) {
        notifications.showError('The model length should be at least 4 characters!')
    } else if (data.year.length !== 4 || data.year === '') {
        notifications.showError('The year must be only 4 chars long!')
    } else if (Number(data.price) > 1000000 || data.price === '') {
        notifications.showError('The maximum price is 1000000$ and should not be empty')
    } else if (!data.imageUrl.startsWith('http')) {
        notifications.showError('Link url should always start with “http”.')
    } else {

        carService.editListing(id, data)
            .then(function() {
                notifications.showInfo('listing created.');

                ctx.redirect('#/allCars');
            })
            .catch(function(error) {
                notifications.handleError(error);
            });
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