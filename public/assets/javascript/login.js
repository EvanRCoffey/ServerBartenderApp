//This allows the slideout navbar to function.
$(".button-collapse").sideNav();

// $('.loginSubmitBtn').on('click', function(event) {
//     event.preventDefault();

//     //Grab login data from form.
//     var userLogin = {
//         email: $("#email").val().trim(),
//         password: $("#password").val().trim()
//     };
//     // Send object via AJAX post
//     $.post("/login", userLogin)
//         //Once sent deal with successful/unsuccessful login
//         .done(function(data) {
//             document.write(data) 
//         });
// })