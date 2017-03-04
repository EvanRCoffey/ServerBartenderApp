//////////////////////////
//COMMONLY REQUESTED ITEMS
//////////////////////////

var criJSON = {
	kethcup: false,
	mustardYellow: false,
	mustardSpicy: false,
	mayonnaise: false,
	hotSauce: false,
	a1: false,
	heinz57: false,
	soySauce: false,
	bbqSauce: false,
	salsa: false,
	marinara: false,
	cocktailSauce: false,
	ranch: false,
	honeyMustard: false,
	balsVin: false,
	otherVin: false,
	oilAndVin: false,
	caesar: false,
	italian: false,
	french: false,
	blueCheese: false,
	tousandIsland: false,
	greek: false,
	toGoBoxes: false,
	toGoutensils: false,
	toGoCups: false,
	clubSoda: false,
	coffeeRegular: false,
	coffeeDecaf: false,
	espressoRegular: false,
	espressoDecaf: false,
	cappuccino: false,
	hotTea: false,
	bottledSparkling: false,
	bottledStill: false,
	lemons: false,
	limes: false
}

//Use this format to put something directly into the DB using SQLWorkbench (I think)
//var criJSON = {"kethcup": false,"mustardYellow": false, "mustardSpicy": false, "mayonnaise": false, "hotSauce": false, "a1": false, "heinz57": false, "soySauce": false, "bbqSauce": false, "salsa": false, "marinara": false, "cocktailSauce": false, "ranch": false, "honeyMustard": false, "balsVin": false, "otherVin": false, "oilAndVin": false, "caesar": false, "italian": false, "french": false, "blueCheese": false, "tousandIsland": false, "greek": false, "toGoBoxes": false, "toGoutensils": false, "toGoCups": false, "clubSoda": false, "coffeeRegular": false, "coffeeDecaf": false, "espressoRegular": false, "espressoDecaf": false, "cappuccino": false, "hotTea": false, "bottledSparkling": false, "bottledStill": false, "lemons": false, "limes": false}

////////////////////////////////////////////
//INREDIENTS/DESCRIPTORS/ALLERGENS TEMPLATES
////////////////////////////////////////////

//Appetizer/Entree Ingredients
var appEntIng = {
	beef: false,
	chicken: false,
	pork: false,
	seafood: false,
	lamb: false,
	otherProtein: false
}

//Appetizer/Entree Descriptors
var appEntDescr = {
	cheesy: false,
	fresh: false,
	fried: false,
	hearty: false,
	indulgent: false,
	light: false,
	plain: false,
	raw: false,
	salty: false,
	spicy: false,
	sweet: false,
	healthy: false,
	aLaCarteOrBiteSize: false,
	servedCold: false,
	toShare: false,
	popular: false,
	vegetarian: false
}

//Desserts Ingredients
var dessertsIng = {
	cake: false,
	pie: false,
	iceCream: false
}

//Desserts Descriptors
var dessertsDescr = {
	chocolatey: false,
	fruity: false,
	light: false,
	rich: false,
	tart: false,
	toShare: false,
	popular: false,
	healthy: false
}

//Allergens
var allergens = {
	milk: false,
	eggs: false,
	fish: false,
	shellfish: false,
	treeNuts: false,
	peanuts: false,
	wheat: false,
	soy: false,
	gluten: false
}


/////////////////////////////////
//14 CATEGORIES [8 FOOD, 6 DRINK]
/////////////////////////////////

// //Appetizer, Entree, Dessert
// var menuJSON1 = {
// 	//String
// 	name,
// 	//Float
// 	price,
// 	//String
// 	quickDescr,
// 	//String
// 	detailedDescr,
// 	//JSON - Use above templates
// 	ingredients,		
// 	//JSON - Use above templates
// 	descriptors,		
// 	//JSON - Use above templates
// 	allergyViolations
// }

// //All Other Categories
// var menuJSON2 = {
// 	//String
// 	name,
// 	//Float
// 	price,
// 	//String
// 	quickDescr,
// 	//String
// 	detailedDescr
// }

//FOR ENTREES, APPETIZERS, AND ENTREES:
//Create an array of numberOfEntries items with random booleans and evenly divided prices from lowestPrice to highestPrice
var itemsArray = [];
var numberOfEntries = 5;
var highestPrice = 20;
var lowestPrice = 16;
for (var i = 0; i<numberOfEntries; i++) {
	var name = "Item " + (i + 1);
	var price = (highestPrice - (((highestPrice - lowestPrice)/numberOfEntries) * i)).toFixed(2);
	var quickDescr = "A delicious entree made with food - #" + (i + 1);
	var detailedDescr = "A delicioius entree made with lots and lots of food - #" + (i + 1);
	var secret = false;

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
console.log(itemsArray);

//FOR ALL OTHER ITEMS:
//Create an array of numberOfEntries2 items with evenly divided prices from lowestPrice2 to highestPrice2
var itemsArray2 = [];
var numberOfEntries2 = 5;
var highestPrice2 = 10.50;
var lowestPrice2 = 9.25;
for (var i = 0; i<numberOfEntries2; i++) {
	var name = "Item " + (i + 1);
	var price = (highestPrice2 - (((highestPrice2 - lowestPrice2)/numberOfEntries2) * i)).toFixed(2);
	var quickDescr = "A delicious entree made with food - #" + (i + 1);
	var detailedDescr = "A delicioius entree made with lots and lots of food - #" + (i + 1);
	var secret = false;

	var menuJSON2 = {
		name: name,
		price: price,
		quickDescr: quickDescr,
		detailedDescr: detailedDescr,
		secret: secret
	}
	itemsArray2.push(menuJSON2)
}
console.log(itemsArray2);

// var name = "Entree 1";
// var price = 19.99;
// var quickDescr = "A delicious entree made with food";
// var detailedDescr = "A delicioius entree made with lots and lots of food";

// //Appetizer, Entree, Dessert
// var menuJSON1 = {
// 	//String
// 	name: name,
// 	//Float
// 	price: price,
// 	//String
// 	quickDescr: quickDescr,
// 	//String
// 	detailedDescr: detailedDescr,
// 	//JSON - Use above templates
// 	ingredients: appEntIng,		
// 	//JSON - Use above templates
// 	descriptors: appEntDescr,		
// 	//JSON - Use above templates
// 	allergyViolations: allergens
// }

// var entreesArray = [];
// for (var i = 0; i<5; i++) {
// 	//Appetizer, Entree, Dessert
// 	var menuJSON2 = {
// 		//String
// 		name: name,
// 		//Float
// 		price: price,
// 		//String
// 		quickDescr: quickDescr,
// 		//String
// 		detailedDescr: detailedDescr,
// 		//JSON - Use above templates
// 		ingredients: appEntIng,		
// 		//JSON - Use above templates
// 		descriptors: appEntDescr,		
// 		//JSON - Use above templates
// 		allergyViolations: allergens
// 	}
// 	entreesArray.push(menuJSON2)
// }

// console.log(entreesArray);