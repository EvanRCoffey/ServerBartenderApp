  var slider = document.getElementById('dateSlider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   range: {
     'min': 0,
     'max': 100
   }
  });

  // ,
  //  format: wNumb({
  //    decimals: 0
  //  })