//
//////////////////////////////////////////////////////////////////////////////
//VARIABLES SETUP
//////////////////////////////////////////////////////////////////////////////
//

var globalIter = 0
var ItemIter = 0
var checkboxIter = 0

var menuJSON
var criJSON

var menuSaved = false;
var menuID

var secretItem = [
    {
        name: 'secret',
        text: 'Secret Item?'
    }
]

var appEntIng = [
    {
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
    }
]

var appEntDesc = [
    {
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
    }
]

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
    }
]

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
        name: 'toGoUtensils',
        text: 'To-Go utensils'
    }
]

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

//
//////////////////////////////////////////////////////////////////////////////
//ACTIONS
//////////////////////////////////////////////////////////////////////////////
//

//Initializes materializes silly javascript functions.
$(document).ready(function() {
    $('select').material_select();
    //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
    $('.collapsible').collapsible({
        accordion: false
    });
});

//Creating the form:
checkBoxMaker(null, CRImakerSource, '.CRI');

//
//////////////////////////////////////////////////////////////////////////////
//ONCLICK LISTENERS
//////////////////////////////////////////////////////////////////////////////
//

$('.menuFormHolder').on('click', '.addItemBtnentree', function(e) {
    e.preventDefault(); //e is a click event
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
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
    saveAndsend();
    createItemHolder('.wine', 'wine')
    createIntInput('price', 'Item Price')
    createTextAreaInput('quickDescr', 'Quick Description')
    createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnafterDinnerDrink', function(e) {
    e.preventDefault();
    saveAndsend();
    createItemHolder('.afterDinnerDrink', 'afterDinnerDrink')
    createIntInput('price', 'Item Price')
    createTextAreaInput('quickDescr', 'Quick Description')
    createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnbeer', function(e) {
    e.preventDefault();
    saveAndsend();
    createItemHolder('.beer', 'beer')
    createIntInput('price', 'Item Price')
    createTextAreaInput('quickDescr', 'Quick Description')
    createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtncocktail', function(e) {
    e.preventDefault();
    saveAndsend();
    createItemHolder('.cocktail', 'cocktail')
    createIntInput('price', 'Item Price')
    createTextAreaInput('quickDescr', 'Quick Description')
    createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnnonAlcoholic', function(e) {
    e.preventDefault();
    saveAndsend();
    createItemHolder('.nonAlcoholic', 'nonAlcoholic')
    createIntInput('price', 'Item Price')
    createTextAreaInput('quickDescr', 'Quick Description')
    createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

$('.menuFormHolder').on('click', '.addItemBtnotherDrink', function(e) {
    e.preventDefault();
    saveAndsend();
    createItemHolder('.otherDrink', 'otherDrink')
    createIntInput('price', 'Item Price')
    createTextAreaInput('quickDescr', 'Quick Description')
    createTextAreaInput('detailedDescr', 'Detailed Description')
       
    ItemIter++
})

//Saves the menu to the database on any button click.
//saveAndSend() is now done in each onclick instead of this one
$('.menuFormHolder').on('click', '.save', function(e) {
    e.preventDefault();
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

$('.menuFormHolder').on('click', '.itemTitle', function(e) {
    
    e.stopPropagation();

    if($(this).val() === "Enter Item Name"){
     $(this).val("")     
    }
})

//
//////////////////////////////////////////////////////////////////////////////
//FUNCTIONS
//////////////////////////////////////////////////////////////////////////////
//

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
        createCategorySection('Kids Menu Item', 'kidsMenuItem', 'Add Kids Item')
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
    categoryHTML += "<div class=\"row itemObject\" style=\"margin-left:0px; margin-right:0px; padding: 0em 0.5em\" path=\""+value+"\">";
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

        if ($(this).find('.menuOverflow').attr('hidden') == 'hidden') {
            console.log("hidden seen");
        }
        else {
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
        }
    })

    var menuObj = {
        menuID: menuID,
        menuName: $('#menuName').val(),
        comments: $('#comments').val(),
        menuJSON: JSON.stringify(menuJSON),
        criJSON: JSON.stringify(criJSON),
        JobId: $('#jobIdPopulate').val()    //THIS WAS CHANGED FROM 'JobID' WHEN LOADMENU JOINED WITH MENUBUILDER
    }

    //Instead of having this if statement, you could POST it to a method using findOrCreate
    //If not found, it is created
    //If found, it is updated instead

    //Will work as-is for now but should probably change to the above at some point

    if(!menuSaved){
        $.post("/newMenu", menuObj).then(function(data) {
            menuID = data

            //update hidden menu ID field here
            $('#menuIdPopulate').val(menuID)

            console.log("hidden menu ID is " + menuID)

            menuSaved = true;
        })
    } else { 
        $.post("/updateMenu", menuObj).then(function(data) {})
    }
}

function slideOut() {$('.menuBuilderPanel').addClass('showDiv')}


//////////////////////////////////////////////////////////////
// BELOW THIS LINE WAS WRITTEN SPECIFICALLY FOR LOADMENU.JS
//////////////////////////////////////////////////////////////

function createItemHolderAndPopulate(target, value, item){
    var categoryHTML="";
    categoryHTML += "<div class=\"row itemObject\" style=\"margin-left:0px; margin-right:0px; padding: 0em 0.5em\" path=\""+value+"\">";
    categoryHTML += "    <ul>";
    categoryHTML += "        <li>";
    categoryHTML += "            <div class=\"menuOverflow itemHolderToggle itemholder" +ItemIter +"\">";
    categoryHTML += "               <div class=\"ItemHeader\">";
    categoryHTML += "                   <i class=\"material-icons itemToggle\">remove</i><input class=\"itemTitle\" name=\"name\" value=\""+item.name +"\"></input><\/div>";
    categoryHTML += "            <\/div>";
    categoryHTML += "        <\/li>";
    categoryHTML += "    <\/ul>";
    categoryHTML += "<\/div>";
    categoryHTML += "";

    $(target).append(categoryHTML)
    $('.collapsible').collapsible()
}

function createIntInputAndPopulate(name, labelText, item){
    var textInput="";
    textInput += "<div class=\"input-field col s12\">";
    textInput += "    <input id=\""+name+globalIter+"\"type=\"number\" step=\"0.01\" min=\"0\" max=\"100000\" required class=\"validate\" value=\""+item.price+"\"name="+name+">";
    textInput += "    <label for=\""+name+globalIter+"\" class='active'>"+labelText+"<\/labeltext>";
    textInput += "<\/div>";
    textInput += "";

    $('.itemholder'+ ItemIter).append(textInput)
    $('#'+name+globalIter).addClass("active")
    globalIter++
}

function createTextAreaInputAndPopulate(name, labelText, item){

    if (name == "quickDescr") {var textToPopulate = item.quickDescr}
    if (name == "detailedDescr") {var textToPopulate = item.detailedDescr}

    var textInput="";
    textInput += "<div class=\"input-field col s12\">";
    textInput += "    <textarea id=\""+name+globalIter+"\" class=\"materialize-textarea\" name="+name+">"+textToPopulate+"</textarea>";
    textInput += "    <label for=\""+name+globalIter+"\" class='active'>"+labelText+"<\/labeltext>";
    textInput += "<\/div>";
    textInput += "";
    
    $('.itemholder'+ ItemIter).append(textInput)
    $('#'+name+globalIter).addClass("active")
    globalIter++
}

function checkBoxMakerAndPopulate(title, array, selector, formClass, item) {
    if(!selector){
        selector = '.itemholder'+ ItemIter 
    }

    if(title){ 
        $(selector).append("<h5>"+title+"</h5>")
    }

    $(selector).append("<div class='row "+ formClass + " checkboxRow" + checkboxIter+ "'></div")
    
    for (var i = 0; i < array.length; i++) {
        
        //Check box if you should
        if (returnCheckboxBool(array[i], item) == true) {
            //Set the checkbox we just created as checked
            $('.checkboxRow'+ checkboxIter).append("<div class='col s6 m4 l4'><input type='checkbox' checked class='filled-in' id='filled-in-box" + globalIter + "' name ='" + array[i].name + "'/><label class='checkboxLabel' for='filled-in-box" + globalIter + "'>" + array[i].text + "</label></div>")
        } 
        //Don't if you shouldn't
        else {
            $('.checkboxRow'+ checkboxIter).append("<div class='col s6 m4 l4'><input type='checkbox' class='filled-in' id='filled-in-box" + globalIter + "' name ='" + array[i].name + "'/><label class='checkboxLabel' for='filled-in-box" + globalIter + "'>" + array[i].text + "</label></div>")
        }    
        globalIter++   
    }
    
    checkboxIter++
    
    $('.collapsible').collapsible();
    $('select').material_select();
    
    //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
    document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
}

function returnCheckboxBool(arrayElement, item) {
    if (arrayElement.name == "secretItem") {return item.descriptors.secretItem}
    if (arrayElement.name == "beef") {return item.descriptors.beef}
    if (arrayElement.name == "chicken") {return item.descriptors.chicken}
    if (arrayElement.name == "pork") {return item.descriptors.pork}
    if (arrayElement.name == "seafood") {return item.descriptors.seafood}
    if (arrayElement.name == "lamb") {return item.descriptors.lamb}
    if (arrayElement.name == "otherProtein") {return item.descriptors.otherProtein}
    if (arrayElement.name == "cheesy") {return item.descriptors.cheesy}
    if (arrayElement.name == "fresh") {return item.descriptors.fresh}
    if (arrayElement.name == "fried") {return item.descriptors.fried}
    if (arrayElement.name == "hearty") {return item.descriptors.hearty}
    if (arrayElement.name == "indulgent") {return item.descriptors.indulgent}
    if (arrayElement.name == "light") {return item.descriptors.light}
    if (arrayElement.name == "plain") {return item.descriptors.plain}
    if (arrayElement.name == "raw") {return item.descriptors.raw}
    if (arrayElement.name == "salty") {return item.descriptors.salty}
    if (arrayElement.name == "spicy") {return item.descriptors.spicy}
    if (arrayElement.name == "sweet") {return item.descriptors.sweet}
    if (arrayElement.name == "healthy") {return item.descriptors.healthy}
    if (arrayElement.name == "aLaCarteOrBiteSize") {return item.descriptors.aLaCarteOrBiteSize}
    if (arrayElement.name == "servedCold") {return item.descriptors.servedCold}
    if (arrayElement.name == "toShare") {return item.descriptors.toShare}
    if (arrayElement.name == "popular") {return item.descriptors.popular}
    if (arrayElement.name == "vegetarian") {return item.descriptors.vegetarian}
    if (arrayElement.name == "eggs") {return item.descriptors.eggs}
    if (arrayElement.name == "fish") {return item.descriptors.fish}
    if (arrayElement.name == "gluten") {return item.descriptors.gluten}
    if (arrayElement.name == "milk") {return item.descriptors.milk}
    if (arrayElement.name == "peanuts") {return item.descriptors.peanuts}
    if (arrayElement.name == "shellfish") {return item.descriptors.shellfish}
    if (arrayElement.name == "soy") {return item.descriptors.soy}
    if (arrayElement.name == "treeNuts") {return item.descriptors.treeNuts}
    if (arrayElement.name == "wheat") {return item.descriptors.wheat}
    if (arrayElement.name == "a1") {return item.descriptors.a1}
    if (arrayElement.name == "balsVin") {return item.descriptors.balsVin}
    if (arrayElement.name == "bbqSauce") {return item.descriptors.bbqSauce}
    if (arrayElement.name == "blueCheese") {return item.descriptors.blueCheese}
    if (arrayElement.name == "bottledSparkling") {return item.descriptors.bottledSparkling}
    if (arrayElement.name == "caesar") {return item.descriptors.caesar}
    if (arrayElement.name == "cappuccino") {return item.descriptors.cappuccino}
    if (arrayElement.name == "clubSoda") {return item.descriptors.clubSoda}
    if (arrayElement.name == "cocktailSauce") {return item.descriptors.cocktailSauce}
    if (arrayElement.name == "coffeeDecaf") {return item.descriptors.coffeeDecaf}
    if (arrayElement.name == "coffeeRegular") {return item.descriptors.coffeeRegular}
    if (arrayElement.name == "espressoDecaf") {return item.descriptors.espressoDecaf}
    if (arrayElement.name == "espressoRegular") {return item.descriptors.espressoRegular}
    if (arrayElement.name == "french") {return item.descriptors.french}
    if (arrayElement.name == "greek") {return item.descriptors.greek}
    if (arrayElement.name == "heinz57") {return item.descriptors.heinz57}
    if (arrayElement.name == "honeyMustard") {return item.descriptors.honeyMustard}
    if (arrayElement.name == "hotSauce") {return item.descriptors.hotSauce}
    if (arrayElement.name == "hotTea") {return item.descriptors.hotTea}
    if (arrayElement.name == "italian") {return item.descriptors.italian}
    if (arrayElement.name == "ketchup") {return item.descriptors.ketchup}
    if (arrayElement.name == "lemons") {return item.descriptors.lemons}
    if (arrayElement.name == "limes") {return item.descriptors.limes}
    if (arrayElement.name == "marinara") {return item.descriptors.marinara}
    if (arrayElement.name == "mayonnaise") {return item.descriptors.mayonnaise}
    if (arrayElement.name == "mustardSpicy") {return item.descriptors.mustardSpicy}
    if (arrayElement.name == "mustardYellow") {return item.descriptors.mustardYellow}
    if (arrayElement.name == "oilAndVin") {return item.descriptors.oilAndVin}
    if (arrayElement.name == "otherVin") {return item.descriptors.otherVin}
    if (arrayElement.name == "ranch") {return item.descriptors.ranch}
    if (arrayElement.name == "salsa") {return item.descriptors.salsa}
    if (arrayElement.name == "soySauce") {return item.descriptors.soySauce}
    if (arrayElement.name == "thousandIsland") {return item.descriptors.thousandIsland}
    if (arrayElement.name == "toGoBoxes") {return item.descriptors.toGoBoxes}
    if (arrayElement.name == "toGoCups") {return item.descriptors.toGoCups}
    if (arrayElement.name == "toGoUtensils") {return item.descriptors.toGoUtensils}
    if (arrayElement.name == "cake") {return item.descriptors.cake}
    if (arrayElement.name == "pie") {return item.descriptors.pie}
    if (arrayElement.name == "iceCream") {return item.descriptors.iceCream}
    if (arrayElement.name == "chocolatey") {return item.descriptors.chocolatey}
    if (arrayElement.name == "fruity") {return item.descriptors.fruity}
    if (arrayElement.name == "light") {return item.descriptors.light}
    if (arrayElement.name == "rich") {return item.descriptors.rich}
    if (arrayElement.name == "tart") {return item.descriptors.tart}
    if (arrayElement.name == "toShare") {return item.descriptors.toShare}
    if (arrayElement.name == "popular") {return item.descriptors.popular}
    if (arrayElement.name == "healthy") {return item.descriptors.healthy}
}

function loadMenus(job) {
    var parentJobID = job.value;
    var jobIdObj = {
        jobId: parentJobID
    }
    $("#jobIdPopulate").val(job.value);
    $.post("/getMenusGivenJob", jobIdObj).then(function(data3) {
        if (data3.length === 0) {
            var jQueryString = '<div class="input-field col s12"><h5>To use the quiz maker, you must create a job and a menu.<a href="/menuBuilder"><h5>Click here to create a menu.</h5></a></div>'
            $("#dropdown").html(jQueryString);
        } else if (data3.length > 0) {

            var jQueryString = '<div class="input-field col s12"><select class="menuSelector" onchange="buildMenuElements(this.value);"><option value="" disabled selected>Click here to choose a menu</option>';


            for (var i = 0; i < data3.length; i++) {
                jQueryString += '<option value="' + data3[i].id + '">' + data3[i].menuName + '</option>'
            }

            jQueryString += '</select><label>Menu Selector</label></div>';

            $("#dropdown").html(jQueryString);
            $('select').material_select();
            //Found this line from stackoverflow and it fixed the "need to click dropdown twice" bug so I'm gonna keep it
            document.querySelectorAll('.select-wrapper').forEach(t => t.addEventListener('click', e=>e.stopPropagation()))
        }
    });
}

function buildMenuElements(menu) {

    $("#dropdown").attr("hidden","true");
    $("#hiddenMenuForm").addClass("grayBorder");

    var idObj = {
        menuId: menu
    }

    menuSaved = true;

    $.post("/getMenu", idObj).then(function(data2) {
        var parsedCriJson = JSON.parse(data2.criJSON);
        var parsedMenuJson = JSON.parse(data2.menuJSON);
        var reParsedCriJson = JSON.parse(parsedCriJson);
        var reParsedMenuJson = JSON.parse(parsedMenuJson);

        console.log(reParsedCriJson);
        console.log(reParsedMenuJson);

        $('#menuName').val(data2.menuName)
        $('#comments').val(data2.comments)

        menuID = data2.id

        //update hidden menu ID field here
        $('#menuIdPopulate').val(menuID)

        $('#menuNameLabel').addClass('active')
        $('#commentsLabel').addClass('active')

        //Populate entrees
        if (reParsedMenuJson.entree.length > 0) {

            var valueObject = {};
            valueObject.value = "entree"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.entree.length; i++) {

                createItemHolderAndPopulate('.entree', 'entree', reParsedMenuJson.entree[i])
                createIntInputAndPopulate('price', 'Entree Price', reParsedMenuJson.entree[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.entree[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.entree[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.entree[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.entree[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.entree[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.entree[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate appetizers
        if (reParsedMenuJson.appetizer.length > 0) {

            var valueObject = {};
            valueObject.value = "appetizer"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.appetizer.length; i++) {   

                createItemHolderAndPopulate('.appetizer', 'appetizer', reParsedMenuJson.appetizer[i])
                createIntInputAndPopulate('price', 'Appetizer Price', reParsedMenuJson.appetizer[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.appetizer[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.appetizer[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.appetizer[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.appetizer[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.appetizer[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.appetizer[i])
                addDeleteButton()
                ItemIter++
            }
        }

        //Populate desserts
        if (reParsedMenuJson.dessert.length > 0) {

            var valueObject = {};
            valueObject.value = "dessert"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.dessert.length; i++) {     

                createItemHolderAndPopulate('.dessert', 'dessert', reParsedMenuJson.dessert[i])
                createIntInputAndPopulate('price', 'Dessert Price', reParsedMenuJson.dessert[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.dessert[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.dessert[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.dessert[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.dessert[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.dessert[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.dessert[i])
                addDeleteButton()
                ItemIter++                

            }
        }

        //Populate sides
        if (reParsedMenuJson.sides.length > 0) {

            var valueObject = {};
            valueObject.value = "sides"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.sides.length; i++) {

                createItemHolderAndPopulate('.sides', 'sides', reParsedMenuJson.sides[i])
                createIntInputAndPopulate('price', 'Side Price', reParsedMenuJson.sides[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.sides[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.sides[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.sides[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.sides[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.sides[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.sides[i])
                addDeleteButton()
                ItemIter++
            }
        }

        //Populate addOns
        if (reParsedMenuJson.addOn.length > 0) {

            var valueObject = {};
            valueObject.value = "addOn"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.addOn.length; i++) {             

                createItemHolderAndPopulate('.addOn', 'addOn', reParsedMenuJson.addOn[i])
                createIntInputAndPopulate('price', 'AddOn Price', reParsedMenuJson.addOn[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.addOn[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.addOn[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.addOn[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.addOn[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.addOn[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.addOn[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate soupOrSalads
        if (reParsedMenuJson.soupOrSalad.length > 0) {

            var valueObject = {};
            valueObject.value = "soupOrSalad"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.soupOrSalad.length; i++) {     
                
                createItemHolderAndPopulate('.soupOrSalad', 'soupOrSalad', reParsedMenuJson.soupOrSalad[i])
                createIntInputAndPopulate('price', 'Soup/Salad Price', reParsedMenuJson.soupOrSalad[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.soupOrSalad[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.soupOrSalad[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.soupOrSalad[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.soupOrSalad[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.soupOrSalad[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.soupOrSalad[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate kidsMenuItems
        if (reParsedMenuJson.kidsMenuItem.length > 0) {

            var valueObject = {};
            valueObject.value = "kidsMenu"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.kidsMenuItem.length; i++) {     
                
                createItemHolderAndPopulate('.kidsMenuItem', 'kidsMenuItem', reParsedMenuJson.kidsMenuItem[i])
                createIntInputAndPopulate('price', 'Kids Menu Item Price', reParsedMenuJson.kidsMenuItem[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.kidsMenuItem[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.kidsMenuItem[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.kidsMenuItem[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.kidsMenuItem[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.kidsMenuItem[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.kidsMenuItem[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate otherFoods
        if (reParsedMenuJson.otherFood.length > 0) {

            var valueObject = {};
            valueObject.value = "otherFood"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.otherFood.length; i++) {

                createItemHolderAndPopulate('.otherFood', 'otherFood', reParsedMenuJson.otherFood[i])
                createIntInputAndPopulate('price', 'Other Food Price', reParsedMenuJson.otherFood[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.otherFood[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.otherFood[i])
                checkBoxMakerAndPopulate(null, secretItem, null, 'secretItemForm', reParsedMenuJson.otherFood[i])
                checkBoxMakerAndPopulate('Descriptors', appEntDesc, null, 'descriptorForm', reParsedMenuJson.otherFood[i])
                checkBoxMakerAndPopulate('Ingredients', appEntIng, null, 'ingredientsForm', reParsedMenuJson.otherFood[i])
                checkBoxMakerAndPopulate('Allergy Violations', allergiesList, null, 'allergyForm', reParsedMenuJson.otherFood[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate afterDinnerDrinks
        if (reParsedMenuJson.afterDinnerDrink.length > 0) {

            var valueObject = {};
            valueObject.value = "afterDinnerDrink"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.afterDinnerDrink.length; i++) {

                createItemHolderAndPopulate('.afterDinnerDrink', 'afterDinnerDrink', reParsedMenuJson.afterDinnerDrink[i])
                createIntInputAndPopulate('price', 'After Dinner Drink Price', reParsedMenuJson.afterDinnerDrink[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.afterDinnerDrink[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.afterDinnerDrink[i])
                addDeleteButton()                
                ItemIter++

            }
        }

        //Populate wines
        if (reParsedMenuJson.wine.length > 0) {

            var valueObject = {};
            valueObject.value = "wine"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.wine.length; i++) {

                createItemHolderAndPopulate('.wine', 'wine', reParsedMenuJson.wine[i])
                createIntInputAndPopulate('price', 'Wine Price', reParsedMenuJson.wine[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.wine[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.wine[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate beers
        if (reParsedMenuJson.beer.length > 0) {

            var valueObject = {};
            valueObject.value = "beer"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.beer.length; i++) {

                createItemHolderAndPopulate('.beer', 'beer', reParsedMenuJson.beer[i])
                createIntInputAndPopulate('price', 'Beer Price', reParsedMenuJson.beer[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.beer[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.beer[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate cocktails
        if (reParsedMenuJson.cocktail.length > 0) {

            var valueObject = {};
            valueObject.value = "cocktails"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.cocktail.length; i++) {

                createItemHolderAndPopulate('.cocktail', 'cocktail', reParsedMenuJson.cocktail[i])
                createIntInputAndPopulate('price', 'Cocktail Price', reParsedMenuJson.cocktail[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.cocktail[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.cocktail[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate nonAlcoholics
        if (reParsedMenuJson.nonAlcoholic.length > 0) {

            var valueObject = {};
            valueObject.value = "nonAlcoholic"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.nonAlcoholic.length; i++) {

                createItemHolderAndPopulate('.nonAlcoholic', 'nonAlcoholic', reParsedMenuJson.nonAlcoholic[i])
                createIntInputAndPopulate('price', 'Non-Alcoholic Drink Price', reParsedMenuJson.nonAlcoholic[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.nonAlcoholic[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.nonAlcoholic[i])
                addDeleteButton()
                ItemIter++

            }
        }

        //Populate otherDrinks
        if (reParsedMenuJson.otherDrink.length > 0) {

            var valueObject = {};
            valueObject.value = "otherDrink"
            addCategory(valueObject)

            for (var i = 0; i<reParsedMenuJson.otherDrink.length; i++) {

                createItemHolderAndPopulate('.otherDrink', 'otherDrink', reParsedMenuJson.otherDrink[i])
                createIntInputAndPopulate('price', 'Other Drink Price', reParsedMenuJson.otherDrink[i])
                createTextAreaInputAndPopulate('quickDescr', 'Quick Description', reParsedMenuJson.otherDrink[i])
                createTextAreaInputAndPopulate('detailedDescr', 'Detailed Description', reParsedMenuJson.otherDrink[i])
                addDeleteButton()
                ItemIter++

            }
        }

    $('#hiddenMenuForm').removeAttr('hidden');
    $('#hiddenCategories').removeAttr('hidden');

    })
}

function prepareNewMenu() {
    $("#newOrLoadMenu").attr("hidden","true");
    $('#menuForm').removeAttr('hidden');
    $('#hiddenMenuForm').removeAttr('hidden');
    $('#hiddenCategories').removeAttr('hidden');
    $("#hiddenMenuForm").addClass("grayBorder");
}

function prepareLoadMenu() {
    $("#newOrLoadMenu").attr("hidden","true");
    $("#jobID").attr("onchange","loadMenus(this);");
    $("#newOrOld").html("Editing an existing menu");
    $('#menuForm').removeAttr('hidden');
}

function deleteItem(itemIter) {
    console.log(itemIter);
    //hide the element
    $('.itemholder'+ itemIter).attr("hidden","true");
}

function addDeleteButton() {
    var textInput="<button onclick='deleteItem("+ItemIter+")' type='button'>DELETE THIS ITEM</button>";
    $('.itemholder'+ ItemIter).append(textInput)
}

function setHiddenJobField(jobValue) {
    $("#jobIdPopulate").val(jobValue);
    console.log(jobValue)
}