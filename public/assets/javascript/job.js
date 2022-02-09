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
if($('#startDateHidden').val()){
picker.set('select', $('#startDateHidden').val(), { format: 'yyyy-mm-dd' })
}


//Allows the delete modal to open on the shift editor page.
$('.modal').modal();

function closeModal(){
$('#modal1').modal('close');
}