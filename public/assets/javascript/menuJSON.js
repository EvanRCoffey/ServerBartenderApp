var idObj = {
	id: 1
}

$.post("/checkMenuJSON", idObj).then(function(data2) {
	var parsedCriJson = JSON.parse(data2.criJSON);
	var parsedMenuJson = JSON.parse(data2.menuJSON);
	var reParsedCriJson = JSON.parse(parsedCriJson);
	var reParsedMenuJson = JSON.parse(parsedMenuJson);
	console.log(reParsedMenuJson);
	console.log(reParsedCriJson);

	////////////////
	//MENU SELECTION
	////////////////

	var appsWithPrice = 0;
	var entsWithPrice = 0;
	var numApps = 0;
	var numEnts = 0;
	var numSides = 0;
	var numDesserts = 0;
	var uniqueAppDescr = [];
	var uniqueAppIngr = [];
	var uniqueEntDescr = [];
	var uniqueEntIngr = [];
	var uniqueDesDescr = [];
	var uniqueDesIngr = [];
	var uniqueAllVio = [];
	var vegApps = 0;
	var vegEnts = 0;
	var commonSauces = [];
	var commonDressings = [];
	var secretItems = 0;
	var addOns = 0;
	var popApps = 0;
	var popEnts = 0;
	var popDesserts = 0;

	var allQ1App = [];
	var allQ1Ent = [];
	var allApp = [];
	var allEnt = [];
	var allDes = []
	var allQ10Sauce = [];
	var allQ10Dressing = [];

	//Once user selects menu, increment all of the above variables appropriately...

	//For each app, if it has a price, increment appsWithPrice and push that app to allQ1App
	for (var i = 0; i<reParsedMenuJson[1].length; i++) {
		if (parseFloat(reParsedMenuJson[1][i].price) > 0) {
			appsWithPrice++;
			allQ1App.push(reParsedMenuJson[1][i]);
		}
	}

	//For each ent, if it has a price, increment entsWithPrice and push that ent to allEnt
	for (var i = 0; i<reParsedMenuJson[0].length; i++) {
		if (parseFloat(reParsedMenuJson[0][i].price) > 0) {
			entsWithPrice++;
			allQ1Ent.push(reParsedMenuJson[0][i]);
		}
	}

	//For each app, increment numApps
	for (var i = 0; i<reParsedMenuJson[1].length; i++) {
		numApps++;
		allApp.push(reParsedMenuJson[1][i]);
	}

	//For each ent, increment numEnts
	for (var i = 0; i<reParsedMenuJson[0].length; i++) {
		numEnts++;
		allEnt.push(reParsedMenuJson[0][i]);
	}


	//For each side, increment numSides
	for (var i = 0; i<reParsedMenuJson[3].length; i++) {
		numSides++;
	}


	//For each dessert, increment numDesserts
	for (var i = 0; i<reParsedMenuJson[2].length; i++) {
		numDesserts++;
		allDes.push(reParsedMenuJson[2][i]);
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
			if ((reParsedMenuJson[1][i].descriptors.vegetarian) && (!uniqueAppDescr.includes("vegetarian"))) {uniqueAppDescr.push("vegetarian")};
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
			if ((reParsedMenuJson[0][i].descriptors.vegetarian) && (!uniqueEntDescr.includes("vegetarian"))) {uniqueEntDescr.push("vegetarian")};
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

	//For each app, if the "vegetarian" descriptor is marked true, increment vegApps
	for (var i = 0; i<reParsedMenuJson[1].length; i++) {
		if (reParsedMenuJson[1][i].descriptors.vegetarian) {
			vegApps++;
		}
	}

	//For each entree, if the "vegetarian" descriptor is marked true, increment vegEnts
	for (var i = 0; i<reParsedMenuJson[0].length; i++) {
		if (reParsedMenuJson[0][i].descriptors.vegetarian) {
			vegEnts++;
		}
	}

	//For each addOn, increment addOns
	for (var i = 0; i<reParsedMenuJson[4].length; i++) {
		addOns++;
	}

	//For each app, if "popular" is marked true, increment popApps
	for (var i = 0; i<reParsedMenuJson[1].length; i++) {
		if (reParsedMenuJson[1][i].descriptors.popular) {
			popApps++;
		}
	}

	//For each entree, if "popular" is marked true, increment popEnts
	for (var i = 0; i<reParsedMenuJson[0].length; i++) {
		if (reParsedMenuJson[0][i].descriptors.popular) {
			popEnts++;
		}
	}

	//For each dessert, if "popular" is marked true, increment popDesserts
	for (var i = 0; i<reParsedMenuJson[2].length; i++) {
		if (reParsedMenuJson[2][i].descriptors.popular) {
			popDesserts++;
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
	// //For every item, if secret is true, increment secretItems
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
	// 		//For every item, if secret is true, increment secretItems
	// 		if (reParsedMenuJson[i][j].secret) {secretItems++}
	// 	}
	// }

	//Hardcoding the next two values to proceed with testing.  No idea why the above code isn't working, even after console.logging to investigate
	uniqueAllVio.push("eggs");
	uniqueAllVio.push("fish");
	uniqueAllVio.push("gluten");
	uniqueAllVio.push("milk");
	uniqueAllVio.push("peanuts");
	uniqueAllVio.push("shellfish");
	uniqueAllVio.push("soy");
	uniqueAllVio.push("treeNuts");
	uniqueAllVio.push("wheat");
	secretItems = 0;

	console.log(appsWithPrice);
	console.log(entsWithPrice);
	// console.log(numApps);
	// console.log(numEnts);
	// console.log(numSides);
	// console.log(numDesserts);
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
	if (uniqueAppDescr.length > 0 && numApps > 3) {
		for (var i = 0; i<uniqueAppDescr.length; i++) {
			numQ3App++;
		}
	}
	if (uniqueAppIngr.length > 0 && numApps > 3) {
		for (var i = 0; i<uniqueAppIngr.length; i++) {
			numQ4App++;
		}
	}
	if (uniqueEntDescr.length > 0 && numEnts > 3) {
		for (var i = 0; i<uniqueEntDescr.length; i++) {
			numQ3Ent++;
		}
	}
	if (uniqueEntIngr.length > 0 && numEnts > 3) {
		for (var i = 0; i<uniqueEntIngr.length; i++) {
			numQ4Ent++;
		}
	}
	if (uniqueDesDescr.length > 0 && numDesserts > 3) {
		for (var i = 0; i<uniqueDesDescr.length; i++) {
			numQ3Des++;
		}
	}
	if (uniqueDesIngr.length > 0 && numDesserts > 3) {
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
	if (popApps>0 && numApps>3) {numQ6++}
	if (popEnts>0 && numEnts>3) {numQ6++}
	if (popDesserts>0 && numDesserts>3) {numQ6++}

	//If there is at least one vegetarian app/ent, add one to Q7App/Ent
	if (vegApps>0 && numApps>3){numQ7App++}
	if (vegEnts>0 && numEnts>3){numQ7Ent++}

	//If there is at least one secret item, add one to Q8
	if (secretItems>0) {numQ8++}

	//If there is at least one add-on, add one to Q9
	if (addOns>0) {numQ9++}

	//If there is at least one common sauce/dressing, add one to Q10Sauce/Dressing
	if (commonSauces.length>0) {numQ10Sauce++}
	if (commonDressings.length>0) {numQ10Dressing++}

	// console.log(numQ1App);
	// console.log(numQ1Ent);
	// console.log(numQ2App);
	// console.log(numQ2Ent);
	// console.log(numQ3App);
	// console.log(numQ3Ent);
	// console.log(numQ3Des);
	// console.log(numQ4App);
	// console.log(numQ4Ent);
	// console.log(numQ4Des);
	// console.log(numQ5);
	// console.log(numQ6);
	// console.log(numQ7App);
	// console.log(numQ7Ent);
	// console.log(numQ8);
	// console.log(numQ9);
	// console.log(numQ10Sauce);
	// console.log(numQ10Dressing);

	////////////////////////
	//QUIZ QUESTION CREATION
	////////////////////////

	//QuizQuestion Constructor
	function QuizQuestion(question, fourAnswersArray, correctAnswersIndexesArray, qnum) {
	  this.question = question;
	  this.fourAnswersArray = fourAnswersArray;
	  this.correctAnswersIndexesArray = correctAnswersIndexesArray;
	  this.qnum = qnum;
	}

	//Sample QuizQuestion object is created and sent to the console
	var sampleQuestion = "What is 2 + 2?";
	var sampleFourAnswersArray = [22, 4, 2.2, 9000];
	var sampleCorrectAnswersIndexesArray = [1];
	var sampleQNum = 1;
	var sampleQ = new QuizQuestion(sampleQuestion, sampleFourAnswersArray, sampleCorrectAnswersIndexesArray, sampleQNum);
	// console.log(sampleQ);

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
	var sampleQNum = 1;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	var sampleQ = "What's your cheapest appetizer?";
	var sampleFourAnswers = [];
	sampleFourAnswers.push(bottomItemName);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
	var sampleCorrectAnswers = [];
	sampleCorrectAnswers.push(bottomItemName);
	var sampleQNum = 2;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	thisQArray.push(x);
	//Randomize the order of the four quiz questions

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
	var sampleQNum = 3;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	var sampleQ = "What's your cheapest entree?";
	var sampleFourAnswers = [];
	sampleFourAnswers.push(bottomItemName);
	for (var i = 0; i<3; i++) {sampleFourAnswers.push(returnIncorrectName(incorrectAnswers, sampleFourAnswers));}
	var sampleCorrectAnswers = [];
	sampleCorrectAnswers.push(bottomItemName);
	var sampleQNum = 4;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	thisQArray.push(x);
	//Randomize the order of the four quiz questions
	
	console.log(thisQArray);

	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q2App
	//////////////////////

	var thisQArray = [];
	var incorrectAnswers = [];
	var sampleCorrectAnswers = [];
	var sampleFourAnswers = [];

	//Sort allApp by price
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
	var sampleQNum = 5;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
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
	var sampleQNum = 6;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
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

	var sampleQNum = 7;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	console.log(thisQArray);

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

	var sampleQNum = 8;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	console.log(thisQArray);

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

	var sampleQNum = 9;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	console.log(thisQArray);

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

	var sampleQNum = 10;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	console.log(thisQArray);

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

	var sampleQNum = 11;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	console.log(thisQArray);

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

	var sampleQNum = 12;
	var x = new QuizQuestion(sampleQ, sampleFourAnswers, sampleCorrectAnswers, sampleQNum);
	//Randomize the order of the four quiz questions
	thisQArray.push(x);

	console.log(thisQArray);

	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q5
	//////////////////////


	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q6
	//////////////////////


	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q7App
	//////////////////////



	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q7Ent
	//////////////////////



	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q8
	//////////////////////

	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q9
	//////////////////////


	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q10Sauces
	//////////////////////



	//////////////////////
	//QUESTIONS BEING MADE
	//Make all Q10Dressings
	//////////////////////



})






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







//THE CODE BELOW HERE WILL CREATE A MENU OBJECT FITTING THE PARAMETERS FOUND THROUGHOUT

// var bigJSON = [];

// //Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
// var itemsArray = [];
// var numberOfEntries = 15;
// var highestPrice = 25;
// var lowestPrice = 14;
// var secret = false;
// for (var i = 0; i<numberOfEntries; i++) {
// 	var name = "Entree " + (i + 1);
// 	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
// 	var quickDescr = "A delicious entree made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius entree made with lots and lots of food - #" + (i + 1);

// 	var appEntIng = {
// 		beef: Math.random()<.5,
// 		chicken: Math.random()<.5,
// 		pork: Math.random()<.5,
// 		seafood: Math.random()<.5,
// 		lamb: Math.random()<.5,
// 		otherProtein: Math.random()<.5
// 	}

// 	var appEntDescr = {
// 		cheesy: Math.random()<.5,
// 		fresh: Math.random()<.5,
// 		fried: Math.random()<.5,
// 		hearty: Math.random()<.5,
// 		indulgent: Math.random()<.5,
// 		light: Math.random()<.5,
// 		plain: Math.random()<.5,
// 		raw: Math.random()<.5,
// 		salty: Math.random()<.5,
// 		spicy: Math.random()<.5,
// 		sweet: Math.random()<.5,
// 		healthy: Math.random()<.5,
// 		aLaCarteOrBiteSize: Math.random()<.5,
// 		servedCold: Math.random()<.5,
// 		toShare: Math.random()<.5,
// 		popular: Math.random()<.5,
// 		vegetarian: Math.random()<.5
// 	}

// 	var allergens = {
// 		milk: Math.random()<.5,
// 		eggs: Math.random()<.5,
// 		fish: Math.random()<.5,
// 		shellfish: Math.random()<.5,
// 		treeNuts: Math.random()<.5,
// 		peanuts: Math.random()<.5,
// 		wheat: Math.random()<.5,
// 		soy: Math.random()<.5,
// 		gluten: Math.random()<.5
// 	}

// 	var menuJSON = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		ingredients: appEntIng,		
// 		descriptors: appEntDescr,	
// 		secret: secret,	
// 		allergyViolations: allergens
// 	}
// 	itemsArray.push(menuJSON)
// }
// bigJSON.push(itemsArray);

// //Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
// var itemsArray = [];
// var numberOfEntries = 10;
// var highestPrice = 14;
// var lowestPrice = 7;
// var secret = false;
// for (var i = 0; i<numberOfEntries; i++) {
// 	var name = "Appetizer " + (i + 1);
// 	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
// 	var quickDescr = "A delicious appetizer made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius appetizer made with lots and lots of food - #" + (i + 1);

// 	var appEntIng = {
// 		beef: Math.random()<.5,
// 		chicken: Math.random()<.5,
// 		pork: Math.random()<.5,
// 		seafood: Math.random()<.5,
// 		lamb: Math.random()<.5,
// 		otherProtein: Math.random()<.5
// 	}

// 	var appEntDescr = {
// 		cheesy: Math.random()<.5,
// 		fresh: Math.random()<.5,
// 		fried: Math.random()<.5,
// 		hearty: Math.random()<.5,
// 		indulgent: Math.random()<.5,
// 		light: Math.random()<.5,
// 		plain: Math.random()<.5,
// 		raw: Math.random()<.5,
// 		salty: Math.random()<.5,
// 		spicy: Math.random()<.5,
// 		sweet: Math.random()<.5,
// 		healthy: Math.random()<.5,
// 		aLaCarteOrBiteSize: Math.random()<.5,
// 		servedCold: Math.random()<.5,
// 		toShare: Math.random()<.5,
// 		popular: Math.random()<.5,
// 		vegetarian: Math.random()<.5
// 	}

// 	var allergens = {
// 		milk: Math.random()<.5,
// 		eggs: Math.random()<.5,
// 		fish: Math.random()<.5,
// 		shellfish: Math.random()<.5,
// 		treeNuts: Math.random()<.5,
// 		peanuts: Math.random()<.5,
// 		wheat: Math.random()<.5,
// 		soy: Math.random()<.5,
// 		gluten: Math.random()<.5
// 	}

// 	var menuJSON = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		ingredients: appEntIng,		
// 		descriptors: appEntDescr,
// 		secret: secret,			
// 		allergyViolations: allergens
// 	}
// 	itemsArray.push(menuJSON)
// }

// bigJSON.push(itemsArray);

// //Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
// var itemsArray = [];
// var numberOfEntries = 7;
// var highestPrice = 10.75;
// var lowestPrice = 6.25;
// var secret = false;
// for (var i = 0; i<numberOfEntries; i++) {
// 	var name = "Dessert " + (i + 1);
// 	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
// 	var quickDescr = "A delicious dessert made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius dessert made with lots and lots of food - #" + (i + 1);

// 	//Desserts Ingredients
// 	var dessertsIng = {
// 		cake: Math.random()<.5,
// 		pie: Math.random()<.5,
// 		iceCream: Math.random()<.5
// 	}

// 	//Desserts Descriptors
// 	var dessertsDescr = {
// 		chocolatey: Math.random()<.5,
// 		fruity: Math.random()<.5,
// 		light: Math.random()<.5,
// 		rich: Math.random()<.5,
// 		tart: Math.random()<.5,
// 		toShare: Math.random()<.5,
// 		popular: Math.random()<.5,
// 		healthy: Math.random()<.5
// 	}

// 	//Allergens
// 	var allergens = {
// 		milk: Math.random()<.5,
// 		eggs: Math.random()<.5,
// 		fish: Math.random()<.5,
// 		shellfish: Math.random()<.5,
// 		treeNuts: Math.random()<.5,
// 		peanuts: Math.random()<.5,
// 		wheat: Math.random()<.5,
// 		soy: Math.random()<.5,
// 		gluten: Math.random()<.5
// 	}

// 	var menuJSON = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		ingredients: dessertsIng,		
// 		descriptors: dessertsDescr,	
// 		secret: secret,		
// 		allergyViolations: allergens
// 	}
// 	itemsArray.push(menuJSON)
// }

// bigJSON.push(itemsArray);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 8;
// var highestPrice2 = 6.25;
// var lowestPrice2 = 11.25;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Side " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious side made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius side made with lots and lots of food - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 4;
// var highestPrice2 = 6.99;
// var lowestPrice2 = 3.99;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "AddOn " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious add-on made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius add-on made with lots and lots of food - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 6;
// var highestPrice2 = 9.89;
// var lowestPrice2 = 7.98;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Soup or Salad " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious soup or salad made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius soup or salad made with lots and lots of food - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 4;
// var highestPrice2 = 7.50;
// var lowestPrice2 = 5.25;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Kids menu item " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious kids menu item made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius kids menu item made with lots and lots of food - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 4;
// var highestPrice2 = 10.50;
// var lowestPrice2 = 9.25;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "otherFood " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious otherFood made with food - #" + (i + 1);
// 	var detailedDescr = "A delicioius otherFood made with lots and lots of food - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 15;
// var highestPrice2 = 18.25;
// var lowestPrice2 = 7.50;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Wine " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious wine - #" + (i + 1);
// 	var detailedDescr = "A delicioius wine - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 10;
// var highestPrice2 = 8.75;
// var lowestPrice2 = 4.50;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Beer " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious beer - #" + (i + 1);
// 	var detailedDescr = "A delicioius beer - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 10;
// var highestPrice2 = 14.50;
// var lowestPrice2 = 7.25;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Cocktail " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious cocktail - #" + (i + 1);
// 	var detailedDescr = "A delicioius cocktail - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 3;
// var highestPrice2 = 8.25;
// var lowestPrice2 = 5.75;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "Non-alcoholic drink " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious non-alcoholic - #" + (i + 1);
// 	var detailedDescr = "A delicioius non-alcoholic - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 4;
// var highestPrice2 = 12.50;
// var lowestPrice2 = 8.25;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "After-dinner drink " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious after-dinner drink - #" + (i + 1);
// 	var detailedDescr = "A delicioius after-dinner drink - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// //Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
// var itemsArray2 = [];
// var numberOfEntries2 = 3;
// var highestPrice2 = 9.80;
// var lowestPrice2 = 7.24;
// var secret = false;
// for (var i = 0; i<numberOfEntries2; i++) {
// 	var name = "otherDrink " + (i + 1);
// 	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
// 	var quickDescr = "A delicious otherDrink - #" + (i + 1);
// 	var detailedDescr = "A delicioius otherDrink - #" + (i + 1);

// 	var menuJSON2 = {
// 		name: name,
// 		price: price,
// 		quickDescr: quickDescr,
// 		detailedDescr: detailedDescr,
// 		secret: secret
// 	}
// 	itemsArray2.push(menuJSON2)
// }

// bigJSON.push(itemsArray2);

// var criJSON = {
// 	ketchup: Math.random()<.5,
// 	mustardYellow: Math.random()<.5,
// 	mustardSpicy: Math.random()<.5,
// 	mayonnaise: Math.random()<.5,
// 	hotSauce: Math.random()<.5,
// 	a1: Math.random()<.5,
// 	heinz57: Math.random()<.5,
// 	soySauce: Math.random()<.5,
// 	bbqSauce: Math.random()<.5,
// 	salsa: Math.random()<.5,
// 	marinara: Math.random()<.5,
// 	cocktailSauce: Math.random()<.5,
// 	ranch: Math.random()<.5,
// 	honeyMustard: Math.random()<.5,
// 	balsVin: Math.random()<.5,
// 	otherVin: Math.random()<.5,
// 	oilAndVin: Math.random()<.5,
// 	caesar: Math.random()<.5,
// 	italian: Math.random()<.5,
// 	french: Math.random()<.5,
// 	blueCheese: Math.random()<.5,
// 	thousandIsland: Math.random()<.5,
// 	greek: Math.random()<.5,
// 	toGoBoxes: Math.random()<.5,
// 	toGoutensils: Math.random()<.5,
// 	toGoCups: Math.random()<.5,
// 	clubSoda: Math.random()<.5,
// 	coffeeRegular: Math.random()<.5,
// 	coffeeDecaf: Math.random()<.5,
// 	espressoRegular: Math.random()<.5,
// 	espressoDecaf: Math.random()<.5,
// 	cappuccino: Math.random()<.5,
// 	hotTea: Math.random()<.5,
// 	bottledSparkling: Math.random()<.5,
// 	bottledStill: Math.random()<.5,
// 	lemons: Math.random()<.5,
// 	limes: Math.random()<.5
// }

// var menuName = "Test Menu One";
// var comments = "No comments";
// var menuJSON = JSON.stringify(bigJSON);
// criJSON = JSON.stringify(criJSON);
// var UserId = 1; 	//Update this
// var JobId = 1;		//Update this

// var menuObj = {
// 	menuName: menuName,
// 	comments: comments,
// 	menuJSON: menuJSON,
// 	criJSON: criJSON,
// 	UserId: UserId,
// 	JobId: JobId
// }

// $.post("/newMenu", menuObj).then(function(data) {
// 	console.log(data);
// })