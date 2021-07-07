
var currentDay = document.getElementById("currentDay");
todaysDate = moment().format('MMMM Do YYYY');
currentDay.innerHTML = todaysDate;
var currentTime = document.getElementById("currentTime");
time = moment().hour()
currentTime.innerHTML = time;

//prevents any jquery code from running before document is loaded 
$(document).ready(function(){

// click event for save button & local storage
$("button").click(function () {
    console.log("button clicked")
    var inputText = $("textarea").val();
    console.log(inputText)
    localStorage.setItem("input", inputText);
});

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
            $(`#${militaryHours[i]}`).addClass("present");
        } else if (currentHour < militaryHours[i]) {
            $(`#${militaryHours[i]}`).addClass("future");
        } else (currentHour > militaryHours[i])
        $(`#${militaryHours[i]}`).addClass("past");
    }
};
console.log($("textarea"))
checkHour();

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
//need to do the local storage. get item
});

