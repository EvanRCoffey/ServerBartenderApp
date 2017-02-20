//////////////////////////////
//EDIT SHIFT
//////////////////////////////

$('.shiftEditBtn').on('click', function(event) {
    event.preventDefault();

    var dateToEdit = $("#dateToEdit").val().trim();

    //Create new user object.
    var dateObj = {
        id: 9000,
        dateToEdit:dateToEdit,
        timeIn: 1
    };

    var matchArray = [];

    //Search database for any entries where date === dateToEdit.
    $.post("/shiftByDate", dateObj)
    .done(function(data) {
        //For each match, add an object to matchArray which contains that match's id, date, and timeIn.
        for (var i = 0; i<data.length; i++) {
            matchArray.push(data[i]);
        }

        //No matches?  Card.
        if (matchArray.length === 0) {
            var noMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">No Shifts</span><p>No shifts for that date.</p></div></div></div></div>'
            $("#dateToEditDiv").append(noMatchString);
        }

        //One match?  Edit it.
        else if (matchArray.length === 1) {

            var selectedShiftObject = data[0];
            var editShiftHTMLString = '<!DOCTYPE html><title>Server App</title><meta content="width=device-width,initial-scale=1"name=viewport><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js></script><link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel=stylesheet><link href=https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css rel=stylesheet><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js></script><link href=./css/style.css rel=stylesheet><div id=mainDiv><div class=row><div class=row><div class="col s12"><h4>Shift Form</h4></div></div><form action=/editShift class="col s12"method=POST><div class=row></div><div class=row><div class="col s12 input-field"><input class=validate id=totalWalkedWith name=totalWalkedWith><label for=totalWalkedWith>Total walked with</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=largestTip name=largestTip><label for=largestTip>Largest tip</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=smallestTip name=smallestTip><label for=smallestTip>Smallest tip</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=stiffed name=stiffed><label for=stiffed>Number of times stiffed (hopefully zero!)</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=bwl name=bwl><label for=bwl>BWL</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=sales name=sales><label for=sales>Sales</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=tipout name=tipout><label for=tipout>Total tipped out</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=tipPercent name=tipPercent><label for=tipPercent>Tip %</label></div></div><div class=row><div class="col s12 input-field"><input class=validate id=ppa name=ppa><label for=ppa>PPA</label></div></div><div class=row><div class="col s12 input-field"><textarea class=materialize-textarea id=comments name=comments type=text></textarea><label for=comments>Comments</label></div></div><div class=row><div class="col s12 input-field"><textarea class=materialize-textarea id=breakthroughs name=breakthroughs type=text></textarea><label for=breakthroughs>Breakthroughs</label></div></div><div class="col s12 input-field"><input class=datepicker id=shiftDate name=shiftDate type=date><label for=shiftDate>Click here to select a date for this shift</label></div><br><br><br><br><input class=timeRun id=inTime name=inTime type=range max=1425 min=0 onchange=showInTime(this.value) step=15 value=720><br><span id=inTimeSpan>In-time: 12:00:00</span><br><br><input class=timeRun id=outTime name=outTime type=range max=1425 min=0 onchange=showOutTime(this.value) step=15 value=1020><br><span id=outTimeSpan>Out-time: 17:00:00</span><br><br><div class=row><select id=shiftType name=shiftType><option value=""disabled selected>Choose shift type<option value=breakfast>Breakfast<option value=lunch>Lunch<option value=dinner>Dinner<option value=double>Double</select><label>Shift type</label></div><div class=row><div class="col s12 input-field"><input class=validate id=id name=id><label for=id>SHIFT ID - DO NOT CHANGE</label></div></div><button class="btn waves-effect waves-light"type=submit>Update Shift</button><div class=row></div></form></div></div></script><script src=./javascript/shiftEdit.js></script>'

            $("#mainDiv").html(editShiftHTMLString);

            //Change the values of all the new divs in shift.html to the values held in the selected shift
            $("#totalWalkedWith").val(selectedShiftObject.totalWalkedWith);
            $("#largestTip").val(selectedShiftObject.largestTip);
            $("#smallestTip").val(selectedShiftObject.smallestTip);
            $("#stiffed").val(selectedShiftObject.stiffed);
            $("#bwl").val(selectedShiftObject.bwl);
            $("#sales").val(selectedShiftObject.sales);
            $("#tipout").val(selectedShiftObject.tipout);
            $("#tipPercent").val(selectedShiftObject.tipPercent);
            $("#ppa").val(selectedShiftObject.ppa);
            $("#comments").val(selectedShiftObject.comments);
            $("#breakthroughs").val(selectedShiftObject.breakthroughs);
            $("#shiftDate").val(selectedShiftObject.shiftDate);
            $("#inTime").val(selectedShiftObject.timeIn);
            $("#outTime").val(selectedShiftObject.timeOut);
            $("#shiftType").val(selectedShiftObject.shiftType);
            $("#id").val(selectedShiftObject.id);
        }

        //More than one match?  Card.
        else if (matchArray.length > 1) {
            var moreThanOneMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">More Than One Shift</span><p>More than one shift for that date.</p></div></div></div></div>'
            $("#dateToEditDiv").append(moreThanOneMatchString);
        }        
    });
});



//////////////////////////////
//DELETE SHIFT
//////////////////////////////

$('.shiftDeleteBtn').on('click', function(event) {
    event.preventDefault();

    var dateToDelete = $("#dateToDelete").val().trim();

    //Create new user object.
    var dateObj = {
        id: 9000,
        dateToEdit:dateToDelete,
        timeIn: 1
    };

    var matchArray = [];

    //Search database for any entries where date === dateToDelete.
    $.post("/shiftByDate", dateObj)
    .done(function(data) {

        //For each match, add an object to matchArray which contains that match's id, date, and timeIn.
        for (var i = 0; i<data.length; i++) {
            matchArray.push(data[i]);
        }

        //No matches?  Card.
        if (matchArray.length === 0) {
            var noMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">No Shifts</span><p>No shifts for that date.</p></div></div></div></div>'
            $("#dateToDeleteDiv").append(noMatchString);
        }

        //One match?  Delete it.
        else if (matchArray.length === 1) {
            var selectedShiftObject = data[0];
            var deleteSuccessfulString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">Deletion Success</span><p>Shift delete successful.</p></div></div></div></div>'
            $("#dateToDeleteDiv").append(deleteSuccessfulString);
            //Delete DB entry of selectedShiftObject
            $.post("/deleteShift", selectedShiftObject)
            .done(function(data) {
                console.log(data);
            })
        }

        //More than one match?  Card.
        else if (matchArray.length > 1) {
            var moreThanOneMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">More Than One Shift</span><p>More than one shift for that date.</p></div></div></div></div>'
            $("#dateToDeleteDiv").append(moreThanOneMatchString);
        }
    });     
});

//////////////////////////////
//SUBMIT NEW SHIFT
//////////////////////////////

$('.shiftSubmitBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event);

    var totalWalkedWith = $("#totalWalkedWith").val().trim();
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

    var inTime = $("#inTime").val().trim(); 
    var outTime = $("#outTime").val().trim(); 

    inTime = convertToTime(inTime);
    outTime = convertToTime(outTime);

    var shiftType = $("#shiftType").val().trim(); 

    var isReal = 0;
    var restaurant_id = 0;
    var user_id = 0;

    //Create new user object.
    var newShift = {
        totalWalkedWith:totalWalkedWith,
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
        timeIn:inTime,
        timeOut:outTime,
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

//This allows the slideout navbar to function.
$(".button-collapse").sideNav();

function showInTime(newValue) {
    document.getElementById("inTimeSpan").innerHTML="In-time: " + convertToTime(newValue);
}

function showOutTime(newValue) {
    document.getElementById("outTimeSpan").innerHTML="Out-time: " + convertToTime(newValue);
}

//Converts a number 0-1440 to a xx:xx:xx time.  Returns the time as a string.  Only works if num is divisible by 15.
function convertToTime(num) {
    var string = "";

    if (num / 60 >= 23) {string+="23";}
    else if (num / 60 >= 22) {string+="22";}
    else if (num / 60 >= 21) {string+="21";}
    else if (num / 60 >= 20) {string+="20";}
    else if (num / 60 >= 19) {string+="19";}
    else if (num / 60 >= 18) {string+="18";}
    else if (num / 60 >= 17) {string+="17";}
    else if (num / 60 >= 16) {string+="16";}
    else if (num / 60 >= 15) {string+="15";}
    else if (num / 60 >= 14) {string+="14";}
    else if (num / 60 >= 13) {string+="13";}
    else if (num / 60 >= 12) {string+="12";}
    else if (num / 60 >= 11) {string+="11";}
    else if (num / 60 >= 10) {string+="10";}
    else if (num / 60 >= 9) {string+="09";}
    else if (num / 60 >= 8) {string+="08";}
    else if (num / 60 >= 7) {string+="07";}
    else if (num / 60 >= 6) {string+="06";}
    else if (num / 60 >= 5) {string+="05";}
    else if (num / 60 >= 4) {string+="04";}
    else if (num / 60 >= 3) {string+="03";}
    else if (num / 60 >= 2) {string+="02";}
    else if (num / 60 >= 1) {string+="01";}
    else if (num / 60 >= 0) {string+="00";}

    if (num % 60 === 0) {
        string += ":00:00";
    }
    else if (num % 60 === 15) {
        string += ":15:00";
    }
    else if (num % 60 === 30) {
        string += ":30:00";
    }
    else if (num % 60 === 45) {
        string += ":45:00";
    }

    return string;
}