function attachEvents() {
    const kinveyAppId = 'kid_rJP-cWMdE';
    const serviceUrL = `https://baas.kinvey.com/appdata/${kinveyAppId}`;
    const kinveyUsername = 'guest';
    const kinveyPassword = 'guest';
    const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`);
    const authHeaders = { 'Authorization': 'Basic ' + base64auth };

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPost);

    function loadPosts() {
        console.log('ok');
        let loadPostsRequest = {
            url: serviceUrL + "/posts",
            headers: authHeaders,
        };
        $.ajax(loadPostsRequest)
            .then(displayPosts)
            .catch(displayError);
    }

    function viewPost() {
        let postId = $("#posts option:selected").val();
        console.log('postId:', postId);

        let loadCurrentP = {
            url: serviceUrL + `/posts/${postId}`,
            headers: authHeaders,
        };
        let loadCurrentComments = {
            url: `https://baas.kinvey.com/appdata/kid_rJP-cWMdE/comments?query={"post_id":"${postId}"}`,
            headers: authHeaders
        };
        $.ajax(loadCurrentP)
            .then(displayCurrentPost)
            .catch(displayError);
        $.ajax(loadCurrentComments)
            .then(displayComments)
            .catch();
    }

    function displayComments(comments) {
        console.log('comments', comments);
        for (const c of comments) {
            let commentItem = $("<li>")
                .text(c.text);
            $("#post-comments")
                .append(commentItem);

        }
    }

    function displayCurrentPost(post) {
        console.log('currentPost', post);
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);
    }

    function displayPosts(posts) {
        console.log(posts);
        for (const post of Object.values(posts)) {
            console.log(post);
            let select = $('#posts');
            select.append($('<option>', { value: post._id, text: post.title }));
        }
    }


    function displayError(err) {
        let errorDiv = $("<div>").text("Error: " +
            err.status + ' (' + err.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function() {
            $(errorDiv).fadeOut(function() {
                $(errorDiv).remove();
            });
        }, 3000);
    }

}