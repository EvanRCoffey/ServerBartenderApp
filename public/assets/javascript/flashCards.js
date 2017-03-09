//FLASH CARDS TO DO 

//Make all checkboxes
//Make the button reference all of the checkboxes correctly
//Build the html for "cardFront" and "cardBack", to apply with jQuery
	//entrees, sides, desserts - allergy violations, descriptors, ingredients, too
	//can't continue because I don't understand the error "gotIt() is not a function"
//Build status report with three buttons
	//1)Study what I didn't know
	//2)Study all selected cards again
	//3)Choose new menu

//Eventually, user ID will be detected automatically and the menu can be selected.  For now, it's hardcoded.

var idObj = {
	id: 1
}

var entrees = [];
var appetizers = [];
var desserts = [];
var sides = [];
var addOns = [];
var soupsAndSalads = [];
var kidsMenuItems = [];
var otherFoods = [];
var wines = [];
var beers = [];
var cocktails = [];
var nonAlcoholicDrinks = [];
var afterDinnerDrinks = [];
var otherDrinks = [];
var allFlashCards = [];
var gotIt = [];
var studyFurther = [];
var flashcardONEARRAY = [];

$.post("/checkMenuJSON", idObj).then(function(data2) {
	var parsedMenuJson = JSON.parse(data2.menuJSON);
	var reParsedMenuJson = JSON.parse(parsedMenuJson);
	console.log(reParsedMenuJson);

	for (var i = 0; i<reParsedMenuJson.entree.length; i++) {
		entrees.push(reParsedMenuJson.entree[i]);
	}

	for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {
		appetizers.push(reParsedMenuJson.appetizer[i]);
	}

	for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {
		desserts.push(reParsedMenuJson.dessert[i]);
	}

	for (var i = 0; i<reParsedMenuJson.sides.length; i++) {
		sides.push(reParsedMenuJson.sides[i]);
	}

	for (var i = 0; i<reParsedMenuJson.addOn.length; i++) {
		addOns.push(reParsedMenuJson.addOn[i]);
	}

	for (var i = 0; i<reParsedMenuJson.soupOrSalad.length; i++) {
		soupsAndSalads.push(reParsedMenuJson.soupOrSalad[i]);
	}

	for (var i = 0; i<reParsedMenuJson.kidsMenuItem.length; i++) {
		kidsMenuItems.push(reParsedMenuJson.kidsMenuItem[i]);
	}

	for (var i = 0; i<reParsedMenuJson.otherFood.length; i++) {
		otherFoods.push(reParsedMenuJson.otherFood[i]);
	}

	for (var i = 0; i<reParsedMenuJson.wine.length; i++) {
		wines.push(reParsedMenuJson.wine[i]);
	}

	for (var i = 0; i<reParsedMenuJson.beer.length; i++) {
		beers.push(reParsedMenuJson.beer[i]);
	}

	for (var i = 0; i<reParsedMenuJson.cocktail.length; i++) {
		cocktails.push(reParsedMenuJson.cocktail[i]);
	}

	for (var i = 0; i<reParsedMenuJson.nonAlcoholic.length; i++) {
		nonAlcoholicDrinks.push(reParsedMenuJson.nonAlcoholic[i]);
	}

	for (var i = 0; i<reParsedMenuJson.afterDinnerDrink.length; i++) {
		afterDinnerDrinks.push(reParsedMenuJson.afterDinnerDrink[i]);
	}

	for (var i = 0; i<reParsedMenuJson.otherDrink.length; i++) {
		otherDrinks.push(reParsedMenuJson.otherDrink[i]);
	}

	var boolFood = false;
	var boolDrink = false;
	var boolEntrees = false;
	var boolAppetizers = false;
	var boolDesserts = false;
	var boolSides = false;
	var boolAddOns = false;
	var boolSoupsAndSalads = false;
	var boolKidsMenuItems = false;
	var boolOtherFoods = false;
	var boolWines = false;
	var boolBeers = false;
	var boolCocktails = false;
	var boolNonAlcoholicDrinks = false;
	var boolAfterDinnerDrinks = false;
	var boolOtherDrinks = false;

	if (entrees.length > 0) {
		boolFood = true;
		boolEntrees = true;
	}

	if (appetizers.length > 0) {
		boolFood = true;
		boolAppetizers = true;
	}	

	if (desserts.length > 0) {
		boolFood = true;
		boolDesserts= true;
	}

	if (sides.length > 0) {
		boolFood = true;
		boolSides = true;
	}

	if (addOns.length > 0) {
		boolFood = true;
		boolAddOns = true;
	}

	if (soupsAndSalads.length > 0) {
		boolFood = true;
		boolSoupsAndSalads = true;
	}

	if (kidsMenuItems.length > 0) {
		boolFood = true;
		boolKidsMenuItems = true;
	}

	if (otherFoods.length > 0) {
		boolFood = true;
		boolOtherFoods = true;
	}

	if (wines.length > 0) {
		boolDrink = true;
		boolWines = true;
	}

	if (beers.length > 0) {
		boolDrink = true;
		boolBeers = true;
	}

	if (cocktails.length > 0) {
		boolDrink = true;
		boolCocktails = true;
	}	

	if (nonAlcoholicDrinks.length > 0) {
		boolDrink = true;
		boolNonAlcoholicDrinks = true;
	}

	if (afterDinnerDrinks.length > 0) {
		boolDrink = true;
		boolAfterDinnerDrinks = true;
	}

	if (otherDrinks.length > 0) {
		boolDrink = true;
		boolOtherDrinks = true;
	}

	var categoryArray = [boolEntrees, boolAppetizers, boolDesserts, boolSides, boolAddOns, boolSoupsAndSalads, boolKidsMenuItems, boolOtherFoods, boolWines, boolBeers, boolCocktails, boolNonAlcoholicDrinks, boolAfterDinnerDrinks, boolOtherDrinks]

	var entireMenuButtonString = '<div class="col-md-12"><button onclick="entireMenu()" type="button" class="btn btn-default" id="entireMenuButton">Entire menu</button></div>';
	$("#area1").append(entireMenuButtonString);


	if (boolFood) {
		var allFoodButtonString = '<div class="col-md-12"><button onclick="allFood()" type="button" class="btn btn-default" id="allFoodButton">All food</button></div>';
		$("#area1").append(allFoodButtonString);
	}


	if (boolDrink) {
		var allDrinksButtonString = '<div class="col-md-12"><button onclick="allDrinks()" type="button" class="btn btn-default" id="Button">All drinks</button></div>';
		$("#area1").append(allDrinksButtonString);
	}

	var checkboxesToInclude = []
	for (var i=0; i<categoryArray.length; i++) {
		if (categoryArray[i]) {checkboxesToInclude.push(i)}
	}

	//checbkboxesToInclude[] contains all indexes for categories that need checkboxes.  0=entree, 1=appetizer, etc.
	//Make a checkbox for each index held in checkboxesToInclude[], plus a "Selected categories" button
	//The button calls selectedCategories and passes it an object with boolean values .entrees, .appetizers, etc
	var selectedCategoriesButtonString = '<div class="col-md-12"><button onclick="selectedCategories()" type="button" class="btn btn-default" id="Button">Selected categories</button></div>';
	$("#area1").append(selectedCategoriesButtonString);
});

//////////////////
//HELPER FUNCTIONS
//////////////////

function showFlashCardFront() {
	var objBeingUsed = flashcardONEARRAY[(gotIt.length + studyFurther.length)];
	var frontOfCardString = '<p>Item name = "' + objBeingUsed.name + '"</p><button onclick="flipCardOver()" type="button" class="btn btn-default" id="flipCardOver">Flip card over</button>';
	$("#area1").html(frontOfCardString);
}


//This is being called just fine
function flipCardOver() {
	var objBeingUsed = flashcardONEARRAY[(gotIt.length + studyFurther.length)];
	var backOfCardString = '<p>Item name = "'+objBeingUsed.name+'"</p><p>Price = $"'+objBeingUsed.price+'"</p><p>Quick description = "'+objBeingUsed.quickDescr+'"</p><p>Detailed description = "'+objBeingUsed.detailedDescr+'"</p><button onclick="gotIt()" type="button" class="btn btn-default" id="gotIt">Got it</button><button onclick="studyFurther()" type="button" class="btn btn-default" id="studyFurther">Need to study further</button>';
	$("#area1").html(backOfCardString);
}

//These next two, however, are not.
function gotIt() {
	gotIt.push(flashcardONEARRAY[(gotIt.length + studyFurther.length)]);
	if ((gotIt.length + studyFurther.length) < flashcardONEARRAY.length) {showFlashCardFront();}
	else {statusReport(gotIt, studyFurther);}
}

function studyFurther() {
	studyFurther.push(flashcardONEARRAY[(gotIt.length + studyFurther.length)]);
	if ((gotIt.length + studyFurther.length) < flashcardONEARRAY.length) {showFlashCardFront();}
	else {statusReport(gotIt, studyFurther);}
}

function statusReport(gotIt, studyFurther) {
	console.log("gotIt:");
	console.log(gotIt);
	console.log("studyFurther");
	console.log(studyFurther);
}

function entireMenu() {
	allFlashCards = [];
	if (entrees.length > 0) {allFlashCards.push(entrees);};
	if (appetizers.length > 0) {allFlashCards.push(appetizers);}
	if (desserts.length > 0) {allFlashCards.push(desserts);}
	if (sides.length > 0) {allFlashCards.push(sides);}
	if (addOns.length > 0) {allFlashCards.push(addOns);}
	if (soupsAndSalads.length > 0) {allFlashCards.push(soupsAndSalads);}
	if (kidsMenuItems.length > 0) {allFlashCards.push(kidsMenuItems);}
	if (otherFoods.length > 0) {allFlashCards.push(otherFoods);}
	if (wines.length > 0) {allFlashCards.push(wines);}
	if (beers.length > 0) {allFlashCards.push(beers);}
	if (cocktails.length > 0) {allFlashCards.push(cocktails);}
	if (nonAlcoholicDrinks.length > 0) {allFlashCards.push(nonAlcoholicDrinks);}
	if (afterDinnerDrinks.length > 0) {allFlashCards.push(afterDinnerDrinks);}
	if (otherDrinks.length > 0) {allFlashCards.push(otherDrinks);}
	shuffle(allFlashCards);
	console.log("allFlashCards:");
	console.log(allFlashCards);
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	console.log("flashcardONEARRAY");
	console.log(flashcardONEARRAY);
	showFlashCardFront();
}

function allFood() {
	allFlashCards = [];
	if (entrees.length > 0) {allFlashCards.push(entrees);};
	if (appetizers.length > 0) {allFlashCards.push(appetizers);}
	if (desserts.length > 0) {allFlashCards.push(desserts);}
	if (sides.length > 0) {allFlashCards.push(sides);}
	if (addOns.length > 0) {allFlashCards.push(addOns);}
	if (soupsAndSalads.length > 0) {allFlashCards.push(soupsAndSalads);}
	if (kidsMenuItems.length > 0) {allFlashCards.push(kidsMenuItems);}
	if (otherFoods.length > 0) {allFlashCards.push(otherFoods);}
	shuffle(allFlashCards);
	console.log("allFlashCards:");
	console.log(allFlashCards);
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	console.log("flashcardONEARRAY");
	console.log(flashcardONEARRAY);
	showFlashCardFront();
}

function allDrinks() {
	allFlashCards = [];
	if (wines.length > 0) {allFlashCards.push(wines);}
	if (beers.length > 0) {allFlashCards.push(beers);}
	if (cocktails.length > 0) {allFlashCards.push(cocktails);}
	if (nonAlcoholicDrinks.length > 0) {allFlashCards.push(nonAlcoholicDrinks);}
	if (afterDinnerDrinks.length > 0) {allFlashCards.push(afterDinnerDrinks);}
	if (otherDrinks.length > 0) {allFlashCards.push(otherDrinks);}
	shuffle(allFlashCards);
	console.log("allFlashCards:");
	console.log(allFlashCards);
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	console.log("flashcardONEARRAY");
	console.log(flashcardONEARRAY);
	showFlashCardFront();
}

function selectedCategories(obj) {
	allFlashCards = [];
	if (entrees.length > 0 && obj.entrees) {allFlashCards.push(entrees);};
	if (appetizers.length > 0 && obj.appetizers) {allFlashCards.push(appetizers);}
	if (desserts.length > 0 && obj.desserts) {allFlashCards.push(desserts);}
	if (sides.length > 0 && obj.sides) {allFlashCards.push(sides);}
	if (addOns.length > 0 && obj.addOns) {allFlashCards.push(addOns);}
	if (soupsAndSalads.length > 0 && obj.soupsAndSalads) {allFlashCards.push(soupsAndSalads);}
	if (kidsMenuItems.length > 0 && obj.kidsMenuItems) {allFlashCards.push(kidsMenuItems);}
	if (otherFoods.length > 0 && obj.otherFoods) {allFlashCards.push(otherFoods);}
	if (wines.length > 0 && obj.wines) {allFlashCards.push(wines);}
	if (beers.length > 0 && obj.beers) {allFlashCards.push(beers);}
	if (cocktails.length > 0 && obj.cocktails) {allFlashCards.push(cocktails);}
	if (nonAlcoholicDrinks.length > 0 && obj.nonAlcoholicDrinks) {allFlashCards.push(nonAlcoholicDrinks);}
	if (afterDinnerDrinks.length > 0 && obj.afterDinnerDrinks) {allFlashCards.push(afterDinnerDrinks);}
	if (otherDrinks.length > 0 && obj.otherDrinks) {allFlashCards.push(otherDrinks);}
	shuffle(allFlashCards);
	console.log("allFlashCards:");
	console.log(allFlashCards);	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	console.log("flashcardONEARRAY");
	console.log(flashcardONEARRAY);
	showFlashCardFront();
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