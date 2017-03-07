var globalIter = 0

//Initializes materializes silly javascript functions.
$(document).ready(function() {
    $('select').material_select();
    $('.collapsible').collapsible({
        accordion: false
    });
});

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
function addCategory(e) {
    if (e.value === 'entree') {
        addEntreeCategory()
    } else if (e.value === 'appetizer') {
        addAppetizerCategory()
    } else if (e.value === 'dessert') {
        addDessertCategory()
    } else if (e.value === 'sides') {
        addSidesCategory()
    } else if (e.value === 'appetizer') {
        addAppetizerCategory()
    } else if (e.value === 'addOn') {
        addAddOnsCategory()
    } else if (e.value === 'soupOrSalad') {
        addSoupSaladCategory()
    } else if (e.value === 'kidsMenu') {
        addKidsMenuCategory()
    } else if (e.value === 'otherFood') {
        addOtherFoodsCategory()
    } else if (e.value === 'wine') {
        addWineCategory()
    } else if (e.value === 'beer') {
        addBeerCategory()
    } else if (e.value === 'cocktails') {
        addCocktailsCategory()
    } else if (e.value === 'nonAlcoholic') {
        addNonAlcoholicCategory()
    } else if (e.value === 'afterDinnerDrink') {
        addAfterDinnerDrinkCategory()
    } else if (e.value === 'otherDrink') {
        addOtherDrinkCategory()
    }
    $(".categorySelector option[value='" + e.value + "']").remove();
    $('select').material_select();
}

//Category Creating functions.

function addEntreeCategory() {
    $('.menuFormHolder').append(entreeCategoryHTML)
     $('.collapsible').collapsible()
}

function addAppetizerCategory() {
    console.log('Make App')
}

function addDessertCategory() {
    console.log('Make Dessert')
}

function addSidesCategory() {
    console.log('Make Sides')
}

function addAddOnsCategory() {
    console.log('Make Addon')
}

function addSoupSaladCategory() {
    console.log('Make Soup')
}

function addKidsMenuCategory() {
    console.log('Make Kids')
}

function addOtherFoodsCategory() {
    console.log('Make OtherFoods')
}

function addWineCategory() {
    console.log('Make Wine')
}

function addBeerCategory() {
    console.log('Make Beer')
}

function addCocktailsCategory() {
    console.log('Make Cocktails')
}

function addNonAlcoholicCategory() {
    console.log('Make NonAlcho')
}

function addAfterDinnerDrinkCategory() {
    console.log('Make AfterDinner')
}

function addOtherDrinkCategory() {
    console.log('Make otherDrink')
}

var secretItem = [{
    name: 'secret',
    text: 'Secret Item?'
}]

var appEntIng = [{
    name: 'beef',
    text: 'Beef'
}, {
    name: 'chicken',
    text: 'Chicken'
}, {
    name: 'pork',
    text: 'Pork'
}, {
    name: 'seafood',
    text: 'Seafood'
}, {
    name: 'lamb',
    text: 'Lamb'
}, {
    name: 'otherProtein',
    text: 'Other Protein'
}]

var appEntDesc = [{
    name: 'cheesy',
    text: 'Cheesy'
}, {
    name: 'fresh',
    text: 'Fresh'
}, {
    name: 'fried',
    text: 'Fried'
}, {
    name: 'hearty',
    text: 'Hearty'
}, {
    name: 'indulgent',
    text: 'Indulgent'
}, {
    name: 'light',
    text: 'Light'
}, {
    name: 'plain',
    text: 'Plain'
}, {
    name: 'raw',
    text: 'Raw'
}, {
    name: 'salty',
    text: 'Salty'
}, {
    name: 'spicy',
    text: 'Spicy'
}, {
    name: 'sweet',
    text: 'Sweet'
}, {
    name: 'healthy',
    text: 'Healthy'
}, {
    name: 'aLaCarteOrBiteSize',
    text: 'A La Carte Or Bite Size'
}, {
    name: 'servedCold',
    text: 'Served Cold'
}, {
    name: 'toShare',
    text: 'To Share'
}, {
    name: 'popular',
    text: 'Popular'
}, {
    name: 'vegetarian',
    text: 'Vegetarian'
}]


var allergiesList = [{
    name: 'eggs',
    text: 'Eggs'
}, {
    name: 'fish',
    text: 'Fish'
}, {
    name: 'gluten',
    text: 'Gluten'
}, {
    name: 'milk',
    text: 'Milk'
}, {
    name: 'peanuts',
    text: 'Peanuts'
}, {
    name: 'shellfish',
    text: 'Shellfish'
}, {
    name: 'soy',
    text: 'Soy'
}, {
    name: 'treeNuts',
    text: 'Tree Nuts'
}, {
    name: 'wheat',
    text: 'Wheat'
}]

var CRImakerSource = [{
    name: 'a1',
    text: 'A1 Steak Sauce'
}, {
    name: 'balsVin',
    text: 'Balsamic Vinegar'
}, {
    name: 'bbqSauce',
    text: 'BBQ Sauce'
}, {
    name: 'blueCheese',
    text: 'Blue Cheese'
}, {
    name: 'bottledSparkling',
    text: 'Bottled Sparkling Water'
}, {
    name: 'bottledStill',
    text: 'Bottled Water'
}, {
    name: 'caesar',
    text: 'Caesar Dressing'
}, {
    name: 'cappuccino',
    text: 'Cappuccino'
}, {
    name: 'clubSoda',
    text: 'Club Soda'
}, {
    name: 'cocktailSauce',
    text: 'Cocktail Sauce'
}, {
    name: 'coffeeDecaf',
    text: 'Decaf Coffee'
}, {
    name: 'coffeeRegular',
    text: 'Regular Coffee'
}, {
    name: 'espressoDecaf',
    text: 'Decaf Espresso'
}, {
    name: 'espressoRegular',
    text: 'Regular Espresso'
}, {
    name: 'french',
    text: 'French Dressing'
}, {
    name: 'greek',
    text: 'Greek Dressing'
}, {
    name: 'heinz57',
    text: 'Heinz 57'
}, {
    name: 'honeyMustard',
    text: 'Honey Mustard'
}, {
    name: 'hotSauce',
    text: 'Hot Sauce'
}, {
    name: 'hotTea',
    text: 'Hot Tea'
}, {
    name: 'italian',
    text: 'Italian Dressing'
}, {
    name: 'ketchup',
    text: 'Ketchup'
}, {
    name: 'lemons',
    text: 'Lemons'
}, {
    name: 'limes',
    text: 'Limes'
}, {
    name: 'marinara',
    text: 'Marinara'
}, {
    name: 'mayonnaise',
    text: 'Mayonnaise'
}, {
    name: 'mustardSpicy',
    text: 'Spicy Mustard'
}, {
    name: 'mustardYellow',
    text: 'Yellow Mustard'
}, {
    name: 'oilAndVin',
    text: 'Oil & Vinegar'
}, {
    name: 'otherVin',
    text: 'Other Vinegar'
}, {
    name: 'ranch',
    text: 'Ranch Dressing'
}, {
    name: 'salsa',
    text: 'Salsa'
}, {
    name: 'soySauce',
    text: 'Soy Sauce'
}, {
    name: 'thousandIsland',
    text: 'Thousand Island Dressing'
}, {
    name: 'toGoBoxes',
    text: 'To-Go Boxes'
}, {
    name: 'toGoCups',
    text: 'To-Go Cups'
}, {
    name: 'toGoutensils',
    text: 'To-Go utensils'
}]



checkBoxMaker(CRImakerSource, '.CRI');

function checkBoxMaker(object, selector) {
    for (var i = 0; i < object.length; i++) {
        $(selector).append("<div class='col s6 m4 l4'><input type='checkbox' class='filled-in' id='filled-in-box" + globalIter + "' name ='" + object[i].name + "'/><label class='checkboxLabel' for='filled-in-box" + globalIter + "'>" + object[i].text + "</label></div>")
        globalIter++
    }
    $('.collapsible').collapsible();
}



var entreeCategoryHTML="";
entreeCategoryHTML += "<div class=\"row\">";
entreeCategoryHTML += "    <ul class=\"collapsible\" data-collapsible=\"expandable\">";
entreeCategoryHTML += "        <li>";
entreeCategoryHTML += "            <div class=\"collapsible-header menuCategoryHeader\">";
entreeCategoryHTML += "                <h4>Entrees<\/h4><\/div>";
entreeCategoryHTML += "            <div class=\"collapsible-body menuOverflow\">";
entreeCategoryHTML += "                <div class=\"EntreeHolder\">";
entreeCategoryHTML += "                <\/div>";
entreeCategoryHTML += "                <div class=\"row\">";
entreeCategoryHTML += "                    <div class=\" col s12\">";
entreeCategoryHTML += "                        <button class=\"btn waves-effect waves-light addEntreeBtn\">Add Entree Item<\/button>";
entreeCategoryHTML += "                    <\/div>";
entreeCategoryHTML += "                <\/div>";
entreeCategoryHTML += "            <\/div>";
entreeCategoryHTML += "        <\/li>";
entreeCategoryHTML += "    <\/ul>";
entreeCategoryHTML += "<\/div>";

var entreeItemHTML="";
entreeItemHTML += "<div class=\"input-field col s12\">";
entreeItemHTML += "    <input id=\"entreeName\" type=\"text\" required class=\"validate\" name=\"entreeName\">";
entreeItemHTML += "    <label for=\"entreeName\">Entree Name<\/label>";
entreeItemHTML += "<\/div>";
entreeItemHTML += "<div class=\"input-field col s12\">";
entreeItemHTML += "    <input name=\"entreePrice\" id=\"entreePrice\" type=\"number\" step=\"0.01\" min=\"0\" max=\"100000\" class=\"validate\">";
entreeItemHTML += "    <label for=\"entreePrice\">Price<\/label>";
entreeItemHTML += "<\/div>";
entreeItemHTML += "<div class=\"input-field col s12\">";
entreeItemHTML += "    <textarea name=\"entreeQuickDesc\" id=\"entreeQuickDesc\" class=\"materialize-textarea\"><\/textarea>";
entreeItemHTML += "    <label for=\"entreeQuickDesc\">Quick Description<\/label>";
entreeItemHTML += "<\/div>";
entreeItemHTML += "<div class=\"input-field col s12\">";
entreeItemHTML += "    <textarea name=\"entreeDetailedDesc\" id=\"entreeDetailedDesc\" class=\"materialize-textarea\"><\/textarea>";
entreeItemHTML += "    <label for=\"entreeDetailedDesc\">Detailed Description<\/label>";
entreeItemHTML += "<\/div>";
entreeItemHTML += "<div class=\"col s12\">";
entreeItemHTML += "    <h6 class ='secret'>Is this a secret item?<\/h6>";
entreeItemHTML += "<\/div>";
var entreeItemHTML2 = "<div class=\"col s12\">";
entreeItemHTML2 += "    <h5>Entree Descriptors<\/h5>";
entreeItemHTML2 += "<\/div>";
var entreeItemHTML3 = "<div class=\"col s12\">";
entreeItemHTML3 += "    <h5>Ingredients<\/h5>";
entreeItemHTML3 += "<\/div>";
var entreeItemHTML4 = "<div class=\"col s12\">";
entreeItemHTML4 += "    <h5>Allergy Violations<\/h5>";
entreeItemHTML4 += "<\/div>";






$('.menuFormHolder').on('click', '.addEntreeBtn', function(e) {
            e.preventDefault();
            $('.EntreeHolder').append(entreeItemHTML)
            checkBoxMaker(secretItem, '.EntreeHolder');
            $('.EntreeHolder').append(entreeItemHTML2)
            checkBoxMaker(appEntDesc, '.EntreeHolder');
            $('.EntreeHolder').append(entreeItemHTML3)
            checkBoxMaker(appEntIng, '.EntreeHolder');
            $('.EntreeHolder').append(entreeItemHTML4)
            checkBoxMaker(allergiesList, '.EntreeHolder');


    
    

    setTimeout(function() { slideOut() }, 5)
})

function slideOut() {
    $('.menuBuilderPanel').addClass('showDiv')
}
