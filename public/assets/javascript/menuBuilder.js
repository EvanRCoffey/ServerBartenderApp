var globalIter = 0
var ItemIter = 0
var checkboxIter = 0

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
        createCategorySection('Entrees', 'Entrees', 'Add Entry Item')
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
}] //Objects Hidden Here



checkBoxMaker(null, CRImakerSource, '.CRI');

$('.menuFormHolder').on('click', '.addItemBtnEntrees', function(e) {
    e.preventDefault();
        createItemHolder('.Entrees')
        createIntInput('price', 'Entree Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null)
        checkBoxMaker('Descriptors', appEntDesc, null)
        checkBoxMaker('Ingredients', appEntIng, null)
        checkBoxMaker('Allergy Violations', allergiesList, null)       
    

    ItemIter++
})

// createTextInput('entree', 'Entree', 'form')
// createIntInput('entreePrice', 'Entree Price', 'form')
// checkBoxMaker('Commonly Requested Items', CRImakerSource, 'form');
// createTextAreaInput('desc', 'fillthis', 'form')

function checkBoxMaker(title, object, selector) {
    if(!selector){
        selector = '.itemholder'+ ItemIter 
    }

    if(title){ 
        $(selector).append("<h5>"+title+"</h5>")
    }
        $(selector).append("<div class='row checkboxRow" + checkboxIter+ "'></div")
 for (var i = 0; i < object.length; i++) {
        $('.checkboxRow'+ checkboxIter).append("<div class='col s6 m4 l4'><input type='checkbox' class='filled-in' id='filled-in-box" + globalIter + "' name ='" + object[i].name + "'/><label class='checkboxLabel' for='filled-in-box" + globalIter + "'>" + object[i].text + "</label></div>")
        globalIter++
    }
    checkboxIter++
    $('.collapsible').collapsible();
}


function createCategorySection(categoryTitle, categoryClass, buttonText){
    var categoryHTML="";
categoryHTML += "<div class=\"row\">";
categoryHTML += "    <ul class=\"collapsible\" data-collapsible=\"expandable\">";
categoryHTML += "        <li>";
categoryHTML += "            <div class=\"collapsible-header menuCategoryHeader active\">";
categoryHTML += "                <h4>"+categoryTitle+"<\/h4><\/div>";
categoryHTML += "            <div class=\"collapsible-body menuOverflow\">";
categoryHTML += "                <form class="+categoryClass+">";
categoryHTML += "                <\/form>";
categoryHTML += "                <div class=\"row\">";
categoryHTML += "                    <div class=\" col s12\">";
categoryHTML += "                        <button class=\"btn waves-effect waves-light addItemBtn"+categoryClass+"\">Add Entree Item<\/button>";
categoryHTML += "                    <\/div>";
categoryHTML += "                <\/div>";
categoryHTML += "            <\/div>";
categoryHTML += "        <\/li>";
categoryHTML += "    <\/ul>";
categoryHTML += "<\/div>";
categoryHTML += "";

$('.menuFormHolder').append(categoryHTML)
$('.collapsible').collapsible()
}



function createTextInput(name, labelText){
var textInput="";
textInput += "<div class=\"input-field col s12\">";
textInput += "    <input id=\""+name+globalIter+"\"type=\"text\" required class=\"validate\" name="+name+">";
textInput += "    <label for=\""+name+globalIter+"\">"+labelText+"<\/labeltext>";
textInput += "<\/div>";
textInput += "";
    
    $('.itemholder'+ ItemIter).append(textInput)
    globalIter++
}



function createTextAreaInput(name, labelText){
var textInput="";
textInput += "<div class=\"input-field col s12\">";
textInput += "    <textarea id=\""+name+globalIter+"\" class=\"materialize-textarea \"name="+name+"></textarea>";
textInput += "    <label for=\""+name+globalIter+"\">"+labelText+"<\/labeltext>";
textInput += "<\/div>";
textInput += "";
    
    $('.itemholder'+ ItemIter).append(textInput)
    globalIter++
}



function createIntInput(name, labelText){
var textInput="";
textInput += "<div class=\"input-field col s12\">";
textInput += "    <input id=\""+name+globalIter+"\"type=\"number\" step=\"0.01\" min=\"0\" max=\"100000\" required class=\"validate\" name="+name+">";
textInput += "    <label for=\""+name+globalIter+"\">"+labelText+"<\/labeltext>";
textInput += "<\/div>";
textInput += "";
    console.log('itemholder'+ ItemIter)
    $('.itemholder'+ ItemIter).append(textInput)
    globalIter++
}



function createItemHolder(target){
    var categoryHTML="";
categoryHTML += "<div class=\"row itemObject\">";
categoryHTML += "    <ul class=\"collapsible\" data-collapsible=\"expandable\">";
categoryHTML += "        <li>";
categoryHTML += "            <div class=\"collapsible-header open"+ItemIter+"\">";
categoryHTML += "                <input class=\"itemTitle\" name=\"name\" value=\"Enter Item Name\"></input><\/div>";
categoryHTML += "            <div class=\"collapsible-body menuOverflow itemholder" +ItemIter +"\">";
categoryHTML += "            <\/div>";
categoryHTML += "        <\/li>";
categoryHTML += "    <\/ul>";
categoryHTML += "<\/div>";
categoryHTML += "";

$(target).append(categoryHTML)
$('.open' + ItemIter).addClass("active");
$('.collapsible').collapsible()
}



function slideOut() {
    $('.menuBuilderPanel').addClass('showDiv')
}



$('.itemTitle').on('click', function(e){
    $(e).val("")
    console.log('click')
})



$('.menuFormHolder').on('click', '.itemTitle', function(e) {
    
    e.stopPropagation();

    if($(this).val() === "Enter Item Name"){
     $(this).val("")     
    }
})


$('.serialButton').on('click', function(){
$('.itemObject').each(function(){

var inputs = $(this).find(".itemTitle").val();
console.log(inputs)

 


 });

})