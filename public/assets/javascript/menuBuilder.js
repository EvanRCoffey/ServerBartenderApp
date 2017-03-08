var globalIter = 0
var ItemIter = 0
var checkboxIter = 0

var menuJSON 

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
        createCategorySection('Entrees', 'entree', 'Add Entree')
    } else if (e.value === 'appetizer') {
        createCategorySection('Appetizers', 'appetizer', 'Add Appetizer')
    } else if (e.value === 'dessert') {
        createCategorySection('Desserts', 'dessert', 'Add Dessert')
    } else if (e.value === 'sides') {
        createCategorySection('Sides', 'sides', 'Add Side')
    } else if (e.value === 'addOn') {
        createCategorySection('Add-On', 'addOn', 'Add Add-On')
    } else if (e.value === 'soupOrSalad') {
        createCategorySection('Soups & Salads', 'soupOrSaladaddOn', 'Add Soup or Salad')
    } else if (e.value === 'kidsMenu') {
        createCategorySection('Soups & Salads', 'kidsMenu', 'Add Kids Item')
    } else if (e.value === 'otherFood') {
        createCategorySection('Other Food', 'otherFood', 'Add Other Food')
    } else if (e.value === 'wine') {
        createCategorySection('Wine', 'wine', 'Add Wine')
    } else if (e.value === 'beer') {
        createCategorySection('Beer', 'beer', 'Add Beer')
    } else if (e.value === 'cocktails') {
        createCategorySection('Cocktails', 'cocktails', 'Add Cocktail')
    } else if (e.value === 'nonAlcoholic') {
        createCategorySection('Non-Alcoholic', 'nonAlcoholic', 'Add Non-Alcoholic')
    } else if (e.value === 'afterDinnerDrink') {
        createCategorySection('After Dinner Drinks', 'afterDinnerDrink', 'Add After Dinner Drink')
    } else if (e.value === 'otherDrink') {
        createCategorySection('Other Drinks', 'otherDrink', 'Add Other Drink')
    }
    $(".categorySelector option[value='" + e.value + "']").remove();
    $('select').material_select();
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

var dessertsIng = [
{
    name: 'cake',
    text: 'Cake'
}, {
    name: 'pie',
    text: 'Pie'
}, {
    name: 'iceCream',
    text: 'Ice Cream'
}
]
 
var dessertsDescr = [
{
    name: 'chocolatey',
    text: 'Chocolatey'
}, {
    name: 'fruity',
    text: 'Fruity'
}, {
    name: 'light',
    text: 'Light'
}, {
    name: 'rich',
    text: 'Rich'
},{
    name: 'tart',
    text: 'Tart'
},{
    name: 'toShare',
    text: 'To Share'
},{
    name: 'popular',
    text: 'Popular'
},{
    name: 'healthy',
    text: 'Healthy'
}
]

//Creating the form:
checkBoxMaker(null, CRImakerSource, '.CRI');

$('.menuFormHolder').on('click', '.addItemBtnentree', function(e) {
    e.preventDefault();
        createItemHolder('.entree', 'entree')
        createIntInput('price', 'Entree Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnappetizer', function(e) {
    e.preventDefault();
        createItemHolder('.appetizer', 'appetizer')
        createIntInput('price', 'Appetizer Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtndessert', function(e) {
    e.preventDefault();
        createItemHolder('.dessert', 'dessert')
        createIntInput('price', 'Dessert Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', dessertsDescr, null, 'descriptorForm')
        checkBoxMaker('Ingredients', dessertsIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

// var menuName = $('.menuName').val()
// var comments = "No comments";
// var menuJSON = JSON.stringify(bigJSON);
// criJSON = JSON.stringify(criJSON);
// var UserId = 1;     //Update this
// var JobId = 1;      //Update this



var menuObj = {
    menuName: $('#menuName').val(),
    comments: $('#comments').val(),
    menuJSON: menuJSON,
    criJSON: 'criJSON',
    JobId: $('#jobID').val()
}




//Reusable functions Start here:

function checkBoxMaker(title, object, selector, formClass) {
    if(!selector){
        selector = '.itemholder'+ ItemIter 
    }

    if(title){ 
        $(selector).append("<h5>"+title+"</h5>")
    }
        $(selector).append("<div class='row "+ formClass + " checkboxRow" + checkboxIter+ "'></div")
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
categoryHTML += "                        <button class=\"btn waves-effect waves-light addItemBtn"+categoryClass+"\">" + buttonText + "<\/button>";
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
textInput += "    <textarea id=\""+name+globalIter+"\" class=\"materialize-textarea\" name="+name+"></textarea>";
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



function createItemHolder(target, value){
    var categoryHTML="";
categoryHTML += "<div class=\"row itemObject\" path=\""+value+"\">";
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
// $('.open' + ItemIter).addClass("active");
$('.collapsible').collapsible()
}



function slideOut() {
    $('.menuBuilderPanel').addClass('showDiv')
}


$('.menuFormHolder').on('click', '.itemTitle', function(e) {
    
    e.stopPropagation();

    if($(this).val() === "Enter Item Name"){
     $(this).val("")     
    }
})

function MenuItem(name, price, quickDescr, detailedDescr, ingredients, descriptors, secret, allergyViolations){
                this.name = name,
                this.price = price,
                this.quickDescr = quickDescr,
                this.detailedDescr = detailedDescr,
                this.ingredients = ingredients,
                this.descriptors = descriptors,
                this.secret = secret,
                this.allergyViolations = allergyViolations
            }




$('.serialButton').on('click', function() {
    var category 
    menuJSON = {
        entree: [],
        appetizer: [],
        dessert: [],
        side: [],
        addOn: [],
        soupOrSalad: [],
        kidsMenuItem: [],
        otherFood: [],
        afterDinnerDrink: [],
        wine: [],
        beer: [],
        cocktail: [],
        nonAlcoholic: [],
        otherDrink: []
    }

    $('.itemObject').each(function() {

        // name: 'No Item Name',
        // price: 0,
        // quickDescr: 'No Description',
        // detailedDescr: 'No Description',
        // ingredients: [],
        // descriptors: [],
        // secret: false,
        // allergyViolations: []


        var name = $(this).find('.itemTitle').val()
        var price = $(this).find("input[name='price']").val()
        var quickDescr = $(this).find("textarea[name='quickDescr']").val()
        var detailedDescr = $(this).find("textarea[name='detailedDescr']").val()
        var secret = false;
        var ingredients = {}
        var descriptors = {}
        var allergyViolations = {}
        console.log(quickDescr)
        if ($(this).find("input[name='secret']").val() === 'on'){
            secret = true;
        }

       checkBoxParser('.ingredientsForm', ingredients)
       checkBoxParser('.descriptorForm', descriptors)
       checkBoxParser('.allergyForm', allergyViolations)

        var item = new MenuItem(name, price, quickDescr, detailedDescr, ingredients, descriptors, secret, allergyViolations)
    //collect menu items in an array
    // itemArray.push(item)

    //It uses the html element value to sort itself into the correct category
    category = $(this).attr('path');
    menuJSON[category].push(item)
    })
    
 
    console.log(menuJSON)
})


function checkBoxParser(source, targetObject){
     //Grab all of the checkboxes:
        var serialized = $(source + ' input:checkbox').map(function() {
            return { name: this.name, value: this.checked ? this.value : "false" };
        });

        //format the returned checkbox values:
        for (var i = 0; i < serialized.length; i++) {
            if (serialized[i].value === 'on') {
                serialized[i].value = true
            } else {
                serialized[i].value = false
            }
        }

        //Add them to the proper object:
        for (var i = 0; i < serialized.length; i++) {
            targetObject[serialized[i].name] = serialized[i].value
        }


}