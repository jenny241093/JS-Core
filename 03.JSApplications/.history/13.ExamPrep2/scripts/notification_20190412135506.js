const notifications = (() => {
    $(document).on({
        ajaxStart: () => $('#loadingBox').fadeIn(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    })

    function showSuccess(message) {
        let successBox = $('#infoBox');
        successBox.text(message);
        successBox.fadeIn();
        successBox.fadeOut(3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.fadeIn();
        errorBox.fadeOut(3000);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description)
    }

    return {
        showSuccess,
        showError,
        handleError
    }
})()