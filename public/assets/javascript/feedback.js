function validateForm() {
    if ($('#comments').val() === "") {
        displayErrorMessage()
        return false
    }
}
function displayErrorMessage() {
    $('form').append('<p class="signUpError">Please write a message before sending.</p>')
}