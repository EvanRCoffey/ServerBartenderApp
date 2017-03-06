var bigJSON = [];

//Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
var itemsArray = [];
var numberOfEntries = 15;
var highestPrice = 25;
var lowestPrice = 14;
var secret = false;
for (var i = 0; i<numberOfEntries; i++) {
	var name = "Entree " + (i + 1);
	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
	var quickDescr = "A delicious entree made with food - #" + (i + 1);
	var detailedDescr = "A delicioius entree made with lots and lots of food - #" + (i + 1);

	var appEntIng = {
		beef: Math.random()<.5,
		chicken: Math.random()<.5,
		pork: Math.random()<.5,
		seafood: Math.random()<.5,
		lamb: Math.random()<.5,
		otherProtein: Math.random()<.5
	}

	var appEntDescr = {
		cheesy: Math.random()<.5,
		fresh: Math.random()<.5,
		fried: Math.random()<.5,
		hearty: Math.random()<.5,
		indulgent: Math.random()<.5,
		light: Math.random()<.5,
		plain: Math.random()<.5,
		raw: Math.random()<.5,
		salty: Math.random()<.5,
		spicy: Math.random()<.5,
		sweet: Math.random()<.5,
		healthy: Math.random()<.5,
		aLaCarteOrBiteSize: Math.random()<.5,
		servedCold: Math.random()<.5,
		toShare: Math.random()<.5,
		popular: Math.random()<.5,
		vegetarian: Math.random()<.5
	}

	var allergens = {
		milk: Math.random()<.5,
		eggs: Math.random()<.5,
		fish: Math.random()<.5,
		shellfish: Math.random()<.5,
		treeNuts: Math.random()<.5,
		peanuts: Math.random()<.5,
		wheat: Math.random()<.5,
		soy: Math.random()<.5,
		gluten: Math.random()<.5
	}

	var menuJSON = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		ingredients: appEntIng,		
		descriptors: appEntDescr,	
		secret: secret,	
		allergyViolations: allergens
	}
	itemsArray.push(menuJSON)
}
bigJSON.push(itemsArray);

//Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
var itemsArray = [];
var numberOfEntries = 10;
var highestPrice = 14;
var lowestPrice = 7;
var secret = false;
for (var i = 0; i<numberOfEntries; i++) {
	var name = "Appetizer " + (i + 1);
	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
	var quickDescr = "A delicious appetizer made with food - #" + (i + 1);
	var detailedDescr = "A delicioius appetizer made with lots and lots of food - #" + (i + 1);

	var appEntIng = {
		beef: Math.random()<.5,
		chicken: Math.random()<.5,
		pork: Math.random()<.5,
		seafood: Math.random()<.5,
		lamb: Math.random()<.5,
		otherProtein: Math.random()<.5
	}

	var appEntDescr = {
		cheesy: Math.random()<.5,
		fresh: Math.random()<.5,
		fried: Math.random()<.5,
		hearty: Math.random()<.5,
		indulgent: Math.random()<.5,
		light: Math.random()<.5,
		plain: Math.random()<.5,
		raw: Math.random()<.5,
		salty: Math.random()<.5,
		spicy: Math.random()<.5,
		sweet: Math.random()<.5,
		healthy: Math.random()<.5,
		aLaCarteOrBiteSize: Math.random()<.5,
		servedCold: Math.random()<.5,
		toShare: Math.random()<.5,
		popular: Math.random()<.5,
		vegetarian: Math.random()<.5
	}

	var allergens = {
		milk: Math.random()<.5,
		eggs: Math.random()<.5,
		fish: Math.random()<.5,
		shellfish: Math.random()<.5,
		treeNuts: Math.random()<.5,
		peanuts: Math.random()<.5,
		wheat: Math.random()<.5,
		soy: Math.random()<.5,
		gluten: Math.random()<.5
	}

	var menuJSON = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		ingredients: appEntIng,		
		descriptors: appEntDescr,
		secret: secret,			
		allergyViolations: allergens
	}
	itemsArray.push(menuJSON)
}

bigJSON.push(itemsArray);

//Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
var itemsArray = [];
var numberOfEntries = 7;
var highestPrice = 10.75;
var lowestPrice = 6.25;
var secret = false;
for (var i = 0; i<numberOfEntries; i++) {
	var name = "Dessert " + (i + 1);
	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
	var quickDescr = "A delicious dessert made with food - #" + (i + 1);
	var detailedDescr = "A delicioius dessert made with lots and lots of food - #" + (i + 1);

	//Desserts Ingredients
	var dessertsIng = {
		cake: Math.random()<.5,
		pie: Math.random()<.5,
		iceCream: Math.random()<.5
	}

	//Desserts Descriptors
	var dessertsDescr = {
		chocolatey: Math.random()<.5,
		fruity: Math.random()<.5,
		light: Math.random()<.5,
		rich: Math.random()<.5,
		tart: Math.random()<.5,
		toShare: Math.random()<.5,
		popular: Math.random()<.5,
		healthy: Math.random()<.5
	}

	//Allergens
	var allergens = {
		milk: Math.random()<.5,
		eggs: Math.random()<.5,
		fish: Math.random()<.5,
		shellfish: Math.random()<.5,
		treeNuts: Math.random()<.5,
		peanuts: Math.random()<.5,
		wheat: Math.random()<.5,
		soy: Math.random()<.5,
		gluten: Math.random()<.5
	}

	var menuJSON = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		ingredients: dessertsIng,		
		descriptors: dessertsDescr,	
		secret: secret,		
		allergyViolations: allergens
	}
	itemsArray.push(menuJSON)
}

bigJSON.push(itemsArray);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 8;
var highestPrice2 = 6.25;
var lowestPrice2 = 11.25;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Side " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious side made with food - #" + (i + 1);
	var detailedDescr = "A delicioius side made with lots and lots of food - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 4;
var highestPrice2 = 6.99;
var lowestPrice2 = 3.99;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "AddOn " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious add-on made with food - #" + (i + 1);
	var detailedDescr = "A delicioius add-on made with lots and lots of food - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 6;
var highestPrice2 = 9.89;
var lowestPrice2 = 7.98;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Soup or Salad " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious soup or salad made with food - #" + (i + 1);
	var detailedDescr = "A delicioius soup or salad made with lots and lots of food - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 4;
var highestPrice2 = 7.50;
var lowestPrice2 = 5.25;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Kids menu item " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious kids menu item made with food - #" + (i + 1);
	var detailedDescr = "A delicioius kids menu item made with lots and lots of food - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 4;
var highestPrice2 = 10.50;
var lowestPrice2 = 9.25;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "otherFood " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious otherFood made with food - #" + (i + 1);
	var detailedDescr = "A delicioius otherFood made with lots and lots of food - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 15;
var highestPrice2 = 18.25;
var lowestPrice2 = 7.50;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Wine " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious wine - #" + (i + 1);
	var detailedDescr = "A delicioius wine - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 10;
var highestPrice2 = 8.75;
var lowestPrice2 = 4.50;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Beer " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious beer - #" + (i + 1);
	var detailedDescr = "A delicioius beer - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 10;
var highestPrice2 = 14.50;
var lowestPrice2 = 7.25;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Cocktail " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious cocktail - #" + (i + 1);
	var detailedDescr = "A delicioius cocktail - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 3;
var highestPrice2 = 8.25;
var lowestPrice2 = 5.75;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Non-alcoholic drink " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious non-alcoholic - #" + (i + 1);
	var detailedDescr = "A delicioius non-alcoholic - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 4;
var highestPrice2 = 12.50;
var lowestPrice2 = 8.25;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "After-dinner drink " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious after-dinner drink - #" + (i + 1);
	var detailedDescr = "A delicioius after-dinner drink - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 3;
var highestPrice2 = 9.80;
var lowestPrice2 = 7.24;
var secret = false;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "otherDrink " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious otherDrink - #" + (i + 1);
	var detailedDescr = "A delicioius otherDrink - #" + (i + 1);

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}

bigJSON.push(itemsArray2);

var criJSON = {
	ketchup: Math.random()<.5,
	mustardYellow: Math.random()<.5,
	mustardSpicy: Math.random()<.5,
	mayonnaise: Math.random()<.5,
	hotSauce: Math.random()<.5,
	a1: Math.random()<.5,
	heinz57: Math.random()<.5,
	soySauce: Math.random()<.5,
	bbqSauce: Math.random()<.5,
	salsa: Math.random()<.5,
	marinara: Math.random()<.5,
	cocktailSauce: Math.random()<.5,
	ranch: Math.random()<.5,
	honeyMustard: Math.random()<.5,
	balsVin: Math.random()<.5,
	otherVin: Math.random()<.5,
	oilAndVin: Math.random()<.5,
	caesar: Math.random()<.5,
	italian: Math.random()<.5,
	french: Math.random()<.5,
	blueCheese: Math.random()<.5,
	thousandIsland: Math.random()<.5,
	greek: Math.random()<.5,
	toGoBoxes: Math.random()<.5,
	toGoutensils: Math.random()<.5,
	toGoCups: Math.random()<.5,
	clubSoda: Math.random()<.5,
	coffeeRegular: Math.random()<.5,
	coffeeDecaf: Math.random()<.5,
	espressoRegular: Math.random()<.5,
	espressoDecaf: Math.random()<.5,
	cappuccino: Math.random()<.5,
	hotTea: Math.random()<.5,
	bottledSparkling: Math.random()<.5,
	bottledStill: Math.random()<.5,
	lemons: Math.random()<.5,
	limes: Math.random()<.5
}
console.log(bigJSON)
var menuName = "Test Menu One";
var comments = "No comments";
var menuJSON = JSON.stringify(bigJSON);
criJSON = JSON.stringify(criJSON);
var UserId = 1; 	//Update this
var JobId = 1;		//Update this



var menuObj = {
	menuName: menuName,
	comments: comments,
	menuJSON: menuJSON,
	criJSON: criJSON,
	UserId: UserId,
	JobId: JobId
}

$.post("/newMenu", menuObj).then(function(data) {
	console.log(data);
})

var idObj = {
	id: 1
}

// $.post("/checkMenuJSON", idObj).then(function(data2) {
// 	console.log(data2)
// 	var parsedCriJson = JSON.parse(data2.criJSON);
// 	var parsedMenuJson = JSON.parse(data2.menuJSON);
// 	var reParsedCriJson = JSON.parse(parsedCriJson);
// 	var reParsedMenuJson = JSON.parse(parsedMenuJson);
// 	console.log(reParsedMenuJson);
// 	console.log(reParsedCriJson);
// })

// ////////////////
// //MENU SELECTION
// ////////////////

// var appsWithPrice = 0;
// var entsWithPrice = 0;
// var numApps = 0;
// var numEnts = 0;
// var numSides = 0;
// var numDesserts = 0;
// var uniqueAppDescr = [];
// var uniqueAppIngr = [];
// var uniqueEntDescr = [];
// var uniqueEntIngr = [];
// var uniqueDesDescr = [];
// var uniqueDesIngr = [];
// var uniqueAllVio = [];
// var vegApps = 0;
// var vegEnts = 0;
// var commonSauces = [];
// var commonDressings = [];
// var secretItems = 0;
// var addOns = 0;
// var popApps = 0;
// var popEnts = 0;
// var popDesserts = 0;

// //Once user selects menu, increment all of the above variables appropriately...

// //For each app, if it has a price, increment appsWithPrice
// for (var i = 0; i<reParsedMenuJson[1].length; i++) {
// 	if (parseFloat(reParsedMenuJson[1][i].price) > 0) {
// 		appsWithPrice++;
// 	}
// }

// //For each ent, if it has a price, increment entsWithPrice
// for (var i = 0; i<reParsedMenuJson[0].length; i++) {
// 	if (parseFloat(reParsedMenuJson[0][i].price) > 0) {
// 		entsWithPrice++;
// 	}
// }

// //For each app, increment numApps
// for (var i = 0; i<reParsedMenuJson[1].length; i++) {
// 	numApps++;
// }

// //For each ent, increment numEnts
// for (var i = 0; i<reParsedMenuJson[0].length; i++) {
// 	numEnts++;
// }


// //For each side, increment numSides
// for (var i = 0; i<reParsedMenuJson[3].length; i++) {
// 	numSides++;
// }


// //For each dessert, increment numDesserts
// for (var i = 0; i<reParsedMenuJson[2].length; i++) {
// 	numDesserts++;
// }


// //For each app, for each descriptor that's marked true, if it's not in uniqueAppDescr[], push it
// for (var i = 0; i<reParsedMenuJson[1].length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[1][i].descriptors.length; j++) {
// 		if ((reParsedMenuJson[0][i].descriptors.aLaCarteOrBiteSize) && (!uniqueEntDescr.includes("aLaCarteOrBiteSize"))) {uniqueEntDescr.push("aLaCarteOrBiteSize")};
// 		if ((reParsedMenuJson[0][i].descriptors.cheesy) && (!uniqueEntDescr.includes("cheesy"))) {uniqueEntDescr.push("cheesy")};
// 		if ((reParsedMenuJson[0][i].descriptors.fresh) && (!uniqueEntDescr.includes("fresh"))) {uniqueEntDescr.push("fresh")};
// 		if ((reParsedMenuJson[0][i].descriptors.fried) && (!uniqueEntDescr.includes("fried"))) {uniqueEntDescr.push("fried")};
// 		if ((reParsedMenuJson[0][i].descriptors.healthy) && (!uniqueEntDescr.includes("healthy"))) {uniqueEntDescr.push("healthy")};
// 		if ((reParsedMenuJson[0][i].descriptors.hearty) && (!uniqueEntDescr.includes("hearty"))) {uniqueEntDescr.push("hearty")};
// 		if ((reParsedMenuJson[0][i].descriptors.indulgent) && (!uniqueEntDescr.includes("indulgent"))) {uniqueEntDescr.push("indulgent")};
// 		if ((reParsedMenuJson[0][i].descriptors.light) && (!uniqueEntDescr.includes("light"))) {uniqueEntDescr.push("light")};
// 		if ((reParsedMenuJson[0][i].descriptors.plain) && (!uniqueEntDescr.includes("plain"))) {uniqueEntDescr.push("plain")};
// 		if ((reParsedMenuJson[0][i].descriptors.popular) && (!uniqueEntDescr.includes("popular"))) {uniqueEntDescr.push("popular")};
// 		if ((reParsedMenuJson[0][i].descriptors.raw) && (!uniqueEntDescr.includes("raw"))) {uniqueEntDescr.push("raw")};
// 		if ((reParsedMenuJson[0][i].descriptors.salty) && (!uniqueEntDescr.includes("salty"))) {uniqueEntDescr.push("salty")};
// 		if ((reParsedMenuJson[0][i].descriptors.servedCold) && (!uniqueEntDescr.includes("servedCold"))) {uniqueEntDescr.push("servedCold")};
// 		if ((reParsedMenuJson[0][i].descriptors.spicy) && (!uniqueEntDescr.includes("spicy"))) {uniqueEntDescr.push("spicy")};
// 		if ((reParsedMenuJson[0][i].descriptors.sweet) && (!uniqueEntDescr.includes("sweet"))) {uniqueEntDescr.push("sweet")};
// 		if ((reParsedMenuJson[0][i].descriptors.toShare) && (!uniqueEntDescr.includes("toShare"))) {uniqueEntDescr.push("toShare")};
// 		if ((reParsedMenuJson[0][i].descriptors.vegetarian) && (!uniqueEntDescr.includes("vegetarian"))) {uniqueEntDescr.push("vegetarian")};
// 	}
// }


// //For each app, for each ingredient that's marked true, if it's not in uniqueAppIngr[], push it
// for (var i = 0; i<reParsedMenuJson[1].length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[1][i].ingredients.length; j++) {
// 		if ((reParsedMenuJson[1][i].ingredients.beef) && (!uniqueAppIngr.includes("beef"))) {uniqueAppIngr.push("beef")};
// 		if ((reParsedMenuJson[1][i].ingredients.chicken) && (!uniqueAppIngr.includes("chicken"))) {uniqueAppIngr.push("chicken")};
// 		if ((reParsedMenuJson[1][i].ingredients.lamb) && (!uniqueAppIngr.includes("lamb"))) {uniqueAppIngr.push("lamb")};
// 		if ((reParsedMenuJson[1][i].ingredients.otherProtein) && (!uniqueAppIngr.includes("otherProtein"))) {uniqueAppIngr.push("otherProtein")};
// 		if ((reParsedMenuJson[1][i].ingredients.pork) && (!uniqueAppIngr.includes("pork"))) {uniqueAppIngr.push("pork")};
// 		if ((reParsedMenuJson[1][i].ingredients.seafood) && (!uniqueAppIngr.includes("seafood"))) {uniqueAppIngr.push("seafood")};
// 	}
// }

// //For each entree, for each descriptor that's marked true, if it's not in uniqueEntDescr[], push it
// for (var i = 0; i<reParsedMenuJson[0].length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[0][i].descriptors.length; j++) {
// 		if ((reParsedMenuJson[0][i].descriptors.aLaCarteOrBiteSize) && (!uniqueEntDescr.includes("aLaCarteOrBiteSize"))) {uniqueEntDescr.push("aLaCarteOrBiteSize")};
// 		if ((reParsedMenuJson[0][i].descriptors.cheesy) && (!uniqueEntDescr.includes("cheesy"))) {uniqueEntDescr.push("cheesy")};
// 		if ((reParsedMenuJson[0][i].descriptors.fresh) && (!uniqueEntDescr.includes("fresh"))) {uniqueEntDescr.push("fresh")};
// 		if ((reParsedMenuJson[0][i].descriptors.fried) && (!uniqueEntDescr.includes("fried"))) {uniqueEntDescr.push("fried")};
// 		if ((reParsedMenuJson[0][i].descriptors.healthy) && (!uniqueEntDescr.includes("healthy"))) {uniqueEntDescr.push("healthy")};
// 		if ((reParsedMenuJson[0][i].descriptors.hearty) && (!uniqueEntDescr.includes("hearty"))) {uniqueEntDescr.push("hearty")};
// 		if ((reParsedMenuJson[0][i].descriptors.indulgent) && (!uniqueEntDescr.includes("indulgent"))) {uniqueEntDescr.push("indulgent")};
// 		if ((reParsedMenuJson[0][i].descriptors.light) && (!uniqueEntDescr.includes("light"))) {uniqueEntDescr.push("light")};
// 		if ((reParsedMenuJson[0][i].descriptors.plain) && (!uniqueEntDescr.includes("plain"))) {uniqueEntDescr.push("plain")};
// 		if ((reParsedMenuJson[0][i].descriptors.popular) && (!uniqueEntDescr.includes("popular"))) {uniqueEntDescr.push("popular")};
// 		if ((reParsedMenuJson[0][i].descriptors.raw) && (!uniqueEntDescr.includes("raw"))) {uniqueEntDescr.push("raw")};
// 		if ((reParsedMenuJson[0][i].descriptors.salty) && (!uniqueEntDescr.includes("salty"))) {uniqueEntDescr.push("salty")};
// 		if ((reParsedMenuJson[0][i].descriptors.servedCold) && (!uniqueEntDescr.includes("servedCold"))) {uniqueEntDescr.push("servedCold")};
// 		if ((reParsedMenuJson[0][i].descriptors.spicy) && (!uniqueEntDescr.includes("spicy"))) {uniqueEntDescr.push("spicy")};
// 		if ((reParsedMenuJson[0][i].descriptors.sweet) && (!uniqueEntDescr.includes("sweet"))) {uniqueEntDescr.push("sweet")};
// 		if ((reParsedMenuJson[0][i].descriptors.toShare) && (!uniqueEntDescr.includes("toShare"))) {uniqueEntDescr.push("toShare")};
// 		if ((reParsedMenuJson[0][i].descriptors.vegetarian) && (!uniqueEntDescr.includes("vegetarian"))) {uniqueEntDescr.push("vegetarian")};
// 	}
// }

// //For each entree, for each ingredient that's marked true, if it's not in uniqueEntIngr[], push it
// for (var i = 0; i<reParsedMenuJson[0].length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[0][i].ingredients.length; j++) {
// 		if ((reParsedMenuJson[0][i].ingredients.beef) && (!uniqueEntIngr.includes("beef"))) {uniqueEntIngr.push("beef")};
// 		if ((reParsedMenuJson[0][i].ingredients.chicken) && (!uniqueEntIngr.includes("chicken"))) {uniqueEntIngr.push("chicken")};
// 		if ((reParsedMenuJson[0][i].ingredients.lamb) && (!uniqueEntIngr.includes("lamb"))) {uniqueEntIngr.push("lamb")};
// 		if ((reParsedMenuJson[0][i].ingredients.otherProtein) && (!uniqueEntIngr.includes("otherProtein"))) {uniqueEntIngr.push("otherProtein")};
// 		if ((reParsedMenuJson[0][i].ingredients.pork) && (!uniqueEntIngr.includes("pork"))) {uniqueEntIngr.push("pork")};
// 		if ((reParsedMenuJson[0][i].ingredients.seafood) && (!uniqueEntIngr.includes("seafood"))) {uniqueEntIngr.push("seafood")};
// 	}
// }

// //For each dessert, for each descriptor that's marked true, if it's not in uniqueDesDescr[], push it
// for (var i = 0; i<reParsedMenuJson[2].length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[2][i].descriptors.length; j++) {
// 		if ((reParsedMenuJson[2][i].descriptors.chocolatey) && (!uniqueDesDescr.includes("chocolatey"))) {uniqueDesDescr.push("chocolatey")};
// 		if ((reParsedMenuJson[2][i].descriptors.fruity) && (!uniqueDesDescr.includes("fruity"))) {uniqueDesDescr.push("fruity")};
// 		if ((reParsedMenuJson[2][i].descriptors.healthy) && (!uniqueDesDescr.includes("healthy"))) {uniqueDesDescr.push("healthy")};
// 		if ((reParsedMenuJson[2][i].descriptors.light) && (!uniqueDesDescr.includes("light"))) {uniqueDesDescr.push("light")};
// 		if ((reParsedMenuJson[2][i].descriptors.popular) && (!uniqueDesDescr.includes("healthy"))) {uniqueDesDescr.push("healthy")};
// 		if ((reParsedMenuJson[2][i].descriptors.rich) && (!uniqueDesDescr.includes("rich"))) {uniqueDesDescr.push("rich")};
// 		if ((reParsedMenuJson[2][i].descriptors.tart) && (!uniqueDesDescr.includes("tart"))) {uniqueDesDescr.push("tart")};
// 		if ((reParsedMenuJson[2][i].descriptors.toShare) && (!uniqueDesDescr.includes("toShare"))) {uniqueDesDescr.push("toShare")};
// 	}
// }

// //For each dessert, for each ingredient that's marked true, if it's not in uniqueDesIngr[], push it
// for (var i = 0; i<reParsedMenuJson[2].length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[2][i].ingredients.length; j++) {
// 		if ((reParsedMenuJson[2][i].ingredients.cake) && (!uniqueEntIngr.includes("cake"))) {uniqueEntIngr.push("cake")};
// 		if ((reParsedMenuJson[2][i].ingredients.pie) && (!uniqueEntIngr.includes("pie"))) {uniqueEntIngr.push("pie")};
// 		if ((reParsedMenuJson[2][i].ingredients.iceCream) && (!uniqueEntIngr.includes("iceCream"))) {uniqueEntIngr.push("iceCream")};
// 	}
// }

// //For each app, if the "vegetarian" descriptor is marked true, increment vegApps
// for (var i = 0; i<reParsedMenuJson[1].length; i++) {
// 	if (reParsedMenuJson[1][i].descriptors.vegetarian) {
// 		vegApps++;
// 	}
// }

// //For each entree, if the "vegetarian" descriptor is marked true, increment vegEnts
// for (var i = 0; i<reParsedMenuJson[0].length; i++) {
// 	if (reParsedMenuJson[0][i].descriptors.vegetarian) {
// 		vegEnts++;
// 	}
// }

// //For each addOn, increment addOns
// for (var i = 0; i<reParsedMenuJson[4].length; i++) {
// 	addOns++;
// }

// //For each app, if "popular" is marked true, increment popApps
// for (var i = 0; i<reParsedMenuJson[1].length; i++) {
// 	if (reParsedMenuJson[1][i].descriptors.popular) {
// 		popApps++;
// 	}
// }

// //For each entree, if "popular" is marked true, increment popEnts
// for (var i = 0; i<reParsedMenuJson[0].length; i++) {
// 	if (reParsedMenuJson[0][i].descriptors.popular) {
// 		popEnts++;
// 	}
// }

// //For each dessert, if "popular" is marked true, increment popDesserts
// for (var i = 0; i<reParsedMenuJson[2].length; i++) {
// 	if (reParsedMenuJson[2][i].descriptors.popular) {
// 		popDesserts++;
// 	}
// }

// //For each sauce that's marked true, if it's not in commonSauces[], push it
// for (var i = 0; i<reParsedCriJson.length; i++) {
// 	if ((reParsedCriJson.a1) && (!commonSauces.includes("a1"))) {commonSauces.push("a1")};
// 	if ((reParsedCriJson.bbqSauce) && (!commonSauces.includes("bbqSauce"))) {commonSauces.push("bbqSauce")};
// 	if ((reParsedCriJson.cocktailSauce) && (!commonSauces.includes("cocktailSauce"))) {commonSauces.push("cocktailSauce")};
// 	if ((reParsedCriJson.heinz57) && (!commonSauces.includes("heinz57"))) {commonSauces.push("heinz57")};
// 	if ((reParsedCriJson.hotSauce) && (!commonSauces.includes("hotSauce"))) {commonSauces.push("hotSauce")};
// 	if ((reParsedCriJson.ketchup) && (!commonSauces.includes("ketchup"))) {commonSauces.push("ketchup")};
// 	if ((reParsedCriJson.marinara) && (!commonSauces.includes("marinara"))) {commonSauces.push("marinara")};
// 	if ((reParsedCriJson.mayonnaise) && (!commonSauces.includes("mayonnaise"))) {commonSauces.push("mayonnaise")};
// 	if ((reParsedCriJson.mustardSpicy) && (!commonSauces.includes("mustardSpicy"))) {commonSauces.push("mustardSpicy")};
// 	if ((reParsedCriJson.mustardYellow) && (!commonSauces.includes("mustardYellow"))) {commonSauces.push("mustardYellow")};
// 	if ((reParsedCriJson.salsa) && (!commonSauces.includes("salsa"))) {commonSauces.push("salsa")};
// 	if ((reParsedCriJson.soySauce) && (!commonSauces.includes("soySauce"))) {commonSauces.push("soySauce")};
// }

// //For each dressing that's marked true, if it's not in commonDressings[], push it
// for (var i = 0; i<reParsedCriJson.length; i++) {
// 	if ((reParsedCriJson.balsVin) && (!commonDressings.includes("balsVin"))) {commonDressings.push("balsVin")};
// 	if ((reParsedCriJson.blueCheese) && (!commonDressings.includes("blueCheese"))) {commonDressings.push("blueCheese")};
// 	if ((reParsedCriJson.caesar) && (!commonDressings.includes("caesar"))) {commonDressings.push("caesar")};
// 	if ((reParsedCriJson.french) && (!commonDressings.includes("french"))) {commonDressings.push("french")};
// 	if ((reParsedCriJson.greek) && (!commonDressings.includes("greek"))) {commonDressings.push("greek")};
// 	if ((reParsedCriJson.honeyMustard) && (!commonDressings.includes("honeyMustard"))) {commonDressings.push("honeyMustard")};
// 	if ((reParsedCriJson.italian) && (!commonDressings.includes("italian"))) {commonDressings.push("italian")};
// 	if ((reParsedCriJson.oilAndVin) && (!commonDressings.includes("oilAndVin"))) {commonDressings.push("oilAndVin")};
// 	if ((reParsedCriJson.otherVin) && (!commonDressings.includes("otherVin"))) {commonDressings.push("otherVin")};
// 	if ((reParsedCriJson.ranch) && (!commonDressings.includes("ranch"))) {commonDressings.push("ranch")};
// 	if ((reParsedCriJson.thousandIsland) && (!commonDressings.includes("thousandIsland"))) {commonDressings.push("thousandIsland")};
// }

// //For every app/entree/dessert, for each allergen that's marked true, if it's not in uniqueAllVio[], push it
// for (var i = 0; i<3; i++) {
// 	for (var j = 0; j<reParsedMenuJson[i].length; j++) {
// 		if ((reParsedMenuJson[i][j].allergyViolations.eggs) && (!uniqueAllVio.includes("eggs"))) {uniqueAllVio.push("eggs")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.fish) && (!uniqueAllVio.includes("fish"))) {uniqueAllVio.push("fish")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.gluten) && (!uniqueAllVio.includes("gluten"))) {uniqueAllVio.push("gluten")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.milk) && (!uniqueAllVio.includes("milk"))) {uniqueAllVio.push("milk")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.peanuts) && (!uniqueAllVio.includes("peanuts"))) {uniqueAllVio.push("peanuts")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.shellfish) && (!uniqueAllVio.includes("shellfish"))) {uniqueAllVio.push("shellfish")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.soy) && (!uniqueAllVio.includes("soy"))) {uniqueAllVio.push("soy")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.treeNuts) && (!uniqueAllVio.includes("treeNuts"))) {uniqueAllVio.push("treeNuts")};
// 		if ((reParsedMenuJson[i][j].allergyViolations.wheat) && (!uniqueAllVio.includes("wheat"))) {uniqueAllVio.push("wheat")};
// 	}
// }	

// //For every item, if secret is true, increment secretItems
// for (var i = 0; i<reParsedMenuJson.length; i++) {
// 	for (var j = 0; j<reParsedMenuJson[i].length; j++) {
// 		if (reParsedMenuJson[i][j].secret) {secretItems++}
// 	}
// }

// console.log(appsWithPrice);
// console.log(entsWithPrice);
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