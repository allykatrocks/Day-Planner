var currentDateEl = $("#currentDay");

function todayDate() {
    var thisDay = moment().format("MM, DD, YYYY");
    currentDateEl.text(thisDay);
}