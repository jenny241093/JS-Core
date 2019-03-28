function attachEvents() {
    let url = 'https://messenger-87f04.firebaseio.com/.json';

    $('#submit').on('click', submitToDatabase);
    $('#refresh').on('click', refresh);

    function submitToDatabase() {
        console.log('submit');
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();

        let message = {
            author,
            content,
            timestamp
        };

        $.ajax({
            type: "post",
            url: url,
            data: JSON.stringify(message),
        });
    }

    function refresh() {
        let messageArea = $('#messages');
        let currentText = messageArea.text();
        $.ajax({
            type: "get",
            url: url,
            success: function(response) {

                for (const [key, value] of Object.entries(response)) {
                    currentText += `${value.author}: ${value.content}\n`;
                    messageArea.text(currentText);
                }
            }
        });

    }
}