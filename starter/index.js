// Display current date 
var currentDate = moment().format("dddd Do MMMM");
var currentHour = moment().format("HH")
var currentDateEl = $('#currentDay')
currentDateEl.text(currentDate);

// ! Console logs for debugging
