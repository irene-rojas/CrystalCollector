// target number array 5-20
var targetNumberArray = [];
for (var i = 19; i <= 120; i++) {
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
var buttonValuesArray = [];
for (var i = 1; i <= 12; i++) {
    buttonValuesArray.push(i);
}
console.log(buttonValuesArray);


// create userTotalArray 
// when user clicks a crystal, the value of that crystal gets pushed into userTotalArray 
var userTotalArray = [];
var userTotal = 0;
var winCounter = 0;
var lossCounter = 0;

$(document).ready(function() {    
    // red button
    var redButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    $('#redButton').val(redButton);
    console.log($('#redButton').val());
    // green button
    var greenButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    $('#greenButton').val(greenButton);
    console.log($('#greenButton').val());
    // blue button
    var blueButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    $('#blueButton').val(blueButton);
    console.log($('#blueButton').val());
    // yellow button
    var yellowButton = buttonValuesArray[Math.floor(Math.random()*buttonValuesArray.length)];
    $('#yellowButton').val(yellowButton);
    console.log($('#yellowButton').val());
    
        // on any button click, function executes
        $('.btn-crystal').click(function(event) {  
   
            console.log($(this).val());
            userTotalArray.push(parseInt($(this).val()));
            userTotal = (userTotal + userTotalArray);
            console.log(userTotalArray);
            // turns the numbers in the userTotalArray into a sum
            userTotal = userTotalArray.reduce( function(total, amount){
                return total + amount;
            });
            // writes userTotal to HTML
            $('#userTotal').text(userTotal);
            // the win/loss function goes here
            if (userTotal === targetNumber) {
                winCounter++;
                $("#wins").text(winCounter);
                    // location.reload(true);
                    // I could not figure out a way to refresh just the targetumber/userTotal section.
            } 
            else if (userTotal >= targetNumber) {
                lossCounter++;
                $("#losses").text(lossCounter);
                // reset these variables, back to userTotalArray=[]
                // reset buttonValuesArray
                // location.reload(true);
            };
        }) 
    $("button").click(function(){
        location.reload(true);
    //     // I could not figure out a way to refresh just the targetumber/userTotal section.
    });
});

// console.log(userTotal);

document.getElementById('userTotal').innerHTML = userTotal;