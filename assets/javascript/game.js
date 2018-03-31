$(document).ready(function() { 
    console.log("DOM fully loaded and parsed");
    let wins = $("#wins");
    let losses = $("#loss");
    let yourWins = 0;
    let yourLosses = 0;
    let yourTotalScore = 0;
    $("#win").html(yourWins);
    $("#loss").html(yourLosses);
    let blue = 0;
    let yellow = 0;
    let green = 0;
    let red = 0;
    let computerNum = 0;

    const generateRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    // Generating random number to match
    $("#randomNum").html(generateRandomNum());

    const generateCrystalNum = function() {
        let random = Math.floor(Math.random() * 12);
        return random;
    }

    // generating random numbers for each crystal and assigning their values to declared variables above
    blue += generateCrystalNum();
    red += generateCrystalNum();
    green += generateCrystalNum();
    yellow += generateCrystalNum();

    $("button").on("click", function() {
        if(this.id === "blue") {
            yourTotalScore += blue;
        } else if(this.id === "yellow") {
            yourTotalScore += yellow;
        } else if(this.id === "red") {
            yourTotalScore += red;
        } else if(this.id === "green") {
            yourTotalScore += green;
        }
        // setting yourTotalScore equal to the value of any button pressed.
        $("#score").html(yourTotalScore);
    });

    const winOrLose() {
        if(yourTotalScore === computerNum) {
            yourWins += 1;
            alert("You win!");   
        } else if(yourTotalScore > computerNum) {
            yourlosses += 1;
            alert("You're a fucking loser!")
        }
    }
});