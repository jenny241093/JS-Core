handlers.getHome = function(ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    if (userService.isAuth) {
        postService.getAllPosts().then((posts) => {
            console.log(posts);
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function() {
                this.partial('templates/home.hbs');
            }).catch(function(err) {
                console.log(err);
            });
        })
    } else {
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('templates/home.hbs');
        }).catch(function(err) {
            console.log(err);
        });
    }

}