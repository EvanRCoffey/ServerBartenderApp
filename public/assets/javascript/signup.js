$('.signUpSubmitBtn').on('click', function(event) {
    event.preventDefault();

    var password = $("#password").val().trim()
    var passwordCheck = $("#passwordCheck").val().trim()

    if (password === passwordCheck) {
        //Create new user object.
        var newUser = {
            user_id: 9000,
            user_email: $("#email").val().trim(),
            user_name: $("#first_name").val().trim(),
            user_password: password,
            user_level: 9000,
            restaurant_name: "Flemings",
            isReal: false
        };
        // Send object via AJAX post
        $.post("/newUser", newUser)
            //Once sent deal with successful/unsuccessful signup.
            .done(function(data) {
                console.log(data);
            });
    } else {
        displayErrorMessage()
    }
});

function displayErrorMessage() {
    $('form').append('<p class="signUpError">Password does not match. Please Try again.</p>')
}

//This allows the slideout navbar to function.
$(".button-collapse").sideNav();
