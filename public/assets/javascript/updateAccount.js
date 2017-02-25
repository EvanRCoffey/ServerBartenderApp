function validateForm() {
    var password = $("#password").val().trim()
    var passwordCheck = $("#passwordCheck").val().trim()

    if (password !== passwordCheck) {
        displayErrorMessage()
        return false
    }
}

function displayErrorMessage() {
    $('form').append('<p class="signUpError">Password does not match. Please Try again.</p>')
}