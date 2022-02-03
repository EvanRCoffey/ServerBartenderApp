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
var gotItArray = [];
var studyFurtherArray = [];
var flashcardONEARRAY = [];

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

$(document).ready(function() {
    $('select').material_select();
    // prepareJobDropdown();
});

//////////////////
//HELPER FUNCTIONS
//////////////////

function showFlashCardFront() {
	var objBeingUsed = flashcardONEARRAY[(gotItArray.length + studyFurtherArray.length)];
	var frontOfCardString = '<p class="flashFront">' + objBeingUsed.name + '</p><button onclick="flipCardOver()" type="button" class="btn btn-default flipButton" id="flipCardOver">Flip card over</button>';
	$("#area1").html(frontOfCardString);
}


//This is being called just fine
function flipCardOver() {
	var objBeingUsed = flashcardONEARRAY[(gotItArray.length + studyFurtherArray.length)];
	var backOfCardString = '<p class="flashBackTitle">'+objBeingUsed.name+'</p><p class="flashBackText">$'+objBeingUsed.price+'</p><p class="flashBackText">Quick description: "'+objBeingUsed.quickDescr+'"</p><p class="flashBackText">Detailed description: "'+objBeingUsed.detailedDescr+'"</p><button onclick="gotIt()" type="button" class="btn btn-default" id="gotIt">Got it</button><br><br><button onclick="studyFurther()" type="button" class="btn btn-default" id="studyFurther">Need to study further</button>';
	$("#area1").html(backOfCardString);
}

//These next two, however, are not.
function gotIt() {
	gotItArray.push(flashcardONEARRAY[(gotItArray.length + studyFurtherArray.length)]);
	if ((gotItArray.length + studyFurtherArray.length) < flashcardONEARRAY.length - 1) {showFlashCardFront();}
	else {statusReport(gotItArray, studyFurtherArray);}
}

function studyFurther() {
	studyFurtherArray.push(flashcardONEARRAY[(gotItArray.length + studyFurtherArray.length)]);
	if ((gotItArray.length + studyFurtherArray.length) < flashcardONEARRAY.length -1) {showFlashCardFront();}
	else {statusReport(gotItArray, studyFurtherArray);}
}

function keepStudying() {
	studyFurtherArray = [];

	//Remove from flashcardONEARRAY any item that is in gotItArray, then empty gotItArray
	for (var i = 0; i<gotItArray.length; i++) {
		if (flashcardONEARRAY.includes(gotItArray[i])) {
			for (var j = 0; j<flashcardONEARRAY.length; j++) {
				if (flashcardONEARRAY[j] === gotItArray[i]) {
					flashcardONEARRAY.splice(j, 1);
				}
			}
		}
	}
	gotItArray = [];
	$("#area2").html("");
	showFlashCardFront();
}

function statusReport(gotItArray, studyFurtherArray) {
	$("#area1").html("STATUS REPORT:<br><br>");

	if (gotItArray.length > 0) {
		$("#area1").append("These are the items you knew:<br>");
		for (var i = 0; i<gotItArray.length; i++) {
			$("#area1").append(gotItArray[i].name);
			$("#area1").append("<br>");
		}
	}
	
	if (studyFurtherArray.length > 0) {
		$("#area1").append("<br>These are the items you need to study further:<br>");
		for (var i = 0; i<studyFurtherArray.length; i++) {
			$("#area1").append(studyFurtherArray[i].name);
			$("#area1").append("<br>");
		}
	}

	//See if there are any cards left to study
	if (studyFurtherArray.length < 1) {
		$("#area2").html("All flash cards complete!<hr>");
	}
	else {
		var keepStudyingButtonString = '<div class="col-md-12"><button onclick="keepStudying()" type="button" class="btn btn-default" id="keepStudyingButton">Study these items further</button></div><hr>';
		$("#area2").html(keepStudyingButtonString);
	}

	var entireMenuButtonString = '<div class="col-md-12"><button onclick="entireMenu()" type="button" class="btn btn-default" id="entireMenuButton">Entire menu</button></div>';
	$("#area2").append(entireMenuButtonString);

	if (boolFood) {
		var allFoodButtonString = '<div class="col-md-12"><button onclick="allFood()" type="button" class="btn btn-default" id="allFoodButton">All food</button></div>';
		$("#area2").append(allFoodButtonString);
	}

	if (boolDrink) {
		var allDrinksButtonString = '<div class="col-md-12"><button onclick="allDrinks()" type="button" class="btn btn-default" id="Button">All drinks</button></div>';
		$("#area2").append(allDrinksButtonString);
	}

	var checkboxesToInclude = []
	var categoryArray = [boolEntrees, boolAppetizers, boolDesserts, boolSides, boolAddOns, boolSoupsAndSalads, boolKidsMenuItems, boolOtherFoods, boolWines, boolBeers, boolCocktails, boolNonAlcoholicDrinks, boolAfterDinnerDrinks, boolOtherDrinks];
	for (var i=0; i<categoryArray.length; i++) {
		if (categoryArray[i]) {checkboxesToInclude.push(i)}
	}

	//checkboxesToInclude[] contains all indexes for categories that need checkboxes.  0=entree, 1=appetizer, etc.
	var checkboxJqueryString = '<div>';
	if (checkboxesToInclude.includes(0)) {
		checkboxJqueryString += '<p><input type="checkbox" id="entreesCheckbox" /><label for="entreesCheckbox">Entrees</label></p>'
	}
	if (checkboxesToInclude.includes(1)) {
		checkboxJqueryString += '<p><input type="checkbox" id="appetizersCheckbox" /><label for="appetizersCheckbox">Appetizers</label></p>'
	}
	if (checkboxesToInclude.includes(2)) {
		checkboxJqueryString += '<p><input type="checkbox" id="dessertsCheckbox" /><label for="dessertsCheckbox">Desserts</label></p>'
	}
	if (checkboxesToInclude.includes(3)) {
		checkboxJqueryString += '<p><input type="checkbox" id="sidesCheckbox" /><label for="sidesCheckbox">Sides</label></p>'
	}
	if (checkboxesToInclude.includes(4)) {
		checkboxJqueryString += '<p><input type="checkbox" id="addOnsCheckbox" /><label for="addOnsCheckbox">Add-Ons</label></p>'
	}
	if (checkboxesToInclude.includes(5)) {
		checkboxJqueryString += '<p><input type="checkbox" id="soupOrSaladCheckbox" /><label for="soupOrSaladCheckbox">Soups and Salads</label></p>'
	}
	if (checkboxesToInclude.includes(6)) {
		checkboxJqueryString += '<p><input type="checkbox" id="kidsMenuItemsCheckbox" /><label for="kidsMenuItemsCheckbox">Kids Menu Items</label></p>'
	}
	if (checkboxesToInclude.includes(7)) {
		checkboxJqueryString += '<p><input type="checkbox" id="otherFoodsCheckbox" /><label for="otherFoodCheckbox">Other Food</label></p>'
	}
	if (checkboxesToInclude.includes(8)) {
		checkboxJqueryString += '<p><input type="checkbox" id="winesCheckbox" /><label for="winesCheckbox">Wines</label></p>'
	}
	if (checkboxesToInclude.includes(9)) {
		checkboxJqueryString += '<p><input type="checkbox" id="beersCheckbox" /><label for="beersCheckbox">Beers</label></p>'
	}
	if (checkboxesToInclude.includes(10)) {
		checkboxJqueryString += '<p><input type="checkbox" id="cocktailsCheckbox" /><label for="cocktailsCheckbox">Cocktails</label></p>'
	}
	if (checkboxesToInclude.includes(11)) {
		checkboxJqueryString += '<p><input type="checkbox" id="nonAlcoholicCheckbox" /><label for="nonAlcoholicCheckbox">Non-Alcoholic Drinks</label></p>'
	}
	if (checkboxesToInclude.includes(12)) {
		checkboxJqueryString += '<p><input type="checkbox" id="afterDinnerDrinksCheckbox" /><label for="afterDinnerDrinksCheckbox">After-Dinner Drinks</label></p>'
	}
	if (checkboxesToInclude.includes(13)) {
		checkboxJqueryString += '<p><input type="checkbox" id="otherDrinksCheckbox" /><label for="otherDrinksCheckbox">Other Drinks</label></p>'
	}
	checkboxJqueryString += '</div>';
	//The button calls selectedCategories and passes it an object with boolean values .entrees, .appetizers, etc
	var selectedCategoriesButtonString = '<div class="col-md-12"><button onclick="selectedCategories()" type="button" class="btn btn-default" id="Button">Selected categories</button></div>';
	$("#area2").append(selectedCategoriesButtonString);
	$("#area2").append(checkboxJqueryString);
}

function entireMenu() {
	$("#area1").html("<div></div>");
	$("#area2").html("<div></div>");
	$("#dropdown").html("");
	allFlashCards = [];
	flashcardONEARRAY = [];
	gotItArray = [];
	studyFurtherArray = [];
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
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	shuffle(flashcardONEARRAY);
	shuffle(flashcardONEARRAY);
	showFlashCardFront();
}

function allFood() {
	$("#area1").html("<div></div>");
	$("#area2").html("<div></div>");
	$("#dropdown").html("");
	allFlashCards = [];
	flashcardONEARRAY = [];
	gotItArray = [];
	studyFurtherArray = [];
	if (entrees.length > 0) {allFlashCards.push(entrees);};
	if (appetizers.length > 0) {allFlashCards.push(appetizers);}
	if (desserts.length > 0) {allFlashCards.push(desserts);}
	if (sides.length > 0) {allFlashCards.push(sides);}
	if (addOns.length > 0) {allFlashCards.push(addOns);}
	if (soupsAndSalads.length > 0) {allFlashCards.push(soupsAndSalads);}
	if (kidsMenuItems.length > 0) {allFlashCards.push(kidsMenuItems);}
	if (otherFoods.length > 0) {allFlashCards.push(otherFoods);}
	shuffle(allFlashCards);
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	shuffle(flashcardONEARRAY);
	shuffle(flashcardONEARRAY);
	showFlashCardFront();
}

function allDrinks() {
	$("#area1").html("<div></div>");
	$("#area2").html("<div></div>");
	$("#dropdown").html("");
	allFlashCards = [];
	flashcardONEARRAY = [];
	gotItArray = [];
	studyFurtherArray = [];
	if (wines.length > 0) {allFlashCards.push(wines);}
	if (beers.length > 0) {allFlashCards.push(beers);}
	if (cocktails.length > 0) {allFlashCards.push(cocktails);}
	if (nonAlcoholicDrinks.length > 0) {allFlashCards.push(nonAlcoholicDrinks);}
	if (afterDinnerDrinks.length > 0) {allFlashCards.push(afterDinnerDrinks);}
	if (otherDrinks.length > 0) {allFlashCards.push(otherDrinks);}
	shuffle(allFlashCards);
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	shuffle(flashcardONEARRAY);
	shuffle(flashcardONEARRAY);
	showFlashCardFront();
}

function selectedCategories() {
	allFlashCards = [];
	flashcardONEARRAY = [];
	gotItArray = [];
	studyFurtherArray = [];
	var entreesBool = document.getElementById('entreesCheckbox').checked;
	var appetizersBool = document.getElementById('appetizersCheckbox').checked;
	var dessertsBool = document.getElementById('dessertsCheckbox').checked;
	var sidesBool = document.getElementById('sidesCheckbox').checked;
	var addOnsBool = document.getElementById('addOnsCheckbox').checked;
	var soupOrSaladBool = document.getElementById('soupOrSaladCheckbox').checked;
	var kidsMenuItemsBool = document.getElementById('kidsMenuItemsCheckbox').checked;
	var otherFoodsBool = document.getElementById('otherFoodsCheckbox').checked;
	var winesBool = document.getElementById('winesCheckbox').checked;
	var beersBool = document.getElementById('beersCheckbox').checked;
	var cocktailsBool = document.getElementById('cocktailsCheckbox').checked;
	var nonAlcoholicBool = document.getElementById('nonAlcoholicCheckbox').checked;
	var afterDinnerDrinksBool = document.getElementById('afterDinnerDrinksCheckbox').checked;
	var otherDrinksBool = document.getElementById('otherDrinksCheckbox').checked;
	$("#area1").html("<div></div>");
	$("#area2").html("<div></div>");
	$("#dropdown").html("");
	if (entreesBool) {allFlashCards.push(entrees);};
	if (appetizersBool) {allFlashCards.push(appetizers);}
	if (dessertsBool) {allFlashCards.push(desserts);}
	if (sidesBool) {allFlashCards.push(sides);}
	if (addOnsBool) {allFlashCards.push(addOns);}
	if (soupOrSaladBool) {allFlashCards.push(soupsAndSalads);}
	if (kidsMenuItemsBool) {allFlashCards.push(kidsMenuItems);}
	if (otherFoodsBool) {allFlashCards.push(otherFoods);}
	if (winesBool) {allFlashCards.push(wines);}
	if (beersBool) {allFlashCards.push(beers);}
	if (cocktailsBool) {allFlashCards.push(cocktails);}
	if (nonAlcoholicBool) {allFlashCards.push(nonAlcoholicDrinks);}
	if (afterDinnerDrinksBool) {allFlashCards.push(afterDinnerDrinks);}
	if (otherDrinksBool) {allFlashCards.push(otherDrinks);}
	shuffle(allFlashCards);
	for (var i = 0; i<allFlashCards.length; i++) {
		for (var j = 0; j<allFlashCards[i].length; j++) {
			flashcardONEARRAY.push(allFlashCards[i][j]);
		}
	}
	shuffle(flashcardONEARRAY);
	shuffle(flashcardONEARRAY);
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

function loadMenus(job) {
	if (job === 9999) {
		var jobIdObj = {
			jobId: 9999
		}
	}
	else {
		var parentJobID = job.value;
		var jobIdObj = {
			jobId:parentJobID
		}
	}
	
	$.post("/getMenus", jobIdObj).then(function(data3) {
		if (data3.length === 0) {
			var jQueryString = '<div class="input-field col s12"><h5>To use the flash cards, you must create a job and a menu.<a href="/menuBuilder"><h5>Click here to create a menu.</h5></a></div>'
			$("#dropdown").html(jQueryString);
		}
		else if (data3.length > 0) {

			var jQueryString = '<div class="input-field col s12"><select class="menuSelector" onchange="startFlashCards(this.value);"><option value="" disabled>Click here to choose a menu</option>';


			for (var i = 0; i<data3.length; i++) {
				jQueryString += '<option value="'+ data3[i].id +'" selected>'+ data3[i].menuName +'</option>'
			}

		    jQueryString += '</select><label>Menu Selector</label></div>';

		    $("#dropdown").html(jQueryString);
		    $('select').material_select();
		}		
	});
}

function startFlashCards(menu) {
	var idObj = {
		menuId: menu
	}

	$.post("/checkMenuJSON", idObj).then(function(data2) {
		var parsedMenuJson = JSON.parse(data2.menuJSON);
		var reParsedMenuJson = JSON.parse(parsedMenuJson);

		$("#dropdown").html("Menu analyzed!  Select options below");

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

		var entireMenuButtonString = '<div class="col-md-12"><button onclick="entireMenu()" type="button" class="btn btn-default" id="entireMenuButton">Entire menu</button></div><br>';
		$("#area2").append(entireMenuButtonString);

		if (boolFood) {
			var allFoodButtonString = '<div class="col-md-12"><button onclick="allFood()" type="button" class="btn btn-default" id="allFoodButton">All food</button></div><br>';
			$("#area2").append(allFoodButtonString);
		}

		if (boolDrink) {
			var allDrinksButtonString = '<div class="col-md-12"><button onclick="allDrinks()" type="button" class="btn btn-default" id="Button">All drinks</button></div><br>';
			$("#area2").append(allDrinksButtonString);
		}

		var checkboxesToInclude = []
		var categoryArray = [boolEntrees, boolAppetizers, boolDesserts, boolSides, boolAddOns, boolSoupsAndSalads, boolKidsMenuItems, boolOtherFoods, boolWines, boolBeers, boolCocktails, boolNonAlcoholicDrinks, boolAfterDinnerDrinks, boolOtherDrinks];
		for (var i=0; i<categoryArray.length; i++) {
			if (categoryArray[i]) {checkboxesToInclude.push(i)}
		}

		//checkboxesToInclude[] contains all indexes for categories that need checkboxes.  0=entree, 1=appetizer, etc.
		var checkboxJqueryString = '<div>';
		if (checkboxesToInclude.includes(0)) {
			checkboxJqueryString += '<p><input type="checkbox" id="entreesCheckbox" /><label for="entreesCheckbox">Entrees</label></p>'
		}
		if (checkboxesToInclude.includes(1)) {
			checkboxJqueryString += '<p><input type="checkbox" id="appetizersCheckbox" /><label for="appetizersCheckbox">Appetizers</label></p>'
		}
		if (checkboxesToInclude.includes(2)) {
			checkboxJqueryString += '<p><input type="checkbox" id="dessertsCheckbox" /><label for="dessertsCheckbox">Desserts</label></p>'
		}
		if (checkboxesToInclude.includes(3)) {
			checkboxJqueryString += '<p><input type="checkbox" id="sidesCheckbox" /><label for="sidesCheckbox">Sides</label></p>'
		}
		if (checkboxesToInclude.includes(4)) {
			checkboxJqueryString += '<p><input type="checkbox" id="soupOrSaladCheckbox" /><label for="soupOrSaladCheckbox">Soups and Salads</label></p>'
		}
		if (checkboxesToInclude.includes(5)) {
			checkboxJqueryString += '<p><input type="checkbox" id="addOnsCheckbox" /><label for="addOnsCheckbox">Entree Add-Ons</label></p>'
		}
		if (checkboxesToInclude.includes(6)) {
			checkboxJqueryString += '<p><input type="checkbox" id="kidsMenuItemsCheckbox" /><label for="kidsMenuItemsCheckbox">Kids Menu Items</label></p>'
		}
		if (checkboxesToInclude.includes(7)) {
			checkboxJqueryString += '<p><input type="checkbox" id="otherFoodsCheckbox" /><label for="otherFoodCheckbox">Other Food</label></p>'
		}
		if (checkboxesToInclude.includes(8)) {
			checkboxJqueryString += '<p><input type="checkbox" id="winesCheckbox" /><label for="winesCheckbox">Wines</label></p>'
		}
		if (checkboxesToInclude.includes(9)) {
			checkboxJqueryString += '<p><input type="checkbox" id="beersCheckbox" /><label for="beersCheckbox">Beers</label></p>'
		}
		if (checkboxesToInclude.includes(10)) {
			checkboxJqueryString += '<p><input type="checkbox" id="cocktailsCheckbox" /><label for="cocktailsCheckbox">Cocktails</label></p>'
		}
		if (checkboxesToInclude.includes(11)) {
			checkboxJqueryString += '<p><input type="checkbox" id="nonAlcoholicCheckbox" /><label for="nonAlcoholicCheckbox">Non-Alcoholic Drinks</label></p>'
		}
		if (checkboxesToInclude.includes(12)) {
			checkboxJqueryString += '<p><input type="checkbox" id="afterDinnerDrinksCheckbox" /><label for="afterDinnerDrinksCheckbox">After-Dinner Drinks</label></p>'
		}
		if (checkboxesToInclude.includes(13)) {
			checkboxJqueryString += '<p><input type="checkbox" id="otherDrinksCheckbox" /><label for="otherDrinksCheckbox">Other Drinks</label></p>'
		}
		checkboxJqueryString += '</div>';
		//The button calls selectedCategories and passes it an object with boolean values .entrees, .appetizers, etc
		var selectedCategoriesButtonString = '<div class="col-md-12"><button onclick="selectedCategories()" type="button" class="btn btn-default" id="Button">Selected categories</button></div>';
		$("#area2").append(selectedCategoriesButtonString);
		$("#area2").append(checkboxJqueryString);
	});
}