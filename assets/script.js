
var currentDay = document.getElementById("currentDay")
currentTime= moment().format('MMMM Do YYYY')
currentDay.innerHTML =currentTime;

var timeRightNow=moment().subtract