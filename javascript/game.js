// target number array 5-20
var targetNumberArray = [];
    for (var i = 5; i <= 20-5; i++) {
        targetNumberArray.push(i);
    };

// computer picks random target number
var targetNumber = Math.floor(Math.random()*targetNumberArray.length);
// console.log(targetNumber);

// computer writes target number to HTML
document.getElementById('targetNumber').innerHTML = targetNumber;
// console.log(targetNumber);

// assign random values to the crystal buttons
// constant during current game, change with next round, then stay current with that round, etc.

// record user clicks on cyrstal buttons
// create an array/index that contains the user choice values and adds them, and compares them to target number
// if array/index total exceeds target number, user loses

// if user loses, i++ in losses section, and game resets

// if user score = target number, i++ in wins section

// 