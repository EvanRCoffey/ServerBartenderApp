//Each time a user logs in, get all of that user's goals, then...
$.get("/goals").then(function(goals) {

	var deadlinesUpcoming = [];
	var deadlinesPassed = [];
	var today = moment();

	//Pushes all goals to either deadlinesUpcoming[] or deadlinesPassed[]
	for (var i = 0; i<goals.allGoals.length; i++) {
		// console.log(today.diff(moment(goals.allGoals[i].goalDeadline, "MMM DD YYYY")));
		//I'm not sure if "goals.allGoals[i].goalStatus.complete" is referencing what it's supposed to
		if ((today.diff(moment(goals.allGoals[i].goalDeadline, "MMM DD YYYY"), "days") < 0) && JSON.parse(goals.allGoals[i].goalStatus).completed === false) {
			deadlinesUpcoming.push(goals.allGoals[i]);
			console.log("Pushed goal to deadlinesUpcoming");
		}
		else if ((today.diff(moment(goals.allGoals[i].goalDeadline, "MMM DD YYYY"), "days") >= 0) && JSON.parse(goals.allGoals[i].goalStatus).completed === false) {
			deadlinesPassed.push(goals.allGoals[i]);
			console.log("Pushed goal to deadlinesPassed");
		}
	}

	//If there are deadlines that have passed, present them, one modal popup at a time, to have their status changed
	if (deadlinesPassed.length > 0) {
		for (var i = 0; i<deadlinesPassed.length; i++) {
			//Prompt user to change goal status:
			var jQueryModalString = '<div><div class="modal-content"><h5>Goal deadline reached!</h5><div class="row">Goal contents go here</div><form class="col s12" method="GET" action="/dashboard2:message"><input id="completedMsgHidden" type="hidden" name="message" value="Completed set to true"><button class="btn waves-effect waves-light">Completed</button></form><form class="col s12" method="GET" action="/dashboard2"><input id="abandonedMsgHidden" type="hidden" name="message" value="Abandoned set to true"><button class="btn waves-effect waves-light">Abandoned</button></form><form class="col s12" method="GET" action="/dashboard2"><input id="extendedMsgHidden" type="hidden" name="message" value="Extended set to true"><button class="btn waves-effect waves-light">Extended</button></form><form class="col s12" method="GET" action="/dashboard2"><input id="modifiedMsgHidden" type="hidden" name="message" value="Modified set to true"><button class="btn waves-effect waves-light">Modified</button></form></div></div>'

			$('.modal').modal();	//Allows the user-option modal to open on the goal checker page.
			$("#mainDiv").append(jQueryModalString);	//(HOPEFULLY) Modal pops up with two choices
		}
	}

	//If there are deadlines that haven't yet passed, make a modal popup with two options: 1)dashboard, 2)goals table
	if (deadlinesUpcoming.length > 0) {
		//Modal popup with two options, plus the message "You've got some goals with upcoming deadlines."
		//If you'd like to have this modal happen ON the dashboard page, replace "goToDashboard()" with "closeModal()"
		var jQueryModalString = '<div><div class="modal-content"><h5>You\'ve got goals with upcoming deadlines...</h5><div class="row"></div><form class="col s12" method="GET" action="/dashboard"><button class="btn waves-effect waves-light">Got it.  Take me to the dashboard.</button></form><form class="col s12" method="GET" action="/goalsTable"><button class="btn waves-effect waves-light">Oh snap!  Take me to the goals table, then.</button></form></div></div>'

		$('.modal').modal();	//Allows the user-option modal to open on the goal checker page.
		$("#mainDiv").append(jQueryModalString);	//(HOPEFULLY) Modal pops up with two choices
	}

	//If there are no deadlines that haven't yet passed, go straight to the dashboard
	else if(deadlinesUpcoming.length === 0) {
		var messageObj = {
			message: "You should set some goals!"
		}
		$.get("/dashboard", messageObj)
	}	

});

//////////////////
//HELPER FUNCTIONS
//////////////////

// function goToDashboard() {
// 	console.log('goToDashboard clicked');
// 	var messageObj = {
// 		message: "We'll check your goals again next time you login."
// 	}
// 	$.get("/dashboard", messageObj);
// }

// function goToGoalsTable() {
// 	console.log('goToGoalsTable clicked');
// 	$.get("/goalsTable");
// }

// //Completed, with comments - set completed to true, update comments, congratulate user
// function completed() {
// 	console.log("completed clicked");
// 	var messageObj = {
// 		message: "Completed clicked."
// 	}
// 	$.get("/dashboard", messageObj);
// }

// //Abandoned, with comments - set abandoned to true, update comments, give user consolatory message
// function abandoned() {
// 	console.log("abandoned clicked");
// 	var messageObj = {
// 		message: "Abandoned clicked."
// 	}
// 	$.get("/dashboard", messageObj);
// }

// //Extended, with new date - set goalDeadline to new date, wish user luck
// function extended() {
// 	console.log("extended clicked");
// 	var messageObj = {
// 		message: "Extended clicked."
// 	}
// 	$.get("/dashboard", messageObj);
// }

// //Modified, with new date, goal name(opt), goal text - set goalDeadline to new date, update goalText, wish user luck
// function modified() {
// 	console.log("modified clicked");
// 	var messageObj = {
// 		message: "Modified clicked."
// 	}
// 	$.get("/dashboard", messageObj);
// }

function closeModal(){
	$('#modal1').modal('close');
}