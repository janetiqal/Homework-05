
var currentDay = document.getElementById("currentDay");
todaysDate = moment().format('MMMM Do YYYY');
currentDay.innerHTML = todaysDate;
var currentTime = document.getElementById("currentTime");
time = moment().hour()
currentTime.innerHTML = time;

// click event for save button & local storage
$("button").click(function () {
    console.log("button clicked")
    var inputText = $("textarea").val();
    console.log(inputText)
    localStorage.setItem("input", inputText);
});

//create color coding system for current hour, add class 
//for loop? function compares currrent hour to the index of page
function checkHour() {
    const militaryHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    const currentHour = moment().hour()
    
    for (let i = 0; i < militaryHours.length; i++) {
        console.log(militaryHours[i])
        console.log(currentHour)
        if (currentHour === militaryHours[i]) {
            $("textarea").addClass("present")
        } else if (currentHour < militaryHours[i]) {
            $("textarea").addClass("future")
        } else (currentHour > militaryHours[i])
            $("textarea").addClass("past")
    }
};
checkHour();

// const timeOptions =["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
// var timeSlots = document.getElementsByClassName("hour");
// let index= 0;
// for (let i = 0 ; i < timeOptions.length; i ++){
//     if(timeOptions[i]===timeSlots[index])
//     console.log("what is this?")
// }
