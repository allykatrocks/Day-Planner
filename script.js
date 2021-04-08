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

setInterval(todayDate, 10000);

$(".saveBtn").on("click", function() {
    var saveEvent = $(this).siblings("textarea").val();
    var whatTime = $(this).parent(".time-block").data("time");
    localStorage.setItem(whatTime, saveEvent);
})

$("textarea").each(function() {
    var getTime = $(this).parent(".time-block").data("time");
    $(this).val(localStorage.getItem(getTime));
})
