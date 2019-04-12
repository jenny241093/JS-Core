const userService = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }
    return {
        isAuth
    }
})()