const increment = document.getElementById("increment") as HTMLButtonElement;
const decrement = document.getElementById("decrement") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const counter = document.getElementById("counter") as HTMLSpanElement;

let count: number = 0;

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
