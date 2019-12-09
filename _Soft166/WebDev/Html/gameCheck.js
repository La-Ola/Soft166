$(document).ready(function() {
    var turn = "x";
   $("td").on("click", function() {
       //if (playerOne !="" && playerTwo != ""){}
           if($(this).text() == "" && !$("#game-board").hasClass("disabled")) {
               $(this).text(turn);
               checkWin()
               if(turn == "x") {
                   turn = "o";
               }
               else {
                   turn = "x";
               }

           }
       //else{ alert("choose a colour for each player")}
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
