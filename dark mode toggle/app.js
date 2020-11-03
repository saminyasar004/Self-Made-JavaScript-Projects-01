const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", (e) => {
  let condition = e.target.checked;
  if (condition === true) {
    document.body.classList.add("body-dark");
  } else if (condition === false) {
    document.body.classList.remove("body-dark");
  }
});
