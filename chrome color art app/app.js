// select all elements

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btns = document.querySelectorAll(".btn");
const btnReset = document.querySelector(".btnReset");
const sizeEl = document.querySelector(".sizeEl");
const colorEl = document.querySelector(".colorEl");

// variables

let size = 5;
let color = "#000";
colorEl.value = color;
let isPressed = false;
let x = undefined;
let y = undefined;

// add eventlistener

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    document.body.style.cursor = "grabbing";
    const x1 = e.offsetX;
    const y1 = e.offsetY;
    getCircle(x, y);
    connectDots(x, y, x1, y1);
    x = x1;
    y = y1;
  } else {
    document.body.style.cursor = "default";
  }
});

colorEl.addEventListener("change", (e) => {
  let colorCode = e.target.value;
  updateColor(colorCode);
});

// functionality

function getCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function connectDots(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = color;
  ctx.stroke();
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let operationType = e.target.textContent;
    if (operationType === "+") {
      increase();
    } else {
      decrease();
    }
  });
});

function increase() {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSize();
}

function decrease() {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSize();
}

function updateSize() {
  sizeEl.innerText = size;
}

function updateColor(colorCode) {
  color = colorCode;
}
