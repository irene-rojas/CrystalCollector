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
var buttonValuesArray = [];
    for (var i = 1; i <= 9; i++) {
        buttonValuesArray.push(i);
}
console.log(buttonValuesArray);

// assign values to individual buttons
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


// your total section

// create userTotalArray 
// when user clicks a gem, the value of that gem gets pushed into userTotal index
var userTotalArray = [];
// document.getElementById("redButton").onclick = function() {
$(document).ready(function() {
    $("redButton").click(function() {
userTotalArray.push(redButton);
// };
    });
});
userTotalArray.push(greenButton);
userTotalArray.push(blueButton);
userTotalArray.push(yellowButton);


var userTotal = userTotalArray.reduce( function(total, amount){
  return total + amount
});
console.log(userTotal);


// the numbers in userTotal array are added and displayed in userTotal div
counter = 0;
// var userTotal = counter;
// document.getElementById('userTotalArray').innerHTML = userTotalArray;
document.getElementById('userTotal').innerHTML = userTotal;



// win-loss section
winCounter = 0;
lossCounter = 0;
if (userTotal === targetNumber) {
    winCounter++;
    document.getElementById("wins").innerHTML = wins;
} else if (userTotal >= targetNumber) {
    lossCounter++;
    document.getElementById("losses").innerHTML = losses;
}
