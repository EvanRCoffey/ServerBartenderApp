//This array will hold all goals for the user
var allGoals = [];

$.post("/timelineGoals").done(function(data) {});

//This array will hold one timeline for each job
var finishedTimelines = [];

$.post("/timelineCreator").done(function(data) {

    //This array is used to store all jobIds for a user
    var jobIDArray = [];
    for (var i = 0; i < data.length; i++) {
        if (!jobIDArray.includes(data[i].JobId)) {
            jobIDArray.push(data[i].JobId);
        }
    }

    //This array is used to store all shifts for a user
    var shifts = [];
    for (var i = 0; i < data.length; i++) {
        shifts.push(data[i]);
    }

    //For each unique job ID...
    for (var k = 0; k < jobIDArray.length; k++) {

    	//If the job matches, create an entriesArr with a timelineEntryObj for each shift with comments and breakthroughs for that shift
    	var entriesArr = [];
    	for (var l = 0; l<shifts.length; l++) {
    		if (shifts[l].JobId === jobIDArray[k]) {
    			var entryComments = shifts[l].comments;
    			var entryBreakthroughs = shifts[l].breakthroughs;
    			var entryDate = shifts[l].shiftDate;
    			var timelineEntryObj = {
		    		comments: entryComments,
		    		breakthroughs: entryBreakthroughs,
		    		date: entryDate
		    	}
		    	entriesArr.push(timelineEntryObj);
    		}	
    	}

    	//MAKE THE OBJECT HERE FOR JOBIDARRAY[k]
        var summaryObj = {
        	entries: entriesArr	
        };

    	//In the end, you should have an array which contains a unique object for each job, holding the timeline results for that job
        finishedTimelines.push(summaryObj)
    };

    console.log(finishedTimelines); //correct
});