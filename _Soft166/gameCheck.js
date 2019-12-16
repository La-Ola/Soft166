var turn = "x";
var playerOneColour = "";
var playerTwoColour = "";

$(document).ready(function() {
    //lets the players play once two different colours are selected
    $("#navbar").on("click", function(){
        playerOneColour = $(".oneDropdown").attr("data-colour");
        playerTwoColour = $(".twoDropdown").attr("data-colour");
        if (playerOneColour != "" && playerTwoColour != "" && playerOneColour != playerTwoColour) {
            window.location.href = "./website1.html";
        }
    });
    // keeps text of winner is hidden until called
    $("#win").hide();
    //event listener for each table cell to switch the player, runs functions from lights2.js to deal with light changes
    $("td").on("click", function() {
        //each colour chosen by the user is imported here and passed through to the lights2.js file
        playerOneColour = $(".oneDropdown").attr("data-colour");
        playerTwoColour = $(".twoDropdown").attr("data-colour");
        
        $(this).text(turn);
        //goes to check win function after every turn
        checkWin()
        if (turn == "x") {
            turn = "o";
            //light control for player two
            FourThroughSix(playerOneColour, playerTwoColour);

        }
        else {
            turn = "x";
            //light control for player one
            OneThroughThree(playerOneColour, playerTwoColour)
        }


    });

    //restart button function (event listener)
    $("button.restart").on("click", function() {
        //hides the winner and shows the game board, empty ready to play again
        $("#win").hide()
        $("#game-board").show();
        $("td").text("");
        turn = "x"
    });
});


//function checks every varitation for a win
function checkWin(){

    if($("#td-1-0").text() == $("#td-1-1").text() && $("#td-1-0").text() == $("#td-1-2").text() && $("#td-1-0").text() != ""
        || $("#td-2-0").text() == $("#td-2-1").text() && $("#td-2-0").text() == $("#td-2-2").text() && $("#td-2-0").text() != ""
        || $("#td-3-0").text() == $("#td-3-1").text() && $("#td-3-0").text() == $("#td-3-2").text() && $("#td-3-0").text() != ""
        || $("#td-1-0").text() == $("#td-2-0").text() && $("#td-1-0").text() == $("#td-3-0").text() && $("#td-1-0").text() != ""
        || $("#td-1-1").text() == $("#td-2-1").text() && $("#td-1-1").text() == $("#td-3-1").text() && $("#td-1-1").text() != ""
        || $("#td-1-2").text() == $("#td-2-2").text() && $("#td-1-2").text() == $("#td-3-2").text() && $("#td-1-2").text() != ""
        || $("#td-1-0").text() == $("#td-2-1").text() && $("#td-1-0").text() == $("#td-3-2").text() && $("#td-1-0").text() != ""
        || $("#td-1-2").text() == $("#td-2-1").text() && $("#td-1-2").text() == $("#td-3-0").text() && $("#td-1-2").text() != "") {

        //if a win is detected go to function win with the players turn whom won
        win();
    }
    //checks for a draw and calls the appropriate funtion
    else if ($("#td-1-0").text() != "" && $("#td-1-1").text() != "" && $("#td-1-2") &&
        $("#td-2-0").text() != "" && $("#td-2-1").text() != "" && $("#td-2-2") &&
        $("#td-3-0").text() != "" && $("#td-3-1").text() != "" && $("#td-3-2") ){

        draw(playerOneColour, playerTwoColour);
    }
}

//win grabs the player who won
function win(){
    //upon win game-board gets hidden
    $("#game-board").hide();
    //game board gets cleared
    $("td").text("");
    // displays winner
    $("#win").show().text(turn.toUpperCase() + " WINS");

    if (turn == "x"){
        //player gets passed player ones colour if they won
        player = playerOneColour;
    }
    else{
        //player passed player twos colour
        player = playerTwoColour;
    }
    //calls celebrate function and passes the players colour through to the lights2.js file
    celebrate(player);

}