const userService = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(res) {

    }
    return {
        isAuth
    }
})()