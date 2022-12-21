// Display current date 
var currentDate = moment().format("dddd Do MMMM");
// var currentHour = moment().format("HH")
var currentHour = "14"
var currentDateEl = $('#currentDay')
currentDateEl.text(currentDate);

// ! Console logs for debugging
console.log("The current hour is: " + currentHour);

$('div').addClass('future');


// ! None of the below seems to be working so it's all copied-out for now!

function colourChanger(block) {
    let datatime = block;
    datatime.attr("data-time");
    if (datatime == currentHour) {
        datatime.addClass('.present')
    }
    else if (datatime < currentHour) {
        datatime.addClass('.past')
    }
    else {
        datatime.addClass('.future')
    }
}

// change colours dynamically
$("div").each(colourChanger(this));

// var timeBlocks = $('time-block');
// timeBlocks.css('background','red');

// timeBlocks.addClass('future')


// for (i = 0; i < timeBlocks.length; i++) {
//     this.colourChanger(this);
//     this.addClass('.future')
// }