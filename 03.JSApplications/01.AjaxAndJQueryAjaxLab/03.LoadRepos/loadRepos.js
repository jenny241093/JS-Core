function loadRepos() {
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";

    $.ajax({
        type: "get",
        url: url,
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);

        }
    });
}