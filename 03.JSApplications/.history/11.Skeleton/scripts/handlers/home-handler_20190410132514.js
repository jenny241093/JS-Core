handlers.getHome = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
}