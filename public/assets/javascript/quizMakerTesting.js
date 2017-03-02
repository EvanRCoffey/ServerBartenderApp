////////////////
//MENU SELECTION
////////////////

var appsWithPrice = 0;
var entsWithPrice = 0;
var numApps = 0;
var numEnts = 0;
var numSides = 0;
var numDesserts = 0;
var uniqueAppDescr = 0;
var uniqueAppIngr = 0;
var uniqueEntDescr = 0;
var uniqueEntIngr = 0;
var uniqueDesDescr = 0;
var uniqueDesIngr = 0;
var uniqueAllVio = 0;
var vegApps = 0;
var vegEnts = 0;
var commonSauces = 0;
var commonDressings = 0;
var secretItems = 0;
var addOns = 0;
var popApps = 0;
var popEnts = 0;
var popSides = 0;
var popDesserts = 0;

//Once user selects menu, increment all of the above variables appropriately, then...

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
if (appsWithPrice > 3) {
	numQ1App++;
	numQ1App++;
	numQ2App++;
	numQ2App++;
}

//If there are at least three ents with a price, add two to Q1Ent and two to Q2Ent
if (entsWithPrice > 3) {
	numQ1Ent++;
	numQ1Ent++;
	numQ2Ent++;
	numQ2Ent++;
}

//If there is at least one unique ____ descriptor/ingredient and at least three ____s, add one to Q3/Q4____ for each descriptor/ingredient
if (uniqueAppDescr > 0 && numApps > 3) {
	for (var i = 0; i<uniqueAppDescr; i++) {
		numQ3App++;
	}
}
if (uniqueAppIngr > 0 && numApps > 3) {
	for (var i = 0; i<uniqueAppIngr; i++) {
		numQ4App++;
	}
}
if (uniqueEntDescr > 0 && numEnts > 3) {
	for (var i = 0; i<uniqueEntDescr; i++) {
		numQ3Ent++;
	}
}
if (uniqueEntIngr > 0 && numEnts > 3) {
	for (var i = 0; i<uniqueEntIngr; i++) {
		numQ4Ent++;
	}
}
if (uniqueDesDescr > 0 && numDesserts > 3) {
	for (var i = 0; i<uniqueDesDescr; i++) {
		numQ3Des++;
	}
}
if (uniqueDesIngr > 0 && numDesserts > 3) {
	for (var i = 0; i<uniqueDesIngr; i++) {
		numQ4Des++;
	}
}

//If there is at least one unique allergy violation, add one to Q5
if (uniqueAllVio > 0) {
	for (var i = 0; i<uniqueAllVio; i++) {
		numQ5++;
	}
}

//If there is at least one popular app/ent/side/dessert, add one/two/three/four to Q6
if (popApps>0 && numApps>3) {numQ6++}
if (popEnts>0 && numEnts>3) {numQ6++}
if (popSides>0 && numSides>3) {numQ6++}
if (popDesserts>0 && numDesserts>3) {numQ6++}

//If there is at least one vegetarian app/ent, add one to Q7App/Ent
if (vegApps>0 && numApps>3){numQ7App++}
if (vegEnts>0 && numEnts>3){numQ7Ent++}

//If there is at least one secret item, add one to Q8
if (secretItems>0) {numQ8++}

//If there is at least one add-on, add one to Q9
if (addOns>0) {numQ9++}

//If there is at least one common sauce/dressing, add one to Q10Sauce/Dressing
if (commonSauces>0) {numQ10Sauce++}
if (commonDressings>0) {numQ10Dressing++}

////////////////////////
//QUIZ QUESTION CREATION
////////////////////////

//QuizQuestion Constructor
function QuizQuestion(question, fourAnswersArray, correctAnswersIndexesArray, qnum) {
  this.question = question;
  this.fourAnswersArray = fourAnswersArray;
  this.correctAnswersArray = correctAnswersArray;
  this.qnum = qnum;
}

//Sample QuizQuestion object is created and sent to the console
var sampleQuestion = "What is 2 + 2?";
var sampleFourAnswersArray = [22, 4, 2.2, 9000];
var sampleCorrectAnswersIndexesArray = [1];
var sampleQNum = 1;
var sampleQ = new QuizQuestion(sampleQuestion, sampleFourAnswersArray, sampleCorrectAnswersIndexesArray, sampleQNum);
console.log(sampleQ);

//Variables for setting up quiz questions
var cheapOrExpensive = "";
var itemType "";
var canSpend = 0.01;
var descriptor = "";
var ingredient = "";
var allergicTo = "";
var sauceOrDressing = "";

var Q1Template = "What's your " + cheapOrExpensive + " " + itemType + "?";
var Q2Template = "I've only got " + canSpend + " for my " + itemType + ".  What can I get?";
var Q3Template = "I'm in the mood for a(n) " + descriptor + " " + itemType + ".  What should I get?";
var Q4Template = "I'm in the mood for a(n) " + itemType + " with " + ingredient + ".  What should I get?";
var Q5Template = "I'm allergic to " + allergicTo + ".  Which of these are okay to eat?";
var Q6Template = "What are some popular " + itemType + "s?  Select all that apply.";
var Q7Template = "Do you have any vegetarian " + itemType + "s?  Select all that apply.";
var Q8Template = "Do you have any secret items?  Select all that apply.";
var Q9Template = "Do you have any entree add-ons?  If so, how many?";
var Q10Template = "Do you have any of these common " + sauceOrDressing + "s?  Select all that apply.";

//Make all Q1App
for (var i = 0; i<numQ1App; i++) {

}

//Make all Q1Ent
for (var i = 0; i<numQ1Ent; i++) {
	
}

//Make all Q2App
for (var i = 0; i<numQ2App; i++) {
	
}

//Make all Q2Ent
for (var i = 0; i<numQ2Ent; i++) {
	
}

//Make all Q3App
for (var i = 0; i<numQ3App; i++) {
	
}

//Make all Q3Ent
for (var i = 0; i<numQ3Ent; i++) {
	
}

//Make all Q3Des
for (var i = 0; i<numQ3Des; i++) {
	
}

//Make all Q4App
for (var i = 0; i<numQ4App; i++) {
	
}

//Make all Q4Ent
for (var i = 0; i<numQ4Ent; i++) {
	
}

//Make all Q4Des
for (var i = 0; i<numQ4Des; i++) {
	
}

//Make all Q5
for (var i = 0; i<numQ5; i++) {
	
}

//Make all Q5
for (var i = 0; i<numQ6; i++) {
	
}

//Make all Q7App
for (var i = 0; i<numQ7App; i++) {
	
}

//Make all Q7Ent
for (var i = 0; i<numQ7Ent; i++) {
	
}

//Make all Q8
for (var i = 0; i<numQ8; i++) {
	
}

//Make all Q9
for (var i = 0; i<numQ9; i++) {
	
}

//Make all Q10Sauce
for (var i = 0; i<numQ10Sauce; i++) {
	
}

//Make all Q10Dressing
for (var i = 0; i<numQ10Dressing; i++) {
	
}

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

var tenQuiz = false;
var twentyQuiz = false;
var thirtyQuiz = false;

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

//////////////////////////
//USER SELECTS QUIZ LENGTH
//////////////////////////

if (thirtyQuiz) {
	//Message user, let them select from 10, 20, 30 qs (or cancel)
}

else if (twentyQuiz) {
	//Message user, let them select from 10, 20 qs (or cancel)
}

else if (tenQuiz) {
	//Message user, let them select 10 qs (or cancel)
}

else {
	//Tell user there isn't enough data in this menu to give a quiz.
}

//////////////////////
//CREATE SELECTED QUIZ
//////////////////////

///////////
//GIVE QUIZ
///////////

//////////////
//QUIZ RESULTS
//////////////