var globalIter = 0
var ItemIter = 0
var checkboxIter = 0

var menuJSON
var criJSON

var menuSaved = false;
var menuID

//Initializes materializes silly javascript functions.
$(document).ready(function() {
    $('select').material_select();
    //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
    $('.collapsible').collapsible({
        accordion: false
    });
});

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
        createCategorySection('Soups & Salads', 'soupOrSalad', 'Add Soup or Salad')
    } else if (e.value === 'kidsMenu') {
        createCategorySection('Soups & Salads', 'kidsMenuItem', 'Add Kids Item')
    } else if (e.value === 'otherFood') {
        createCategorySection('Other Food', 'otherFood', 'Add Other Food')
    } else if (e.value === 'wine') {
        createCategorySection('Wine', 'wine', 'Add Wine')
    } else if (e.value === 'beer') {
        createCategorySection('Beer', 'beer', 'Add Beer')
    } else if (e.value === 'cocktails') {
        createCategorySection('Cocktails', 'cocktail', 'Add Cocktail')
    } else if (e.value === 'nonAlcoholic') {
        createCategorySection('Non-Alcoholic', 'nonAlcoholic', 'Add Non-Alcoholic')
    } else if (e.value === 'afterDinnerDrink') {
        createCategorySection('After Dinner Drinks', 'afterDinnerDrink', 'Add After Dinner Drink')
    } else if (e.value === 'otherDrink') {
        createCategorySection('Other Drinks', 'otherDrink', 'Add Other Drink')
    }
    $(".categorySelector option[value='" + e.value + "']").remove();
    $('select').material_select();
    //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
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

$('.menuFormHolder').on('click', '.addItemBtnsides', function(e) {
    e.preventDefault();
        createItemHolder('.sides', 'sides')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnaddOn', function(e) {
    e.preventDefault();
        createItemHolder('.addOn', 'addOn')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnsoupOrSalad', function(e) {
    e.preventDefault();
        createItemHolder('.soupOrSalad', 'soupOrSalad')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnkidsMenuItem', function(e) {
    e.preventDefault();
        createItemHolder('.kidsMenuItem', 'kidsMenuItem')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnotherFood', function(e) {
    e.preventDefault();
        createItemHolder('.otherFood', 'otherFood')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
        checkBoxMaker(null, secretItem, null, 'secretItemForm')
        checkBoxMaker('Descriptors', appEntDesc, null, 'descriptorForm')
        checkBoxMaker('Ingredients', appEntIng, null, 'ingredientsForm')
        checkBoxMaker('Allergy Violations', allergiesList, null, 'allergyForm')       
    

    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnwine', function(e) {
    e.preventDefault();
        createItemHolder('.wine', 'wine')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnafterDinnerDrink', function(e) {
    e.preventDefault();
        createItemHolder('.afterDinnerDrink', 'afterDinnerDrink')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnbeer', function(e) {
    e.preventDefault();
        createItemHolder('.beer', 'beer')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtncocktail', function(e) {
    e.preventDefault();
        createItemHolder('.cocktail', 'cocktail')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnnonAlcoholic', function(e) {
    e.preventDefault();
        createItemHolder('.nonAlcoholic', 'nonAlcoholic')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnotherDrink', function(e) {
    e.preventDefault();
        createItemHolder('.otherDrink', 'otherDrink')
        createIntInput('price', 'Item Price')
        createTextAreaInput('quickDescr', 'Quick Description')
        createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})


//Saves the menu to the database on any button click.
$('.menuFormHolder').on('click', '.save', function(e) {
    e.preventDefault();
    saveAndsend();
     $('select').material_select();
     //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
})

$('.menuFormHolder').on('click', '.itemToggle', function() {
    $(this).parents('.itemObject').find('.itemHolderToggle').slideToggle()
    if ($(this).text() === 'add') {
        $(this).text('remove')
    } else {
        $(this).text('add')
    }
})

$('.menuFormHolder').on('click', '.catToggle', function() {
     $(this).parents('.catRow').find('.catHolderToggle').slideToggle()
    if ($(this).text() === 'add') {
        $(this).text('remove')
    } else {
        $(this).text('add')
    }
})


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
     $('select').material_select();
     //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
}


function createCategorySection(categoryTitle, categoryClass, buttonText){
    var categoryHTML="";
categoryHTML += "<div class=\"row catRow\">";
categoryHTML += "    <ul>";
categoryHTML += "        <li>";
categoryHTML += "            <div class=\"menuCategoryHeader\">";
categoryHTML += "                <i class=\"material-icons catToggle\">remove</i><h4 class=\"catTitle\">"+categoryTitle+"<\/h4><i class=\"material-icons catClose\">clear</i><\/div>";
categoryHTML += "            <div class=\"itemBody catHolderToggle menuOverflow\">";
categoryHTML += "                <form class="+categoryClass+">";
categoryHTML += "                <\/form>";
categoryHTML += "                <div class=\"row\">";
categoryHTML += "                    <div class=\" col s12\">";
categoryHTML += "                        <button class=\"btn waves-effect waves-light save addItemBtn"+categoryClass+"\">" + buttonText + "<\/button>";
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

    $('.itemholder'+ ItemIter).append(textInput)
    globalIter++
}



function createItemHolder(target, value){
    var categoryHTML="";
categoryHTML += "<div class=\"row itemObject\" path=\""+value+"\">";
categoryHTML += "    <ul>";
categoryHTML += "        <li>";
categoryHTML += "            <div class=\"ItemHeader\">";
categoryHTML += "                <i class=\"material-icons itemToggle\">remove</i><input class=\"itemTitle\" name=\"name\" value=\"Enter Item Name\"></input><\/div>";
categoryHTML += "            <div class=\"menuOverflow itemHolderToggle itemholder" +ItemIter +"\">";
categoryHTML += "            <\/div>";
categoryHTML += "        <\/li>";
categoryHTML += "    <\/ul>";
categoryHTML += "<\/div>";
categoryHTML += "";

$(target).append(categoryHTML)
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




function saveAndsend() {

    var category

    criJSON = {}

    menuJSON = {
        entree: [],
        appetizer: [],
        dessert: [],
        sides: [],
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

    checkBoxParser($('.menuFormHolder'), '.CRI', criJSON)

    $('.itemObject').each(function() {

        //Var lets the object get passed into functions.
        var that = $(this)

        var name = $(this).find('.itemTitle').val()
        var price = $(this).find("input[name='price']").val()
        var quickDescr = $(this).find("textarea[name='quickDescr']").val()
        var detailedDescr = $(this).find("textarea[name='detailedDescr']").val()
        var secret = false;
        var ingredients = {}
        var descriptors = {}
        var allergyViolations = {}

    
        //The checkBoxParser function write to an object, not a single variable.
        //This is a quick workaround.    
        var secretParse = {}
        checkBoxParser(that, '.secretItemForm ', secretParse)
        if(secretParse.secret === true){
            secret = true
        }

        checkBoxParser(that, '.ingredientsForm', ingredients)
        checkBoxParser(that, '.descriptorForm', descriptors)
        checkBoxParser(that, '.allergyForm', allergyViolations)
        var item = new MenuItem(name, price, quickDescr, detailedDescr, ingredients, descriptors, secret, allergyViolations)

        //It uses the html element value to sort itself into the correct category
        category = $(this).attr('path');
        menuJSON[category].push(item)
    })

    var menuObj = {
        menuID: menuID,
        menuName: $('#menuName').val(),
        comments: $('#comments').val(),
        menuJSON: JSON.stringify(menuJSON),
        criJSON: JSON.stringify(criJSON),
        JobId: $('#jobID').val()
    }

    if(!menuSaved){
    $.post("/newMenu", menuObj).then(function(data) {

    
    menuID = data

    menuSaved = true;
})
    } else { $.post("/updateMenu", menuObj).then(function(data) {

})
   
}
 
}



function checkBoxParser(that,source, targetObject){
     //Grab all of the checkboxes:
        var serialized = that.find(source +' input:checkbox').map(function() {
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