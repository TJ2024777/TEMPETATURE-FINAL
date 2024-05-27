<script>
function convertTemperature() 
    var temperatureInput = document.getElementById("temperature").value;
    var scale = document.getElementById("scale").value;
    var convertedTemperature;

    if (scale === "C") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        document.getElementById("result").innerHTML = temperatureInput + " Celsius is " + convertedTemperature + " Fahrenheit.";
    } else if (scale === "F") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        document.getElementById("result").innerHTML = temperatureInput + " Fahrenheit is " + convertedTemperature + " Celsius.";
    } else {
        document.getElementById("result").innerHTML = "Invalid scale. Please select either Celsius or Fahrenheit.";
    }
</script>