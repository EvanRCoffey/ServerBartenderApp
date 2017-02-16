$('.shiftSubmitBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

    // var password = $("#password").val().trim()
    // var passwordCheck = $("#passwordCheck").val().trim()

    // if (password === passwordCheck) {
    //     //Create new user object.
    //     var newUser = {
    //         firstName: $("#first_name").val().trim(),
    //         email: $("#email").val().trim(),
    //         password: password
    //     };
    //     // Send object via AJAX post
    //     $.post("/newUser", newUser)
    //         //Once sent deal with successful/unsuccessful signup.
    //         .done(function(data) {
    //             console.log(data);
    //         });
    // } else {
    //     displayErrorMessage()
    // }
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

$(document).ready(function() {
    $('select').material_select();
  });

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [1020, 1320],
    connect: true,
    range: {
        'min': 0,
        'max': 1919
    }
})

function displayErrorMessage() {
    $('form').append('<p class="signUpError">Password does not match. Please Try again.</p>')
}

//This allows the slideout navbar to function.
$(".button-collapse").sideNav();