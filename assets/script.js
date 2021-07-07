
var currentDay = document.getElementById("currentDay");
todaysDate = moment().format('MMMM Do YYYY');
currentDay.innerHTML = todaysDate;
var currentTime = document.getElementById("currentTime");

//prevents any jquery code from running before document is loaded 
$(document).ready(function(){

// click event for save button & local storage
$("button").click(function () {
    console.log("button clicked")
    // var inputText = $(".description").val();
    var inputText= $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(inputText);
    console.log(time);
    // localStorage.setItem("time", time);
    localStorage.setItem(time, inputText);
});

//INDEX through them/for loop instead of doing it individually.
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));
//create color coding system for current hour, add class 
//for loop? function compares currrent hour to the index of page
//
function checkHour() {
    const militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const currentHour = moment().hour();
    //added ID's to each individual textarea to correspond to military hours index. looping through the array at the same time were also checking the ID of the text area to identify it 
    for (let i = 0; i < militaryHours.length; i++) {
        console.log(militaryHours[i])
        console.log(currentHour)
        console.log($(`#${militaryHours[i]}`))
        if (currentHour === militaryHours[i]) {
            // $(textarea).addClass("present");
            $(`#${militaryHours[i]}`).addClass("present");
        } else if (currentHour < militaryHours[i]) {
            $(`#${militaryHours[i]}`).addClass("future");
        } else (currentHour > militaryHours[i])
        $(`#${militaryHours[i]}`).addClass("past");
    }
};
console.log($("textarea"))
checkHour();
});






// function check9am (){
//     const currentHour= moment().hour();
//     if (currentHour === 9){
//         $("#9").addClass("present");
//     }else if (currentHour < 9){
//         $("#9").addClass("future");
//     }else if (currentHour>9){
//         $("#9").addClass("past");
//     }

// }check9am();




