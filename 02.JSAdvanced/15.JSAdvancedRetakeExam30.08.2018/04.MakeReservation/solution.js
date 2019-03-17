function makeReservation(container) {
    let submitBtn = $('#submit');
    let editBtn = $('#edit');
    let continueBtn = $('#continue');
    submitBtn.on('click', submit);

    function submit() {
        let $fullName = $('#fullName');
        let $email = $('#email');
        let $phoneNumber = $('#phoneNumber');
        let $address = $('#address');
        let $postalCode = $('#postalCode');
        let $ul = $('#infoPreview');
        if ($fullName.val() && $email.val()) {

            $ul.append($(`<li>Name: ${$fullName.val()}</li>`));
            $ul.append($(`<li>E-mail: ${$email.val()}</li>`));
            $ul.append($(`<li>Phone: ${$phoneNumber.val()}</li>`));
            $ul.append($(`<li>Address: ${$address.val()}</li>`));
            $ul.append($(`<li>Postal Code: ${$postalCode.val()}</li>`));
            submitBtn.prop('disabled', true);
            editBtn.prop('disabled', false);
            continueBtn.prop('disabled', false);
            $fullName.val('');
            $email.val('');
            $phoneNumber.val('');
            $address.val('');
            $postalCode.val('');
            editBtn.on('click', edit);
            continueBtn.on('click', continueFunc);

            function continueFunc() {
                submitBtn.prop('disabled', true);
                editBtn.prop('disabled', true);
                continueBtn.prop('disabled', true);
                let $container = $('#container').append($('<h2>Payment details</h2>'));
                let $paymentOptions = $('<select>').attr('id', 'paymentOptions').addClass('custom-select');
                let $optionSelected = $('<option selected disabled hidden>Choose</option>');
                let $optionCard = $('<option value = "creditCard">Credit Card</option>');
                let $optionBank = $('<option value = "bankTransfer">Bank Transfer</option>');
                let $extraDetails = $('<div>').attr('id', 'extraDetails');
                $container.append($paymentOptions);
                $paymentOptions.append($optionSelected);
                $paymentOptions.append($optionCard);
                $paymentOptions.append($optionBank);
                $container.append($extraDetails);
                let $checkOutBtn = $('<button id="checkOut">Check Out</button>');
                $paymentOptions.change(function() {
                    let $selectedOption = $("#paymentOptions option:selected").text();
                    if ($selectedOption === 'Credit Card') {
                        console.log($selectedOption);
                        console.log();

                        let cardNumber = $('<div class="inputLabel">Card Number<input></div><br>');
                        let expDate = $('<div class="inputLabel">Expiration Date<input></div><br>');
                        let securityNumbers = $('<div class="inputLabel">Security Numbers<input></div><br>');
                        $extraDetails.append(cardNumber);
                        $extraDetails.append(expDate);
                        $extraDetails.append(securityNumbers);
                        $extraDetails.append($checkOutBtn);


                    } else if ($selectedOption === 'Bank Transfer') {
                        let $paragraph = $('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>');
                        $extraDetails.append($paragraph);
                        $extraDetails.append($checkOutBtn);

                    }
                    $checkOutBtn.on('click', checkOut);

                    function checkOut() {
                        $('#wrapper').remove();
                        let $wrapper = ('<div id ="wrapper">');
                        $('body').append($wrapper);
                        let h = $('<h4>Thank you for your reservation!</h4>');
                        $('#wrapper').append(h);




                    }

                });

            }

            function edit() {
                submitBtn.prop('disabled', false);

                let name = $ul.find('li').eq(0).text().split(': ')[1];
                let email = $ul.find('li').eq(1).text().split(': ')[1];
                let phoneNumber = $ul.find('li').eq(2).text().split(': ')[1];
                let address = $ul.find('li').eq(3).text().split(': ')[1];
                let postalCode = $ul.find('li').eq(4).text().split(': ')[1];
                $fullName.val(name);
                $email.val(email);
                $phoneNumber.val(phoneNumber);
                $address.val(address);
                $postalCode.val(postalCode);
                $('#infoPreview li').remove();
                editBtn.prop('disabled', true);
                continueBtn.prop('disabled', true);

            }
        }
    }

}