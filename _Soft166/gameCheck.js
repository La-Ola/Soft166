var turn = "x";
var playerOneColour = "";
var playerTwoColour = "";

$(document).ready(function() {

    //event listener for each table cell to switch the player, runs functions from lights2.js to deal with light changes
    $("td").on("click", function() {
        //each colour chosen by the user is imported here and passed through to the lights2.js file
        playerOneColour = $(".oneDropdown").attr("data-colour");
        playerTwoColour = $(".twoDropdown").attr("data-colour");

        //shows an alert if the players colours are the same or not selected
        if (playerOneColour == playerTwoColour) {
            alert("choose a different colour for each player");
        }
        //lets the players play once two different colours are selected
        else if (playerOneColour != "" && playerTwoColour != "") {
            //re-enables the board to be selected once two different colours are chosen
            if ($(this).text() == "" && !$("#game-board").hasClass("disabled")) {
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

            }
        }
    });

    $("button.restart").on("click", function() {
        $("#gameboard").show();
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
        win(turn);
    }
    //checks for a draw and calls the appropriate funtion
    else if ($("#td-1-0").text() != "" && $("#td-1-1").text() != "" && $("#td-1-2") &&
        $("#td-2-0").text() != "" && $("#td-2-1").text() != "" && $("#td-2-2") &&
        $("#td-3-0").text() != "" && $("#td-3-1").text() != "" && $("#td-3-2") ){

        draw(playerOneColour, playerTwoColour);
    }
}

//win grabs the player who won
function win(player){
    if (player == "x"){
        //player gets passed player ones colour if they won
        player = playerOneColour;
    }
    else{
        //player passed player twos colour
        player = playerTwoColour;
    }
    //timer set to delete the board
    setTimeout(function() {
        $("#game-board").hide();
        $("td").text("");
    },1100);

    //calls celebrate function and passes the players colour through to the lights2.js file
    celebrate(player);

}