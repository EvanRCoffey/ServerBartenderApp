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

$("tbody tr").children().wrapInner('<div class="autoRow" />')
// $("tbody tr").children().css('padding', '0')


//Kill me.
slider.noUiSlider.on('update', function() {
    var startDate = slider.noUiSlider.get()[0]
    var endDate = slider.noUiSlider.get()[1]
    for (var i = 0; i < totalShifts + 1; i++) {
        if (i < startDate || i > endDate) {
            $("tbody tr:nth-child(" + i + ")").first().removeClass('tableShow')
            $("tbody tr:nth-child(" + i + ")").find('.autoRow').removeClass('tableShow')
            $("tbody tr:nth-child(" + i + ")").find('.autoRow').addClass('tableHide')
            $("tbody tr:nth-child(" + i + ")").find('.shiftd').addClass('tableHide');
        } else {
            $("tbody tr:nth-child(" + i + ")").find('.autoRow').removeClass('tableHide')
            // $("tbody tr:nth-child(" + i + ")").find('.autoRow').addClass('tableShow')
            // $("tbody tr:nth-child(" + i + ")").find('.shiftd').addClass('tableShow')
        }
    }
    var startDateValue = $("tbody tr:nth-child(" + startDate + ")").find('td:first').text()
    var endDateValue = $("tbody tr:nth-child(" + endDate + ")").find('td:first').text()
    $('.date1').text(startDateValue)
    $('.date2').text(endDateValue)
})



