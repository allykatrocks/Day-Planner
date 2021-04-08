var currentDateEl = $("#currentDay");
var timeblocksEl = $(".time-block");

function todayDate() {
    var thisDay = moment().format("MMM DD, YYYY");
    currentDateEl.text("Today's Date: " + thisDay);
    timeblocksEl.each(function() {
        var currentHour = moment().hours()
        if(currentHour === $(this).data().time) {
            $(this).children("textarea").addClass("present");
        } else if(currentHour > $(this).data().time) {
            $(this).children("textarea").addClass("past"); 
        } else {
            $(this).children("textarea").addClass("future");
        }
        
    })
}
todayDate();


