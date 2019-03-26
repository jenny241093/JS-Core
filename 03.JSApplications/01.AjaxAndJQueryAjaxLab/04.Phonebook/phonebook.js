const baseUrl = 'https://phonebook-a84ef.firebaseio.com/.json';

function btnLoad() {

    $.ajax({
        type: "get",
        url: baseUrl,
        success: onContactsLoad
    });

    function onContactsLoad(data) {
        $phonebook = $('#phonebook');
        Object.entries(data).forEach(element => {
            $li = $('<li>');
            $li.text(`${element[1].person}: ${element[1].phone}`);
            $phonebook.append($li);
        });

        console.log(data);
    }


}

function onCreateContact() {
    $.ajax({
        type: "POST",
        url: baseUrl,
        data: JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        }),

        success: function(response) {
            console.log(response);
        }
    });
}