__LOAD MENU PSEUDOCODE__



(***for now you can just build a separate page just for load menu***)
(***start with "have them select job then menu just like on quizMaker" below***)



have two buttons on page load: one "make new menu" and one "load menu"

if "make new menu" clicked...

	load menuBuilder as it is now

if "load menu" clicked...

	have them select job then menu just like on quizMaker

	get menu, parse as JSON

	var bigArray = []

	if menu.entree[].length > 0
		for each item in menu.entree[]
			make an HTML element for it, formatted just like menuBuilder
			add element to bigArray[]

	repeat for...
		...appetizer
		...dessert
		...sides
		...addon
		...souporsalad
		...kidsmenuitem
		...otherfood
		...afterdinnerdrink
		...wine
		...beer
		...cocktail
		...nonalcoholic
		...otherDrink

	for each element in bigArray[]
		add to HTML