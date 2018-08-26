// target number array 5-20
var targetNumberArray = [];
    for (var i = 10; i <= 30; i++) {
        targetNumberArray.push(i);
    };
    // console.log(targetNumberArray);

// computer picks random target number
var targetNumber = targetNumberArray[Math.floor(Math.random()*targetNumberArray.length)];
// console.log(targetNumber);

// computer writes target number to HTML
document.getElementById('targetNumber').innerHTML = targetNumber;
// console.log(targetNumber);
// END TARGETNUMBER AREA


// create button value array
counter = 0;
var buttonValuesArray = [];
    for (var i = 1; i <= 9; i++) {
        buttonValuesArray.push(i);
}
console.log(buttonValuesArray);


var redButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    document.getElementById('redButton').innerHTML = redButton;
    console.log(redButton);

var greenButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    document.getElementById('greenButton').innerHTML = greenButton;
    console.log(greenButton);
        
var blueButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    document.getElementById('blueButton').innerHTML = blueButton;
    console.log(blueButton);

var yellowButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    document.getElementById('yellowButton').innerHTML = yellowButton;
    console.log(yellowButton);


    userTotal = counter;
function userTotal() {
     return redButton + greenButton + blueButton + yellowButton;
}
    document.getElementById('userTotal').innerHTML = userTotal;
    console.log(userTotal);

// constant during current game, change with next round, then stay current with that round, etc.
// value reveals only after user guesses


// record user clicks on crystal buttons
// create an array/index that contains the user choice values and adds them, and compares them to target number
// on.click send button value to array to determine user total

// var counter = 0;
// $(".btn-crystal").on("click", function() {
// var userTotal = ($(this).attr("buttonValuesArray"));
// counter += btn-crystal;
// var userTotal = counter;
// document.getElementById('userTotal').innerHTML = userTotal;
// });



// if array/index total exceeds target number, user loses
// if user loses, i++ in losses section, and game resets
// if user score = target number, i++ in wins section and game resets
