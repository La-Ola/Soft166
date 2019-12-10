var turn = "x";
var playerOneColour = "";
var playerTwoColour = "";

$(document).ready(function() {


    $("td").on("click", function() {
        playerOneColour = $(".oneDropdown").attr("data-colour");
        playerTwoColour = $(".twoDropdown").attr("data-colour");

        if (playerOneColour == playerTwoColour){
            alert("choose a different colour for each player");
        }
        else if (playerOneColour != "" && playerTwoColour != "") {
            if ($(this).text() == "" && !$("#game-board").hasClass("disabled")) {
                $(this).text(turn);
                checkWin()
                if (turn == "x") {
                    turn = "o";
                    FourThroughSix(playerOneColour, playerTwoColour);

                }
                else {
<<<<<<< Updated upstream
                   turn = "x";
                   OneThroughThree()
               }

           }
       }
       else{
           alert("choose a colour for each player");
       }
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

            win(turn);

       }
   }

   //dispplays winner and disables the board
   function win(player){
       console.log(player);
       //disables gameboard
       $("#game-board").addClass("disabled");
   }
=======
                    turn = "x";
                    OneThroughThree(playerOneColour, playerTwoColour);
                }

            }
        }
        else{
            alert("choose a colour for each player");
        }
    });

>>>>>>> Stashed changes

});



function checkWin(){

    if($("#td-1-0").text() == $("#td-1-1").text() && $("#td-1-0").text() == $("#td-1-2").text() && $("#td-1-0").text() != ""
        || $("#td-2-0").text() == $("#td-2-1").text() && $("#td-2-0").text() == $("#td-2-2").text() && $("#td-2-0").text() != ""
        || $("#td-3-0").text() == $("#td-3-1").text() && $("#td-3-0").text() == $("#td-3-2").text() && $("#td-3-0").text() != ""
        || $("#td-1-0").text() == $("#td-2-0").text() && $("#td-1-0").text() == $("#td-3-0").text() && $("#td-1-0").text() != ""
        || $("#td-1-1").text() == $("#td-2-1").text() && $("#td-1-1").text() == $("#td-3-1").text() && $("#td-1-1").text() != ""
        || $("#td-1-2").text() == $("#td-2-2").text() && $("#td-1-2").text() == $("#td-3-2").text() && $("#td-1-2").text() != ""
        || $("#td-1-0").text() == $("#td-2-1").text() && $("#td-1-0").text() == $("#td-3-2").text() && $("#td-1-0").text() != ""
        || $("#td-1-2").text() == $("#td-2-1").text() && $("#td-1-2").text() == $("#td-3-0").text() && $("#td-1-2").text() != "") {

        win(turn);

    }
}

function win(player){
    if (player == "x"){
        player = playerOneColour;
    }
    else{
        player = playerTwoColour;
    }
    $("#game-board").addClass("disabled");
    callCelebration(player);
}

function callCelebration(player){
    celebrate(player);
}