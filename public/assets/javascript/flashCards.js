//FLASH CARDS TO DO 

//Make all checkboxes
//Make the button reference all of the checkboxes correctly
//Build the html for "cardFront" and "cardBack", to apply with jQuery
	//cardFront - item name + button
	//cardBack - item stats + "knew it" button + "didn't know it" button
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


$.post("/checkMenuJSON", idObj).then(function(data2) {
	var parsedMenuJson = JSON.parse(data2.menuJSON);
	var reParsedMenuJson = JSON.parse(parsedMenuJson);
	console.log(reParsedMenuJson);

	for (var i = 0; i<reParsedMenuJson[0].length; i++) {
		entrees.push(reParsedMenuJson[0][i]);
	}

	for (var i = 0; i<reParsedMenuJson[1].length; i++) {
		appetizers.push(reParsedMenuJson[1][i]);
	}

	for (var i = 0; i<reParsedMenuJson[2].length; i++) {
		desserts.push(reParsedMenuJson[2][i]);
	}

	for (var i = 0; i<reParsedMenuJson[3].length; i++) {
		sides.push(reParsedMenuJson[3][i]);
	}

	for (var i = 0; i<reParsedMenuJson[4].length; i++) {
		addOns.push(reParsedMenuJson[4][i]);
	}

	for (var i = 0; i<reParsedMenuJson[5].length; i++) {
		soupsAndSalads.push(reParsedMenuJson[5][i]);
	}

	for (var i = 0; i<reParsedMenuJson[6].length; i++) {
		kidsMenuItems.push(reParsedMenuJson[6][i]);
	}

	for (var i = 0; i<reParsedMenuJson[7].length; i++) {
		otherFoods.push(reParsedMenuJson[7][i]);
	}

	for (var i = 0; i<reParsedMenuJson[8].length; i++) {
		wines.push(reParsedMenuJson[8][i]);
	}

	for (var i = 0; i<reParsedMenuJson[9].length; i++) {
		beers.push(reParsedMenuJson[9][i]);
	}

	for (var i = 0; i<reParsedMenuJson[10].length; i++) {
		cocktails.push(reParsedMenuJson[10][i]);
	}

	for (var i = 0; i<reParsedMenuJson[11].length; i++) {
		nonAlcoholicDrinks.push(reParsedMenuJson[11][i]);
	}

	for (var i = 0; i<reParsedMenuJson[12].length; i++) {
		afterDinnerDrinks.push(reParsedMenuJson[12][i]);
	}

	for (var i = 0; i<reParsedMenuJson[13].length; i++) {
		otherDrinks.push(reParsedMenuJson[13][i]);
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

	var allFlashCards = [];

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
	var selectedCategoriesButtonString = '<div class="col-md-12"><button onclick="selectedCategories()" type="button" class="btn btn-default" id="Button">selectedCategories</button></div>';
	$("#area1").append(allDrinksButtonString);
});

//////////////////
//HELPER FUNCTIONS
//////////////////

function beginFlashCards(flashcardArr) {

	$("#area2").append("Caught up.");

	//Show flash cards one at a time - 1) Item name with button, 2) Item stats with "knew it" button and "didn't know it" button

	//After all flash cards done, give status report with three buttons - 1) Study what I didn't know, 2) Study all selected cards again 3) Choose new menu

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
	beginFlashCards(allFlashCards);
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
	beginFlashCards(allFlashCards);

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
	beginFlashCards(allFlashCards);
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
	beginFlashCards(allFlashCards);
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