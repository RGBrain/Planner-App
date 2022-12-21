// Display current date 
var currentDate = moment().format("dddd Do MMMM");
var currentHour = moment().format("HH")
var currentDateEl = $('#currentDay')
currentDateEl.text(currentDate);

// Change colour based on time
var textArea = $('textarea');
textArea.each(function() {
    if ($(this).attr('data-time') == currentHour) {
        $(this).addClass('present');
    }
    else if ($(this).attr('data-time') < currentHour) {
        $(this).addClass('past');
    }
    else {
        $(this).addClass('future');
    }
})