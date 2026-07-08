// ===============================
// GET ELEMENTS
// ===============================


const temperatureInput =
document.getElementById("temperature");


const unit =
document.getElementById("unit");


const convertBtn =
document.getElementById("convert");


const resetBtn =
document.getElementById("reset");



const result =
document.getElementById("result");



const celsiusValue =
document.getElementById("celsius-value");


const fahrenheitValue =
document.getElementById("fahrenheit-value");


const kelvinValue =
document.getElementById("kelvin-value");



const weatherIcon =
document.getElementById("weather-icon");


const weatherStatus =
document.getElementById("weather-status");



const mercury =
document.getElementById("mercury");


const bulb =
document.querySelector(".bulb");


const thermoValue =
document.getElementById("thermo-value");





// ===============================
// CONVERT BUTTON
// ===============================


convertBtn.addEventListener(
"click",
convertTemperature
);





function convertTemperature(){


    let input =
    temperatureInput.value;



    // Prevent empty conversion

    if(input === ""){


        alert(
        "Please enter temperature"
        );


        return;

    }




    let value =
    Number(input);



    let celsius;



    // Conversion logic


    if(unit.value === "celsius"){


        celsius = value;

    }



    else if(unit.value === "fahrenheit"){


        celsius =
        (value - 32) * 5 / 9;

    }



    else if(unit.value === "kelvin"){


        celsius =
        value - 273.15;

    }






    let fahrenheit =
    (celsius * 9 / 5) + 32;



    let kelvin =
    celsius + 273.15;






    // Display values


    result.innerHTML =
    celsius.toFixed(2)+" °C";



    celsiusValue.innerHTML =
    celsius.toFixed(2)+" °C";



    fahrenheitValue.innerHTML =
    fahrenheit.toFixed(2)+" °F";



    kelvinValue.innerHTML =
    kelvin.toFixed(2)+" K";






    // Activate thermometer

    updateThermometer(celsius);



    // Change weather

    updateWeather(celsius);



}







// ===============================
// THERMOMETER ANIMATION
// ===============================



function updateThermometer(temp){



    let percentage;



    percentage =
    ((temp + 20) / 70) * 100;



    if(percentage < 5){

        percentage = 5;

    }



    if(percentage > 100){

        percentage = 100;

    }





    mercury.style.height =
    percentage + "%";





    thermoValue.innerHTML =
    temp.toFixed(1)+" °C";





    let color;



    if(temp < 0){


        color = "#00bfff";


    }


    else if(temp <= 30){


        color = "#00ff88";


    }


    else{


        color = "#ff4500";


    }





    mercury.style.background =
    color;



    bulb.style.background =
    color;



}








// ===============================
// WEATHER CHANGE
// ===============================



function updateWeather(temp){



    if(temp < 0){


        weatherIcon.innerHTML =
        "🌙❄️";



        weatherStatus.innerHTML =
        "Freezing Weather";



    }





    else if(temp <= 15){



        weatherIcon.innerHTML =
        "☁️🌨️";



        weatherStatus.innerHTML =
        "Cold Weather";



    }





    else if(temp <= 30){



        weatherIcon.innerHTML =
        "🌧️";



        weatherStatus.innerHTML =
        "Pleasant Rainy Weather";



    }






    else{



        weatherIcon.innerHTML =
        "☀️🔥";



        weatherStatus.innerHTML =
        "Hot Weather";



    }



}









// ===============================
// RESET BUTTON
// ===============================



resetBtn.addEventListener(
"click",
resetAll
);




function resetAll(){



    temperatureInput.value="";



    result.innerHTML =
    "0 °C";



    celsiusValue.innerHTML =
    "0°C";



    fahrenheitValue.innerHTML =
    "32°F";



    kelvinValue.innerHTML =
    "273K";



    weatherIcon.innerHTML =
    "🌡️";



    weatherStatus.innerHTML =
    "Waiting...";



    mercury.style.height =
    "0%";



    thermoValue.innerHTML =
    "0°C";



    mercury.style.background =
    "red";



    bulb.style.background =
    "red";



}