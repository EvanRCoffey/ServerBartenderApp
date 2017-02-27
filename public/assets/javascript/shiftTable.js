var totalShifts = $('tbody tr').length;
var slider = document.getElementById('dateSlider');
  noUiSlider.create(slider, {
   start: [1, totalShifts],
   connect: true,
   step: 1,
   range: {
     'min': 1,
     'max': totalShifts
   },
   format: wNumb({
     decimals: 0
   })
  });
  console.log($( "tbody tr:nth-child(12)"))
  slider.noUiSlider.on('update', function(){
    var startDate = slider.noUiSlider.get()[0]
    var endDate = slider.noUiSlider.get()[1]
    console.log(parseInt(endDate) )
    for (var i = 0; i < totalShifts + 1; i++) {
      if(i < startDate || i > endDate){
       $( "tbody tr:nth-child("+ i +")").removeClass('tableShow')
       $( "tbody tr:nth-child("+ i +")").addClass('tableHide')
      } else {
      $( "tbody tr:nth-child("+ i +")").removeClass('tableHide')
       $( "tbody tr:nth-child("+ i +")").addClass('tableShow')

      }
      
    }

      })

// for(var i=0; i<rowLength; i+=1){
//   var row = table.rows[i];

//   //your code goes here, looping over every row.
//   //cells are accessed as easy

//   var cellLength = row.cells.length;
//   for(var y=0; y<cellLength; y+=1){
//     var cell = row.cells[y];

    //do something with every cell here
  

    

    // if($( "tbody tr:nth-child("+ startDate +")" ).hasClass('tableHide')){
    // $( "tbody tr:nth-child("+ (startDate - 1) +")" ).removeClass('tableHide')  
    // $( "tbody tr:nth-child("+ startDate +")" ).addClass('tableShow')
    // } else { $( "tbody tr:nth-child("+ startDate +")" ).addClass('tableHide')}
   
    // if($( "tbody tr:nth-child("+ endDate +")" ).hasClass('tableHide')){
    // $( "tbody tr:nth-child("+ endDate +")" ).removeClass('tableHide')  
    // $( "tbody tr:nth-child("+ endDate +")" ).addClass('tableShow')
    // } else { $( "tbody tr:nth-child("+ endDate +")" ).addClass('tableHide')}



  

//   var inputFormat = document.getElementById('input-format');

// sliderFormat.noUiSlider.on('update', function( values, handle ) {
//   inputFormat.value = values[handle];
// });

// inputFormat.addEventListener('change', function(){
//   sliderFormat.noUiSlider.set(this.value);
// });