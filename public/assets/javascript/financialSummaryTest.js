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




//READY TO BE TESTED.

//1) Drop shifts table and remake it with the 20 entries in Book1.xls
//2) Build your AJAX query and sequelize request to pull the 20 shifts
//3) Put the 20 shift objects into shifts[]
//4) Debug!




var shifts = [];

//AJAX REQUEST FOR ALL SHIFTS WHERE USER ID MATCHES CURRENTLY LOGGED-IN USER (do range-of-dates later)

//DO ALL OF THIS IN THE CALLBACK TO THE AJAX REQUEST:

    //ADD RESULTS OF DB QUERY TO shifts[]

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
            if (((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut)) < shortestShift) { shortestShift =((1425 - convertTimeToInt(shifts[i].timeIn)) + convertTimeToInt(shifts[i].timeOut)) };
        }

        //If they're the same, log the error and move on.
        else if (convertTimeToInt(shifts[i].timeOut) = convertTimeToInt(shifts[i].timeIn)) {console.log("inTime and outTime are the same")};

        //If shifts[i].shiftDate is before firstShiftDate, update firstShiftDate
        //If shifts[i].shiftDate is after lastShiftDate, update lastShiftDate

        if (shifts[i].largestTip > bestTip) { bestTip = shifts[i].largestTip };
        if (shifts[i].smallestTip < worstTip) { worstTip = shifts[i].smallestTip };

        if (shifts[i].totalBWL != "NULL") {
            totalBWL += shifts[i].totalBWL;
            countBWL++;
        }
            
        if (shifts[i].totalPPA != "NULL") {
            totalPPA += shifts[i].totalPPA;
            countPPA++;
        }
            
        if (shifts[i].totalSales != "NULL") {
            totalSales += shifts[i].totalSales;
            countSales++;
        }
            
        if (shifts[i].totalTipout != "NULL") {
            totalTipout += shifts[i].totalTipout;
            countTipout++;
        }
            
        if (shifts[i].totalTipPercent != "NULL") {
            totalTipPercent += shifts[i].totalTipPercent;
            countTipPercent++;
        }
    }
//END CALLBACK

///////////////////////////////////////
//PREPARE FINANCIAL SUMMARY VARIABLES
///////////////////////////////////////

// var numDays = lastShiftDate - firstShiftDate;  //This only works if the dates are translated to ints somehow
var numDays = 20;  //For now, this will be hardcoded.  Use exactly 20 database entries for testing.
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
//CURRENTLY DEBUGGING WITH CONSOLE.LOG
///////////////////////////////////////

console.log("********************************")
console.log("numDays = " numDays);
console.log("totalEarnedBeforeTaxes = " totalEarnedBeforeTaxes);
console.log("avgHourlyWalkedWith = " avgHourlyWalkedWith);
console.log("avgHourlyTotal = " avgHourlyTotal);
console.log("avgShiftLength = " avgShiftLength);
console.log("avgShiftsPerWeek = " avgShiftsPerWeek);
console.log("avgShiftsPerMonth = " avgShiftsPerMonth);
console.log("avgHoursPerWeek = " avgHoursPerWeek);
console.log("avgTipout = " avgTipout);
console.log("avgTipPercent = " avgTipPercent);
console.log("avgBWL = " avgBWL);
console.log("avgPPA = " avgPPA);
console.log("avgSales = " avgSales);
console.log("********************************")
console.log("hourlyWage = " hourlyWage);
console.log("totalWalkedWith = " totalWalkedWith);
console.log("totalBWL = " totalBWL);
console.log("totalPPA = " totalPPA);
console.log("totalSales = " totalSales);
console.log("totalTipout = " totalTipout);
console.log("totalTipPercent = " totalTipPercent);
// console.log("firstShiftDate = " firstShiftDate);
// console.log("lastShiftDate = " lastShiftDate);
console.log("********************************")
console.log("countShifts = " countShifts);
console.log("countBWL = " countBWL);
console.log("countPPA = " countPPA);
console.log("countSales = " countSales);
console.log("countTipout = " countTipout);
console.log("countStiffed = " countStiffed);
console.log("********************************")
console.log("bestTip = " bestTip);
console.log("worstTip = " worstTip);
console.log("longestShift = " longestShift);
console.log("shortestShift = " shortestShift);
console.log("mostWalkedWithShift = " mostWalkedWithShift);
console.log("leastWalkedWithShift = " leastWalkedWithShift);

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