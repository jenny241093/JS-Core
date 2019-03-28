function attachEvents() {
    const baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    $('#btnLoad').on('click', btnLoad);
    $('#btnCreate').on('click', onCreateContact);

    function btnLoad() {

        $.ajax({
            type: "get",
            url: baseUrl,
            success: onContactsLoad
        });

        function onContactsLoad(data) {

            $phonebook = $('#phonebook');
            $phonebook.empty();
            Object.entries(data).forEach(element => {
                console.log(element[0]);

                $li = $('<li>');
                $li.text(`${element[1].person}: ${element[1].phone}`);
                let deleteBtn = $('<button>[Delete]</button>)');
                $li.append(deleteBtn);
                $phonebook.append($li);
                let id = element[0];
                let delUrd = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`
                console.log(delUrd);

                deleteBtn.on("click", deletePerson);

                function deletePerson() {
                    $.ajax({
                        type: "DELETE",
                        url: `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`,
                        success: () => {
                            $('#btnLoad').click();
                        }
                    });
                }
            });

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
                $('#person').val('');
                $('#phone').val('');
                $('#btnLoad').click();
            }
        });
    }
}