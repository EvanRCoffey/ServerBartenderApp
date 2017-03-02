//Get tabs to work correctly with the materialize card

var passedDeadlinesUpdated = 0;
var deadlinesUpcoming = [];
var deadlinesPassed = [];
var today = moment();

//Each time a user logs in, get all of that user's goals, then...
$.get("/goals").then(function(goals) {

	//Pushes all goals to either deadlinesUpcoming[] or deadlinesPassed[]
	for (var i = 0; i<goals.allGoals.length; i++) {
		if ((today.diff(moment(goals.allGoals[i].goalDeadline, "MMM DD YYYY"), "days") < 0) && JSON.parse(goals.allGoals[i].goalStatus).completed === false && JSON.parse(goals.allGoals[i].goalStatus).abandoned === false) {
			deadlinesUpcoming.push(goals.allGoals[i]);
		}
		else if ((today.diff(moment(goals.allGoals[i].goalDeadline, "MMM DD YYYY"), "days") >= 0) && JSON.parse(goals.allGoals[i].goalStatus).completed === false && JSON.parse(goals.allGoals[i].goalStatus).abandoned === false) {
			deadlinesPassed.push(goals.allGoals[i]);
		}
	}

	passedDeadlineCheck();
});

//////////////////
//HELPER FUNCTIONS
//////////////////

//Set completed to true, update comments
function completed() {
	var goalIdHidden = $('#goalIdHidden').val();
	var goalStatusNumber = 1;

	var test = $('#completedComments').val();
	var fieldIsEmpty = false;
	if (test === "") {
		fieldIsEmpty = true;
	}
	else {
		var newComments = $('#completedComments').val();
	}

	if (fieldIsEmpty) {
		var completedGoal = {
			goalStatusNumber: goalStatusNumber,
			goalIdHidden: goalIdHidden
		}
	}
	else {
		var completedGoal = {
			comments: newComments,
			goalStatusNumber: goalStatusNumber,
			goalIdHidden: goalIdHidden
		}
	}
	
	$.post("/editGoal", completedGoal).then(function(data) {
		passedDeadlineCheck();
	});
}

//Set abandoned to true, update comments
function abandoned() {
	var goalIdHidden = $('#goalIdHidden').val();
	var goalStatusNumber = 2;

	var test = $('#abandonedComments').val()
	var fieldIsEmpty = false;
	if (test === "") {
		fieldIsEmpty = true;
	}
	else {
		var newComments = $('#abandonedComments').val();
	}

	if (fieldIsEmpty) {
		var abandonedGoal = {
			goalStatusNumber: goalStatusNumber,
			goalIdHidden: goalIdHidden
		}
	}
	else {
		var abandonedGoal = {
			comments: newComments,
			goalStatusNumber: goalStatusNumber,
			goalIdHidden: goalIdHidden
		}
	}

	$.post("/editGoal", abandonedGoal).then(function(data) {
		passedDeadlineCheck();
	});
}

//Set goalDeadline to new date
function extended() {
	var goalIdHidden = $('#goalIdHidden').val();
	var newGoalDeadline = $('#goalNewDeadline').val();
	var goalStatusNumber = 3;

	var extendedGoal = {
		goalDeadline: newGoalDeadline,
		goalStatusNumber: goalStatusNumber,
		goalIdHidden: goalIdHidden
	}
	$.post("/editGoal", extendedGoal).then(function(data) {
		passedDeadlineCheck();
	});
}

//Set goalDeadline to new date, and update goalText, goalName, and comments
function modified() {
	var goalIdHidden = $('#goalIdHidden').val();
	var goalStatusNumber = 4;

	var test1 = $('#modifiedComments').val()
	var fieldIsEmpty1 = false;
	if (test1 === "") {
		fieldIsEmpty1 = true;
	}
	else {
		var newComments = $('#modifiedComments').val();
	}

	var test2 = $('#goalNewName').val()
	var fieldIsEmpty2 = false;
	if (test2 === "") {
		fieldIsEmpty2 = true;
	}
	else {
		var newGoalName = $('#goalNewName').val();
	}

	var test3 = $('#goalNewText').val()
	var fieldIsEmpty3 = false;
	if (test3 === "") {
		fieldIsEmpty3 = true;
	}
	else {
		var newGoalText = $('#goalNewText').val();
	}


	var modifiedGoal = {
		goalStatusNumber: goalStatusNumber,
		goalIdHidden: goalIdHidden,
	}

	if (!fieldIsEmpty1) {
		modifiedGoal.comments = newComments
	}

	if (!fieldIsEmpty2) {
		modifiedGoal.goalName = newGoalName
	}

	if (!fieldIsEmpty3) {
		modifiedGoal.goalText = newGoalText
	}

	var newGoalDeadline = $('#goalNewDeadlineMod').val();

	modifiedGoal.goalDeadline = newGoalDeadline

	$.post("/editGoal", modifiedGoal).then(function(data) {
		passedDeadlineCheck();
	});
}

function passedDeadlineCheck() {
	if (passedDeadlinesUpdated < deadlinesPassed.length) {
		processPassedDeadline(passedDeadlinesUpdated);
	}
	else {
		noMorePassedDeadlines();
	}
}

function processPassedDeadline(num) {
	passedDeadlinesUpdated++;
	var jQueryString = '<div class="card-content"><p>You\'ve got a goal with a deadline that has passed!</p><p>Name: ' + deadlinesPassed[num].goalName + ' </p><p>Text: ' + deadlinesPassed[num].goalText + ' </p><p>Deadline: ' + deadlinesPassed[num].goalDeadline + '</p><p>Comments: ' + deadlinesPassed[num].comments + ' </p><p>You need to modify this goal\'s status. Choose one of the four options below.</p></div><div class="card-tabs"><ul class="tabs tabs-fixed-width"><li class="tab"><a href="#test4">Completed</a></li><li class="tab"><a href="#test5">Abandoned</a></li><li class="tab"><a href="#test6">Extended</a></li><li class="tab"><a href="#test7">Modified</a></li></ul></div><div class="card-content grey lighten-4"> <div id="test4"> <div class="input-field col s12"> <textarea id="completedComments" class="materialize-textarea" name="completedComments"></textarea> <label for="completedComments">Comments for completed goal [OPTIONAL]</label> </div><button class="btn waves-effect waves-light" onclick="completed()">Complete goal</button> </div><div id="test5"> <div class="input-field col s12"> <textarea id="abandonedComments" class="materialize-textarea" name="abandonedComments"></textarea> <label for="abandonedComments">Comments for abandoned goal [OPTIONAL]</label> </div><button class="btn waves-effect waves-light" onclick="abandoned()">Abandon goal</button> </div><div id="test6"> <div class="input-field col s12"> <input id="goalIdHidden" type="hidden" name="goalIdHidden" value=' + deadlinesPassed[num].id + '><input name="goalNewDeadline" id="goalNewDeadline" type="date" class="datepicker" required> <label for="goalNewDeadline">Click here to select a new deadline for this goal [MANDATORY] </label> </div><button class="btn waves-effect waves-light" onclick="extended()">Extend goal</button> </div><div id="test7"> <div class="input-field col s12"> <input id="goalNewName" type="text" class="validate" name="goalNewName"> <label for="goalNewName">New goal name [OPTIONAL]</label> </div><div class="input-field col s12"> <input id="goalNewText" type="text" class="validate" name="goalNewText"> <label for="goalNewText">New goal text [OPTIONAL]</label> </div><div class="input-field col s12"> <textarea name="modifiedComments" id="modifiedComments" class="materialize-textarea"></textarea> <label for="modifiedComments">New comments [OPTIONAL]</label> </div><div class="input-field col s12"> <input name="goalNewDeadlineMod" id="goalNewDeadlineMod" type="date" class="datepicker" required> <label for="goalNewDeadlineMod">Click here to select a new deadline for this goal [MANDATORY] </label> </div><button class="btn waves-effect waves-light" onclick="modified()">Modify goal</button></div></div>';
	$("#goalCheckerCardDiv").html(jQueryString);
	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year
	    format: 'yyyy-mm-dd',  //I had to change this to match "formatSubmit" because it wasn't being submitted in that format and was throwing an error
	    formatSubmit: 'yyyy-mm-dd',
	    hiddenName:true
	});
}

function noMorePassedDeadlines() {
	var goalCardString = '<div class="card"><div class="card-content"><p>No pending goals with passed deadlines.</p>';

	var newGoalLink = '<a href="/goal">New Goal</a>';
	var editDeleteGoalsLink = '<a href="/goalsTable">Edit/Delete Goals</a>';

	goalCardString += '<p>' + newGoalLink + '</p>';

	//IF THERE ARE UPCOMING DEADLINES
	if (deadlinesUpcoming.length > 0) {
		goalCardString += '<p>You\'ve got some goals with upcoming deadlines.</p>';
		goalCardString += '<p>' + editDeleteGoalsLink + '</p>';
	}

	$("#mainDiv").html(goalCardString);
}