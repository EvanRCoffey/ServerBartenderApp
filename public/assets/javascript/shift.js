//////////////////////////////
//EDIT SHIFT
//////////////////////////////

$('.shiftEditBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

    var dateToEdit = $("#dateToEdit").val().trim();

    //Create new user object.
    var dateObj = {
        id: 9000,
        dateToEdit:dateToEdit,
        timeIn: 1
    }

    var matchArray = [];

    //Search database for any entries where date === dateToEdit.  For each match, add an object to matchArray which contains that match's id, date, and timeIn.

    if (matchArray.length === 0) {
        //Notify user that there are no shifts saved for that date
    }
    else if (matchArray.length === 1) {
        //Load shiftUpdate.html and populate its form with the data from the shift with the id held at matchArray[0]
    }
    else if (matchArray.length > 1) {
        var inTimes = [];
        for (var i = 0; i<matchArray.length; i++) {
            inTimes.append(matchArray[i].timeIn);
        }
        //Load a dropdown for the user to select which of the in-times they want.  
        //Load shiftUpdate.html and populate its form with the data from the shift with the id held at matchArray[userSelection]
    }
}

// //////////////////////////////
// //DELETE SHIFT
// //////////////////////////////

// $('.shiftDeleteBtn').on('click', function(event) {
//     event.preventDefault();
//     console.log(event);

//     var dateToDelete = $("#dateToDelete").val().trim();

//     //Create new user object.
//     var dateObj = {
//         id: 9000,
//         dateToDelete:dateToDelete,
//         timeIn: 1
//     }

//     var matchArray = [];

//     //Search database for any entries where date === dateToDelete.  For each match, add an object to matchArray which contains that match's id, date, and timeIn.

//     if (matchArray.length === 0) {
//         //Notify user that there are no shifts saved for that date
//     }
//     else if (matchArray.length === 1) {
//         //Verify user selection
//         //If the user cancelled, report "delete cancelled"
//         //Otherwise, delete the selected entry (OR JUST FLAG IT AS DO_NOT_USE), and report "delete successful"
//     }
//     else if (matchArray.length > 1) {
//         var inTimes = [];
//         for (var i = 0; i<matchArray.length; i++) {
//             inTimes.append(matchArray[i].timeIn);
//         }
//         //Load a dropdown for the user to select which of the in-times they want.  
//         //Verify user selection
//         //If the user cancelled, report "delete cancelled"
//         //Otherwise, delete the selected entry (OR JUST FLAG IT AS DO_NOT_USE), and report "delete successful"
//     }
// }

//////////////////////////////
//SUBMIT NEW SHIFT
//////////////////////////////

$('.shiftSubmitBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

    var largestTip = $("#largestTip").val().trim();
    var smallestTip = $("#smallestTip").val().trim();
    var stiffed = $("#stiffed").val().trim();
    var bwl = $("#bwl").val().trim();
    var sales = $("#sales").val().trim();
    var tipout = $("#tipout").val().trim();
    var tipPercent = $("#tipPercent").val().trim();
    var ppa = $("#ppa").val().trim();
    var comments = $("#comments").val().trim();
    var breakthroughs = $("#breakthroughs").val().trim();
    var shiftDate = $("#shiftDate").val().trim();

    var inTime = 0; //Get these two working
    var outTime = 1; //Get these two working

    var shiftType = $("#shiftType").val().trim(); 

    var isReal = $("#isReal1").val().trim(); //Not working either

    var restaurant_id = $("#restaurant_id").val().trim();
    var user_id = $("#user_id").val().trim();

    //Create new user object.
    var newShift = {
        largestTip:largestTip,
        smallestTip:smallestTip,
        stiffed:stiffed,
        bwl:bwl,
        sales:sales,
        tipout:tipout,
        tipPercent:tipPercent,
        ppa:ppa,
        comments:comments,
        breakthroughs:breakthroughs,
        shiftDate:shiftDate,
        inTime:inTime,
        outTime:outTime,
        shiftType:shiftType,
        isReal:isReal,
        restaurant_id:restaurant_id,
        user_id:user_id
    };
    // Send object via AJAX post
    $.post("/newShift", newShift)
    //Once sent deal with successful/unsuccessful signup.
    .done(function(data) {
        console.log(data);
    });
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

//This allows the slideout navbar to function.
$(".button-collapse").sideNav();








