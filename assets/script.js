
var currentDay = document.getElementById("currentDay");
todaysDate= moment().format('MMMM Do YYYY');
currentDay.innerHTML =todaysDate;
var currentTime = document.getElementById("currentTime");
time = moment().format('LTS');
currentTime.innerHTML =time;

// click event for save button & local storage
$("button").click(function(){
    console.log("button clicked")
    var inputText = $("textarea").val();
    console.log(inputText)
    localStorage.setItem("input", inputText);
});
