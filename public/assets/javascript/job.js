$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

//This allows the slideout navbar to function.
$(".button-collapse").sideNav();

// $('.jobSubmitBtn').on('click', function(event) {
//     event.preventDefault();
//     console.log(event);

//     var startDate = $("#startDate").val().trim();
//     var endDate = $("#endDate").val().trim();
//     var wage = $("#wage").val().trim();
//     //var userJobMenu = userJobMenu JSON location
//     var comments = $("#comments").val().trim();

//     //Create new user object.
//     var newJob = {
//         startDate:startDate,
//         endDate:endDate,
//         wage:wage,
//         //userJobMenu:userJobMenu,
//         comments:comments,
//         restaurant_id:0,
//         user_id:0
//     };
//     // Send object via AJAX post
//     $.post("/newJob", newJob)
//     //Once sent deal with successful/unsuccessful signup.
//     .done(function(data) {
//         console.log(data);
//     });
// });