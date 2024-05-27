function convertTemperatureRange(){}
        document.getElementById("tempConverterForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents the default form submission

            // Getting user inputs
            const startTemp = parseFloat(document.getElementById("startTemp").value);
            const endTemp = parseFloat(document.getElementById("endTemp").value);
            const scale = document.getElementById("scale").value;

            // Function to convert temperatures
            function convertTemperatureRange(startValue, endValue, scale) {
                if (scale === "C") {
                    for (let temp = startValue; temp <= endValue; temp++) {
                        const convertedTemp = (temp * 9/5) + 32;
                        document.getElementById("result").innerHTML += `<p>${temp}°C is equal to ${convertedTemp.toFixed(2)}°F</p>`;
                    }
                } else if (scale === "F") {
                    for (let temp = startValue; temp <= endValue; temp++) {
                        const convertedTemp = (temp - 32) * 5/9;
                        document.getElementById("result").innerHTML += `<p>${temp}°F is equal to ${convertedTemp.toFixed(2)}°C</p>`;
                    }
                } else {
                    document.getElementById("result").innerHTML = "Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.";
                }
            }

            // Clear previous results
            document.getElementById("result").innerHTML = "";

            // Calling the conversion function
            convertTemperatureRange(startTemp, endTemp, scale);
        });