
$('.testButton').on('click', function(){
    $('.CRIpanel').addClass('showDiv')
})


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

    



