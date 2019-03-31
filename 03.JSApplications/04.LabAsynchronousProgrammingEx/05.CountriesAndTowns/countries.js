class Country {
    constructor(country) {
        this.country = country;
        this.cities = [];
    }
}

function attachEvents() {
    let baseUrl = `https://baas.kinvey.com/appdata/kid_rJP-cWMdE/`

    const kinveyUsername = 'guest';
    const kinveyPassword = 'guest';
    const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`);
    const authHeaders = {
        Authorization: 'Basic ' + base64auth
    };
    let countriesAndCities = [];
    $(`.add`).on('click', createCountry);

    async function createCountry() {
        console.log('add');

        let country = new Country($(`#addForm > .country`).val());
        let city = $(`#addForm > .city`).val();
        let data = {};
        let countryId = '';

    }
}