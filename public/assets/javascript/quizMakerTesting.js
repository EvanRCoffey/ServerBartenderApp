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
for (var i = 0; i<reParsedMenuJson[0].length; i++) {
	//Push the ent to allEnt[]
	allEnt.push(reParsedMenuJson[0][i]);
	//Push the ent to popEnts if appropriate
	if (reParsedMenuJson[0][i].descriptors.popular) {
		popEnts.push(reParsedMenuJson[0][i]);
	}
	//Increment entsWithPrice and push the app to allQ1Ent[] if appropriate
	if (parseFloat(reParsedMenuJson[0][i].price) > 0) {
		allQ1Ent.push(reParsedMenuJson[0][i]);
	}
}

//For each appetizer...
for (var i = 0; i<reParsedMenuJson[1].length; i++) {
	//Push the app to allApp[]
	allApp.push(reParsedMenuJson[1][i]);
	//Push the app to popApps if appropriate
	if (reParsedMenuJson[1][i].descriptors.popular) {
		popApps.push(reParsedMenuJson[1][i]);
	}
	//Increment appsWithPrice and push the app to allQ1App[] if appropriate
	if (parseFloat(reParsedMenuJson[1][i].price) > 0) {
		allQ1App.push(reParsedMenuJson[1][i]);
	}
}

//For each dessert...
for (var i = 0; i<reParsedMenuJson[2].length; i++) {
	//Push the dessert to allDes[]
	allDes.push(reParsedMenuJson[2][i]);
	//Push the dessert to popDesserts if appropriate
	if (reParsedMenuJson[2][i].descriptors.popular) {
		popDesserts.push(reParsedMenuJson[2][i]);
	}
}

//For each addOn, push that addOn to addOns[]
for (var i = 0; i<reParsedMenuJson[4].length; i++) {
	addOns.push(reParsedMenuJson[4][i]);
}

//For each app, for each descriptor that's marked true, if it's not in uniqueAppDescr[], push it
var numAppDescr = 17;
for (var i = 0; i<reParsedMenuJson[1].length; i++) {
	for (var j = 0; j<numAppDescr; j++) {
		if ((reParsedMenuJson[1][i].descriptors.aLaCarteOrBiteSize) && (!uniqueAppDescr.includes("aLaCarteOrBiteSize"))) {uniqueAppDescr.push("aLaCarteOrBiteSize")};
		if ((reParsedMenuJson[1][i].descriptors.cheesy) && (!uniqueAppDescr.includes("cheesy"))) {uniqueAppDescr.push("cheesy")};
		if ((reParsedMenuJson[1][i].descriptors.fresh) && (!uniqueAppDescr.includes("fresh"))) {uniqueAppDescr.push("fresh")};
		if ((reParsedMenuJson[1][i].descriptors.fried) && (!uniqueAppDescr.includes("fried"))) {uniqueAppDescr.push("fried")};
		if ((reParsedMenuJson[1][i].descriptors.healthy) && (!uniqueAppDescr.includes("healthy"))) {uniqueAppDescr.push("healthy")};
		if ((reParsedMenuJson[1][i].descriptors.hearty) && (!uniqueAppDescr.includes("hearty"))) {uniqueAppDescr.push("hearty")};
		if ((reParsedMenuJson[1][i].descriptors.indulgent) && (!uniqueAppDescr.includes("indulgent"))) {uniqueAppDescr.push("indulgent")};
		if ((reParsedMenuJson[1][i].descriptors.light) && (!uniqueAppDescr.includes("light"))) {uniqueAppDescr.push("light")};
		if ((reParsedMenuJson[1][i].descriptors.plain) && (!uniqueAppDescr.includes("plain"))) {uniqueAppDescr.push("plain")};
		if ((reParsedMenuJson[1][i].descriptors.popular) && (!uniqueAppDescr.includes("popular"))) {uniqueAppDescr.push("popular")};
		if ((reParsedMenuJson[1][i].descriptors.raw) && (!uniqueAppDescr.includes("raw"))) {uniqueAppDescr.push("raw")};
		if ((reParsedMenuJson[1][i].descriptors.salty) && (!uniqueAppDescr.includes("salty"))) {uniqueAppDescr.push("salty")};
		if ((reParsedMenuJson[1][i].descriptors.servedCold) && (!uniqueAppDescr.includes("servedCold"))) {uniqueAppDescr.push("servedCold")};
		if ((reParsedMenuJson[1][i].descriptors.spicy) && (!uniqueAppDescr.includes("spicy"))) {uniqueAppDescr.push("spicy")};
		if ((reParsedMenuJson[1][i].descriptors.sweet) && (!uniqueAppDescr.includes("sweet"))) {uniqueAppDescr.push("sweet")};
		if ((reParsedMenuJson[1][i].descriptors.toShare) && (!uniqueAppDescr.includes("toShare"))) {uniqueAppDescr.push("toShare")};
		if ((reParsedMenuJson[1][i].descriptors.vegetarian) && (!uniqueAppDescr.includes("vegetarian"))) {uniqueAppDescr.push("vegetarian"), vegApps.push(reParsedMenuJson[1][i]);};
	}
}

//For each app, for each ingredient that's marked true, if it's not in uniqueAppIngr[], push it
var numAppIngr = 6;
for (var i = 0; i<reParsedMenuJson[1].length; i++) {
	for (var j = 0; j<numAppIngr; j++) {
		if ((reParsedMenuJson[1][i].ingredients.beef) && (!uniqueAppIngr.includes("beef"))) {uniqueAppIngr.push("beef")};
		if ((reParsedMenuJson[1][i].ingredients.chicken) && (!uniqueAppIngr.includes("chicken"))) {uniqueAppIngr.push("chicken")};
		if ((reParsedMenuJson[1][i].ingredients.lamb) && (!uniqueAppIngr.includes("lamb"))) {uniqueAppIngr.push("lamb")};
		if ((reParsedMenuJson[1][i].ingredients.otherProtein) && (!uniqueAppIngr.includes("otherProtein"))) {uniqueAppIngr.push("otherProtein")};
		if ((reParsedMenuJson[1][i].ingredients.pork) && (!uniqueAppIngr.includes("pork"))) {uniqueAppIngr.push("pork")};
		if ((reParsedMenuJson[1][i].ingredients.seafood) && (!uniqueAppIngr.includes("seafood"))) {uniqueAppIngr.push("seafood")};
	}
}

//For each entree, for each descriptor that's marked true, if it's not in uniqueEntDescr[], push it
var numEntDescr = 17;
for (var i = 0; i<reParsedMenuJson[0].length; i++) {
	for (var j = 0; j<numEntDescr; j++) {
		if ((reParsedMenuJson[0][i].descriptors.aLaCarteOrBiteSize) && (!uniqueEntDescr.includes("aLaCarteOrBiteSize"))) {uniqueEntDescr.push("aLaCarteOrBiteSize")};
		if ((reParsedMenuJson[0][i].descriptors.cheesy) && (!uniqueEntDescr.includes("cheesy"))) {uniqueEntDescr.push("cheesy")};
		if ((reParsedMenuJson[0][i].descriptors.fresh) && (!uniqueEntDescr.includes("fresh"))) {uniqueEntDescr.push("fresh")};
		if ((reParsedMenuJson[0][i].descriptors.fried) && (!uniqueEntDescr.includes("fried"))) {uniqueEntDescr.push("fried")};
		if ((reParsedMenuJson[0][i].descriptors.healthy) && (!uniqueEntDescr.includes("healthy"))) {uniqueEntDescr.push("healthy")};
		if ((reParsedMenuJson[0][i].descriptors.hearty) && (!uniqueEntDescr.includes("hearty"))) {uniqueEntDescr.push("hearty")};
		if ((reParsedMenuJson[0][i].descriptors.indulgent) && (!uniqueEntDescr.includes("indulgent"))) {uniqueEntDescr.push("indulgent")};
		if ((reParsedMenuJson[0][i].descriptors.light) && (!uniqueEntDescr.includes("light"))) {uniqueEntDescr.push("light")};
		if ((reParsedMenuJson[0][i].descriptors.plain) && (!uniqueEntDescr.includes("plain"))) {uniqueEntDescr.push("plain")};
		if ((reParsedMenuJson[0][i].descriptors.popular) && (!uniqueEntDescr.includes("popular"))) {uniqueEntDescr.push("popular")};
		if ((reParsedMenuJson[0][i].descriptors.raw) && (!uniqueEntDescr.includes("raw"))) {uniqueEntDescr.push("raw")};
		if ((reParsedMenuJson[0][i].descriptors.salty) && (!uniqueEntDescr.includes("salty"))) {uniqueEntDescr.push("salty")};
		if ((reParsedMenuJson[0][i].descriptors.servedCold) && (!uniqueEntDescr.includes("servedCold"))) {uniqueEntDescr.push("servedCold")};
		if ((reParsedMenuJson[0][i].descriptors.spicy) && (!uniqueEntDescr.includes("spicy"))) {uniqueEntDescr.push("spicy")};
		if ((reParsedMenuJson[0][i].descriptors.sweet) && (!uniqueEntDescr.includes("sweet"))) {uniqueEntDescr.push("sweet")};
		if ((reParsedMenuJson[0][i].descriptors.toShare) && (!uniqueEntDescr.includes("toShare"))) {uniqueEntDescr.push("toShare")};
		if ((reParsedMenuJson[0][i].descriptors.vegetarian) && (!uniqueEntDescr.includes("vegetarian"))) {uniqueEntDescr.push("vegetarian"), vegEnts.push(reParsedMenuJson[0][i]);};
	}
}

//For each entree, for each ingredient that's marked true, if it's not in uniqueEntIngr[], push it
var numEntIngr = 6;
for (var i = 0; i<reParsedMenuJson[0].length; i++) {
	for (var j = 0; j<numEntIngr; j++) {
		if ((reParsedMenuJson[0][i].ingredients.beef) && (!uniqueEntIngr.includes("beef"))) {uniqueEntIngr.push("beef")};
		if ((reParsedMenuJson[0][i].ingredients.chicken) && (!uniqueEntIngr.includes("chicken"))) {uniqueEntIngr.push("chicken")};
		if ((reParsedMenuJson[0][i].ingredients.lamb) && (!uniqueEntIngr.includes("lamb"))) {uniqueEntIngr.push("lamb")};
		if ((reParsedMenuJson[0][i].ingredients.otherProtein) && (!uniqueEntIngr.includes("otherProtein"))) {uniqueEntIngr.push("otherProtein")};
		if ((reParsedMenuJson[0][i].ingredients.pork) && (!uniqueEntIngr.includes("pork"))) {uniqueEntIngr.push("pork")};
		if ((reParsedMenuJson[0][i].ingredients.seafood) && (!uniqueEntIngr.includes("seafood"))) {uniqueEntIngr.push("seafood")};
	}
}

//For each dessert, for each descriptor that's marked true, if it's not in uniqueDesDescr[], push it
var numDesDescr = 8;
for (var i = 0; i<reParsedMenuJson[2].length; i++) {
	for (var j = 0; j<numDesDescr; j++) {
		if ((reParsedMenuJson[2][i].descriptors.chocolatey) && (!uniqueDesDescr.includes("chocolatey"))) {uniqueDesDescr.push("chocolatey")};
		if ((reParsedMenuJson[2][i].descriptors.fruity) && (!uniqueDesDescr.includes("fruity"))) {uniqueDesDescr.push("fruity")};
		if ((reParsedMenuJson[2][i].descriptors.healthy) && (!uniqueDesDescr.includes("healthy"))) {uniqueDesDescr.push("healthy")};
		if ((reParsedMenuJson[2][i].descriptors.light) && (!uniqueDesDescr.includes("light"))) {uniqueDesDescr.push("light")};
		if ((reParsedMenuJson[2][i].descriptors.popular) && (!uniqueDesDescr.includes("healthy"))) {uniqueDesDescr.push("healthy")};
		if ((reParsedMenuJson[2][i].descriptors.rich) && (!uniqueDesDescr.includes("rich"))) {uniqueDesDescr.push("rich")};
		if ((reParsedMenuJson[2][i].descriptors.tart) && (!uniqueDesDescr.includes("tart"))) {uniqueDesDescr.push("tart")};
		if ((reParsedMenuJson[2][i].descriptors.toShare) && (!uniqueDesDescr.includes("toShare"))) {uniqueDesDescr.push("toShare")};
	}
}

//For each dessert, for each ingredient that's marked true, if it's not in uniqueDesIngr[], push it
var numDesIngr = 3;
for (var i = 0; i<reParsedMenuJson[2].length; i++) {
	for (var j = 0; j<numDesIngr; j++) {
		if ((reParsedMenuJson[2][i].ingredients.cake) && (!uniqueDesIngr.includes("cake"))) {uniqueDesIngr.push("cake")};
		if ((reParsedMenuJson[2][i].ingredients.pie) && (!uniqueDesIngr.includes("pie"))) {uniqueDesIngr.push("pie")};
		if ((reParsedMenuJson[2][i].ingredients.iceCream) && (!uniqueDesIngr.includes("iceCream"))) {uniqueDesIngr.push("iceCream")};
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

// //For every item, for each allergen that's marked true, if it's not in uniqueAllVio[], push it
// //For every item, if secret is true, push that item to secretItems[]
// var numAllergensPlusSecret = 10;
// for (var i = 0; i<3; i++) {
// 	for (var j = 0; j<numAllergensPlusSecret; j++) {
// 		if ((reParsedMenuJson[i][j].allergyViolations.eggs) && (!uniqueAllVio.includes("eggs"))) {uniqueAllVio.push("eggs")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.fish) && (!uniqueAllVio.includes("fish"))) {uniqueAllVio.push("fish")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.gluten) && (!uniqueAllVio.includes("gluten"))) {uniqueAllVio.push("gluten")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.milk) && (!uniqueAllVio.includes("milk"))) {uniqueAllVio.push("milk")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.peanuts) && (!uniqueAllVio.includes("peanuts"))) {uniqueAllVio.push("peanuts")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.shellfish) && (!uniqueAllVio.includes("shellfish"))) {uniqueAllVio.push("shellfish")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.soy) && (!uniqueAllVio.includes("soy"))) {uniqueAllVio.push("soy")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.treeNuts) && (!uniqueAllVio.includes("treeNuts"))) {uniqueAllVio.push("treeNuts")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.wheat) && (!uniqueAllVio.includes("wheat"))) {uniqueAllVio.push("wheat")};
// 		//For every item, if secret is true, push that item to secretItems[]
// 		if (reParsedMenuJson[i][j].secret) {secretItems.push(reParsedMenuJson[i][j])}
// 	}
// }

//Hardcoding this to proceed with testing.  No idea why the above code isn't working, even after console.logging to investigate
uniqueAllVio.push("eggs");
uniqueAllVio.push("fish");
uniqueAllVio.push("gluten");
uniqueAllVio.push("milk");
uniqueAllVio.push("peanuts");
uniqueAllVio.push("shellfish");
uniqueAllVio.push("soy");
uniqueAllVio.push("treeNuts");
uniqueAllVio.push("wheat");

// console.log(uniqueAppDescr);
// console.log(uniqueAppIngr);
// console.log(uniqueEntDescr);
// console.log(uniqueEntIngr);
// console.log(uniqueDesDescr);
// console.log(uniqueDesIngr);
// console.log(uniqueAllVio);
// console.log(vegApps);
// console.log(vegEnts);
// console.log(commonSauces);
// console.log(commonDressings);
// console.log(secretItems);
// console.log(addOns);
// console.log(popApps);
// console.log(popEnts);
// console.log(popDesserts);

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

console.log(numQ1App);
console.log(numQ1Ent);
console.log(numQ2App);
console.log(numQ2Ent);
console.log(numQ3App);
console.log(numQ3Ent);
console.log(numQ3Des);
console.log(numQ4App);
console.log(numQ4Ent);
console.log(numQ4Des);
console.log(numQ5);
console.log(numQ6);
console.log(numQ7App);
console.log(numQ7Ent);
console.log(numQ8);
console.log(numQ9);
console.log(numQ10Sauce);
console.log(numQ10Dressing);

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
//Make all Q1App
//////////////////////

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
var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);

var sampleQ = "What's your cheapest appetizer?";
var sampleFourAnswers = [];
sampleFourAnswers.push(bottomItemName);
for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
var sampleCorrectAnswers = [];
sampleCorrectAnswers.push(bottomItemName);
var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

//////////////////////
//QUESTIONS BEING MADE
//Make all Q1Ent
//////////////////////

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
var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);

var sampleQ = "What's your cheapest entree?";
var sampleFourAnswers = [];
sampleFourAnswers.push(bottomItemName);
for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
var sampleCorrectAnswers = [];
sampleCorrectAnswers.push(bottomItemName);
var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

//////////////////////
//QUESTIONS BEING MADE
//Make all Q2App
//////////////////////

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

var sampleQ = "I've only got $" + medianPrice + " for an appetizer.  What can I get?  (Select all that apply)";
sampleFourAnswers.push(correctItem1);
sampleFourAnswers.push(correctItem2);
sampleFourAnswers.push(incorrectItem1);
sampleFourAnswers.push(incorrectItem2);
sampleCorrectAnswers.push(correctItem1);
sampleCorrectAnswers.push(correctItem2);

var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

//////////////////////
//QUESTIONS BEING MADE
//Make all Q2Ent
//////////////////////

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

var sampleQ = "I've only got $" + medianPrice + " for an entree.  What can I get?  (Select all that apply)";
sampleFourAnswers.push(correctItem1);
sampleFourAnswers.push(correctItem2);
sampleFourAnswers.push(incorrectItem1);
sampleFourAnswers.push(incorrectItem2);
sampleCorrectAnswers.push(correctItem1);
sampleCorrectAnswers.push(correctItem2);

var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

//////////////////////
//QUESTIONS BEING MADE
//Make all Q3App
//////////////////////

var randomThing = uniqueAppDescr[Math.floor(Math.random() * uniqueAppDescr.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm in the mood for a(n) " + randomThing + " appetizer.  What should I get?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allApp.length; i++) {
	if (randomThing === "aLaCarteOrBiteSize") { if (allApp[i].descriptors.aLaCarteOrBiteSize) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "cheesy") { if (allApp[i].descriptors.cheesy) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "fresh") { if (allApp[i].descriptors.fresh) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "fried") { if (allApp[i].descriptors.fried) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "healthy") { if (allApp[i].descriptors.healthy) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "hearty") { if (allApp[i].descriptors.hearty) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "indulgent") { if (allApp[i].descriptors.indulgent) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "light") { if (allApp[i].descriptors.light) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "plain") { if (allApp[i].descriptors.plain) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "popular") { if (allApp[i].descriptors.popular) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "raw") { if (allApp[i].descriptors.raw) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "salty") { if (allApp[i].descriptors.salty) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "servedCold") { if (allApp[i].descriptors.servedCold) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "spicy") { if (allApp[i].descriptors.spicy) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "sweet") { if (allApp[i].descriptors.sweet) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "toShare") { if (allApp[i].descriptors.toShare) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "vegetarian") { if (allApp[i].descriptors.vegetarian) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No " + randomThing + " appetizers");
}

if (hasThing.length > 0) {
	
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q3Ent
//////////////////////

var randomThing = uniqueEntDescr[Math.floor(Math.random() * uniqueEntDescr.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm in the mood for a(n) " + randomThing + " entree.  What should I get?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allEnt.length; i++) {
	if (randomThing === "aLaCarteOrBiteSize") { if (allEnt[i].descriptors.aLaCarteOrBiteSize) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "cheesy") { if (allEnt[i].descriptors.cheesy) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "fresh") { if (allEnt[i].descriptors.fresh) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "fried") { if (allEnt[i].descriptors.fried) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "healthy") { if (allEnt[i].descriptors.healthy) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "hearty") { if (allEnt[i].descriptors.hearty) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "indulgent") { if (allEnt[i].descriptors.indulgent) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "light") { if (allEnt[i].descriptors.light) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "plain") { if (allEnt[i].descriptors.plain) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "popular") { if (allEnt[i].descriptors.popular) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "raw") { if (allEnt[i].descriptors.raw) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "salty") { if (allEnt[i].descriptors.salty) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "servedCold") { if (allEnt[i].descriptors.servedCold) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "spicy") { if (allEnt[i].descriptors.spicy) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "sweet") { if (allEnt[i].descriptors.sweet) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "toShare") { if (allEnt[i].descriptors.toShare) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "vegetarian") { if (allEnt[i].descriptors.vegetarian) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No " + randomThing + " entrees");
}

if (hasThing.length > 0) {
	
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q3Des
//////////////////////

var randomThing = uniqueDesDescr[Math.floor(Math.random() * uniqueDesDescr.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm in the mood for a(n) " + randomThing + " dessert.  What should I get?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allDes.length; i++) {
	if (randomThing === "chocolatey") { if (allDes[i].descriptors.chocolatey) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "fruity") { if (allDes[i].descriptors.fruity) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "healthy") { if (allDes[i].descriptors.healthy) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "light") { if (allDes[i].descriptors.light) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "popular") { if (allDes[i].descriptors.popular) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "rich") { if (allDes[i].descriptors.rich) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "tart") { if (allDes[i].descriptors.tart) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "toShare") { if (allDes[i].descriptors.toShare) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No " + randomThing + " desserts");
}

if (hasThing.length > 0) {
	
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q4App
//////////////////////

var randomThing = uniqueAppIngr[Math.floor(Math.random() * uniqueAppIngr.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm in the mood for an appetizer with " + randomThing + ".  What should I get?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allApp.length; i++) {
	if (randomThing === "beef") { if (allApp[i].ingredients.beef) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "chicken") { if (allApp[i].ingredients.chicken) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "lamb") { if (allApp[i].ingredients.lamb) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "otherProtein") { if (allApp[i].ingredients.otherProtein) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "pork") { if (allApp[i].ingredients.pork) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "seafood") { if (allApp[i].ingredients.seafood) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No appetizers with " + randomThing);
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q4Ent
//////////////////////

var randomThing = uniqueEntIngr[Math.floor(Math.random() * uniqueEntIngr.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm in the mood for an entree with " + randomThing + ".  What should I get?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allEnt.length; i++) {
	if (randomThing === "beef") { if (allEnt[i].ingredients.beef) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "chicken") { if (allEnt[i].ingredients.chicken) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "lamb") { if (allEnt[i].ingredients.lamb) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "otherProtein") { if (allEnt[i].ingredients.otherProtein) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "pork") { if (allEnt[i].ingredients.pork) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "seafood") { if (allEnt[i].ingredients.seafood) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No entrees with " + randomThing);
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q4Des
//////////////////////

var randomThing = uniqueDesIngr[Math.floor(Math.random() * uniqueDesIngr.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm in the mood for a dessert with " + randomThing + ".  What should I get?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allDes.length; i++) {
	if (randomThing === "cake") { if (allDes[i].ingredients.cake) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "pie") { if (allDes[i].ingredients.pie) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "iceCream") { if (allDes[i].ingredients.iceCream) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No desserts with " + randomThing);
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q5
//////////////////////

var randomThing = uniqueAllVio[Math.floor(Math.random() * uniqueAllVio.length)];

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I'm allergic to " + randomThing + ".  Are any of these unsafe for me to eat?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allApp.length; i++) {
	if (randomThing === "eggs") { if (allApp[i].allergyViolations.eggs) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "fish") { if (allApp[i].allergyViolations.fish) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "gluten") { if (allApp[i].allergyViolations.gluten) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "milk") { if (allApp[i].allergyViolations.milk) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "peanuts") { if (allApp[i].allergyViolations.peanuts) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "shellfish") { if (allApp[i].allergyViolations.shellfish) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "soy") { if (allApp[i].allergyViolations.soy) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "treeNuts") { if (allApp[i].allergyViolations.treeNuts) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
	else if (randomThing === "wheat") { if (allApp[i].allergyViolations.wheat) {hasThing.push(allApp[i]);} else {noThing.push(allApp[i]);}}
}
for (var i=0; i<allEnt.length; i++) {
	if (randomThing === "eggs") { if (allEnt[i].allergyViolations.eggs) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "fish") { if (allEnt[i].allergyViolations.fish) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "gluten") { if (allEnt[i].allergyViolations.gluten) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "milk") { if (allEnt[i].allergyViolations.milk) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "peanuts") { if (allEnt[i].allergyViolations.peanuts) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "shellfish") { if (allEnt[i].allergyViolations.shellfish) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "soy") { if (allEnt[i].allergyViolations.soy) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "treeNuts") { if (allEnt[i].allergyViolations.treeNuts) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
	else if (randomThing === "wheat") { if (allEnt[i].allergyViolations.wheat) {hasThing.push(allEnt[i]);} else {noThing.push(allEnt[i]);}}
}
for (var i=0; i<allDes.length; i++) {
	if (randomThing === "eggs") { if (allDes[i].allergyViolations.eggs) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "fish") { if (allDes[i].allergyViolations.fish) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "gluten") { if (allDes[i].allergyViolations.gluten) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "milk") { if (allDes[i].allergyViolations.milk) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "peanuts") { if (allDes[i].allergyViolations.peanuts) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "shellfish") { if (allDes[i].allergyViolations.shellfish) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "soy") { if (allDes[i].allergyViolations.soy) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "treeNuts") { if (allDes[i].allergyViolations.treeNuts) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
	else if (randomThing === "wheat") { if (allDes[i].allergyViolations.wheat) {hasThing.push(allDes[i]);} else {noThing.push(allDes[i]);}}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No food with " + randomThing);
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make one app Q6
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I want an appetizer.  What's popular?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allApp.length; i++) {
	if (allApp[i].descriptors.popular) {hasThing.push(allApp[i])}
	else {noThing.push(allApp[i])}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No popular appetizers");
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make one ent Q6
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I want an entree.  What's popular?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allEnt.length; i++) {
	if (allEnt[i].descriptors.popular) {hasThing.push(allEnt[i])}
	else {noThing.push(allEnt[i])}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No popular entrees");
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make one des Q6
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "I want a dessert.  What's popular?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allDes.length; i++) {
	if (allDes[i].descriptors.popular) {hasThing.push(allDes[i])}
	else {noThing.push(allDes[i])}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No popular desserts");
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make one Q7App
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "Do you have any vegetarian appetizers?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allApp.length; i++) {
	if (allApp[i].descriptors.vegetarian) {hasThing.push(allApp[i])}
	else {noThing.push(allApp[i])}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No vegetarian appetizers");
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make one Q7Ent
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "Do you have any vegetarian entrees?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allEnt.length; i++) {
	if (allEnt[i].descriptors.vegetarian) {hasThing.push(allEnt[i])}
	else {noThing.push(allEnt[i])}
}
if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No vegetarian entrees");
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q8
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "Do you have any secret items?  (Select all that apply)";

var hasThing = [];
var noThing = [];
for (var i=0; i<allEnt.length; i++) {
	if (allEnt[i].secret) {hasThing.push(allEnt[i])}
	else {noThing.push(allEnt[i])}
}
for (var i=0; i<allApp.length; i++) {
	if (allApp[i].secret) {hasThing.push(allApp[i])}
	else {noThing.push(allApp[i])}
}
for (var i=0; i<allDes.length; i++) {
	if (allDes[i].secret) {hasThing.push(allDes[i])}
	else {noThing.push(allDes[i])}
}

if (hasThing.length >= 3) {
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnCorrectName(hasThing, sampleFourAnswers));}
	sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));
	sampleCorrectAnswers.push(sampleFourAnswers[0]);
	sampleCorrectAnswers.push(sampleFourAnswers[1]);
	sampleCorrectAnswers.push(sampleFourAnswers[2]);
}
else if (hasThing.length === 2) {
	sampleFourAnswers.push(hasThing[0].name);
	sampleFourAnswers.push(hasThing[1].name);
	for (var i = 0; i<2; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
	sampleCorrectAnswers.push(hasThing[1].name);
}
else if (hasThing.length === 1) {
	sampleFourAnswers.push(hasThing[0].name);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(noThing, sampleFourAnswers));}
	sampleCorrectAnswers.push(hasThing[0].name);
}

else if (hasThing.length === 0) {
	console.log("No secret items");
}

if (hasThing.length > 0) {
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
	thisQArray.push(x);
	console.log(thisQArray);
}

//////////////////////
//QUESTIONS BEING MADE
//Make all Q9
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = ["3 or more", "2", "1", "No entree add-ons"];
var sampleQ = "Do you have any entree add-ons?  If so, how many options are there?";

if (addOns.length >= 3) {sampleCorrectAnswers.push("3 or more")};
if (addOns.length === 2) {sampleCorrectAnswers.push("2")};
if (addOns.length === 1) {sampleCorrectAnswers.push("1")};
if (addOns.length === 0) {sampleCorrectAnswers.push("No entree add-ons")};

var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

//////////////////////
//QUESTIONS BEING MADE
//Make all Q10Sauces
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "Do you have any of these common sauces? (Select all that apply)";
var saucesArray = ["a1","bbqSauce","cocktailSauce","heinz57","hotSauce","ketchup","marinara","mayonnaise","mustardSpicy","mustardYellow","salsa","soySauce"];

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

var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

//////////////////////
//QUESTIONS BEING MADE
//Make all Q10Dressings
//////////////////////

var thisQArray = [];
var incorrectAnswers = [];
var sampleCorrectAnswers = [];
var sampleFourAnswers = [];
var sampleQ = "Do you have any of these common dressings? (Select all that apply)";
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

var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers);
thisQArray.push(x);
console.log(thisQArray);

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

var tenQuiz = false;
var twentyQuiz = false;
var thirtyQuiz = false;

//Determining what quizzes can be made with the given menu...
var firstSixQs = numQ1App + numQ1Ent + numQ2App + numQ2Ent + numQ3App + numQ3Ent + numQ3Des + numQ4App + numQ4Ent + numQ4Des + numQ5 + numQ6;

//If 10 unique question types...
if (uniqueQType === 10) {
	console.log("10 unique question types");
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
	console.log("9 unique question types");
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
	console.log("8 unique question types");
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
	console.log("7 unique question types");
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
	console.log("6 unique question types");
	tenQuiz = true;
	if (firstSixQs > 17) {
		twentyQuiz = true;
		if (firstSixQs > 27) {
			thirtyQuiz = true;
		}
	}
}

if (thirtyQuiz) {
	//Message user, let them select from 10, 20, 30 qs (or cancel)
	console.log("Thirty quiz available");
}

if (twentyQuiz) {
	//Message user, let them select from 10, 20 qs (or cancel)
	console.log("Twenty quiz available");
}

if (tenQuiz) {
	//Message user, let them select 10 qs (or cancel)
	console.log("Ten quiz available");
}

else {
	//Tell user there isn't enough data in this menu to give a quiz.
	console.log("No quiz available");
}

//////////////////////////
//USER SELECTS QUIZ LENGTH
//////////////////////////

//////////////////////
//CREATE SELECTED QUIZ
//////////////////////

///////////
//GIVE QUIZ
///////////

//////////////
//GIVE RESULTS
//////////////






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