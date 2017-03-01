//Each time a user logs in, get all of that user's goals, then...
$.get("/goals").then(function(goals) {

	var deadlinesUpcoming = [];
	var deadlinesPassed = [];

	var today = moment();

	//Pushes all goals to either deadlinesUpcoming[] or deadlinesPassed[]
	for (var i = 0; i<goals.length; i++) {
		if ((today.diff(goals[i].goalDeadline, 'days') > 0) && goals[i].goalStatus.complete === false) {
			deadlinesUpcoming.push(goals[i]);
		}
		else if ((today.diff(goals[i].goalDeadline, 'days') > 0)) {
			deadlinesPassed.push(goals[i]);
		}
	}

	//If there are deadlines that have passed, present them, one modal popup at a time, to have their status changed
	if (deadlinesPassed.length > 0) {
		for (var i = 0; i<deadlinesPassed.length; i++) {
			//Prompt user to change goal status:
				//Completed, with comments - set completed to true, update comments, congratulate user
				//Abandoned, with comments - set abandoned to true, update comments, give user consolatory message
				//Extended, with new date - set goalDeadline to new date, wish user luck
				//Modified, with new date, goal name(opt), goal text - set goalDeadline to new date, update goalText, wish user luck
		}
	}

	//If there are deadlines that haven't yet passed, make a modal popup with two options: 1)dashboard, 2)goals table
	if (deadlinesUpcoming.length > 0) {
		//Modal popup with two options, plus the message "You've got some goals with upcoming deadlines."
		//If you'd like to have this modal happen ON the dashboard page, replace "goToDashboard()" with "closeModal()"
		var jQueryModalString = '<div id="modal1" class="modal"><div class="modal-content"><h5>You\'ve got goals with upcoming deadlines...</h5><div class="row"></div><button class="btn waves-effect waves-light" onclick="goToDashboard()">Got it.  Take me to the dashboard.</button><button class="btn waves-effect waves-light" onclick="goToGoalsTable()">Oh snap!  Take me to the goals table, then.</button></div></div>'

		$('.modal').modal();	//Allows the user-option modal to open on the goal checker page.
		$("#mainDiv").append(jQueryModalString);	//(HOPEFULLY) Modal pops up with two choices
	}

	//If there are no deadlines that haven't yet passed, go straight to the dashboard
	else if(deadlinesUpcoming.length === 0) {
		var messageObj = {
			message: "You should set some goals!"
		}
		$.post("/dashboardWithMessage", messageObj);
	}
	
	function goToDashboard() {
		var messageObj = {
			message: "We'll check your goals again next time you login."
		}
		$.post("/dashboardWithMessage", messageObj);
	}

	function goToGoalsTable() {
		$.get("/goalsTable");
	}

	function closeModal(){
		$('#modal1').modal('close');
	}

});