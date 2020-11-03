const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  // console.log(randomColor());
});

function randomColor() {
  return "#" + Math.floor(Math.random() * 1000000);
}
