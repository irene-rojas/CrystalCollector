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


// 