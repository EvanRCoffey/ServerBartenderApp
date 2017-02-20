//This allows the slideout navbar to function.
$(".button-collapse").sideNav();

$('.restaurantSubmitBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

    var restaurant_name = $("#restaurant_name").val().trim();
    //var defaultMenu = defaultMenu JSON location
    
    //Create new user object.
    var newRestaurant = {
        restaurant_name:restaurant_name,
        //defaultMenu:defaultMenu,
    };
    // Send object via AJAX post
    $.post("/newRestaurant", newRestaurant)
    //Once sent deal with successful/unsuccessful signup.
    .done(function(data) {
        console.log(data);
    });
});