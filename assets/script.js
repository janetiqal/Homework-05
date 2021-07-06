
var currentDay = document.getElementById("currentDay");
todaysDate= moment().format('MMMM Do YYYY');
currentDay.innerHTML =todaysDate;
var currentTime = document.getElementById("currentTime");
time = moment().format('LTS');
currentTime.innerHTML =time;

var timeRightNow=moment().subtract
//click event for save button
$("button").click(function(){
    console.log("button clicked")
});