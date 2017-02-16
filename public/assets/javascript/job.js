$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

//This allows the slideout navbar to function.
$(".button-collapse").sideNav();

$('.jobSubmitBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

	var restaurant_id = $("#restaurant_id").val().trim();
    var user_id = $("#user_id").val().trim();
    var startDate = $("#startDate").val().trim();
    var endDate = $("#endDate").val().trim();
    var wage = $("#wage").val().trim();
    var isReal = $("#isReal1").val().trim(); //Not working either
    //var userJobMenu = userJobMenu JSON location
    var comments = $("#comments").val().trim();

    //Create new user object.
    var newJob = {
        restaurant_id:restaurant_id,
        user_id:user_id,
        startDate:startDate,
        endDate:endDate,
        wage:wage,
        isReal:isReal,
        //userJobMenu:userJobMenu,
        comments:comments
    };
    // Send object via AJAX post
    $.post("/newJob", newJob)
    //Once sent deal with successful/unsuccessful signup.
    .done(function(data) {
        console.log(data);
    });
});