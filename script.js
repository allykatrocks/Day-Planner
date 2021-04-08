var currentDateEl = $("#currentDay");
var timeColorEl = $("#time-block");

function todayDate() {
    var thisDay = moment().format("MMM DD, YYYY");
    currentDateEl.text("Today's Date: " + thisDay);
}
todayDate();

function colorCode () {
    var currentHour = moment().hour();
}
