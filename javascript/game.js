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

// create button value array
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


// constant during current game, change with next round, then stay current with that round, etc.
// value reveals only after user guesses

// var userTotal = function adder('redButton', 'greenButton', 'blueButton', 'yellowButton', 'return redButton + greenButton + blueButton + yellowButton'); 
//     document.getElementById('userTotal').innerHTML = userTotal;


// record user clicks on cyrstal buttons
// create an array/index that contains the user choice values and adds them, and compares them to target number
// if array/index total exceeds target number, user loses

// if user loses, i++ in losses section, and game resets

// if user score = target number, i++ in wins section and game resets

// 