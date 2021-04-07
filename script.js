var currentDateEl = $("#currentDay");

function todayDate() {
    var thisDay = moment().format("MMM DD, YYYY");
    currentDateEl.text("Today's Date: " + thisDay);
}
todayDate();