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

    //Search database for any entries where date === dateToEdit.  (Sequelize - You'll need to make a new one, I think)
    $.post("/shiftByDate", dateObj)
    .done(function(data) {
        //For each match, add an object to matchArray which contains that match's id, date, and timeIn.
        for (var i = 0; i<data.length; i++) {
            matchArray.push(data[i]);
        }

        console.log("SO FAR, MATCHARRAY CONTAINS ");
        console.log(matchArray);

        if (matchArray.length === 0) {
            //Notify user that there are no shifts saved for that date (MATERIALIZE - CARDS)
            var noMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">No Shifts</span><p>No shifts for that date.</p></div></div></div></div>'
            $("#dateToEditDiv").append(noMatchString);
        }

        else if (matchArray.length === 1) {

            var selectedShiftObject = data[0];
            var editShiftHTMLString = '<!DOCTYPE html><title>Server App</title><meta content="width=device-width,initial-scale=1"name=viewport><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js></script><link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel=stylesheet><link href=https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css rel=stylesheet><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js></script><link href=./css/style.css rel=stylesheet><link href=./css/nouislider.min.css rel=stylesheet><div id=mainDiv><div class=row><div class=row><div class="col s12"><h4>Shift Form</h4></div></div><form class="col s12"><div class=row></div><div class=row><div class="col s12 input-field"><input id=largestTip class=validate><label for=largestTip>Largest tip</label></div></div><div class=row><div class="col s12 input-field"><input id=smallestTip class=validate><label for=smallestTip>Smallest tip</label></div></div><div class=row><div class="col s12 input-field"><input id=stiffed class=validate><label for=stiffed>Number of times stiffed (hopefully zero!)</label></div></div><div class=row><div class="col s12 input-field"><input id=bwl class=validate><label for=bwl>BWL</label></div></div><div class=row><div class="col s12 input-field"><input id=sales class=validate><label for=sales>Sales</label></div></div><div class=row><div class="col s12 input-field"><input id=tipout class=validate><label for=tipout>Total tipped out</label></div></div><div class=row><div class="col s12 input-field"><input id=tipPercent class=validate><label for=tipPercent>Tip %</label></div></div><div class=row><div class="col s12 input-field"><input id=ppa class=validate><label for=ppa>PPA</label></div></div><div class=row><div class="col s12 input-field"><textarea class=materialize-textarea id=comments></textarea><label for=comments>Comments</label></div></div><div class=row><div class="col s12 input-field"><textarea class=materialize-textarea id=breakthroughs></textarea><label for=breakthroughs>Breakthroughs</label></div></div><div class=row><select id=shiftType><option value=""disabled selected>Choose shift type<option value=breakfast>Breakfast<option value=lunch>Lunch<option value=dinner>Dinner<option value=double>Double</select><label>Shift type</label></div><div id="shiftDate" value=""></div><div id="inTime" value=""></div><div id="outTime" value=""></div><button class="btn shiftEditBtn2 waves-effect waves-light">Submit Shift</button><div class=row></div></form></div></div><script src=./javascript/nouislider.min.js></script><script src=./javascript/shiftEdit.js></script><script src=./javascript/wNumb.js></script>'

            //Wipe the page and replace it with shift update form
            $("#mainDiv").html(editShiftHTMLString);

            //Change the values of all the new divs in shift.html to the values held in the selected shift
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
            $("#shiftDate").val(selectedShiftObject.shiftDate); //YOU SHOULD MAKE THIS UNCHANGEABLE
            $("#inTime").val(selectedShiftObject.timeIn); //YOU SHOULD MAKE THIS UNCHANGEABLE
            $("#outTime").val(selectedShiftObject.timeOut); //YOU SHOULD MAKE THIS UNCHANGEABLE
            $("#shiftType").val(selectedShiftObject.shiftType);

            //It's working correctly, but it looks funny.  The input titles are overlapping with the input fields
        }

        else if (matchArray.length > 1) {
            var moreThanOneMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">More Than One Shift</span><p>More than one shift for that date.</p></div></div></div></div>'
            $("#dateToEditDiv").append(moreThanOneMatchString);
            var inTimes = [];
            for (var i = 0; i<matchArray.length; i++) {
                inTimes.push(matchArray[i].timeIn);
            }

            var dropDownString = '<form class="col s12"><div class="row"><!--shiftType VARCHAR(32)--><select id="shiftSelect"><option value="" disabled selected>Choose shift</option>'


            for (var i = 0; i<matchArray.length; i++) {
                dropDownString += '<option value="';
                dropDownString += i;
                dropDownString += '">inTime = ';
                dropDownString += matchArray[i].inTime;
                dropDownString += '</option>';
            }

            dropDownString += '</select><label>Shift selection</label></div><button class="btn waves-effect waves-light shiftSelectionSubmitBtn">Submit shift selection</button></form>';

            console.log(dropDownString);

            $("#dateToEditDiv").append(dropDownString);

            $('.shiftSelectionSubmitBtn').on('click', function(event) {

                //Take the value of the selected dropdown and use that index of matchArray to wipe the page and replace it with the shift update form
                event.preventDefault();
                var indexToUse = $("#shiftSelect").val().trim();

                var selectedShiftObject = data[indexToUse];
                var editShiftHTMLString = '<!DOCTYPE html><title>Server App</title><meta content="width=device-width,initial-scale=1"name=viewport><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js></script><link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel=stylesheet><link href=https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css rel=stylesheet><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js></script><link href=./css/style.css rel=stylesheet><link href=./css/nouislider.min.css rel=stylesheet><div id=mainDiv><div class=row><div class=row><div class="col s12"><h4>Shift Form</h4></div></div><form class="col s12"><div class=row></div><div class=row><div class="col s12 input-field"><input id=largestTip class=validate><label for=largestTip>Largest tip</label></div></div><div class=row><div class="col s12 input-field"><input id=smallestTip class=validate><label for=smallestTip>Smallest tip</label></div></div><div class=row><div class="col s12 input-field"><input id=stiffed class=validate><label for=stiffed>Number of times stiffed (hopefully zero!)</label></div></div><div class=row><div class="col s12 input-field"><input id=bwl class=validate><label for=bwl>BWL</label></div></div><div class=row><div class="col s12 input-field"><input id=sales class=validate><label for=sales>Sales</label></div></div><div class=row><div class="col s12 input-field"><input id=tipout class=validate><label for=tipout>Total tipped out</label></div></div><div class=row><div class="col s12 input-field"><input id=tipPercent class=validate><label for=tipPercent>Tip %</label></div></div><div class=row><div class="col s12 input-field"><input id=ppa class=validate><label for=ppa>PPA</label></div></div><div class=row><div class="col s12 input-field"><textarea class=materialize-textarea id=comments></textarea><label for=comments>Comments</label></div></div><div class=row><div class="col s12 input-field"><textarea class=materialize-textarea id=breakthroughs></textarea><label for=breakthroughs>Breakthroughs</label></div></div><div class=row><select id=shiftType><option value=""disabled selected>Choose shift type<option value=breakfast>Breakfast<option value=lunch>Lunch<option value=dinner>Dinner<option value=double>Double</select><label>Shift type</label></div><div id="shiftDate" value=""></div><div id="inTime" value=""></div><div id="outTime" value=""></div><button class="btn shiftEditBtn2 waves-effect waves-light">Submit Shift</button><div class=row></div></form></div></div><script src=./javascript/nouislider.min.js></script><script src=./javascript/shiftEdit.js></script><script src=./javascript/wNumb.js></script>'

                //Wipe the page and replace it with shift update form
                $("#mainDiv").html(editShiftHTMLString);

                //Change the values of all the new divs in shift.html to the values held in the selected shift
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
                $("#shiftDate").val(selectedShiftObject.shiftDate); //YOU SHOULD MAKE THIS UNCHANGEABLE
                $("#inTime").val(selectedShiftObject.timeIn); //YOU SHOULD MAKE THIS UNCHANGEABLE
                $("#outTime").val(selectedShiftObject.timeOut); //YOU SHOULD MAKE THIS UNCHANGEABLE
                $("#shiftType").val(selectedShiftObject.shiftType);

                //It's working correctly, but it looks funny.  The input titles are overlapping with the input fields
            });
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

    console.log(dateObj);

    var matchArray = [];

    //Search database for any entries where date === dateToDelete.  (Sequelize - You'll need to make a new one, I think)
    $.post("/shiftByDate", dateObj)
    .done(function(data) {

        //For each match, add an object to matchArray which contains that match's id, date, and timeIn.
        for (var i = 0; i<data.length; i++) {
            matchArray.push(data[i]);
        }

        console.log("SO FAR, MATCHARRAY CONTAINS ");
        console.log(matchArray);

        if (matchArray.length === 0) {
            var noMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">No Shifts</span><p>No shifts for that date.</p></div></div></div></div>'
            $("#dateToDeleteDiv").append(noMatchString);
        }

        else if (matchArray.length === 1) {

            var selectedShiftObject = data[0];
            console.log(selectedShiftObject);

            $.post("/shiftsDescendingByDate", selectedShiftObject)
            .done(function(data) {
                console.log(data);
            })

            // //Delete DB entry of selectedShiftObject
            // $.post("/deleteShift", selectedShiftObject)
            // .done(function(data) {
            //     console.log(data);
            // })
        }

        else if (matchArray.length > 1) {
            var moreThanOneMatchString = '<div class="row"><div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">More Than One Shift</span><p>More than one shift for that date.</p></div></div></div></div>'
            $("#dateToDeleteDiv").append(moreThanOneMatchString);
            var inTimes = [];
            for (var i = 0; i<matchArray.length; i++) {
                inTimes.push(matchArray[i].timeIn);
            }

            var dropDownString = '<form class="col s12"><div class="row"><!--shiftType VARCHAR(32)--><select id="shiftSelect"><option value="" disabled selected>Choose shift</option>'

            for (var i = 0; i<matchArray.length; i++) {
                dropDownString += '<option value="';
                dropDownString += i;
                dropDownString += '">inTime = ';
                dropDownString += matchArray[i].inTime;
                dropDownString += '</option>';
            }

            dropDownString += '</select><label>Shift selection</label></div><button class="btn waves-effect waves-light shiftSelectionSubmitBtnDelete">Submit shift selection</button></form>';

            console.log(dropDownString);

            $("#dateToDeleteDiv").append(dropDownString);

            $('.shiftSelectionSubmitBtnDelete').on('click', function(event) {

                event.preventDefault();
                var indexToUse = $("#shiftSelect").val().trim();
                var selectedShiftObject = data[indexToUse];

                //Delete DB entry of selectedShiftObject
                $.post("/deleteShift", selectedShiftObject)
                .done(function(data) {
                    console.log(data);
                })

            });
        }
    });     
});

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

    var inTime = $("#inTime").val().trim(); 
    var outTime = $("#outTime").val().trim(); 

    inTime = convertToTime(inTime);
    outTime = convertToTime(outTime);

    var shiftType = $("#shiftType").val().trim(); 

    var isReal = 0; //Not working either

    var restaurant_id = 0;
    var user_id = 0;

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