function validate() {

    $('#company').change(function(e) {
        if ($('#company').is(':checked')) {
            $('#companyInfo').show();

        } else {

            $('#companyInfo').hide();

        }
    });

    $('#submit').click(function(e) {
        e.preventDefault();
        let userName = $('#username').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        let email = $('#email').val();

        if (!validateUsername(userName)) {
            $('#username').css('border-color', 'red');
        } else {
            $('#username').css('border-color', 'none');
        }
        if (!validatePassword(password) || !matchPasswords(password, confirmPassword)) {
            $('#password').css('border-color', 'red');
        } else {
            $('#password').css('border-color', 'none');
        }

        if (!validatePassword(confirmPassword) || !matchPasswords(password, confirmPassword)) {
            $('#confirm-password').css('border-color', 'red');
        } else {
            $('#confirm-password').css('border-color', 'none');
        }
        if (!emailValidation(email)) {
            $('#email').css('border-color', 'red');
        } else {
            $('#email').css('border-color', 'none');
        }

        if (validateUsername(userName) && validatePassword(password) && validatePassword(confirmPassword) &&
            matchPasswords(password, confirmPassword) && emailValidation(email)) {
            if ($('#company').is(':checked')) {
                let companyNumber = $('#companyNumber').val();
                if (!validateCompanyNumber(companyNumber)) {
                    $('#companyNumber').css('border-color', 'red');
                } else {
                    $('#companyNumber').css('border-color', 'none');
                    $('#valid').show();
                }
            } else {
                $('#valid').show();
            }
        }

        function validateUsername(username) {
            const regex = /^[A-Za-z0-9]{3,20}$/gm;
            return regex.test(username);
        }

        function validatePassword(password) {
            const regex = /^\w{5,15}$/gm;
            return regex.test(password);
        }

        function matchPasswords(pass, confirmPass) {
            return pass === confirmPass;
        }

        function emailValidation(email) {
            const regex = /^.*\@.*\..*$/gm;
            return regex.test(email);
        }

        function validateCompanyNumber(companyNumber) {
            const regex = /^[1-9][0-9]{3}$/gm;
            return regex.test(companyNumber);
        }
    });
}