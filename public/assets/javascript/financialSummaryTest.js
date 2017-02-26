//There are a couple things that still need to be fixed

//1)Eventually, all shifts will be attached to a job, where we will find the wage.  For now, it's always 2.13.
    //User selects job, pull that job from the DB, get its wage, set that wage to hourlyWage
//2)Still need to find the total span of time worked.  For now, it's always 26 days.
    //Use moment for this, Mills said
//3)Not 100% sure the earlier-than-in-time out-times are being handled correctly.
    //This won't be an issue once we fix the sliders
    //4)[OPTIONAL] Go ahead and implement the range-of-dates functionality


///////////////////////////////////////
//VARIABLES
///////////////////////////////////////

//Variables to fill after pulling from the database
var hourlyWage = 2.13;  //Eventually, all shifts will be associated to a job.  For now, use 2.13.
var totalWalkedWith = 0;
var totalHoursWorked = 0;
var totalBWL = 0;
var totalPPA = 0;
var totalSales = 0;
var totalTipout = 0;
var totalTipPercent = 0;
// var firstShiftDate = 0; 
// var lastShiftDate = 0;

//Counter variables
var countShifts = 0;
var countBWL = 0;
var countPPA = 0;
var countSales = 0;
var countTipout = 0;
var countTipPercent = 0;
var countStiffed = 0;

//Target variables to be calculated while going through shifts
var bestTip = 0;
var worstTip = 99999;
var longestShift = 0;
var shortestShift = 99999;
var mostWalkedWithShift = 0;
var leastWalkedWithShift = 99999;

///////////////////////////////////////
//GOING THROUGH SHIFTS FOR THIS USER...
///////////////////////////////////////

var userIdObj = {
    userID: 1
}

$.post("/financialSummary", userIdObj)
.done(function(data) {

    var shifts = [];

    for (var i = 0; i < data.length; i++) {
        shifts.push(data[i]);
    }

    for (var i = 0; i < shifts.length; i++) {
        countShifts++;

        totalWalkedWith += shifts[i].totalWalkedWith;
        if (shifts[i].totalWalkedWith > mostWalkedWithShift) { mostWalkedWithShift = shifts[i].totalWalkedWith };
        if (shifts[i].totalWalkedWith < leastWalkedWithShift) { leastWalkedWithShift = shifts[i].totalWalkedWith };

        //If out-time > in-time (i.e., if shift ended before midnight)
        if (convertTimeToInt(shifts[i].timeOut) > convertTimeToInt(shifts[i].timeIn)) {
            totalHoursWorked += (convertTimeToInt(shifts[i].timeOut) - convertTimeToInt(shifts[i].timeIn));
            if ((convertTimeToInt(shifts[i].timeOut) - convertTimeToInt(shifts[i].timeIn)) > longestShift) { longestShift = (convertTimeToInt(shifts[i].timeOut) - convertTimeToInt(shifts[i].timeIn)) };
            if ((convertTimeToInt(shifts[i].timeOut) - convertTimeToInt(shifts[i].timeIn)) < shortestShift) { shortestShift = (convertTimeToInt(shifts[i].timeOut) - convertTimeToInt(shifts[i].timeIn)) };
        }

        //If out-time < in-time (i.e., if shift ended after midnight)
        else if (convertTimeToInt(shifts[i].timeOut) < convertTimeToInt(shifts[i].timeIn)) {
            totalHoursWorked += ((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut));
            if (((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut)) > longestShift) { longestShift = ((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut)) };
            if (((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut)) < shortestShift) { shortestShift = ((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut)) };
        }

        //If they're the same, log the error and move on.
        else if (convertTimeToInt(shifts[i].timeOut) = convertTimeToInt(shifts[i].timeIn)) {console.log("inTime and outTime are the same")};

        //If shifts[i].shiftDate is before firstShiftDate, update firstShiftDate
        //If shifts[i].shiftDate is after lastShiftDate, update lastShiftDate

        if (shifts[i].largestTip > bestTip) { bestTip = shifts[i].largestTip };
        if (shifts[i].smallestTip < worstTip) { worstTip = shifts[i].smallestTip };

        if (shifts[i].stiffed > 0) { countStiffed += shifts[i].stiffed };

        if (shifts[i].bwl != "NULL") {
            totalBWL += shifts[i].bwl;
            countBWL++;
        }
            
        if (shifts[i].ppa != "NULL") {
            totalPPA += shifts[i].ppa;
            countPPA++;
        }
            
        if (shifts[i].sales != "NULL") {
            totalSales += shifts[i].sales;
            countSales++;
        }
            
        if (shifts[i].tipout != "NULL") {
            totalTipout += shifts[i].tipout;
            countTipout++;
        }
            
        if (shifts[i].tipPercent != "NULL") {
            totalTipPercent += shifts[i].tipPercent;
            countTipPercent++;
        }
    }

    ///////////////////////////////////////
    //PREPARE FINANCIAL SUMMARY VARIABLES
    ///////////////////////////////////////

    //totalHoursWorked currently holds the number of minutes worked.  Correcting that here.
    totalHoursWorked = totalHoursWorked/60;

    // var numDays = lastShiftDate - firstShiftDate;  //This only works if the dates are translated to ints somehow
    var numDays = 26;  //For now, this will be hardcoded.
    var totalEarnedBeforeTaxes = totalWalkedWith + (totalHoursWorked * hourlyWage);
    var avgHourlyWalkedWith = totalWalkedWith / totalHoursWorked;
    var avgHourlyTotal = avgHourlyWalkedWith + hourlyWage;
    var avgShiftLength = totalHoursWorked / countShifts;
    var avgShiftsPerWeek = countShifts / (numDays / 7);
    var avgShiftsPerMonth = countShifts / (numDays / 30.4375);
    var avgHoursPerWeek = totalHoursWorked / (numDays / 7);
    var avgTipout = totalTipout / countTipout;
    var avgTipPercent = totalTipPercent / countTipPercent;
    var avgBWL = totalBWL / countBWL;
    var avgPPA = totalPPA / countPPA;
    var avgSales = totalSales / countSales;

    ///////////////////////////////////////
    //DISPLAY FINANCIAL SUMMARY DATA
    ///////////////////////////////////////

    $("#mainDiv").append("<br>********************************");
    $("#mainDiv").append("<br>Total earned (before taxes) = $" + totalEarnedBeforeTaxes.toFixed(2));
    $("#mainDiv").append("<br>Average hourly walked with = $" + avgHourlyWalkedWith.toFixed(2));
    $("#mainDiv").append("<br>Average hourly total earned (before taxes) = $" + avgHourlyTotal.toFixed(2));
    $("#mainDiv").append("<br>Average shift length = " + avgShiftLength.toFixed(2) + " hours");
    $("#mainDiv").append("<br>Average number of shifts per week = " + avgShiftsPerWeek.toFixed(2));
    $("#mainDiv").append("<br>Average number of shifts per month = " + avgShiftsPerMonth.toFixed(2));
    $("#mainDiv").append("<br>Average number of hours per week = " + avgHoursPerWeek.toFixed(2));
    $("#mainDiv").append("<br>Average tipout = $" + avgTipout.toFixed(2));
    $("#mainDiv").append("<br>Average tip percent = " + avgTipPercent.toFixed(2) + "%");
    $("#mainDiv").append("<br>Average BWL = " + avgBWL.toFixed(2) + "%");
    $("#mainDiv").append("<br>Average PPA = $" + avgPPA.toFixed(2));
    $("#mainDiv").append("<br>Average sales = $" + avgSales.toFixed(2));
    $("#mainDiv").append("<br>Best tip = $" + bestTip.toFixed(2));
    $("#mainDiv").append("<br>Worst (non-zero) tip = $" + worstTip.toFixed(2));
    $("#mainDiv").append("<br>Number of times stiffed = " + countStiffed);
    $("#mainDiv").append("<br>Longest shift = " + longestShift + " minutes");
    $("#mainDiv").append("<br>Shortest shift = " + shortestShift + " minutes");
    $("#mainDiv").append("<br>Most walked with shift = $" + mostWalkedWithShift.toFixed(2));
    $("#mainDiv").append("<br>Least walked with shift = $" + leastWalkedWithShift.toFixed(2));
    // $("#mainDiv").append("<br>********************************")
    // $("#mainDiv").append("<br>firstShiftDate = " firstShiftDate.toFixed(2));
    // $("#mainDiv").append("<br>lastShiftDate = " lastShiftDate.toFixed(2));
    $("#mainDiv").append("<br>********************************")
    $("#mainDiv").append("<br>Span of days between first and last shift = " + numDays);
    $("#mainDiv").append("<br>Number of BWL entries = " + countBWL);
    $("#mainDiv").append("<br>Number of PPA entries = " + countPPA);
    $("#mainDiv").append("<br>Number of Sales entries= " + countSales);
    $("#mainDiv").append("<br>Number of Tipout entries = " + countTipout);
    $("#mainDiv").append("<br>Number of Tip percent entries = " + countTipPercent);
});

///////////////////////////////////////
//HELPER FUNCTIONS
///////////////////////////////////////

function convertTimeToInt(time) {
    //The next few lines are used to convert a "HH:MM:SS" value to a 0-1425 int
    var array1 = ["00:00:00","00:15:00","00:30:00","00:45:00","01:00:00","01:15:00","01:30:00","01:45:00","02:00:00","02:15:00","02:30:00","02:45:00","03:00:00","03:15:00","03:30:00","03:45:00","04:00:00","04:15:00","04:30:00","04:45:00","05:00:00","05:15:00","05:30:00","05:45:00","06:00:00","06:15:00","06:30:00","06:45:00","07:00:00","07:15:00","07:30:00","07:45:00","08:00:00","08:15:00","08:30:00","08:45:00","09:00:00","09:15:00","09:30:00","09:45:00","10:00:00","10:15:00","10:30:00","10:45:00","11:00:00","11:15:00","11:30:00","11:45:00","12:00:00","12:15:00","12:30:00","12:45:00","13:00:00","13:15:00","13:30:00","13:45:00","14:00:00","14:15:00","14:30:00","14:45:00","15:00:00","15:15:00","15:30:00","15:45:00","16:00:00","16:15:00","16:30:00","16:45:00","17:00:00","17:15:00","17:30:00","17:45:00","18:00:00","18:15:00","18:30:00","18:45:00","19:00:00","19:15:00","19:30:00","19:45:00","20:00:00","20:15:00","20:30:00","20:45:00","21:00:00","21:15:00","21:30:00","21:45:00","22:00:00","22:15:00","22:30:00","22:45:00","23:00:00","23:15:00","23:30:00","23:45:00"];
    var array2 = ["0","15","30","45","60","75","90","105","120","135","150","165","180","195","210","225","240","255","270","285","300","315","330","345","360","375","390","405","420","435","450","465","480","495","510","525","540","555","570","585","600","615","630","645","660","675","690","705","720","735","750","765","780","795","810","825","840","855","870","885","900","915","930","945","960","975","990","1005","1020","1035","1050","1065","1080","1095","1110","1125","1140","1155","1170","1185","1200","1215","1230","1245","1260","1275","1290","1305","1320","1335","1350","1365","1380","1395", "1410", "1425"];

    for (var i = 0; i<array1.length; i++) {
        if (time === array1[i]) {
            return array2[i];
        }
    }
}