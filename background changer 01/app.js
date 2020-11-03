// selection all element

const colorEL = document.querySelector(".color");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

// addeventlistener

btn.addEventListener("click", () => {
  color = colorEL.value;
  container.style.background = color;
});

// functionality
