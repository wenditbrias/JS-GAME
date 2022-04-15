let difficult = "hard";
let theColor = "";

const colorTxt = document.getElementById("colorTxt");
const hard = document.getElementById("hard");
const easy = document.getElementById("easy");
const colorContainer = document.querySelector(".color");
const reset = document.getElementById("reset");
const message = document.querySelector(".message");

reset.innerHTML = "New Colors";

function GenerateColor() {
  let r, g, b;
  r = Math.floor(Math.random() * 255) + 1;
  g = Math.floor(Math.random() * 255) + 1;
  b = Math.floor(Math.random() * 255) + 1;

  return `${r},${g},${b}`;
}

function ColorStore() {
  const color = [];
  if (difficult == "hard") {
    hard.classList.add("styled");
    easy.classList.remove("styled");
    for (let i = 0; i < 6; i++) {
      color.push(GenerateColor());
    }
  } else {
    easy.classList.add("styled");
    hard.classList.remove("styled");
    for (let i = 0; i < 3; i++) {
      color.push(GenerateColor());
    }
  }

  return color;
}

function displayColor() {
  let temp = "";
  const color = ColorStore();
  const randomIndex = Math.floor(Math.random() * color.length);
  colorTxt.innerHTML = `RGB(${color[randomIndex]})`;
  theColor.innerHTML = colorTxt.innerHTML;
  color.map((item, key) => {
    temp += `<div class="box" onclick="colorPicker(this)" style="background-color:rgb(${item}); color:rgb(${item});">
    rgb(${item})
    </div>`;
  });

  colorContainer.innerHTML = temp;
}

function colorPicker(that) {
  const colorCheck = that.innerHTML;
  if (colorTxt.innerHTML.trim().toLowerCase() == colorCheck.trim()) {
    message.innerHTML = "GOOD JOB";
    reset.innerHTML = "Play Again?";
    const allElement = Array.from(that.parentElement.children);
    allElement.map((item) => {
      item.style.backgroundColor = `${that.style.backgroundColor}`;
      item.style.opacity = "1";
    });
  } else {
    that.style.opacity = "0";
    message.innerHTML = "TRY AGAIN";
  }
}

function resetColor() {
  message.innerHTML = "";
  reset.innerHTML = "New Colors";
  difficult = "hard";
  hard.classList.remove("styled");
  easy.classList.remove("styled");
  displayColor();
}

function difficultHandler(e) {
  difficult = e.target.innerHTML;
  difficult = difficult.toLowerCase();
  displayColor();
}

reset.addEventListener("click", resetColor);
hard.addEventListener("click", difficultHandler);
easy.addEventListener("click", difficultHandler);

window.addEventListener("DOMContentLoaded", displayColor);
