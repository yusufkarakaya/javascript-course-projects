const temperature = document.getElementById("temp") as HTMLInputElement;
const unit = document.getElementById("unit") as HTMLSelectElement;
const result = document.getElementById("result") as HTMLSpanElement;

let temp: number;

function convert() {
  temp = Number(temperature.value); // Initialize temp with the input value

  if (isNaN(temp) || temp === 0) {
    result.innerHTML = "Invalid temperature";
    return;
  }

  if (unit.value === "c") {
    temp = (temp * 9) / 5 + 32;
    result.innerHTML = temp.toFixed(2) + "°F";
  } else if (unit.value === "f") {
    temp = ((temp - 32) * 5) / 9;
    result.innerHTML = temp.toFixed(2) + "°C";
  } else {
    result.innerHTML = "Invalid unit";
  }
}
