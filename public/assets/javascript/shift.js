//This grabs a hidden value passed by handlebars and sets/formats the calendar to that value.
// $('.datepicker').pickadate('picker').set('select', $('#hiddenCal').val(), { format: 'dddd mmm dd, yyyy' })



//Checks for hidden value passed via handlebars then updates.
/*if($('#hiddenCal').val()){
picker.set('select', $('#hiddenCal').val(), { format: 'yyyy-mm-dd' })
}*/

$(document).ready(function() {
    $('select').material_select();
    // prepareJobDropdown();
    //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
    
    //This prevents the calendar from automatically closing on 2nd selection
    $('.datepicker').on('mousedown', function(event){ event.preventDefault(); })

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dddd mmm dd, yyyy',
    formatSubmit: 'yyyy-mm-dd',
    hiddenName:true
    });

    //var Calinput = $('.datepicker').pickadate()
    //var picker = Calinput.pickadate('picker')
    //Defaults to today
    //picker.set('select', moment().format('yyyy-mm-dd'), { format: 'yyyy-mm-dd' })
});

//dirty global vars for Time sliders
var inTime
var outTime
var timeStartArray = []


var timeConfirmed = false

//Allows the delete modal to open on the shift editor page.
$('.modal').modal();


fillStartArray()

console.log(timeStartArray)

populateDropdown('#shiftTypePopulate', '#shiftType')
populateDropdown('#JobIdHidden', '#jobID')

showOutTimeWithTimestamp($("#outTimeHidden").val());
showInTimeWithTimestamp($("#inTimeHidden").val());


//This function and the outTime function are expecting an int between 0 and 95
function showInTime(newValue) {
    $("#inTimeSpan").text("In-time: " + timeStartArray[newValue])
    inTime = moment(timeStartArray[newValue], 'LT').format('HH:mm:ss')
    $('#inTimeHidden').val(inTime)
}

function showOutTime(newValue) {
    $("#outTimeSpan").text("Out-time: " + timeStartArray[newValue])
    outTime = moment(timeStartArray[newValue], 'LT').format('HH:mm:ss')
    $('#outTimeHidden').val(outTime)
}

function showOutTimeWithTimestamp(newValue) {
    console.log(newValue)
    $("#outTimeSpan").text("Out-time: " + newValue)
    outTime = moment(newValue, 'LT').format('HH:mm:ss')
    console.log(outTime)
    $('#outTimeHidden').val(outTime)


    for (var i=0; i<timeStartArray.length; i++) {
        if (newValue == timeStartArray[i]) {
            console.log("outtime match");
            $('#outTime').val(i);
        }
    }
}

function showInTimeWithTimestamp(newValue) {
    console.log(newValue)
    $("#inTimeSpan").text("In-time: " + newValue)
    inTime = moment(newValue, 'LT').format('HH:mm:ss')
    console.log(inTime)
    $('#inTimeHidden').val(inTime)
    console.log(timeStartArray)

    for (var i=0; i<timeStartArray.length; i++) {
        if (newValue == timeStartArray[i]) {
            console.log("intime match")
            $('#inTime').val(i);
        }
    }
}

//This just fills the timeArray. I send the result to a global var so this function doesn't run everytime.
function fillStartArray(){
    //Push start time to array
    timeStartArray.push(moment().startOf('day').format('LT'))
    for (var i = 0; i < 95; i++) {
        timeStartArray.push(moment(timeStartArray[i], 'LT').add(15, 'minutes').format('LT'))
    }
}

function populateDropdown(hiddenTarget, dropdownTarget) {
    //checks if exists.
    if ($(hiddenTarget).val()) {
        var setValue = $(hiddenTarget).val()
        //Sets the value in the dropdown based on the prepopulated hidden value.
        $(dropdownTarget + ' option[value =' + setValue + ']').prop('selected', true);
    }
}

function closeModal(){
$('.modal').modal('close');
}

function shiftValidate(){
    if(inTime === outTime){
        $('#timeEqual').modal('open');
        return false
    } else if (moment(inTime, 'HH:mm:ss').isAfter(moment(outTime, 'HH:mm:ss')) && !timeConfirmed) { 
        $('#timeLess').modal('open');
        return false
    }
}

function submitForm(){
    timeConfirmed = true
    $('#shiftForm').submit();
}