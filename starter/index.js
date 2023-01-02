// Display current date 
var currentDate = moment().format("dddd Do MMMM");
var currentHour = moment().format("HH");
var currentDateEl = $('#currentDay');
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

// get notes from local storage
textArea.each(function() {
    $(this).val(localStorage.getItem($(this).attr('data-time')));
})


// Save to local storage
var BtnEl = $('.saveBtn');

BtnEl.click(function() {
    // grab textarea next to clicked button
    let textField = $(this).prev();
    // get value of textarea
    let notes = textField.val();
    //store in local storage with data-time as key
    localStorage.setItem($(this).prev().attr('data-time'), notes);
});


// ! DEBUG 
// let lastname09 = localStorage.getItem('09');
// let lastname10 = localStorage.getItem('10');
// let lastname11 = localStorage.getItem('11');
// console.log("local storage09: " + lastname09);
// console.log("local storage10: " + lastname10);
// console.log("local storage11: " + lastname11);
