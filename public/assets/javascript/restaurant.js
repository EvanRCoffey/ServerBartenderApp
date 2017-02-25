// $('.restaurantSubmitBtn').on('click', function(event) {
//     event.preventDefault();
//     console.log(event);

//     var restaurant_name = $("#restaurant_name").val().trim();
//     //var defaultMenu = defaultMenu JSON location
    
//     //Create new user object.
//     var newRestaurant = {
//         restaurant_name:restaurant_name,
//         //defaultMenu:defaultMenu,
//         restaurant_id:0
//     };
//     // Send object via AJAX post
//     $.post("/newRestaurant", newRestaurant)
//     //Once sent deal with successful/unsuccessful signup.
//     .done(function(data) {
//         console.log(data);
//     });
// });