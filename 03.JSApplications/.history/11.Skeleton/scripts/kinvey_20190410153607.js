const kinvey = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_rJP-cWMdE'; // APP KEY HERE
    const APP_SECRET = '408925ba53894e62ad7ac62011512a8c'; // APP SECRET HERE

    function makeAuth(auth) {
        if (auth == 'basic') {
            return {
                'Authorization': `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`
            }
        } else {
            return {
                'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
            }
        }
    }

    function makeRequest(method, collection, endpoint, auth) {
        return {
            url: BASE_URL + collection + '/' + APP_KEY + '/' + endpoint,
            method,
            headers: makeAuth(auth)
        }
    }
    return {
        makeAuth,
        makeRequest,
    }
})()