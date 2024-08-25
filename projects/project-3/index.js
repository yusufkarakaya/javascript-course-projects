"use strict";
const temperature = document.getElementById("temp");
const unit = document.getElementById("unit");
const result = document.getElementById("result");
let temp;
function convert() {
    temp = Number(temperature.value); // Initialize temp with the input value
    if (isNaN(temp) || temp === 0) {
        result.innerHTML = "Invalid temperature";
        return;
    }
    if (unit.value === "c") {
        temp = (temp * 9) / 5 + 32;
        result.innerHTML = temp.toFixed(2) + "°F";
    }
    else if (unit.value === "f") {
        temp = ((temp - 32) * 5) / 9;
        result.innerHTML = temp.toFixed(2) + "°C";
    }
    else {
        result.innerHTML = "Invalid unit";
    }
}
