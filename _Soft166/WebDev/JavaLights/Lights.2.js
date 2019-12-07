$(document).ready(function() {
	// IP address of the Hue lights bridge
	var bulbIP = "http://192.168.0.50/api/";
	// API key
	var apiKey = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
	// The IDs of the light bulbs.
	var bulbID = ["1", "2", "3", "4", "5", "6"];

	// Brightness
	var lowbright = 60;
	var highbright = 180;

	// Magenta colors
	var lightMagenta = [0.35, 0.25];
	var magenta = [0.35, 0.2];
	var darkMagenta = [0.35, 0.15];

	// Cyan colors
	var lightCyan = [0.2, 0.275];
	var cyan = [0.1, 0.25];
	var darkCyan = [0.125, 0.18];

	// Orange colors
	var lbloodOrange = [0.6, 0.48];
	var bloodOrange = [0.6, 0.43];
	var dbloodOrange = [0.6, 0.38];

	// All colors
	var colors = [lightMagenta, magenta, darkMagenta, lightCyan, cyan, darkCyan, lbloodOrange, bloodOrange, dbloodOrange];

	OneThroughSix();

	// On every light bulb, cycle through every color in the "colors" array
	function OneThroughSix() {
		for(var i = 0; i < bulbID.length; i++) {
			var bulb = bulbID[i];
			var apiURL = bulbIP + apiKey + "/lights/" + bulb + "/";
			var delay = 0;
			for(var j = 0; j < colors.length; j++) {
				var color = colors[j];
				ChangeColor(apiURL, color, highbright, delay);
				delay += 500;
			}
		}
	}

	// Function to change the color of a light bulb given its API URL, the desired color, the desired brightness, and the delay between switching colors
	function ChangeColor(url, color, brightness, delay) {
		setTimeout(function() {
			$.ajax({
				url:url + "state/",
				type:"PUT",
				data:JSON.stringify({ "on":true, "bri":brightness, "xy":color }) ,
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
});