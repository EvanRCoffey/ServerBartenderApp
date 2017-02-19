//////////////////////////////
//SUBMIT SHIFT
//////////////////////////////

$('.shiftEditBtn2').on('click', function(event) {
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
        restaurant_id:restaurant_id,
        user_id:user_id
    };
    console.log("newShift:");
    console.log(newShift);
    // Update object via AJAX post
    $.post("/editShift", newShift)
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








