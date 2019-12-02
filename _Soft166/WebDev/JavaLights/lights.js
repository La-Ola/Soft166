//wait for Document Object Model (DOM) to load
$(document).ready(function() {

   // creates variables for bulbs
   var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
   var bulbIP = "http://192.168.0.50/api/";
   var bulbID = [1, 2, 3, 4, 5, 6];

   //light functions
   var lowbright = 60;
   var highbright = 180;

   var lightMagenta = [0.35, 0.25];
   var magenta = [0.35, 0.2];
   var darkMagenta = [0.35, 0.15];

   var lightCyan = [0.2, 0.275];
   var cyan = [0.1, 0.25];
   var darkCyan = [0.125, 0.18];

   var lbloodOrange = [0.6, 0.48];
   var bloodOrange = [0.6, 0.43];
   var dbloodOrange = [0.6, 0.38];


   OneThroughSix();
   //player1
   function OneThroughThree()
   {
      for (var i = 0; i < 3; i++)
      {
         var apiURL = bulbIP + apiKey + "/lights/" + bulbID[i] + "/";
         PerformAction("off", apiURL);

      }
   }

   //player2
   function FourThroughSix()
   {
      for (var j = 3; j < 6; j++)
      {
         var apiURL = bulbIP + apiKey + "/lights/" + bulbID[j] + "/";
         PerformAction("on", apiURL);
      }
   }

   function OneThroughSix()
   {
      for (var k = 0; k < 6; k++)
      {
         var apiURL = bulbIP + apiKey + "/lights/" + bulbID[k] + "/";
         PerformAction("on", apiURL);
      }
   }

   function PerformAction(action, url) {
      if(action == "on") {
         $.ajax({
            url:url + "state/",
            type:"PUT",
            data: JSON.stringify({"on": true, "bri": lowbright, "xy": dbloodOrange}) ,
            success:function(data){
               console.log(data);
            }
         });
      }
      else if(action == "off"){
         $.ajax({
            url:url + "state/",
            type:"PUT",
            data: JSON.stringify({"on": false}) ,
            success:function(data){
               console.log(data);
            }
         });
      }
   }







});