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

$("tbody tr").children().wrapInner('<div />')
$("tbody tr").children().css('padding', '0')


//Kill me.
slider.noUiSlider.on('update', function() {
    var startDate = slider.noUiSlider.get()[0]
    var endDate = slider.noUiSlider.get()[1]
    console.log(parseInt(endDate))
    for (var i = 0; i < totalShifts + 1; i++) {
        if (i < startDate || i > endDate) {
            $("tbody tr:nth-child(" + i + ")").first().removeClass('tableShow')
            $("tbody tr:nth-child(" + i + ")").closest('tr')
                .children('td')
                .animate({ padding: 0 })
                .children()
                .slideUp(function() { $(this).closest('tr').addClass('displayNone'); });
        } else {
            $("tbody tr:nth-child(" + i + ")").first().removeClass('displayNone')
            $("tbody tr:nth-child(" + i + ")").first().addClass('tableShow').children('td')
                .children().slideDown().css('padding', '15')
        }
    }
    var startDateValue = $("tbody tr:nth-child(" + startDate + ")").find('td:first').text()
    var endDateValue = $("tbody tr:nth-child(" + endDate + ")").find('td:first').text()
    $('.date1').text(startDateValue)
    $('.date2').text(endDateValue)
})



