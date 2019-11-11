const carService = (() => {



    function getAllCars() {
        return kinvey.get('appdata', 'cars', 'kinvey');
    }

    function getACar(id) {
        return kinvey.get('appdata', `cars/${id}`, 'kinvey');
    }

    function editListing(id, data) {
        return kinvey.update('appdata', `cars/${id}`, 'kinvey', data);
    }

    function getMyCars(username) {
        console.log(username);

        return kinvey.get('appdata', `cars?query={"seller":${username}}&sort={"_kmd.ect": -1}`, 'kinvey');
    }

    function deleteCar(id) {
        return kinvey.remove('appdata', `cars/${id}`, 'kinvey');
    }

    return {

        getAllCars,
        getACar,
        editListing,
        getMyCars,
        deleteCar,

    }
})();