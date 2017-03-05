//Checks for hidden value passed via handlebars then updates.
if($('#hiddenCal').val()){
picker.set('select', $('#hiddenCal').val(), { format: 'yyyy-mm-dd' })
}

$(document).ready(function() {
    $('select').material_select();
    // prepareJobDropdown();
});


populateDropdown('#JobIdHidden', '#jobID')

function populateDropdown(hiddenTarget, dropdownTarget) {
    //checks if exists.
    if ($(hiddenTarget).val()) {
        var setValue = $(hiddenTarget).val()
        //Sets the value in the dropdown based on the prepopulated hidden value.
        $(dropdownTarget + ' option[value =' + setValue + ']').prop('selected', true);
    }
}

//Allows the delete modal to open on the shift editor page.
$('.modal').modal();

function closeModal(){
$('.modal').modal('close');
}

var timeConfirmed = false

function shiftValidate(){
    if(inTime === outTime){
        $('#timeEqual').modal('open');
        return false
    } else if (moment(inTime, 'HH:mm:ss').isAfter(moment(outTime, 'HH:mm:ss')) && !timeConfirmed) { 
        $('#timeLess').modal('open');
        console.log('time less')
        return false
    }
}

$('.testButton').on('click', function(){
    var form = $('#menuForm').serializeArray()
    console.log(form)
})

