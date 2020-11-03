const imgEl = document.getElementById("images");

const imgs = document.querySelectorAll("img");

let index = 0;

function runCarousel() {
  index++;
  if (index > imgs.length - 1) {
    index = 0;
  }

  imgEl.style.transform = `translateX(${-index * 400}px)`;
}

setInterval(runCarousel, 2000);
