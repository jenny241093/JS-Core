handlers.getAddFlight = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');


    ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        })
        .then(function() {
            this.partial('./templates/airline/addFlight.hbs');
        })
        .catch(function(err) {
            notifications.handleError(err);
        });
};
handlers.addFlight = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');


    let data = {...ctx.params };
    console.log(data);


    airlineService.addFlight(data)
        .then(function() {
            notifications.showInfo('Flight created.');

            ctx.redirect('#/home');
        })
        .catch(function(error) {
            notifications.handleError(error);
        });
};

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

handlers.getDetails = function(ctx) {
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

            ctx.isCreator = res.seller === ctx.username;
            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function() {

                    this.partial('./templates/car/details.hbs')

                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        })
};

handlers.getMyCars = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let userId = sessionStorage.getItem('id');


    carService.getMyCars()
        .then(function(res) {

            let cars = res;

            cars.forEach((car) => car.isCreator = car._acl.creator === userId);

            ctx.cars = cars;

            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                })
                .then(function() {

                    this.partial('./templates/car/car-listing.hbs')

                })
                .catch(function(error) {
                    notifications.handleError(error);
                })
        })
};

handlers.deleteCar = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    carService.deleteCar(id)
        .then(function() {

            notifications.showInfo('Car removed successfully!');

            ctx.redirect('#/home');
        })
        .catch(function(error) {
            notifications.handleError(error);
        })

};