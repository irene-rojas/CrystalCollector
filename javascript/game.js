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

// BUTTON SECTION
// create button value array
var winCounter = 0;
var lossCounter = 0;
var buttonValuesArray = [];
for (var i = 1; i <= 9; i++) {
    buttonValuesArray.push(i);
}
console.log(buttonValuesArray);

// assign values to individual buttons

var greenButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
document.getElementById('greenButton').innerHTML = greenButton;
console.log(greenButton);
        
var blueButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
document.getElementById('blueButton').innerHTML = blueButton;
console.log(blueButton);

var yellowButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
document.getElementById('yellowButton').innerHTML = yellowButton;
console.log(yellowButton);


// create userTotalArray 
// when user clicks a gem, the value of that gem gets pushed into userTotalArray 
var userTotalArray = [];
// userTotalArray.push(redButton);
// userTotalArray.push(greenButton);
// userTotalArray.push(blueButton);
// userTotalArray.push(yellowButton);
// console.log("userTotalArray: " + userTotalArray);
var userTotal = 0;
$(document).ready(function() {    
    
    var redButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    $('#redButton').val(redButton);
    console.log($('#redButton').val());

        $('.btn-crystal').click(function(event) {  
   
            console.log($(this).val());
            userTotalArray.push(parseInt($(this).val()));
            userTotal = (userTotal + userTotalArray);
            console.log(userTotalArray);

            userTotal = userTotalArray.reduce( function(total, amount){
                return total + amount;
            });

            $('#userTotal').text(userTotal);
            // the win/loss function goes here
        }); 
});

console.log(userTotal);


// console.log(userTotalArray);


// userTotal
// the numbers in userTotal array are added and displayed in userTotal div
// userTotal = userTotalArray.reduce( function(total, amount){
//     return total + amount;
//   });
// console.log(userTotal);

// counter = 0;
// var userTotal = counter++;
// document.getElementById('userTotalArray').innerHTML = userTotalArray;
document.getElementById('userTotal').innerHTML = userTotal;



// win-loss section
// function per click
// this is loading before the javascript--- NO!
// winCounter = 0;
// lossCounter = 0;
if (userTotal === targetNumber) {
    winCounter++;
    document.getElementById("wins").innerHTML = wins;
} else if (userTotal >= targetNumber) {
    lossCounter++;
    document.getElementById("losses").innerHTML = losses;
};
