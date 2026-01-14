let number = document.getElementById("number");
let count = 0;

function plus() {
  count++;
  number.textContent = count;
}

function minus() {
  count--;
  number.textContent = count;
}

function reset() {
  count = 0;
  number.textContent = count;
}