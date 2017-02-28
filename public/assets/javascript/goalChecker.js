//goalChecker todo

//1) Find out how to get today's date from moment
//2) Find out how to compare today's date to a date from a goal using moment
//3) Build a modal popup for changing the status of goals with passed deadlines
//4) Build a modal popup for going either to the goals table or to the dashboard (edit the two functions)
//5) When there are no goals, send the user to the dashboard with the message "You should set some goals!"

//Each time a user logs in, get all of that user's goals, then...
$.get("/goals").then(function(goals) {

	var deadlinesUpcoming = [];
	var deadlinesPassed = [];

	var today;	//Get today from moment, I'm assuming

	for (var i = 0; i<goals.length; i++) {
		if (goals[i].goalDeadline > today && goals[i].goalStatus.complete === false) {  //Might need moment here, too
			deadlinesUpcoming.push(goals[i]);
		}
		else if (goalDeadline <= today) {  //Might need moment here, too
			deadlinesPassed.push(goals[i]);
		}
	}

	if (deadlinesPassed.length > 0) {
		for (var i = 0; i<deadlinesPassed.length; i++) {
			//Prompt user to change goal status:
				//Completed, with comments - set completed to true, update comments, congratulate user
				//Abandoned, with comments - set abandoned to true, update comments, give user consolatory message
				//Extended, with new date - set goalDeadline to new date, wish user luck
				//Modified, with new date, goal name(opt), goal text - set goalDeadline to new date, update goalText, wish user luck
		}
	}

	if (deadlinesUpcoming.length > 0) {
		//Modal popup with two options, plus the message "You've got some goals with upcoming deadlines."
			//Option 1 - go to the goals table
			//Option 2 - go to the dashboard
	}

	else if(deadlinesUpcoming.length === 0) {
		//Go straight to the dashboard with the message "You should set some goals!"
	}

	function editGoalButton() {
		//render goalEditor.handlebars with that goal
			//(OPTIONAL)After the goal is submitted for updating, instead of redirecting to the dashboard like normal, redirect to the goal checker page, except this time don't do anything with the goals whose deadlines are passed
	}
	
	function goToDashboardButton() {
		//render dashboard.handlebars
	}
});
	

