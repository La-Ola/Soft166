$(document).ready(function() {

	//event listeners for making the colours in the drop down connect to the js colours
	$(".oneDropdown a").on("click", function () {
		var oneID = $(this).data("colour");
		playerOneColour = colours[oneID];
		$(".oneDropdown").attr("data-colour", oneID);
		playerOneColour["normal"];
	});
	$(".twoDropdown a").on("click", function (){
		var twoID = $(this).data("colour");
		playerTwoColour = colours[twoID];
		$(".twoDropdown").attr("data-colour", twoID);
		playerTwoColour["normal"];
	});
});

// IP address of the Hue lights bridge
var bulbIPadd = "http://192.168.0.50/api/";
// API key
var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
// The IDs of the light bulbs.
var bulbIDarray = ["1", "2", "3", "4", "5", "6"];

// Brightness
var lowbright = 60;
var highbright = 180;

// Magenta colours
var lightMagenta = [0.35, 0.25];
var magenta = [0.35, 0.2];
var darkMagenta = [0.35, 0.15];

// Cyan colours
var lightCyan = [0.27, 0.32];
var cyan = [0.2, 0.32];
var darkCyan = [0.1, 0.32];

// Orange colours
var lbloodOrange = [0.5, 0.4];
var bloodOrange = [0.6, 0.4];
var dbloodOrange = [0.7, 0.4];

// Lime colours
var lightLime = [0.345, 0.4];
var lime = [0.345, 0.5];
var darkLime = [0.34, 0.7];

// colours object for connecting the colourID with colour values using data atributes in the html and comparing them to the variables in js.
var colours = { "bl-o":{ "light":lbloodOrange, "normal":bloodOrange, "dark":dbloodOrange },
	"cy":{ "light":lightCyan, "normal":cyan, "dark":darkCyan },
	"mag":{ "light":lightMagenta, "normal":magenta, "dark":darkMagenta },
	"li":{ "light":lightLime, "normal":lime, "dark":darkLime }};

//player1
//runst lights 1, 2, and 3 for player one. pulls in player one an dplayer twos colors
function OneThroughThree(playerOne,playerTwo) {
	delay = 0;
	//first for loop accounts first three lights
	//gives creates a url with changing bulb id
	//pulls apiURL, player colour, the brightness and a delay into the colour function
	for (var lightNum = 0; lightNum < 3; lightNum++)
	{
		var apiURL = bulbIPadd + apiKey + "/lights/" + bulbIDarray[lightNum] + "/";
		ChangeColour(apiURL, colours[playerOne]["normal"], highbright, delay);
	}
	//second for loop accounts for the last three lights
	//gives creates a url with changing bulb id
	//pulls apiURL, player colour, the brightness and a delay into the colour function.
	//brightnes low because it isnt player twos turn
	for (var lightNum = 3; lightNum < 6; lightNum++)
	{
		var apiURL = bulbIPadd + apiKey + "/lights/" + bulbIDarray[lightNum] + "/";
		ChangeColour(apiURL, colours[playerTwo]["normal"], lowbright, delay);
	}
}

//player2
// this function does the same as one through three but the other way round for player two
function FourThroughSix(playerOne,playerTwo)
{
	delay = 0;
	for (var lightNum = 3; lightNum < 6; lightNum++)
	{
		var apiURL = bulbIPadd + apiKey + "/lights/" + bulbIDarray[lightNum] + "/";
		ChangeColour(apiURL, colours[playerTwo]["normal"], highbright, delay);
	}
	for (var lightNum = 0; lightNum < 3; lightNum++)
	{
		var apiURL = bulbIPadd + apiKey + "/lights/" + bulbIDarray[lightNum] + "/";
		ChangeColour(apiURL, colours[playerOne]["normal"], lowbright, delay);
	}
}

// light function to "celebrate upon winning
function celebrate(player) {
	for (var loop = 0; loop < 20; loop++) {
		//loops through all 6 lights
		for (var i = 0; i < bulbIDarray.length; i++) {
			var bulb = bulbIDarray[i];
			//adapting apiURL to light up each light
			var apiURL = bulbIPadd + apiKey + "/lights/" + bulb + "/";
			//gets colour code for the winners colour
			var winner = colours[player];
			//gets the keys within the winners key i.e light, normal, dark
			var smallKeys = Object.keys(winner);
			// loops through the the inner keys
			for (var k = 0; k < smallKeys.length; k++) {
				//changes colour between light normal and dark and passes to change colour method
				var colour = winner[smallKeys[k]];
				ChangeColour(apiURL, colour, highbright, delay);
				delay += 50;
			}
		}
	}
}

//light function in the case of a draw.
// behaves the same way as celebrate function but has both the players colours
function draw(playerOne, playerTwo){
	for (var flash = 0; flash < 10; flash ++) {
		for (var i = 0; i < 3; i++) {
			var bulb = bulbIDarray[i];
			var apiURL = bulbIPadd + apiKey + "/lights/" + bulb + "/";

			var winner = colours[playerOne];
			var smallKeys = Object.keys(winner);

			for (var k = 0; k < smallKeys.length; k++) {
				var colour = winner[smallKeys[k]];
				ChangeColour(apiURL, colour, highbright, delay);
				delay += 50;
			}
		}

		for (var i = 3; i < 6; i++) {
			var bulb = bulbIDarray[i];
			var apiURL = bulbIPadd + apiKey + "/lights/" + bulb + "/";

			var winner = colours[playerTwo];
			var smallKeys = Object.keys(winner);

			for (var k = 0; k < smallKeys.length; k++) {
				var colour = winner[smallKeys[k]];
				ChangeColour(apiURL, colour, highbright, delay);
				delay += 50;
			}
		}
	}
	//hides game board
	$("#game-board").hide();
	//clears the board
	$("td").text("");
	//displayes the board
	$("#win").show().text("DRAW");
}

// Function to change the colour of a light bulb given its API URL, the desired colour, the desired brightness, and the delay between switching colours
function ChangeColour(url, colour, brightness, delay) {
	setTimeout(function() {
		$.ajax({
			url:url + "state/",
			type:"PUT",
			data:JSON.stringify({ "on":true, "bri":brightness, "xy":colour }) ,
			success:function(data){
				console.log(data);
			}
		});
	}, delay);
}