//This prevents the calendar from automatically closing on 2nd selection
$('.datepicker').on('mousedown', function(event){ event.preventDefault(); })

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dddd mmm dd, yyyy',
    formatSubmit: 'yyyy-mm-dd',
    hiddenName:true
});

var Calinput = $('.datepicker').pickadate()
var picker = Calinput.pickadate('picker')
//Defaults to today
picker.set('select', moment().format('yyyy-mm-dd'), { format: 'yyyy-mm-dd' })

//Checks for hidden value passed via handlebars then updates.
if($('#goalDeadlineHidden').val()){
picker.set('select', $('#goalDeadlineHidden').val(), { format: 'yyyy-mm-dd' })
}


//Allows the delete modal to open on the goal editor page.
$('.modal').modal();

function closeModal(){
$('#modal1').modal('close');
}



// $('.jobSubmitBtn').on('click', function(event) {
//     event.preventDefault();
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
//     .done(function(data) {});
// });