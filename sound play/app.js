const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  document.body.appendChild(btn);
  btn.addEventListener("click", () => {
    pauseSong();
    document.getElementById(sound).play();
    document.getElementById(sound).volume = 0.05;
  });
});

function pauseSong() {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  });
}
