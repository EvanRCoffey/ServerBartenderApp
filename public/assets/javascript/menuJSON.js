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
	kethcup: Math.random()<.5,
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
	tousandIsland: Math.random()<.5,
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

var menuName = "Test Menu One";
var comments = "No comments";
var menuJSON = bigJSON;
//criJSON is already criJSON
var UserId = 1;
var JobId = 1;

var menuObj = {
	menuName: menuName,
	comments: comments,
	menuJSON: menuJSON,
	criJSON: criJSON,
	UserId: UserId,
	JobId: JobId
}

console.log(menuObj)

$.post("/newMenu", menuObj).then(function(data) {
	console.log(data)
})