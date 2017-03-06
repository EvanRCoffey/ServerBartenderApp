
$('.testButton').on('click', function(){
    $('.CRIpanel').addClass('showDiv')
})

// var entreeIndex= 0;
// var appetizerIndex = 1;
// var dessertIndex = 2;
// var sideIndex = 3;
// var addOnIndex = 4;
// var soupOrSaladIndex = 5;
// var kidsMenuItemIndex = 6;
// var otherFoodIndex = 7;
// var wineIndex = 8;
// var beerIndex = 9;
// var cocktailIndex = 10;
// var nonAlcoholicIndex = 11;
// var afterDinnerDrinkIndex = 12;
// var otherDrinkIndex = 13;


//This function creates a new menu category based on the dropdown selection.
//It removes the dropdown option to prevent duplicating categories.
function addCategory(e){
    if(e.value === 'entree'){
        addEntreeCategory()
    } else if (e.value === 'appetizer'){
        addAppetizerCategory()
    } else if (e.value === 'dessert'){
        addDessertCategory()
    } else if (e.value === 'sides'){
        addSidesCategory()
    } else if (e.value === 'appetizer'){
        addAppetizerCategory()
    } else if (e.value === 'addOn'){
        addAddOnsCategory()
    } else if (e.value === 'soupOrSalad'){
        addSoupSaladCategory()
    } else if (e.value === 'kidsMenu'){
        addKidsMenuCategory()
    } else if (e.value === 'otherFood'){
        addOtherFoodsCategory()
    } else if (e.value === 'wine'){
        addWineCategory()
    } else if (e.value === 'beer'){
        addBeerCategory()
    } else if (e.value === 'cocktails'){
        addCocktailsCategory()
    } else if (e.value === 'nonAlcoholic'){
        addNonAlcoholicCategory()
    } else if (e.value === 'afterDinnerDrink'){
        addAfterDinnerDrinkCategory()
    } else if (e.value === 'otherDrink'){
        otherDrinkCategory()
    }  
    $(".categorySelector option[value='" + e.value + "']").remove();
    $('select').material_select();    
   }

//Category Creating functions.

function addEntreeCategory(){
    $('.menuFormHolder').append()
}

function addAppetizerCategory(){
    console.log('Make App')
}

function addDessertCategory(){
    console.log('Make Dessert')
}

 function addSidesCategory(){
    console.log('Make Sides')
 }

 function addAddOnsCategory(){
    console.log('Make Addon')
 }

 function addSoupSaladCategory(){
    console.log('Make Soup')
 }

 function addKidsMenuCategory(){
    console.log('Make Kids')
 }

 function addOtherFoodsCategory(){
    console.log('Make OtherFoods')
 }

 function addWineCategory(){
    console.log('Make Wine')
 }

 function addBeerCategory(){
    console.log('Make Beer')
 }

 function addCocktailsCategory(){
    console.log('Make Cocktails')
 }

 function addNonAlcoholicCategory(){
    console.log('Make NonAlcho')
 }

function addAfterDinnerDrinkCategory(){
    console.log('Make AfterDinner')
}

function otherDrinkCategory(){
    console.log('Make otherDrink')
}

$('.addEntreeBtn').on('click', function(e){
    e.preventDefault();
    $('.EntreeHolder').append('<div class="menuBuilderPanel testdiv">TestStuff</div>')
    setTimeout(function(){divSlideOut()}, 5)
})

function divSlideOut(){
    $('.menuBuilderPanel').addClass('showDiv')
}

var allergiesList = [
{
    name: 'eggs',
    text: 'Eggs'
},{
    name: 'fish',
    text: 'Fish'
},{
    name: 'gluten',
    text: 'Gluten'
},{
    name: 'milk',
    text: 'Milk'
},{
    name: 'peanuts',
    text: 'Peanuts'
},{
    name: 'shellfish',
    text: 'Shellfish'
},{
    name: 'soy',
    text: 'Soy'
},{
    name: 'treeNuts',
    text: 'Tree Nuts'
},{
    name: 'wheat',
    text: 'Wheat'
}
]

var CRImakerSource = [
{
  name: 'a1',
  text: 'A1 Steak Sauce'  
},{
  name: 'balsVin',
  text: 'Balsamic Vinegar'  
},{
  name: 'bbqSauce',
  text: 'BBQ Sauce'  
},{
  name: 'blueCheese',
  text: 'Blue Cheese'  
},{
  name: 'bottledSparkling',
  text: 'Bottled Sparkling Water'  
},{
  name: 'bottledStill',
  text: 'Bottled Water'  
},{
  name: 'caesar',
  text: 'Caesar Dressing'  
},{
  name: 'cappuccino',
  text: 'Cappuccino'  
},{
  name: 'clubSoda',
  text: 'Club Soda'  
},{
  name: 'cocktailSauce',
  text: 'Cocktail Sauce'  
},{
  name: 'coffeeDecaf',
  text: 'Decaf Coffee'  
},{
  name: 'coffeeRegular',
  text: 'Regular Coffee'  
},{
  name: 'espressoDecaf',
  text: 'Decaf Espresso'  
},{
  name: 'espressoRegular',
  text: 'Regular Espresso'  
},{
  name: 'french',
  text: 'French Dressing'  
},{
  name: 'greek',
  text: 'Greek Dressing'  
},{
  name: 'heinz57',
  text: 'Heinz 57'  
},{
  name: 'honeyMustard',
  text: 'Honey Mustard'  
},{
  name: 'hotSauce',
  text: 'Hot Sauce'  
},{
  name: 'hotTea',
  text: 'Hot Tea'  
},{
  name: 'italian',
  text: 'Italian Dressing'  
},{
  name: 'ketchup',
  text: 'Ketchup'  
},{
  name: 'lemons',
  text: 'Lemons'  
},{
  name: 'limes',
  text: 'Limes'  
},{
  name: 'marinara',
  text: 'Marinara'  
},{
  name: 'mayonnaise',
  text: 'Mayonnaise'  
},{
  name: 'mustardSpicy',
  text: 'Spicy Mustard'  
},{
  name: 'mustardYellow',
  text: 'Yellow Mustard'  
},{
  name: 'oilAndVin',
  text: 'Oil & Vinegar'  
},{
  name: 'otherVin',
  text: 'Other Vinegar'  
},{
  name: 'ranch',
  text: 'Ranch Dressing'  
},{
  name: 'salsa',
  text: 'Salsa'  
},{
  name: 'soySauce',
  text: 'Soy Sauce'  
},{
  name: 'thousandIsland',
  text: 'Thousand Island Dressing'  
},{
  name: 'toGoBoxes',
  text: 'To-Go Boxes'  
},{
  name: 'toGoCups',
  text: 'To-Go Cups'  
},{
  name: 'toGoutensils',
  text: 'To-Go utensils'  
}
]

CLIformMaker(CRImakerSource)

function CLIformMaker(object){
    for (var i = 0; i < object.length; i++) {
        $('.CRI').append("<div class='col s6 m4 l4'><input type='checkbox' class='filled-in' id='filled-in-box"+i+"' name ='"+object[i].name+"'/><label class='checkboxLabel' for='filled-in-box"+i+"'>"+object[i].text+"</label></div>")
    }
    $('.collapsible').collapsible({
      accordion : false
    });
}


    $('.collapsible').collapsible({
      accordion : false
    });

$(document).ready(function() {
    $('select').material_select();
});

    



