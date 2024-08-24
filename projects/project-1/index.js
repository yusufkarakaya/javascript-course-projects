"use strict";
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");
let count = 0;
increment.addEventListener("click", () => {
    count++;
    counter.textContent = count.toString();
});
decrement.addEventListener("click", () => {
    count--;
    counter.textContent = count.toString();
});
reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count.toString();
});
alert("Welcome to TS Counter App");
