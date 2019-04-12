const userService = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
    }
    return {
        isAuth,
        saveSession
    }
})()