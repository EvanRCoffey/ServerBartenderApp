//Make a dropdown on this page (handlebars?) where a user can select a job and run the quiz maker for that job
var tenQuiz = false;
var twentyQuiz = false;
var thirtyQuiz = false;

$(document).ready(function() {
    $('select').material_select();
    // prepareJobDropdown();
});

//////////////////
//HELPER FUNCTIONS
//////////////////

function returnIncorrectName(incorrectAnswers, sampleFourAnswers) {
	var randInc = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
	if (!sampleFourAnswers.includes(randInc)) {
		return randInc;
	}
	else {return returnIncorrectName(incorrectAnswers, sampleFourAnswers)}
}

function returnCorrectName(correctAnswers, sampleFourAnswers) {
	var randInc = correctAnswers[Math.floor(Math.random() * correctAnswers.length)];
	if (!sampleFourAnswers.includes(randInc)) {
		return randInc;
	}
	else {return returnCorrectName(correctAnswers, sampleFourAnswers)}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getCorrectAnswerNumbers(questionObj) {
	for (var i = 0; i<questionObj.correctAnswers.length; i++) {
		if (questionObj.correctAnswers[i] === questionObj.answer1) {questionObj.correctAnswers[i] = 1}
		else if (questionObj.correctAnswers[i] === questionObj.answer2) {questionObj.correctAnswers[i] = 2}
		else if (questionObj.correctAnswers[i] === questionObj.answer3) {questionObj.correctAnswers[i] = 3}
		else if (questionObj.correctAnswers[i] === questionObj.answer4) {questionObj.correctAnswers[i] = 4}
	}
	return questionObj;
}

function playFromBeginning (quizSize) {
	numCorrect = 0;
	numIncorrect = 0;
	currentQuestion = {};
	randomizedQuiz = [];
	if (quizSize === 10) {

		///////////////////////////////////////////////////////////////////////
		//Make ten questions based on guidlines - push each to randomizedQuiz[]
		///////////////////////////////////////////////////////////////////////

		if (allQuizQuestions.q8Array.length === 1) {
			var Question = {
				question: allQuizQuestions.q8Array[0].question,
				answer1: allQuizQuestions.q8Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q8Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q8Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q8Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q8Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q9Array.length === 1) {
			var Question = {
				question: allQuizQuestions.q9Array[0].question,
				answer1: allQuizQuestions.q9Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q9Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q9Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q9Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q9Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q7EntArray.length === 1 || allQuizQuestions.q7AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q7EntArray.length === 1) {tempArray.push(allQuizQuestions.q7EntArray[0])}
			if (allQuizQuestions.q7AppArray.length === 1) {tempArray.push(allQuizQuestions.q7AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q10SaucesArray.length === 1 || allQuizQuestions.q10DressingsArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q10SaucesArray.length === 1) {tempArray.push(allQuizQuestions.q10SaucesArray[0])}
			if (allQuizQuestions.q10DressingsArray.length === 1) {tempArray.push(allQuizQuestions.q10DressingsArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q5Array.length > 0) {
			var Question = {
				question: allQuizQuestions.q5Array[0].question,
				answer1: allQuizQuestions.q5Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q5Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q5Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q5Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q5Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q6DesArray.length === 1 || allQuizQuestions.q6EntArray.length === 1 || allQuizQuestions.q6AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q6DesArray.length === 1) {tempArray.push(allQuizQuestions.q6DesArray[0])}
			if (allQuizQuestions.q6EntArray.length === 1) {tempArray.push(allQuizQuestions.q6EntArray[0])}
			if (allQuizQuestions.q6AppArray.length === 1) {tempArray.push(allQuizQuestions.q6AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q1AppArray.length >= 1 || allQuizQuestions.q1EntArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q1AppArray.length >= 1) {tempArray.push(allQuizQuestions.q1AppArray[0])}
			if (allQuizQuestions.q1EntArray.length >= 1) {tempArray.push(allQuizQuestions.q1EntArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q2AppArray.length === 1 || allQuizQuestions.q2EntArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q2AppArray.length === 1) {tempArray.push(allQuizQuestions.q2AppArray[0])}
			if (allQuizQuestions.q2EntArray.length === 1) {tempArray.push(allQuizQuestions.q2EntArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q3DesArray.length >= 1 || allQuizQuestions.q3EntArray.length >= 1 || allQuizQuestions.q3AppArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q3DesArray.length >= 1) {tempArray.push(allQuizQuestions.q3DesArray[0])}
			if (allQuizQuestions.q3EntArray.length >= 1) {tempArray.push(allQuizQuestions.q3EntArray[0])}
			if (allQuizQuestions.q3AppArray.length >= 1) {tempArray.push(allQuizQuestions.q3AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q4DesArray.length >= 1 || allQuizQuestions.q4EntArray.length >= 1 || allQuizQuestions.q4AppArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q4DesArray.length >= 1) {tempArray.push(allQuizQuestions.q4DesArray[0])}
			if (allQuizQuestions.q4EntArray.length >= 1) {tempArray.push(allQuizQuestions.q4EntArray[0])}
			if (allQuizQuestions.q4AppArray.length >= 1) {tempArray.push(allQuizQuestions.q4AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (randomizedQuiz.length === 10) {
			shuffle(randomizedQuiz);
			shuffle(randomizedQuiz);
			nextQuestion();
		}
		
		else if (randomizedQuiz.length < 10) {
			var questionsNeeded = 10 - randomizedQuiz.length;
			randomizedQuiz = fillQuizQuestionsArray(questionsNeeded, randomizedQuiz);
			shuffle(randomizedQuiz);
			shuffle(randomizedQuiz);
			nextQuestion();
		}	
	}

	if (quizSize === 20) {
		
		//////////////////////////////////////////////////////////////////////////
		//Make twenty questions based on guidlines - push each to randomizedQuiz[]
		//////////////////////////////////////////////////////////////////////////

		if (allQuizQuestions.q8Array.length === 1) {
			var Question = {
				question: allQuizQuestions.q8Array[0].question,
				answer1: allQuizQuestions.q8Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q8Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q8Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q8Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q8Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q9Array.length === 1) {
			var Question = {
				question: allQuizQuestions.q9Array[0].question,
				answer1: allQuizQuestions.q9Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q9Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q9Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q9Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q9Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q7EntArray.length === 1 || allQuizQuestions.q7AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q7EntArray.length === 1) {tempArray.push(allQuizQuestions.q7EntArray[0])}
			if (allQuizQuestions.q7AppArray.length === 1) {tempArray.push(allQuizQuestions.q7AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q10SaucesArray.length === 1 || allQuizQuestions.q10DressingsArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q10SaucesArray.length === 1) {tempArray.push(allQuizQuestions.q10SaucesArray[0])}
			if (allQuizQuestions.q10DressingsArray.length === 1) {tempArray.push(allQuizQuestions.q10DressingsArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		//Get up to three Q6
		if (allQuizQuestions.q6DesArray.length === 1 || allQuizQuestions.q6EntArray.length === 1 || allQuizQuestions.q6AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q6DesArray.length === 1) {tempArray.push(allQuizQuestions.q6DesArray[0])}
			if (allQuizQuestions.q6EntArray.length === 1) {tempArray.push(allQuizQuestions.q6EntArray[0])}
			if (allQuizQuestions.q6AppArray.length === 1) {tempArray.push(allQuizQuestions.q6AppArray[0])}
			shuffle(tempArray);
			for (var i=0; i<tempArray.length; i++) {
				var tempArrayEntry = [];
				tempArrayEntry.push(tempArray[i])
				var Question = questionObjectTemplate(tempArrayEntry);
				Question = getCorrectAnswerNumbers(Question);
				randomizedQuiz.push(Question);
			}	
		}

		//Get up to three Q1
		if (allQuizQuestions.q1AppArray.length >= 1 || allQuizQuestions.q1EntArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q1AppArray.length === 1) {tempArray.push(allQuizQuestions.q1AppArray[0])}
			if (allQuizQuestions.q1EntArray.length === 1) {tempArray.push(allQuizQuestions.q1EntArray[0])}
			if (allQuizQuestions.q1AppArray.length === 2) {tempArray.push(allQuizQuestions.q1AppArray[0]), tempArray.push(allQuizQuestions.q1AppArray[1])}
			if (allQuizQuestions.q1EntArray.length === 2) {tempArray.push(allQuizQuestions.q1EntArray[0]), tempArray.push(allQuizQuestions.q1EntArray[1])}
			shuffle(tempArray);
			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter < 3) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to two Q2
		if (allQuizQuestions.q2AppArray.length === 1 || allQuizQuestions.q2EntArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q2AppArray.length === 1) {tempArray.push(allQuizQuestions.q2AppArray[0])}
			if (allQuizQuestions.q2EntArray.length === 1) {tempArray.push(allQuizQuestions.q2EntArray[0])}
			if (allQuizQuestions.q2AppArray.length === 2) {tempArray.push(allQuizQuestions.q2AppArray[0]), tempArray.push(allQuizQuestions.q2AppArray[1])}
			if (allQuizQuestions.q2EntArray.length === 2) {tempArray.push(allQuizQuestions.q2EntArray[0]), tempArray.push(allQuizQuestions.q2EntArray[1])}
			shuffle(tempArray);
			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter<2) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to two Q5
		if (allQuizQuestions.q5Array.length > 0) {
			var counter = 0;
			for (var i=0; i<allQuizQuestions.q5Array.length; i++) {
				if (counter<2) {
					var Question = {
						question: allQuizQuestions.q5Array[0].question,
						answer1: allQuizQuestions.q5Array[0].fourAnswersArray[0],
						answer2: allQuizQuestions.q5Array[0].fourAnswersArray[1],
						answer3: allQuizQuestions.q5Array[0].fourAnswersArray[2],
						answer4: allQuizQuestions.q5Array[0].fourAnswersArray[3],
						correctAnswers: allQuizQuestions.q5Array[0].correctAnswersIndexesArray
					}
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to three Q3
		if (allQuizQuestions.q3DesArray.length >= 1 || allQuizQuestions.q3EntArray.length >= 1 || allQuizQuestions.q3AppArray.length >= 1) {
			var tempArray = [];
			for (var i=0; i<3; i++) {
				if (allQuizQuestions.q3DesArray[i]) {tempArray.push(allQuizQuestions.q3DesArray[i])}
			}
			for (var i=0; i<3; i++) {
				if (allQuizQuestions.q3EntArray[i]) {tempArray.push(allQuizQuestions.q3EntArray[i])}
			}
			for (var i=0; i<3; i++) {
				if (allQuizQuestions.q3AppArray[i]) {tempArray.push(allQuizQuestions.q3AppArray[i])}
			}
			shuffle(tempArray);

			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter<3) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to three Q4
		if (allQuizQuestions.q4DesArray.length >= 1 || allQuizQuestions.q4EntArray.length >= 1 || allQuizQuestions.q4AppArray.length >= 1) {
			var tempArray = [];
			for (var i=0; i<3; i++) {
				if (allQuizQuestions.q4DesArray[i]) {tempArray.push(allQuizQuestions.q4DesArray[i])}
			}
			for (var i=0; i<3; i++) {
				if (allQuizQuestions.q4EntArray[i]) {tempArray.push(allQuizQuestions.q4EntArray[i])}
			}
			for (var i=0; i<3; i++) {
				if (allQuizQuestions.q4AppArray[i]) {tempArray.push(allQuizQuestions.q4AppArray[i])}
			}
			shuffle(tempArray);

			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter<3) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Fill
		if (randomizedQuiz.length === 20) {
			shuffle(randomizedQuiz);
			shuffle(randomizedQuiz);
			nextQuestion();
		}
		
		else if (randomizedQuiz.length < 20) {
			var questionsNeeded = 20 - randomizedQuiz.length;
			randomizedQuiz = fillQuizQuestionsArray(questionsNeeded, randomizedQuiz);
			shuffle(randomizedQuiz);
			shuffle(randomizedQuiz);
			nextQuestion();
		}
		
		shuffle(randomizedQuiz);
		shuffle(randomizedQuiz);
		nextQuestion();
	}

	if (quizSize === 30) {
		
		//////////////////////////////////////////////////////////////////////////
		//Make thirty questions based on guidlines - push each to randomizedQuiz[]
		//////////////////////////////////////////////////////////////////////////

		if (allQuizQuestions.q8Array.length === 1) {
			var Question = {
				question: allQuizQuestions.q8Array[0].question,
				answer1: allQuizQuestions.q8Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q8Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q8Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q8Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q8Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		if (allQuizQuestions.q9Array.length === 1) {
			var Question = {
				question: allQuizQuestions.q9Array[0].question,
				answer1: allQuizQuestions.q9Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q9Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q9Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q9Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q9Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		//Get up to two Q7
		if (allQuizQuestions.q7EntArray.length === 1 || allQuizQuestions.q7AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q7EntArray.length === 1) {tempArray.push(allQuizQuestions.q7EntArray[0])}
			if (allQuizQuestions.q7AppArray.length === 1) {tempArray.push(allQuizQuestions.q7AppArray[0])}
			shuffle(tempArray);
			for (var i=0; i<tempArray.length; i++) {
				var tempArrayEntry = [];
				tempArrayEntry.push(tempArray[i])
				var Question = questionObjectTemplate(tempArrayEntry);
				Question = getCorrectAnswerNumbers(Question);
				randomizedQuiz.push(Question);
			}	
		}

		//Get up to two Q10
		if (allQuizQuestions.q10SaucesArray.length === 1 || allQuizQuestions.q10DressingsArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q10SaucesArray.length === 1) {tempArray.push(allQuizQuestions.q10SaucesArray[0])}
			if (allQuizQuestions.q10DressingsArray.length === 1) {tempArray.push(allQuizQuestions.q10DressingsArray[0])}
			shuffle(tempArray);
			for (var i=0; i<tempArray.length; i++) {
				var tempArrayEntry = [];
				tempArrayEntry.push(tempArray[i])
				var Question = questionObjectTemplate(tempArrayEntry);
				Question = getCorrectAnswerNumbers(Question);
				randomizedQuiz.push(Question);
			}	
		}

		//Get up to three Q6
		if (allQuizQuestions.q6DesArray.length === 1 || allQuizQuestions.q6EntArray.length === 1 || allQuizQuestions.q6AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q6DesArray.length === 1) {tempArray.push(allQuizQuestions.q6DesArray[0])}
			if (allQuizQuestions.q6EntArray.length === 1) {tempArray.push(allQuizQuestions.q6EntArray[0])}
			if (allQuizQuestions.q6AppArray.length === 1) {tempArray.push(allQuizQuestions.q6AppArray[0])}
			shuffle(tempArray);
			for (var i=0; i<tempArray.length; i++) {
				var tempArrayEntry = [];
				tempArrayEntry.push(tempArray[i])
				var Question = questionObjectTemplate(tempArrayEntry);
				Question = getCorrectAnswerNumbers(Question);
				randomizedQuiz.push(Question);
			}	
		}

		//Get up to four Q1
		if (allQuizQuestions.q1AppArray.length >= 1 || allQuizQuestions.q1EntArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q1AppArray.length === 1) {tempArray.push(allQuizQuestions.q1AppArray[0])}
			if (allQuizQuestions.q1EntArray.length === 1) {tempArray.push(allQuizQuestions.q1EntArray[0])}
			if (allQuizQuestions.q1AppArray.length === 2) {tempArray.push(allQuizQuestions.q1AppArray[0]), tempArray.push(allQuizQuestions.q1AppArray[1])}
			if (allQuizQuestions.q1EntArray.length === 2) {tempArray.push(allQuizQuestions.q1EntArray[0]), tempArray.push(allQuizQuestions.q1EntArray[1])}
			shuffle(tempArray);
			for (var i=0; i<tempArray.length; i++) {
				var tempArrayEntry = [];
				tempArrayEntry.push(tempArray[i])
				var Question = questionObjectTemplate(tempArrayEntry);
				Question = getCorrectAnswerNumbers(Question);
				randomizedQuiz.push(Question);
			}
		}

		//Get up to three Q2
		if (allQuizQuestions.q2AppArray.length === 1 || allQuizQuestions.q2EntArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q2AppArray.length === 1) {tempArray.push(allQuizQuestions.q2AppArray[0])}
			if (allQuizQuestions.q2EntArray.length === 1) {tempArray.push(allQuizQuestions.q2EntArray[0])}
			if (allQuizQuestions.q2AppArray.length === 2) {tempArray.push(allQuizQuestions.q2AppArray[0]), tempArray.push(allQuizQuestions.q2AppArray[1])}
			if (allQuizQuestions.q2EntArray.length === 2) {tempArray.push(allQuizQuestions.q2EntArray[0]), tempArray.push(allQuizQuestions.q2EntArray[1])}
			shuffle(tempArray);
			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter<3) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to four Q5
		if (allQuizQuestions.q5Array.length > 0) {
			var counter = 0;
			for (var i=0; i<allQuizQuestions.q5Array.length; i++) {
				if (counter<4) {
					var Question = {
						question: allQuizQuestions.q5Array[0].question,
						answer1: allQuizQuestions.q5Array[0].fourAnswersArray[0],
						answer2: allQuizQuestions.q5Array[0].fourAnswersArray[1],
						answer3: allQuizQuestions.q5Array[0].fourAnswersArray[2],
						answer4: allQuizQuestions.q5Array[0].fourAnswersArray[3],
						correctAnswers: allQuizQuestions.q5Array[0].correctAnswersIndexesArray
					}
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to five Q3
		if (allQuizQuestions.q3DesArray.length >= 1 || allQuizQuestions.q3EntArray.length >= 1 || allQuizQuestions.q3AppArray.length >= 1) {
			var tempArray = [];
			for (var i=0; i<5; i++) {
				if (allQuizQuestions.q3DesArray[i]) {tempArray.push(allQuizQuestions.q3DesArray[i])}
			}
			for (var i=0; i<5; i++) {
				if (allQuizQuestions.q3EntArray[i]) {tempArray.push(allQuizQuestions.q3EntArray[i])}
			}
			for (var i=0; i<5; i++) {
				if (allQuizQuestions.q3AppArray[i]) {tempArray.push(allQuizQuestions.q3AppArray[i])}
			}
			shuffle(tempArray);

			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter<5) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//Get up to five Q4
		if (allQuizQuestions.q4DesArray.length >= 1 || allQuizQuestions.q4EntArray.length >= 1 || allQuizQuestions.q4AppArray.length >= 1) {
			var tempArray = [];
			for (var i=0; i<5; i++) {
				if (allQuizQuestions.q4DesArray[i]) {tempArray.push(allQuizQuestions.q4DesArray[i])}
			}
			for (var i=0; i<5; i++) {
				if (allQuizQuestions.q4EntArray[i]) {tempArray.push(allQuizQuestions.q4EntArray[i])}
			}
			for (var i=0; i<5; i++) {
				if (allQuizQuestions.q4AppArray[i]) {tempArray.push(allQuizQuestions.q4AppArray[i])}
			}
			shuffle(tempArray);

			var counter = 0;
			for (var i=0; i<tempArray.length; i++) {
				if (counter<5) {
					var tempArrayEntry = [];
					tempArrayEntry.push(tempArray[i])
					var Question = questionObjectTemplate(tempArrayEntry);
					Question = getCorrectAnswerNumbers(Question);
					randomizedQuiz.push(Question);
					counter++;
				}
			}
		}

		//FILL
		if (randomizedQuiz.length === 30) {
			shuffle(randomizedQuiz);
			shuffle(randomizedQuiz);
			nextQuestion();
		}
		
		else if (randomizedQuiz.length < 30) {
			var questionsNeeded = 30 - randomizedQuiz.length;
			randomizedQuiz = fillQuizQuestionsArray(questionsNeeded, randomizedQuiz);
			shuffle(randomizedQuiz);
			shuffle(randomizedQuiz);
			nextQuestion();
		}	
		
		shuffle(randomizedQuiz);
		shuffle(randomizedQuiz);
		nextQuestion();
	}
}

function nextQuestion() {
	if ((numCorrect + numIncorrect) === randomizedQuiz.length) {
		//End-game status report
		$("#messageArea").html("Quiz complete!");
		$("#answersArea").html("Total correct: " + numCorrect + "<br>");
		$("#answersArea").append("Total incorrect: " + numIncorrect + "<br>");
		$("#answersArea").append("Refresh the page to select a new menu, or click one of the buttons below to create a new randomly-generated quiz for this menu:<br><br>");
		if (thirtyQuiz) {
			$("#answersArea").append('<button onclick="clickedThirtyQuiz()" type="button" class="btn btn-default" id="thirtyQuizRestart">Restart with a new thirty-question quiz</button><br><br>');	
		}
		if (twentyQuiz) {
			$("#answersArea").append('<button onclick="clickedTwentyQuiz()" type="button" class="btn btn-default" id="twentyQuizRestart">Restart with a new twenty-question quiz</button><br><br>');	
		}
		if (tenQuiz) {
			$("#answersArea").append('<button onclick="clickedTenQuiz()" type="button" class="btn btn-default" id="tenQuizRestart">Restart with a new ten-question quiz</button>');	
		}	
	}
	else {
		//Load the question object into current question
		currentQuestion = randomizedQuiz[(numCorrect+numIncorrect)];
		//Display next question in message area
		$("#messageArea").html(currentQuestion.question);
		//Display that question's answers in answers area
		$("#answersArea").html('<button onclick="isCorrect(1)" type="button" class="btn btn-default" id="1">' + currentQuestion.answer1 + '</button><br><br>');
		$("#answersArea").append('<button onclick="isCorrect(2)" type="button" class="btn btn-default" id="2">' + currentQuestion.answer2 + '</button><br><br>');
		$("#answersArea").append('<button onclick="isCorrect(3)" type="button" class="btn btn-default" id="3">' + currentQuestion.answer3 + '</button><br><br>');
		$("#answersArea").append('<button onclick="isCorrect(4)" type="button" class="btn btn-default" id="4">' + currentQuestion.answer4 + '</button><br><br>');
	}
}

function isCorrect(number) {
	//If the answer is correct....
	if (currentQuestion.correctAnswers.includes(number)) {
		//Display winning message in message area
		$("#messageArea").html("Correct!");
		//Increment correct answers
		numCorrect++;
	}
	//If the answer is incorrect...
	else {
		//Display losing message in message area
		$("#messageArea").html("Incorrect!");
		//Increment incorrect answers
		numIncorrect++;
	}
	//User clicks a button to see the next question
	$("#answersArea").html('<button onclick="nextQuestion()" type="button" class="btn btn-default" id="nextQ">Continue</button><br><br>');
	caption();
}

function caption() {
	if (currentQuestion.correctAnswers.includes(1)) {$("#answersArea").append('Correct answer(s): ' + currentQuestion.answer1 + '<br><br>')}
	if (currentQuestion.correctAnswers.includes(2)) {$("#answersArea").append('Correct answer(s): ' + currentQuestion.answer2 + '<br><br>')}
	if (currentQuestion.correctAnswers.includes(3)) {$("#answersArea").append('Correct answer(s): ' + currentQuestion.answer3 + '<br><br>')}
	if (currentQuestion.correctAnswers.includes(4)) {$("#answersArea").append('Correct answer(s): ' + currentQuestion.answer4 + '<br><br>')}
}

function clickedThirtyQuiz() {
	$("#dropdown").html("");
	playFromBeginning(30);
}

function clickedTwentyQuiz() {
	$("#dropdown").html("");
	playFromBeginning(20);
}

function clickedTenQuiz() {
	$("#dropdown").html("");
	playFromBeginning(10);
}

function fillQuizQuestionsArray(questionsNeeded, randomizedQuiz) {
	for (var i = 0; i<questionsNeeded; i++) {
		if (allQuizQuestions.q3DesArray.length >= 1 || allQuizQuestions.q3EntArray.length >= 1 || allQuizQuestions.q3AppArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q3DesArray.length >= 1) {tempArray.push(allQuizQuestions.q3DesArray[0])}
			if (allQuizQuestions.q3EntArray.length >= 1) {tempArray.push(allQuizQuestions.q3EntArray[0])}
			if (allQuizQuestions.q3AppArray.length >= 1) {tempArray.push(allQuizQuestions.q3AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		else if (allQuizQuestions.q4DesArray.length >= 1 || allQuizQuestions.q4EntArray.length >= 1 || allQuizQuestions.q4AppArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q4DesArray.length >= 1) {tempArray.push(allQuizQuestions.q4DesArray[0])}
			if (allQuizQuestions.q4EntArray.length >= 1) {tempArray.push(allQuizQuestions.q4EntArray[0])}
			if (allQuizQuestions.q4AppArray.length >= 1) {tempArray.push(allQuizQuestions.q4AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		else if (allQuizQuestions.q1AppArray.length >= 1 || allQuizQuestions.q1EntArray.length >= 1) {
			var tempArray = [];
			if (allQuizQuestions.q1AppArray.length >= 1) {tempArray.push(allQuizQuestions.q1AppArray[0])}
			if (allQuizQuestions.q1EntArray.length >= 1) {tempArray.push(allQuizQuestions.q1EntArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}

		else if (allQuizQuestions.q2AppArray.length === 1 || allQuizQuestions.q2EntArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q2AppArray.length === 1) {tempArray.push(allQuizQuestions.q2AppArray[0])}
			if (allQuizQuestions.q2EntArray.length === 1) {tempArray.push(allQuizQuestions.q2EntArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}
		
		else if (allQuizQuestions.q6DesArray.length === 1 || allQuizQuestions.q6EntArray.length === 1 || allQuizQuestions.q6AppArray.length === 1) {
			var tempArray = [];
			if (allQuizQuestions.q6DesArray.length === 1) {tempArray.push(allQuizQuestions.q6DesArray[0])}
			if (allQuizQuestions.q6EntArray.length === 1) {tempArray.push(allQuizQuestions.q6EntArray[0])}
			if (allQuizQuestions.q6AppArray.length === 1) {tempArray.push(allQuizQuestions.q6AppArray[0])}
			shuffle(tempArray);
			var Question = questionObjectTemplate(tempArray);
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}
		
		else if (allQuizQuestions.q5Array.length > 0) {
			var Question = {
				question: allQuizQuestions.q5Array[0].question,
				answer1: allQuizQuestions.q5Array[0].fourAnswersArray[0],
				answer2: allQuizQuestions.q5Array[0].fourAnswersArray[1],
				answer3: allQuizQuestions.q5Array[0].fourAnswersArray[2],
				answer4: allQuizQuestions.q5Array[0].fourAnswersArray[3],
				correctAnswers: allQuizQuestions.q5Array[0].correctAnswersIndexesArray
			}
			Question = getCorrectAnswerNumbers(Question);
			randomizedQuiz.push(Question);
		}
	}
	shuffle(randomizedQuiz);
	return randomizedQuiz;
}

function questionObjectTemplate(tempArray) {
	var questionObject = {
		question: tempArray[0].question,
		answer1: tempArray[0].fourAnswersArray[0],
		answer2: tempArray[0].fourAnswersArray[1],
		answer4: tempArray[0].fourAnswersArray[3],
		answer3: tempArray[0].fourAnswersArray[2],
		correctAnswers: tempArray[0].correctAnswersIndexesArray
	}
	return questionObject;
}

function loadMenus(job) {
	var parentJobID = job.value;
	var jobIdObj = {
		jobId:parentJobID
	}
	$.post("/getMenus", jobIdObj).then(function(data3) {
		if (data3.length === 0) {
			var jQueryString = '<div class="col s12"><br><h4>Quiz Maker</h4></div><div class="input-field col s12"><h5>To use the quiz maker, you must create a job and a menu.<a href="/menuBuilder"><h5>Click here to create a menu.</h5></a></div>'
			$("#dropdown").html(jQueryString);
		}
		else if (data3.length > 0) {

			var jQueryString = '<div class="input-field col s12"><select class="menuSelector" onchange="startQuizMaker(this.value);"><option value="" disabled>Click here to choose a menu</option>';


			for (var i = 0; i<data3.length; i++) {
				jQueryString += '<option value="'+ data3[i].id +'" selected>'+ data3[i].menuName +'</option>'
			}

		    jQueryString += '</select><label>Menu Selector</label></div>';

		    $("#dropdown").html(jQueryString);
		    $('select').material_select();
		}		
	});
}

function startQuizMaker(menu) {
	var idObj = {
		menuId: menu
	}

	$.post("/checkMenuJSON", idObj).then(function(data2) {
		var parsedCriJson = JSON.parse(data2.criJSON);
		var parsedMenuJson = JSON.parse(data2.menuJSON);
		var reParsedCriJson = JSON.parse(parsedCriJson);
		var reParsedMenuJson = JSON.parse(parsedMenuJson);
		console.log(reParsedMenuJson);
		console.log(reParsedCriJson);

		$("#dropdown").html("Menu analyzed!  Select options below");

		////////////////
		//MENU SELECTION
		////////////////

		var uniqueAppDescr = [];
		var uniqueAppIngr = [];
		var uniqueEntDescr = [];
		var uniqueEntIngr = [];
		var uniqueDesDescr = [];
		var uniqueDesIngr = [];
		var uniqueAllVio = [];
		var vegApps = [];
		var vegEnts = [];
		var commonSauces = [];
		var commonDressings = [];
		var secretItems = [];
		var addOns = [];
		var popApps = [];
		var popEnts = [];
		var popDesserts = [];
		var allQ1App = [];
		var allQ1Ent = [];
		var allApp = [];
		var allEnt = [];
		var allDes = [];

		//User selects menu, then...

		//For each entree...
		for (var i = 0; i<reParsedMenuJson.entree.length; i++) {
			//Push the ent to allEnt[]
			allEnt.push(reParsedMenuJson.entree[i]);
			//Push the ent to popEnts if appropriate
			if (reParsedMenuJson.entree[i].descriptors.popular) {
				popEnts.push(reParsedMenuJson.entree[i]);
			}
			//Increment entsWithPrice and push the app to allQ1Ent[] if appropriate
			if (parseFloat(reParsedMenuJson.entree[i].price) > 0) {
				allQ1Ent.push(reParsedMenuJson.entree[i]);
			}
		}

		//For each appetizer...
		for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {
			//Push the app to allApp[]
			allApp.push(reParsedMenuJson.appetizer[i]);
			//Push the app to popApps if appropriate
			if (reParsedMenuJson.appetizer[i].descriptors.popular) {
				popApps.push(reParsedMenuJson.appetizer[i]);
			}
			//Increment appsWithPrice and push the app to allQ1App[] if appropriate
			if (parseFloat(reParsedMenuJson.appetizer[i].price) > 0) {
				allQ1App.push(reParsedMenuJson.appetizer[i]);
			}
		}

		//For each dessert...
		for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {
			//Push the dessert to allDes[]
			allDes.push(reParsedMenuJson.dessert[i]);
			//Push the dessert to popDesserts if appropriate
			if (reParsedMenuJson.dessert[i].descriptors.popular) {
				popDesserts.push(reParsedMenuJson.dessert[i]);
			}
		}

		//For each addOn, push that addOn to addOns[]
		for (var i = 0; i<reParsedMenuJson.addOn.length; i++) {
			addOns.push(reParsedMenuJson.addOn[i]);
		}

		//For each app, for each descriptor that's marked true, if it's not in uniqueAppDescr[], push it
		var numAppDescr = 17;
		for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {
			for (var j = 0; j<numAppDescr; j++) {
				if ((reParsedMenuJson.appetizer[i].descriptors.aLaCarteOrBiteSize) && (!uniqueAppDescr.includes("aLaCarteOrBiteSize"))) {uniqueAppDescr.push("aLaCarteOrBiteSize")};
				if ((reParsedMenuJson.appetizer[i].descriptors.cheesy) && (!uniqueAppDescr.includes("cheesy"))) {uniqueAppDescr.push("cheesy")};
				if ((reParsedMenuJson.appetizer[i].descriptors.fresh) && (!uniqueAppDescr.includes("fresh"))) {uniqueAppDescr.push("fresh")};
				if ((reParsedMenuJson.appetizer[i].descriptors.fried) && (!uniqueAppDescr.includes("fried"))) {uniqueAppDescr.push("fried")};
				if ((reParsedMenuJson.appetizer[i].descriptors.healthy) && (!uniqueAppDescr.includes("healthy"))) {uniqueAppDescr.push("healthy")};
				if ((reParsedMenuJson.appetizer[i].descriptors.hearty) && (!uniqueAppDescr.includes("hearty"))) {uniqueAppDescr.push("hearty")};
				if ((reParsedMenuJson.appetizer[i].descriptors.indulgent) && (!uniqueAppDescr.includes("indulgent"))) {uniqueAppDescr.push("indulgent")};
				if ((reParsedMenuJson.appetizer[i].descriptors.light) && (!uniqueAppDescr.includes("light"))) {uniqueAppDescr.push("light")};
				if ((reParsedMenuJson.appetizer[i].descriptors.plain) && (!uniqueAppDescr.includes("plain"))) {uniqueAppDescr.push("plain")};
				if ((reParsedMenuJson.appetizer[i].descriptors.popular) && (!uniqueAppDescr.includes("popular"))) {uniqueAppDescr.push("popular")};
				if ((reParsedMenuJson.appetizer[i].descriptors.raw) && (!uniqueAppDescr.includes("raw"))) {uniqueAppDescr.push("raw")};
				if ((reParsedMenuJson.appetizer[i].descriptors.salty) && (!uniqueAppDescr.includes("salty"))) {uniqueAppDescr.push("salty")};
				if ((reParsedMenuJson.appetizer[i].descriptors.servedCold) && (!uniqueAppDescr.includes("servedCold"))) {uniqueAppDescr.push("servedCold")};
				if ((reParsedMenuJson.appetizer[i].descriptors.spicy) && (!uniqueAppDescr.includes("spicy"))) {uniqueAppDescr.push("spicy")};
				if ((reParsedMenuJson.appetizer[i].descriptors.sweet) && (!uniqueAppDescr.includes("sweet"))) {uniqueAppDescr.push("sweet")};
				if ((reParsedMenuJson.appetizer[i].descriptors.toShare) && (!uniqueAppDescr.includes("toShare"))) {uniqueAppDescr.push("toShare")};
				if ((reParsedMenuJson.appetizer[i].descriptors.vegetarian) && (!uniqueAppDescr.includes("vegetarian"))) {uniqueAppDescr.push("vegetarian"), vegApps.push(reParsedMenuJson.appetizer[i]);};
			}
		}

		//For each app, for each ingredient that's marked true, if it's not in uniqueAppIngr[], push it
		var numAppIngr = 6;
		for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {
			for (var j = 0; j<numAppIngr; j++) {
				if ((reParsedMenuJson.appetizer[i].ingredients.beef) && (!uniqueAppIngr.includes("beef"))) {uniqueAppIngr.push("beef")};
				if ((reParsedMenuJson.appetizer[i].ingredients.chicken) && (!uniqueAppIngr.includes("chicken"))) {uniqueAppIngr.push("chicken")};
				if ((reParsedMenuJson.appetizer[i].ingredients.lamb) && (!uniqueAppIngr.includes("lamb"))) {uniqueAppIngr.push("lamb")};
				if ((reParsedMenuJson.appetizer[i].ingredients.otherProtein) && (!uniqueAppIngr.includes("otherProtein"))) {uniqueAppIngr.push("otherProtein")};
				if ((reParsedMenuJson.appetizer[i].ingredients.pork) && (!uniqueAppIngr.includes("pork"))) {uniqueAppIngr.push("pork")};
				if ((reParsedMenuJson.appetizer[i].ingredients.seafood) && (!uniqueAppIngr.includes("seafood"))) {uniqueAppIngr.push("seafood")};
			}
		}

		//For each entree, for each descriptor that's marked true, if it's not in uniqueEntDescr[], push it
		var numEntDescr = 17;
		for (var i = 0; i<reParsedMenuJson.entree.length; i++) {
			for (var j = 0; j<numEntDescr; j++) {
				if ((reParsedMenuJson.entree[i].descriptors.aLaCarteOrBiteSize) && (!uniqueEntDescr.includes("aLaCarteOrBiteSize"))) {uniqueEntDescr.push("aLaCarteOrBiteSize")};
				if ((reParsedMenuJson.entree[i].descriptors.cheesy) && (!uniqueEntDescr.includes("cheesy"))) {uniqueEntDescr.push("cheesy")};
				if ((reParsedMenuJson.entree[i].descriptors.fresh) && (!uniqueEntDescr.includes("fresh"))) {uniqueEntDescr.push("fresh")};
				if ((reParsedMenuJson.entree[i].descriptors.fried) && (!uniqueEntDescr.includes("fried"))) {uniqueEntDescr.push("fried")};
				if ((reParsedMenuJson.entree[i].descriptors.healthy) && (!uniqueEntDescr.includes("healthy"))) {uniqueEntDescr.push("healthy")};
				if ((reParsedMenuJson.entree[i].descriptors.hearty) && (!uniqueEntDescr.includes("hearty"))) {uniqueEntDescr.push("hearty")};
				if ((reParsedMenuJson.entree[i].descriptors.indulgent) && (!uniqueEntDescr.includes("indulgent"))) {uniqueEntDescr.push("indulgent")};
				if ((reParsedMenuJson.entree[i].descriptors.light) && (!uniqueEntDescr.includes("light"))) {uniqueEntDescr.push("light")};
				if ((reParsedMenuJson.entree[i].descriptors.plain) && (!uniqueEntDescr.includes("plain"))) {uniqueEntDescr.push("plain")};
				if ((reParsedMenuJson.entree[i].descriptors.popular) && (!uniqueEntDescr.includes("popular"))) {uniqueEntDescr.push("popular")};
				if ((reParsedMenuJson.entree[i].descriptors.raw) && (!uniqueEntDescr.includes("raw"))) {uniqueEntDescr.push("raw")};
				if ((reParsedMenuJson.entree[i].descriptors.salty) && (!uniqueEntDescr.includes("salty"))) {uniqueEntDescr.push("salty")};
				if ((reParsedMenuJson.entree[i].descriptors.servedCold) && (!uniqueEntDescr.includes("servedCold"))) {uniqueEntDescr.push("servedCold")};
				if ((reParsedMenuJson.entree[i].descriptors.spicy) && (!uniqueEntDescr.includes("spicy"))) {uniqueEntDescr.push("spicy")};
				if ((reParsedMenuJson.entree[i].descriptors.sweet) && (!uniqueEntDescr.includes("sweet"))) {uniqueEntDescr.push("sweet")};
				if ((reParsedMenuJson.entree[i].descriptors.toShare) && (!uniqueEntDescr.includes("toShare"))) {uniqueEntDescr.push("toShare")};
				if ((reParsedMenuJson.entree[i].descriptors.vegetarian) && (!uniqueEntDescr.includes("vegetarian"))) {uniqueEntDescr.push("vegetarian"), vegEnts.push(reParsedMenuJson.entree[i]);};
			}
		}

		//For each entree, for each ingredient that's marked true, if it's not in uniqueEntIngr[], push it
		var numEntIngr = 6;
		for (var i = 0; i<reParsedMenuJson.entree.length; i++) {
			for (var j = 0; j<numEntIngr; j++) {
				if ((reParsedMenuJson.entree[i].ingredients.beef) && (!uniqueEntIngr.includes("beef"))) {uniqueEntIngr.push("beef")};
				if ((reParsedMenuJson.entree[i].ingredients.chicken) && (!uniqueEntIngr.includes("chicken"))) {uniqueEntIngr.push("chicken")};
				if ((reParsedMenuJson.entree[i].ingredients.lamb) && (!uniqueEntIngr.includes("lamb"))) {uniqueEntIngr.push("lamb")};
				if ((reParsedMenuJson.entree[i].ingredients.otherProtein) && (!uniqueEntIngr.includes("otherProtein"))) {uniqueEntIngr.push("otherProtein")};
				if ((reParsedMenuJson.entree[i].ingredients.pork) && (!uniqueEntIngr.includes("pork"))) {uniqueEntIngr.push("pork")};
				if ((reParsedMenuJson.entree[i].ingredients.seafood) && (!uniqueEntIngr.includes("seafood"))) {uniqueEntIngr.push("seafood")};
			}
		}

		//For each dessert, for each descriptor that's marked true, if it's not in uniqueDesDescr[], push it
		var numDesDescr = 8;
		for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {
			for (var j = 0; j<numDesDescr; j++) {
				if ((reParsedMenuJson.dessert[i].descriptors.chocolatey) && (!uniqueDesDescr.includes("chocolatey"))) {uniqueDesDescr.push("chocolatey")};
				if ((reParsedMenuJson.dessert[i].descriptors.fruity) && (!uniqueDesDescr.includes("fruity"))) {uniqueDesDescr.push("fruity")};
				if ((reParsedMenuJson.dessert[i].descriptors.healthy) && (!uniqueDesDescr.includes("healthy"))) {uniqueDesDescr.push("healthy")};
				if ((reParsedMenuJson.dessert[i].descriptors.light) && (!uniqueDesDescr.includes("light"))) {uniqueDesDescr.push("light")};
				if ((reParsedMenuJson.dessert[i].descriptors.popular) && (!uniqueDesDescr.includes("healthy"))) {uniqueDesDescr.push("healthy")};
				if ((reParsedMenuJson.dessert[i].descriptors.rich) && (!uniqueDesDescr.includes("rich"))) {uniqueDesDescr.push("rich")};
				if ((reParsedMenuJson.dessert[i].descriptors.tart) && (!uniqueDesDescr.includes("tart"))) {uniqueDesDescr.push("tart")};
				if ((reParsedMenuJson.dessert[i].descriptors.toShare) && (!uniqueDesDescr.includes("toShare"))) {uniqueDesDescr.push("toShare")};
			}
		}

		//For each dessert, for each ingredient that's marked true, if it's not in uniqueDesIngr[], push it
		var numDesIngr = 3;
		for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {
			for (var j = 0; j<numDesIngr; j++) {
				if ((reParsedMenuJson.dessert[i].ingredients.cake) && (!uniqueDesIngr.includes("cake"))) {uniqueDesIngr.push("cake")};
				if ((reParsedMenuJson.dessert[i].ingredients.pie) && (!uniqueDesIngr.includes("pie"))) {uniqueDesIngr.push("pie")};
				if ((reParsedMenuJson.dessert[i].ingredients.iceCream) && (!uniqueDesIngr.includes("iceCream"))) {uniqueDesIngr.push("iceCream")};
			}
		}

		//For each sauce that's marked true, if it's not in commonSauces[], push it
		if ((reParsedCriJson.a1) && (!commonSauces.includes("a1"))) {commonSauces.push("a1")};
		if ((reParsedCriJson.bbqSauce) && (!commonSauces.includes("bbqSauce"))) {commonSauces.push("bbqSauce")};
		if ((reParsedCriJson.cocktailSauce) && (!commonSauces.includes("cocktailSauce"))) {commonSauces.push("cocktailSauce")};
		if ((reParsedCriJson.heinz57) && (!commonSauces.includes("heinz57"))) {commonSauces.push("heinz57")};
		if ((reParsedCriJson.hotSauce) && (!commonSauces.includes("hotSauce"))) {commonSauces.push("hotSauce")};
		if ((reParsedCriJson.ketchup) && (!commonSauces.includes("ketchup"))) {commonSauces.push("ketchup")};
		if ((reParsedCriJson.marinara) && (!commonSauces.includes("marinara"))) {commonSauces.push("marinara")};
		if ((reParsedCriJson.mayonnaise) && (!commonSauces.includes("mayonnaise"))) {commonSauces.push("mayonnaise")};
		if ((reParsedCriJson.mustardSpicy) && (!commonSauces.includes("mustardSpicy"))) {commonSauces.push("mustardSpicy")};
		if ((reParsedCriJson.mustardYellow) && (!commonSauces.includes("mustardYellow"))) {commonSauces.push("mustardYellow")};
		if ((reParsedCriJson.salsa) && (!commonSauces.includes("salsa"))) {commonSauces.push("salsa")};
		if ((reParsedCriJson.soySauce) && (!commonSauces.includes("soySauce"))) {commonSauces.push("soySauce")};

		//For each dressing that's marked true, if it's not in commonDressings[], push it
		if ((reParsedCriJson.balsVin) && (!commonDressings.includes("balsVin"))) {commonDressings.push("balsVin")};
		if ((reParsedCriJson.blueCheese) && (!commonDressings.includes("blueCheese"))) {commonDressings.push("blueCheese")};
		if ((reParsedCriJson.caesar) && (!commonDressings.includes("caesar"))) {commonDressings.push("caesar")};
		if ((reParsedCriJson.french) && (!commonDressings.includes("french"))) {commonDressings.push("french")};
		if ((reParsedCriJson.greek) && (!commonDressings.includes("greek"))) {commonDressings.push("greek")};
		if ((reParsedCriJson.honeyMustard) && (!commonDressings.includes("honeyMustard"))) {commonDressings.push("honeyMustard")};
		if ((reParsedCriJson.italian) && (!commonDressings.includes("italian"))) {commonDressings.push("italian")};
		if ((reParsedCriJson.oilAndVin) && (!commonDressings.includes("oilAndVin"))) {commonDressings.push("oilAndVin")};
		if ((reParsedCriJson.otherVin) && (!commonDressings.includes("otherVin"))) {commonDressings.push("otherVin")};
		if ((reParsedCriJson.ranch) && (!commonDressings.includes("ranch"))) {commonDressings.push("ranch")};
		if ((reParsedCriJson.thousandIsland) && (!commonDressings.includes("thousandIsland"))) {commonDressings.push("thousandIsland")};

		//Populate uniqueAllVio with all unique allergens for this menu
		for (var i = 0; i<reParsedMenuJson.entree.length; i++) {
			if ((reParsedMenuJson.entree[i].allergyViolations.eggs) && (!uniqueAllVio.includes("eggs"))) {uniqueAllVio.push("eggs")};
			if ((reParsedMenuJson.entree[i].allergyViolations.fish) && (!uniqueAllVio.includes("fish"))) {uniqueAllVio.push("fish")};
			if ((reParsedMenuJson.entree[i].allergyViolations.gluten) && (!uniqueAllVio.includes("gluten"))) {uniqueAllVio.push("gluten")};
			if ((reParsedMenuJson.entree[i].allergyViolations.milk) && (!uniqueAllVio.includes("milk"))) {uniqueAllVio.push("milk")};
			if ((reParsedMenuJson.entree[i].allergyViolations.peanuts) && (!uniqueAllVio.includes("peanuts"))) {uniqueAllVio.push("peanuts")};
			if ((reParsedMenuJson.entree[i].allergyViolations.shellfish) && (!uniqueAllVio.includes("shellfish"))) {uniqueAllVio.push("shellfish")};
			if ((reParsedMenuJson.entree[i].allergyViolations.soy) && (!uniqueAllVio.includes("soy"))) {uniqueAllVio.push("soy")};
			if ((reParsedMenuJson.entree[i].allergyViolations.treeNuts) && (!uniqueAllVio.includes("treeNuts"))) {uniqueAllVio.push("treeNuts")};
			if ((reParsedMenuJson.entree[i].allergyViolations.wheat) && (!uniqueAllVio.includes("wheat"))) {uniqueAllVio.push("wheat")};
		}
		for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {
			if ((reParsedMenuJson.appetizer[i].allergyViolations.eggs) && (!uniqueAllVio.includes("eggs"))) {uniqueAllVio.push("eggs")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.fish) && (!uniqueAllVio.includes("fish"))) {uniqueAllVio.push("fish")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.gluten) && (!uniqueAllVio.includes("gluten"))) {uniqueAllVio.push("gluten")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.milk) && (!uniqueAllVio.includes("milk"))) {uniqueAllVio.push("milk")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.peanuts) && (!uniqueAllVio.includes("peanuts"))) {uniqueAllVio.push("peanuts")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.shellfish) && (!uniqueAllVio.includes("shellfish"))) {uniqueAllVio.push("shellfish")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.soy) && (!uniqueAllVio.includes("soy"))) {uniqueAllVio.push("soy")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.treeNuts) && (!uniqueAllVio.includes("treeNuts"))) {uniqueAllVio.push("treeNuts")};
			if ((reParsedMenuJson.appetizer[i].allergyViolations.wheat) && (!uniqueAllVio.includes("wheat"))) {uniqueAllVio.push("wheat")};
		}
		for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {
			if ((reParsedMenuJson.dessert[i].allergyViolations.eggs) && (!uniqueAllVio.includes("eggs"))) {uniqueAllVio.push("eggs")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.fish) && (!uniqueAllVio.includes("fish"))) {uniqueAllVio.push("fish")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.gluten) && (!uniqueAllVio.includes("gluten"))) {uniqueAllVio.push("gluten")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.milk) && (!uniqueAllVio.includes("milk"))) {uniqueAllVio.push("milk")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.peanuts) && (!uniqueAllVio.includes("peanuts"))) {uniqueAllVio.push("peanuts")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.shellfish) && (!uniqueAllVio.includes("shellfish"))) {uniqueAllVio.push("shellfish")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.soy) && (!uniqueAllVio.includes("soy"))) {uniqueAllVio.push("soy")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.treeNuts) && (!uniqueAllVio.includes("treeNuts"))) {uniqueAllVio.push("treeNuts")};
			if ((reParsedMenuJson.dessert[i].allergyViolations.wheat) && (!uniqueAllVio.includes("wheat"))) {uniqueAllVio.push("wheat")};
		}
		console.log(uniqueAllVio);

		//For every item, if secret is true, push that item to secretItems[]
		for (var i = 0; i<reParsedMenuJson.entree.length; i++) {if (reParsedMenuJson.entree[i].secret) {secretItems.push(reParsedMenuJson.entree[i])}}
		for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {if (reParsedMenuJson.appetizer[i].secret) {secretItems.push(reParsedMenuJson.appetizer[i])}}
		for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {if (reParsedMenuJson.dessert[i].secret) {secretItems.push(reParsedMenuJson.dessert[i])}}
		for (var i = 0; i<reParsedMenuJson.sides.length; i++) {if (reParsedMenuJson.sides[i].secret) {secretItems.push(reParsedMenuJson.sides[i])}}
		for (var i = 0; i<reParsedMenuJson.addOn.length; i++) {if (reParsedMenuJson.addOn[i].secret) {secretItems.push(reParsedMenuJson.addOn[i])}}
		for (var i = 0; i<reParsedMenuJson.soupOrSalad.length; i++) {if (reParsedMenuJson.soupOrSalad[i].secret) {secretItems.push(reParsedMenuJson.soupOrSalad[i])}}
		for (var i = 0; i<reParsedMenuJson.kidsMenuItem.length; i++) {if (reParsedMenuJson.kidsMenuItem[i].secret) {secretItems.push(reParsedMenuJson.kidsMenuItem[i])}}
		for (var i = 0; i<reParsedMenuJson.otherFood.length; i++) {if (reParsedMenuJson.otherFood[i].secret) {secretItems.push(reParsedMenuJson.otherFood[i])}}
		for (var i = 0; i<reParsedMenuJson.wine.length; i++) {if (reParsedMenuJson.wine[i].secret) {secretItems.push(reParsedMenuJson.wine[i])}}
		for (var i = 0; i<reParsedMenuJson.beer.length; i++) {if (reParsedMenuJson.beer[i].secret) {secretItems.push(reParsedMenuJson.beer[i])}}
		for (var i = 0; i<reParsedMenuJson.cocktail.length; i++) {if (reParsedMenuJson.cocktail[i].secret) {secretItems.push(reParsedMenuJson.cocktail[i])}}
		for (var i = 0; i<reParsedMenuJson.nonAlcoholic.length; i++) {if (reParsedMenuJson.nonAlcoholic[i].secret) {secretItems.push(reParsedMenuJson.nonAlcoholic[i])}}
		for (var i = 0; i<reParsedMenuJson.afterDinnerDrink.length; i++) {if (reParsedMenuJson.afterDinnerDrink[i].secret) {secretItems.push(reParsedMenuJson.afterDinnerDrink[i])}}
		for (var i = 0; i<reParsedMenuJson.otherDrink.length; i++) {if (reParsedMenuJson.otherDrink[i].secret) {secretItems.push(reParsedMenuJson.otherDrink[i])}}
		console.log(secretItems);

		// //Hardcoding this to proceed with testing.  No idea why the above code isn't working, even after console.logging to investigate
		// uniqueAllVio.push("eggs");
		// uniqueAllVio.push("fish");
		// uniqueAllVio.push("gluten");
		// uniqueAllVio.push("milk");
		// uniqueAllVio.push("peanuts");
		// uniqueAllVio.push("shellfish");
		// uniqueAllVio.push("soy");
		// uniqueAllVio.push("treeNuts");
		// uniqueAllVio.push("wheat");

		///////////////
		//MENU ANALYSIS
		///////////////

		var numQ1App = 0;
		var numQ1Ent = 0;
		var numQ2App = 0;
		var numQ2Ent = 0;
		var numQ3App = 0;
		var numQ3Ent = 0;
		var numQ3Des = 0;
		var numQ4App = 0;
		var numQ4Ent = 0;
		var numQ4Des = 0;
		var numQ5 = 0;
		var numQ6 = 0;
		var numQ7App = 0;
		var numQ7Ent = 0;
		var numQ8 = 0;
		var numQ9 = 0;
		var numQ10Sauce = 0;
		var numQ10Dressing = 0;

		//If there are at least three apps with a price, add two to Q1App and two to Q2App
		if (allQ1App.length > 3) {
			numQ1App++;
			numQ1App++;
			numQ2App++;
			numQ2App++;
		}

		//If there are at least three ents with a price, add two to Q1Ent and two to Q2Ent
		if (allQ1Ent.length > 3) {
			numQ1Ent++;
			numQ1Ent++;
			numQ2Ent++;
			numQ2Ent++;
		}

		//If there is at least one unique ____ descriptor/ingredient and at least three ____s, add one to Q3/Q4____ for each descriptor/ingredient
		if (uniqueAppDescr.length > 0 && allApp.length > 3) {
			for (var i = 0; i<uniqueAppDescr.length; i++) {
				numQ3App++;
			}
		}
		if (uniqueAppIngr.length > 0 && allApp.length > 3) {
			for (var i = 0; i<uniqueAppIngr.length; i++) {
				numQ4App++;
			}
		}
		if (uniqueEntDescr.length > 0 && allEnt.length > 3) {
			for (var i = 0; i<uniqueEntDescr.length; i++) {
				numQ3Ent++;
			}
		}
		if (uniqueEntIngr.length > 0 && allEnt.length > 3) {
			for (var i = 0; i<uniqueEntIngr.length; i++) {
				numQ4Ent++;
			}
		}
		if (uniqueDesDescr.length > 0 && allDes.length > 3) {
			for (var i = 0; i<uniqueDesDescr.length; i++) {
				numQ3Des++;
			}
		}
		if (uniqueDesIngr.length > 0 && allDes.length > 3) {
			for (var i = 0; i<uniqueDesIngr.length; i++) {
				numQ4Des++;
			}
		}

		//If there is at least one unique allergy violation, add one to Q5
		if (uniqueAllVio.length > 0) {
			for (var i = 0; i<uniqueAllVio.length; i++) {
				numQ5++;
			}
		}

		//If there is at least one popular app/ent/side/dessert, add one/two/three/four to Q6
		if (popApps.length>0 && allApp.length>3) {numQ6++}
		if (popEnts.length>0 && allEnt.length>3) {numQ6++}
		if (popDesserts.length>0 && allDes.length>3) {numQ6++}

		//If there is at least one vegetarian app/ent, add one to Q7App/Ent
		if (vegApps.length>0 && allApp.length>3){numQ7App++}
		if (vegEnts.length>0 && allEnt.length>3){numQ7Ent++}

		//If there is at least one secret item, add one to Q8
		if (secretItems.length>0) {numQ8++}

		//If there is at least one add-on, add one to Q9
		if (addOns.length>0) {numQ9++}

		//If there is at least one common sauce/dressing, add one to Q10Sauce/Dressing
		if (commonSauces.length>0) {numQ10Sauce++}
		if (commonDressings.length>0) {numQ10Dressing++}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//QUESTION CREATION BEGINS HERE
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//QuizQuestion Constructor
		function QuizQuestion(question, fourAnswersArray, correctAnswersIndexesArray) {
		  this.question = question;
		  this.fourAnswersArray = fourAnswersArray;
		  this.correctAnswersIndexesArray = correctAnswersIndexesArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make two Q1App
		//////////////////////

		var q1AppArray = [];
		var thisQArray = [];
		var topPrice = 0;
		var topItemName = "";
		var bottomPrice = 9999;
		var bottomItemName = "";
		var incorrectAnswers = [];

		//Find highest and lowest prices in allQ1App, store them in topPrice and bottomPrice
		//Also, store those two items' names in topItemName and bottomItemName
		for (var i = 0; i<allQ1App.length; i++) {
			var priceChanged = false;
			if (parseFloat(allQ1App[i].price) < bottomPrice) {
				bottomPrice=parseFloat(allQ1App[i].price);
				bottomItemName=allQ1App[i].name;
				priceChanged = true;
			}
			if (parseFloat(allQ1App[i].price) > topPrice) {
				topPrice=parseFloat(allQ1App[i].price);
				topItemName=allQ1App[i].name;
				priceChanged = true;
			}
			if (!priceChanged) {
				incorrectAnswers.push(allQ1App[i].name);
			}
		}

		//Store all other item names in incorrectAnswers[]
		for (var i = 0; i<allQ1App.length; i++) {
			if (parseFloat(allQ1App[i].price) > bottomPrice || parseFloat(allQ1App[i].price) < topPrice) {
				incorrectAnswers.push(allQ1App[i].name);
			}
		}

		var sampleQ = "What's your most expensive appetizer?";
		var sampleFourAnswers = [];
		sampleFourAnswers.push(topItemName);
		for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
		var sampleCorrectAnswers = [];
		sampleCorrectAnswers.push(topItemName);
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);

		var sampleQ = "What's your cheapest appetizer?";
		var sampleFourAnswers = [];
		sampleFourAnswers.push(bottomItemName);
		for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
		var sampleCorrectAnswers = [];
		sampleCorrectAnswers.push(bottomItemName);
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);

		q1AppArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make two Q1Ent
		//////////////////////

		var q1EntArray = [];
		var thisQArray = [];
		var topPrice = 0;
		var topItemName = "";
		var bottomPrice = 9999;
		var bottomItemName = "";
		var incorrectAnswers = [];

		//Find highest and lowest prices in allQ1Ent, store them in topPrice and bottomPrice
		//Also, store those two items' names in topItemName and bottomItemName
		for (var i = 0; i<allQ1Ent.length; i++) {
			var priceChanged = false;
			if (parseFloat(allQ1Ent[i].price) < bottomPrice) {
				bottomPrice=parseFloat(allQ1Ent[i].price);
				bottomItemName=allQ1Ent[i].name;
				priceChanged = true;
			}
			if (parseFloat(allQ1Ent[i].price) > topPrice) {
				topPrice=parseFloat(allQ1Ent[i].price);
				topItemName=allQ1Ent[i].name;
				priceChanged = true;
			}
			if (!priceChanged) {
				incorrectAnswers.push(allQ1Ent[i].name);
			}
		}

		//Store all other item names in incorrectAnswers[]
		for (var i = 0; i<allQ1Ent.length; i++) {
			if (parseFloat(allQ1Ent[i].price) > bottomPrice || parseFloat(allQ1Ent[i].price) < topPrice) {
				incorrectAnswers.push(allQ1Ent[i].name);
			}
		}

		var sampleQ = "What's your most expensive entree?";
		var sampleFourAnswers = [];
		sampleFourAnswers.push(topItemName);
		for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
		var sampleCorrectAnswers = [];
		sampleCorrectAnswers.push(topItemName);
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);

		var sampleQ = "What's your cheapest entree?";
		var sampleFourAnswers = [];
		sampleFourAnswers.push(bottomItemName);
		for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
		var sampleCorrectAnswers = [];
		sampleCorrectAnswers.push(bottomItemName);
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);
		
		q1EntArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q2App
		//////////////////////

		var q2AppArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];

		//Sort allApp[] by price
		allApp.sort(function(a, b){
		    return a.price-b.price;
		})

		var medianIndex = Math.floor(allApp.length / 2) - 1;
		var medianPrice = allApp[medianIndex].price;

		var correctItem1 = allApp[0].name;
		var correctItem2 = allApp[medianIndex - 1].name;
		var incorrectItem1 = allApp[(medianIndex * 2)].name;
		var incorrectItem2 = allApp[(medianIndex * 2) - 1].name;

		var sampleQ = "I've only got $" + medianPrice + " for an appetizer.  What can you recommend?  (There may be more than one correct answer)";
		sampleFourAnswers.push(correctItem1);
		sampleFourAnswers.push(correctItem2);
		sampleFourAnswers.push(incorrectItem1);
		sampleFourAnswers.push(incorrectItem2);
		sampleCorrectAnswers.push(correctItem1);
		sampleCorrectAnswers.push(correctItem2);
		
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);
		
		q2AppArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q2Ent
		//////////////////////

		var q2EntArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];

		//Sort allEnt by price
		allEnt.sort(function(a, b){
		    return a.price-b.price;
		})

		var medianIndex = Math.floor(allEnt.length / 2) - 1;
		var medianPrice = allEnt[medianIndex].price;

		var correctItem1 = allEnt[0].name;
		var correctItem2 = allEnt[medianIndex - 1].name;
		var incorrectItem1 = allEnt[(medianIndex * 2)].name;
		var incorrectItem2 = allEnt[(medianIndex * 2) - 1].name;

		var sampleQ = "I've only got $" + medianPrice + " for an entree.  What can you recommend?  (There may be more than one correct answer)";
		sampleFourAnswers.push(correctItem1);
		sampleFourAnswers.push(correctItem2);
		sampleFourAnswers.push(incorrectItem1);
		sampleFourAnswers.push(incorrectItem2);
		sampleCorrectAnswers.push(correctItem1);
		sampleCorrectAnswers.push(correctItem2);
		
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);
		
		q2EntArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q3App - fill
		//////////////////////

		var q3AppArray = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueAppDescr.length; j++) {
			var randomThing = uniqueAppDescr[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm in the mood for a(n) " + randomThing + " appetizer.  What can you recommend?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allApp.length; i++) {
				if (randomThing === "aLaCarteOrBiteSize") { if (allApp[i].descriptors.aLaCarteOrBiteSize) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "cheesy") { if (allApp[i].descriptors.cheesy) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "fresh") { if (allApp[i].descriptors.fresh) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "fried") { if (allApp[i].descriptors.fried) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "healthy") { if (allApp[i].descriptors.healthy) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "hearty") { if (allApp[i].descriptors.hearty) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "indulgent") { if (allApp[i].descriptors.indulgent) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "light") { if (allApp[i].descriptors.light) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "plain") { if (allApp[i].descriptors.plain) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "popular") { if (allApp[i].descriptors.popular) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "raw") { if (allApp[i].descriptors.raw) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "salty") { if (allApp[i].descriptors.salty) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "servedCold") { if (allApp[i].descriptors.servedCold) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "spicy") { if (allApp[i].descriptors.spicy) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "sweet") { if (allApp[i].descriptors.sweet) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "toShare") { if (allApp[i].descriptors.toShare) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "vegetarian") { if (allApp[i].descriptors.vegetarian) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No " + randomThing + " appetizers");
			}

			if (hasThing.length > 0) {
				
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q3AppArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q3Ent - fill
		//////////////////////

		var q3EntArray = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueEntDescr.length; j++) {
			var randomThing = uniqueEntDescr[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm in the mood for a(n) " + randomThing + " entree.  What can you recommend?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allEnt.length; i++) {
				if (randomThing === "aLaCarteOrBiteSize") { if (allEnt[i].descriptors.aLaCarteOrBiteSize) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "cheesy") { if (allEnt[i].descriptors.cheesy) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "fresh") { if (allEnt[i].descriptors.fresh) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "fried") { if (allEnt[i].descriptors.fried) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "healthy") { if (allEnt[i].descriptors.healthy) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "hearty") { if (allEnt[i].descriptors.hearty) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "indulgent") { if (allEnt[i].descriptors.indulgent) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "light") { if (allEnt[i].descriptors.light) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "plain") { if (allEnt[i].descriptors.plain) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "popular") { if (allEnt[i].descriptors.popular) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "raw") { if (allEnt[i].descriptors.raw) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "salty") { if (allEnt[i].descriptors.salty) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "servedCold") { if (allEnt[i].descriptors.servedCold) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "spicy") { if (allEnt[i].descriptors.spicy) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "sweet") { if (allEnt[i].descriptors.sweet) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "toShare") { if (allEnt[i].descriptors.toShare) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "vegetarian") { if (allEnt[i].descriptors.vegetarian) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No " + randomThing + " entrees");
			}

			if (hasThing.length > 0) {
				
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q3EntArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q3Des - fill
		//////////////////////

		var q3DesArray = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueDesDescr.length; j++) {
			var randomThing = uniqueDesDescr[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm in the mood for a(n) " + randomThing + " dessert.  What can you recommend?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allDes.length; i++) {
				if (randomThing === "chocolatey") { if (allDes[i].descriptors.chocolatey) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "fruity") { if (allDes[i].descriptors.fruity) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "healthy") { if (allDes[i].descriptors.healthy) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "light") { if (allDes[i].descriptors.light) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "popular") { if (allDes[i].descriptors.popular) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "rich") { if (allDes[i].descriptors.rich) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "tart") { if (allDes[i].descriptors.tart) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "toShare") { if (allDes[i].descriptors.toShare) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No " + randomThing + " desserts");
			}

			if (hasThing.length > 0) {
				
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q3DesArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q4App - fill
		//////////////////////

		var q4AppArray = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueAppIngr.length; j++) {
			var randomThing = uniqueAppIngr[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm in the mood for an appetizer with " + randomThing + ".  What can you recommend?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allApp.length; i++) {
				if (randomThing === "beef") { if (allApp[i].ingredients.beef) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "chicken") { if (allApp[i].ingredients.chicken) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "lamb") { if (allApp[i].ingredients.lamb) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "otherProtein") { if (allApp[i].ingredients.otherProtein) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "pork") { if (allApp[i].ingredients.pork) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "seafood") { if (allApp[i].ingredients.seafood) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No appetizers with " + randomThing);
			}

			if (hasThing.length > 0) {
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q4AppArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q4Ent - fill
		//////////////////////

		var q4EntArray = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueEntIngr.length; j++) {
			var randomThing = uniqueEntIngr[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm in the mood for an entree with " + randomThing + ".  What can you recommend?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allEnt.length; i++) {
				if (randomThing === "beef") { if (allEnt[i].ingredients.beef) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "chicken") { if (allEnt[i].ingredients.chicken) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "lamb") { if (allEnt[i].ingredients.lamb) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "otherProtein") { if (allEnt[i].ingredients.otherProtein) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "pork") { if (allEnt[i].ingredients.pork) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "seafood") { if (allEnt[i].ingredients.seafood) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No entrees with " + randomThing);
			}

			if (hasThing.length > 0) {
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q4EntArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q4Des - fill
		//////////////////////

		var q4DesArray = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueDesIngr.length; j++) {
			var randomThing = uniqueDesIngr[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm in the mood for a dessert with " + randomThing + ".  What can you recommend?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allDes.length; i++) {
				if (randomThing === "cake") { if (allDes[i].ingredients.cake) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "pie") { if (allDes[i].ingredients.pie) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "iceCream") { if (allDes[i].ingredients.iceCream) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No desserts with " + randomThing);
			}

			if (hasThing.length > 0) {
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q4DesArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make all Q5 - up to 9
		//////////////////////

		var q5Array = [];
		var thisQArray = [];
		for (var j = 0; j<uniqueAllVio.length; j++) {
			var randomThing = uniqueAllVio[j];

			var incorrectAnswers = [];
			var sampleCorrectAnswers = [];
			var sampleFourAnswers = [];
			var sampleQ = "I'm allergic to " + randomThing + ".  Are any of these unsafe for me to eat?  (There may be more than one correct answer)";

			var hasThing = [];
			var noThing = [];
			for (var i=0; i<allApp.length; i++) {
				if (randomThing === "eggs") { if (allApp[i].allergyViolations.eggs) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "fish") { if (allApp[i].allergyViolations.fish) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "gluten") { if (allApp[i].allergyViolations.gluten) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "milk") { if (allApp[i].allergyViolations.milk) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "peanuts") { if (allApp[i].allergyViolations.peanuts) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "shellfish") { if (allApp[i].allergyViolations.shellfish) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "soy") { if (allApp[i].allergyViolations.soy) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "treeNuts") { if (allApp[i].allergyViolations.treeNuts) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
				else if (randomThing === "wheat") { if (allApp[i].allergyViolations.wheat) {hasThing.push(allApp[i].name);} else {noThing.push(allApp[i].name);}}
			}
			for (var i=0; i<allEnt.length; i++) {
				if (randomThing === "eggs") { if (allEnt[i].allergyViolations.eggs) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "fish") { if (allEnt[i].allergyViolations.fish) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "gluten") { if (allEnt[i].allergyViolations.gluten) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "milk") { if (allEnt[i].allergyViolations.milk) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "peanuts") { if (allEnt[i].allergyViolations.peanuts) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "shellfish") { if (allEnt[i].allergyViolations.shellfish) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "soy") { if (allEnt[i].allergyViolations.soy) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "treeNuts") { if (allEnt[i].allergyViolations.treeNuts) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
				else if (randomThing === "wheat") { if (allEnt[i].allergyViolations.wheat) {hasThing.push(allEnt[i].name);} else {noThing.push(allEnt[i].name);}}
			}
			for (var i=0; i<allDes.length; i++) {
				if (randomThing === "eggs") { if (allDes[i].allergyViolations.eggs) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "fish") { if (allDes[i].allergyViolations.fish) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "gluten") { if (allDes[i].allergyViolations.gluten) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "milk") { if (allDes[i].allergyViolations.milk) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "peanuts") { if (allDes[i].allergyViolations.peanuts) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "shellfish") { if (allDes[i].allergyViolations.shellfish) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "soy") { if (allDes[i].allergyViolations.soy) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "treeNuts") { if (allDes[i].allergyViolations.treeNuts) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
				else if (randomThing === "wheat") { if (allDes[i].allergyViolations.wheat) {hasThing.push(allDes[i].name);} else {noThing.push(allDes[i].name);}}
			}
			if (hasThing.length >= 3) {
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
				sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
				sampleCorrectAnswers.push(sampleFourAnswers[0]);
				sampleCorrectAnswers.push(sampleFourAnswers[1]);
				sampleCorrectAnswers.push(sampleFourAnswers[2]);
			}
			else if (hasThing.length === 2) {
				sampleFourAnswers.push(hasThing[0]);
				sampleFourAnswers.push(hasThing[1]);
				for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
				sampleCorrectAnswers.push(hasThing[1]);
			}
			else if (hasThing.length === 1) {
				sampleFourAnswers.push(hasThing[0]);
				for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
				sampleCorrectAnswers.push(hasThing[0]);
			}

			else if (hasThing.length === 0) {
				console.log("No food with " + randomThing);
			}

			if (hasThing.length > 0) {
				shuffle(sampleFourAnswers);
				var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
				thisQArray.push(x);
			}
		}
		q5Array = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one app Q6
		//////////////////////

		var q6AppArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "I want an appetizer.  What's popular?  (There may be more than one correct answer)";

		var hasThing = [];
		var noThing = [];
		for (var i=0; i<allApp.length; i++) {
			if (allApp[i].descriptors.popular) {hasThing.push(allApp[i].name)}
			else {noThing.push(allApp[i].name)}
		}
		if (hasThing.length >= 3) {
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
			sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
			sampleCorrectAnswers.push(sampleFourAnswers[0]);
			sampleCorrectAnswers.push(sampleFourAnswers[1]);
			sampleCorrectAnswers.push(sampleFourAnswers[2]);
		}
		else if (hasThing.length === 2) {
			sampleFourAnswers.push(hasThing[0]);
			sampleFourAnswers.push(hasThing[1]);
			for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
			sampleCorrectAnswers.push(hasThing[1]);
		}
		else if (hasThing.length === 1) {
			sampleFourAnswers.push(hasThing[0]);
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
		}

		else if (hasThing.length === 0) {
			console.log("No popular appetizers");
		}

		if (hasThing.length > 0) {
			shuffle(sampleFourAnswers);
			var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
			thisQArray.push(x);
			q6AppArray = thisQArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one ent Q6
		//////////////////////

		var q6EntArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "I want an entree.  What's popular?  (There may be more than one correct answer)";

		var hasThing = [];
		var noThing = [];
		for (var i=0; i<allEnt.length; i++) {
			if (allEnt[i].descriptors.popular) {hasThing.push(allEnt[i].name)}
			else {noThing.push(allEnt[i].name)}
		}
		if (hasThing.length >= 3) {
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
			sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
			sampleCorrectAnswers.push(sampleFourAnswers[0]);
			sampleCorrectAnswers.push(sampleFourAnswers[1]);
			sampleCorrectAnswers.push(sampleFourAnswers[2]);
		}
		else if (hasThing.length === 2) {
			sampleFourAnswers.push(hasThing[0]);
			sampleFourAnswers.push(hasThing[1]);
			for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
			sampleCorrectAnswers.push(hasThing[1]);
		}
		else if (hasThing.length === 1) {
			sampleFourAnswers.push(hasThing[0]);
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
		}

		else if (hasThing.length === 0) {
			console.log("No popular entrees");
		}

		if (hasThing.length > 0) {
			shuffle(sampleFourAnswers);
			var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
			thisQArray.push(x);
			q6EntArray = thisQArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one des Q6
		//////////////////////

		var q6DesArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "I want a dessert.  What's popular?  (There may be more than one correct answer)";

		var hasThing = [];
		var noThing = [];
		for (var i=0; i<allDes.length; i++) {
			if (allDes[i].descriptors.popular) {hasThing.push(allDes[i].name)}
			else {noThing.push(allDes[i].name)}
		}
		if (hasThing.length >= 3) {
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
			sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
			sampleCorrectAnswers.push(sampleFourAnswers[0]);
			sampleCorrectAnswers.push(sampleFourAnswers[1]);
			sampleCorrectAnswers.push(sampleFourAnswers[2]);
		}
		else if (hasThing.length === 2) {
			sampleFourAnswers.push(hasThing[0]);
			sampleFourAnswers.push(hasThing[1]);
			for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
			sampleCorrectAnswers.push(hasThing[1]);
		}
		else if (hasThing.length === 1) {
			sampleFourAnswers.push(hasThing[0]);
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
		}

		else if (hasThing.length === 0) {
			console.log("No popular desserts");
		}

		if (hasThing.length > 0) {
			shuffle(sampleFourAnswers);
			var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
			thisQArray.push(x);
			q6DesArray = thisQArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q7App
		//////////////////////

		var q7AppArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "Do you have any vegetarian appetizers?  (There may be more than one correct answer)";

		var hasThing = [];
		var noThing = [];
		for (var i=0; i<allApp.length; i++) {
			if (allApp[i].descriptors.vegetarian) {hasThing.push(allApp[i].name)}
			else {noThing.push(allApp[i].name)}
		}
		if (hasThing.length >= 3) {
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
			sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
			sampleCorrectAnswers.push(sampleFourAnswers[0]);
			sampleCorrectAnswers.push(sampleFourAnswers[1]);
			sampleCorrectAnswers.push(sampleFourAnswers[2]);
		}
		else if (hasThing.length === 2) {
			sampleFourAnswers.push(hasThing[0]);
			sampleFourAnswers.push(hasThing[1]);
			for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
			sampleCorrectAnswers.push(hasThing[1]);
		}
		else if (hasThing.length === 1) {
			sampleFourAnswers.push(hasThing[0]);
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
		}

		else if (hasThing.length === 0) {
			console.log("No vegetarian appetizers");
		}

		if (hasThing.length > 0) {
			shuffle(sampleFourAnswers);
			var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
			thisQArray.push(x);
			q7AppArray = thisQArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q7Ent
		//////////////////////

		var q7EntArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "Do you have any vegetarian entrees?  (There may be more than one correct answer)";

		var hasThing = [];
		var noThing = [];
		for (var i=0; i<allEnt.length; i++) {
			if (allEnt[i].descriptors.vegetarian) {hasThing.push(allEnt[i].name)}
			else {noThing.push(allEnt[i].name)}
		}
		if (hasThing.length >= 3) {
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
			sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
			sampleCorrectAnswers.push(sampleFourAnswers[0]);
			sampleCorrectAnswers.push(sampleFourAnswers[1]);
			sampleCorrectAnswers.push(sampleFourAnswers[2]);
		}
		else if (hasThing.length === 2) {
			sampleFourAnswers.push(hasThing[0]);
			sampleFourAnswers.push(hasThing[1]);
			for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
			sampleCorrectAnswers.push(hasThing[1]);
		}
		else if (hasThing.length === 1) {
			sampleFourAnswers.push(hasThing[0]);
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
		}

		else if (hasThing.length === 0) {
			console.log("No vegetarian entrees");
		}

		if (hasThing.length > 0) {
			shuffle(sampleFourAnswers);
			var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
			thisQArray.push(x);
			q7EntArray = thisQArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q8
		//////////////////////

		var q8Array = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "Do you have any secret items?  (There may be more than one correct answer)";

		var hasThing = [];
		var noThing = [];
		for (var i=0; i<allEnt.length; i++) {
			if (allEnt[i].secret) {hasThing.push(allEnt[i].name)}
			else {noThing.push(allEnt[i].name)}
		}
		for (var i=0; i<allApp.length; i++) {
			if (allApp[i].secret) {hasThing.push(allApp[i].name)}
			else {noThing.push(allApp[i].name)}
		}
		for (var i=0; i<allDes.length; i++) {
			if (allDes[i].secret) {hasThing.push(allDes[i].name)}
			else {noThing.push(allDes[i].name)}
		}

		if (hasThing.length >= 3) {
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
			sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
			sampleCorrectAnswers.push(sampleFourAnswers[0]);
			sampleCorrectAnswers.push(sampleFourAnswers[1]);
			sampleCorrectAnswers.push(sampleFourAnswers[2]);
		}
		else if (hasThing.length === 2) {
			sampleFourAnswers.push(hasThing[0]);
			sampleFourAnswers.push(hasThing[1]);
			for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
			sampleCorrectAnswers.push(hasThing[1]);
		}
		else if (hasThing.length === 1) {
			sampleFourAnswers.push(hasThing[0]);
			for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
			sampleCorrectAnswers.push(hasThing[0]);
		}

		else if (hasThing.length === 0) {
			console.log("No secret items");
		}

		if (hasThing.length > 0) {
			shuffle(sampleFourAnswers);
			var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
			thisQArray.push(x);
			q8Array = thisQArray;
		}

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q9
		//////////////////////

		var q9Array = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = ["3 or more", "2", "1", "No entree add-ons"];
		var sampleQ = "Do you have any entree add-ons?  If so, how many options are there?";

		if (addOns.length >= 3) {sampleCorrectAnswers.push("3 or more")};
		if (addOns.length === 2) {sampleCorrectAnswers.push("2")};
		if (addOns.length === 1) {sampleCorrectAnswers.push("1")};
		if (addOns.length === 0) {sampleCorrectAnswers.push("No entree add-ons")};

		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);
		q9Array = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q10Sauces
		//////////////////////

		var q10SaucesArray = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "Do you have any of these common sauces? (There may be more than one correct answer)";
		var saucesArray = ["A1","BBQ Sauce","Cocktail Sauce","Heinz 57","Hot Sauce","Ketchup","Marinara","Mayonnaise","Spicy Mustard","Yellow Mustard","Salsa","Soy Sauce"];

		//Get four random sauces for answers - for now, there might be duplicates
		var randomSauce1 = saucesArray[Math.floor(Math.random() * saucesArray.length)];
		var randomSauce2 = saucesArray[Math.floor(Math.random() * saucesArray.length)];
		var randomSauce3 = saucesArray[Math.floor(Math.random() * saucesArray.length)];
		var randomSauce4 = saucesArray[Math.floor(Math.random() * saucesArray.length)];

		//Check commonSauces[] for each of those four sauces
		var atLeastOneMatch = false;
		if (commonSauces.includes(randomSauce1)) {sampleCorrectAnswers.push(randomSauce1), atLeastOneMatch = true;};
		if (commonSauces.includes(randomSauce2)) {sampleCorrectAnswers.push(randomSauce2), atLeastOneMatch = true;};
		if (commonSauces.includes(randomSauce3)) {sampleCorrectAnswers.push(randomSauce3), atLeastOneMatch = true;};
		if (commonSauces.includes(randomSauce4)) {sampleCorrectAnswers.push(randomSauce4)};

		//Push those variables to sampleFourAnswers[]; include a "None of the above" if the first three didn't match
		sampleFourAnswers.push(randomSauce1);
		sampleFourAnswers.push(randomSauce2);
		sampleFourAnswers.push(randomSauce3);
		if (!atLeastOneMatch) {
			sampleFourAnswers.push("None of the above");
			sampleCorrectAnswers.push("None of the above");
		}
		else {
			sampleFourAnswers.push(randomSauce4);
		}
		
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);
		q10SaucesArray = thisQArray;

		//////////////////////
		//QUESTIONS BEING MADE
		//Make one Q10Dressings
		//////////////////////

		var q10Dressings = [];
		var thisQArray = [];
		var incorrectAnswers = [];
		var sampleCorrectAnswers = [];
		var sampleFourAnswers = [];
		var sampleQ = "Do you have any of these common dressings? (There may be more than one correct answer)";
		var dressingsArray = ["balsVin","blueCheese","caesar","french","greek","honeyMustard","italian","oilAndVin","otherVin","ranch","thousandIsland"];

		//Get four random dressings for answers - for now, there might be duplicates
		var randomDressing1 = dressingsArray[Math.floor(Math.random() * dressingsArray.length)];
		var randomDressing2 = dressingsArray[Math.floor(Math.random() * dressingsArray.length)];
		var randomDressing3 = dressingsArray[Math.floor(Math.random() * dressingsArray.length)];
		var randomDressing4 = dressingsArray[Math.floor(Math.random() * dressingsArray.length)];

		//Check commonDressings[] for each of those four dressings
		var atLeastOneMatch = false;
		if (commonDressings.includes(randomDressing1)) {sampleCorrectAnswers.push(randomDressing1), atLeastOneMatch = true;};
		if (commonDressings.includes(randomDressing2)) {sampleCorrectAnswers.push(randomDressing2), atLeastOneMatch = true;};
		if (commonDressings.includes(randomDressing3)) {sampleCorrectAnswers.push(randomDressing3), atLeastOneMatch = true;};
		if (commonDressings.includes(randomDressing4)) {sampleCorrectAnswers.push(randomDressing4)};

		//Push those variables to sampleFourAnswers[]; include a "None of the above" if the first three didn't match
		sampleFourAnswers.push(randomDressing1);
		sampleFourAnswers.push(randomDressing2);
		sampleFourAnswers.push(randomDressing3);
		if (!atLeastOneMatch) {
			sampleFourAnswers.push("None of the above");
			sampleCorrectAnswers.push("None of the above");
		}
		else {
			sampleFourAnswers.push(randomDressing4);
		}
		
		shuffle(sampleFourAnswers);
		var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
		thisQArray.push(x);
		q10DressingsArray = thisQArray;

		allQuizQuestions = {
			q1AppArray:q1AppArray,
			q1EntArray:q1EntArray,
			q2AppArray:q2AppArray,
			q2EntArray:q2EntArray,
			q3AppArray:q3AppArray,
			q3EntArray:q3EntArray,
			q3DesArray:q3DesArray,
			q4AppArray:q4AppArray,
			q4EntArray:q4EntArray,
			q4DesArray:q4DesArray,
			q5Array:q5Array,
			q6AppArray:q6AppArray,
			q6EntArray:q6EntArray,
			q6DesArray:q6DesArray,
			q7AppArray:q7AppArray,
			q7EntArray:q7EntArray,
			q8Array:q8Array,
			q9Array:q9Array,
			q10SaucesArray:q10SaucesArray,
			q10DressingsArray:q10DressingsArray
		}

		//Shuffle all arrays with more than one value
		shuffle(allQuizQuestions.q1AppArray); shuffle(allQuizQuestions.q1AppArray);
		shuffle(allQuizQuestions.q1EntArray); shuffle(allQuizQuestions.q1EntArray);
		shuffle(allQuizQuestions.q3AppArray); shuffle(allQuizQuestions.q3AppArray);
		shuffle(allQuizQuestions.q3EntArray); shuffle(allQuizQuestions.q3EntArray);
		shuffle(allQuizQuestions.q4AppArray); shuffle(allQuizQuestions.q4AppArray);
		shuffle(allQuizQuestions.q4EntArray); shuffle(allQuizQuestions.q4EntArray);
		shuffle(allQuizQuestions.q4DesArray); shuffle(allQuizQuestions.q4DesArray);
		shuffle(allQuizQuestions.q5Array); shuffle(allQuizQuestions.q5Array);

		console.log(allQuizQuestions);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//QUESTION CREATION ENDS HERE
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//////////////////////////////////
		//QUIZ SIZE OPTIONS ARE DETERMINED
		//////////////////////////////////

		//Finding the number of unique types of questions available (up to 10)...
		var uniqueQType = 0;
		if ((numQ1App + numQ1Ent) > 0) {uniqueQType++}
		if ((numQ2App + numQ2Ent) > 0) {uniqueQType++}
		if ((numQ3App + numQ3Ent + numQ3Des) > 0) {uniqueQType++}
		if ((numQ4App + numQ4Ent + numQ4Des) > 0) {uniqueQType++}
		if (numQ5 > 0) {uniqueQType++}
		if (numQ6 > 0) {uniqueQType++}
		if ((numQ7App + numQ7Ent) > 0) {uniqueQType++}
		if (numQ8 > 0) {uniqueQType++}
		if (numQ9 > 0) {uniqueQType++}
		if ((numQ10Dressing + numQ10Sauce) > 0) {uniqueQType++}

		//Determining what quizzes can be made with the given menu...
		var firstSixQs = numQ1App + numQ1Ent + numQ2App + numQ2Ent + numQ3App + numQ3Ent + numQ3Des + numQ4App + numQ4Ent + numQ4Des + numQ5 + numQ6;

		//If 10 unique question types...
		if (uniqueQType === 10) {
			tenQuiz = true;
			if (firstSixQs > 13) {
				twentyQuiz = true;
				if (firstSixQs > 23) {
					thirtyQuiz = true;
				}
			}
		}

		//If 9 unique question types...
		if (uniqueQType === 9 && firstSixQs > 4) {
			tenQuiz = true;
			if (firstSixQs > 14) {
				twentyQuiz = true;
				if (firstSixQs > 24) {
					thirtyQuiz = true;
				}
			}
		}

		//If 8 unique question types...
		if (uniqueQType === 8 && firstSixQs > 5) {
			tenQuiz = true;
			if (firstSixQs > 15) {
				twentyQuiz = true;
				if (firstSixQs > 25) {
					thirtyQuiz = true;
				}
			}
		}

		//If 7 unique question types...
		if (uniqueQType === 7 && firstSixQs > 6) {
			tenQuiz = true;
			if (firstSixQs > 16) {
				twentyQuiz = true;
				if (firstSixQs > 26) {
					thirtyQuiz = true;
				}
			}
		}

		//If 6 unique question types...
		if (uniqueQType === 6 && firstSixQs > 7) {
			tenQuiz = true;
			if (firstSixQs > 17) {
				twentyQuiz = true;
				if (firstSixQs > 27) {
					thirtyQuiz = true;
				}
			}
		}

		var numCorrect = 0;
		var numIncorrect = 0;
		var currentQuestion = {};
		var randomizedQuiz = [];

		if (thirtyQuiz) {
			//Put a button up for thirtyQuiz which calls clickedThirtyQuiz()
			var thirtyQuizButtonString = '<div class="col-md-12"><button onclick="clickedThirtyQuiz()" type="button" class="btn btn-default" id="thirtyQuizButton">Thirty Questions</button></div><br>';
			$("#messageArea").html(thirtyQuizButtonString);
			//Put a button up for twentyQuiz which calls clickedTwentyQuiz()
			var twentyQuizButtonString = '<div class="col-md-12"><button onclick="clickedTwentyQuiz()" type="button" class="btn btn-default" id="twentyQuizButton">Twenty Questions</button></div><br>';
			$("#messageArea").append(twentyQuizButtonString);
			//Put a button up for tenQuiz which calls clickedTenQuiz()
			var tenQuizButtonString = '<div class="col-md-12"><button onclick="clickedTenQuiz()" type="button" class="btn btn-default" id="tenQuizButton">Ten Questions</button></div>';
			$("#messageArea").append(tenQuizButtonString);
		}

		else if (twentyQuiz) {
			//Put a button up for twentyQuiz which calls clickedTwentyQuiz()
			var twentyQuizButtonString = '<div class="col-md-12"><button onclick="clickedTwentyQuiz()" type="button" class="btn btn-default" id="twentyQuizButton">Twenty Questions</button></div><br>';
			$("#messageArea").html(twentyQuizButtonString);
			//Put a button up for tenQuiz which calls clickedTenQuiz()
			var tenQuizButtonString = '<div class="col-md-12"><button onclick="clickedTenQuiz()" type="button" class="btn btn-default" id="tenQuizButton">Ten Questions</button></div>';
			$("#messageArea").append(tenQuizButtonString);
		}

		else if (tenQuiz) {
			//Put a button up for tenQuiz which calls clickedTenQuiz()
			var tenQuizButtonString = '<div class="col-md-12"><button onclick="clickedTenQuiz()" type="button" class="btn btn-default" id="tenQuizButton">Ten Questions</button></div>';
			$("#messageArea").html(tenQuizButtonString);
		}

		else {
			//Tell user there isn't enough data in this menu to give a quiz.
			console.log("No quiz available");
		}
	});
}