
	// IP address of the Hue lights bridge
	var bulbIP = "http://192.168.0.50/api/";
	// API key
	var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
	// The IDs of the light bulbs.
	var bulbID = ["1", "2", "3", "4", "5", "6"];

	//player id
	var playerOne = "";
	var playerTwo = "";

	// Brightness
	var lowbright = 60;
	var highbright = 180;

	// Magenta colours
	var lightMagenta = [0.35, 0.25];
	var magenta = [0.35, 0.2];
	var darkMagenta = [0.35, 0.15];

	// Cyan colours
	var lightCyan = [0.2, 0.275];
	var cyan = [0.1, 0.25];
	var darkCyan = [0.125, 0.18];

	// Orange colours
	var lbloodOrange = [0.6, 0.48];
	var bloodOrange = [0.6, 0.43];
	var dbloodOrange = [0.6, 0.38];

	// Lime colours
	var lightLime = [0.345, 0.55];
	var lime = [0.345, 0.65];
	var darkLime = [0.34, 0.7];

	// colours object for conecting the colourID with colour values using data atributes in the html and comparing them to the variables in js.
	var colours = { "bl-o":{ "light":lbloodOrange, "normal":bloodOrange, "dark":dbloodOrange },
				"cy":{ "light":lightCyan, "normal":cyan, "dark":darkCyan },
				"mag":{ "light":lightMagenta, "normal":magenta, "dark":darkMagenta },
				"li":{ "light":lightLime, "normal":lime, "dark":darkLime }};

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

	//player1
	function OneThroughThree()
	{
		for (var lightNum = 0; lightNum < 3; lightNum++)
		{
			var apiURL = bulbIP + apiKey + "/lights/" + bulbID[lightNum] + "/";
			ChangeColor(apiURL, playerOneColour, highbright, delay);
		}
		for (var lightNum = 3; lightNum < 6; lightNum++)
		{
			var apiURL = bulbIP + apiKey + "/lights/" + bulbID[lightNum] + "/";
			ChangeColor(apiURL, playerTwoColour, lowbright, delay);
		}
	}

	//player2
	function FourThroughSix()
	{
		for (var lightNum = 3; lightNum < 6; lightNum++)
		{
			var apiURL = bulbIP + apiKey + "/lights/" + bulbID[lightNum] + "/";
			ChangeColor(apiURL, playerTwoColour, highbright, delay);
		}
		for (var lightNum = 0; lightNum < 3; lightNum++)
		{
			var apiURL = bulbIP + apiKey + "/lights/" + bulbID[lightNum] + "/";
			ChangeColor(apiURL, playerOneColour, lowbright, delay);
		}
	}


	// On every light bulb, cycle through every colour in the "colours" array
	function OneThroughSix() {
		for(var i = 0; i < bulbID.length; i++) {
			var bulb = bulbID[i];
			var apiURL = bulbIP + apiKey + "/lights/" + bulb + "/";
			var delay = 0;
			for(var j = 0; j < colours.length; j++) {
				var colour = colours[j];
				ChangeColor(apiURL, colour, highbright, delay);
				delay += 500;
			}
		}
	}

	// Function to change the colour of a light bulb given its API URL, the desired color, the desired brightness, and the delay between switching colours
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

	// Function to change the power state of a light bulb given its API URL, and the desired power state
	function Power(url, power) {
		$.ajax({
			url:url + "state/",
			type:"PUT",
			data:JSON.stringify({ "on":power }) ,
			success:function(data){
				console.log(data);
			}
		});
	}
