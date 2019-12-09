$(document).ready(function() {
    var turn = "x";
    var playerOneColour = "";
    var playerTwoColour = "";

   $("td").on("click", function() {
       playerOneColour = $(".oneDropdown").attr("data-colour");
       playerTwoColour = $(".twoDropdown").attr("data-colour");

       //make sure the two players dont have the same light colour
       if (playerOneColour == playerTwoColour){
           alert("choose a different colour for each player");
       }
       //make sure a colour is chosen before you can play
       else if (playerOneColour != "" && playerTwoColour != "") {
           if ($(this).text() == "" && !$("#game-board").hasClass("disabled")) {
               $(this).text(turn);
               checkWin()
               if (turn == "x") {
                   turn = "o";
                   FourThroughSix()
               }
                else {
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

});
