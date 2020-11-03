// select all element
const btnShow = document.querySelector(".btnShow");
const notiEl = document.querySelector(".noti");
// addEventListener
btnShow.addEventListener("click", () => {
  createNoti();
});
// function
function createNoti() {
  const notiDiv = document.createElement("div");
  notiDiv.classList.add("toast");
  notiDiv.innerText = "this challange is crazy";
  notiEl.appendChild(notiDiv);
  setTimeout(() => {
    notiDiv.remove();
  }, 3000);
}
