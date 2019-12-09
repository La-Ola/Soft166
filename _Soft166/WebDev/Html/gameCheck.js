$(document).ready(function() {
    var turn = "x";
    var playerOneColour = "";
    var playerTwoColour = "";

   $("td").on("click", function() {
       playerOneColour = $(".oneDropdown").attr("data-colour");
       playerTwoColour = $(".twoDropdown").attr("data-colour");

       if (playerOneColour != "" && playerTwoColour != "") {
           if ($(this).text() == "" && !$("#game-board").hasClass("disabled")) {
               $(this).text(turn);
               checkWin()
               if (turn == "x") {
                   turn = "o";
               } else {
                   turn = "x";
               }

           }
       }
       else{
           alert("choose a colour for each player");
       }
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
       console.log(player);
       $("#game-board").addClass("disabled");
   }

});
