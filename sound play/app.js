// to define all sounds name
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// sounds for each function
sounds.forEach((sound) => {
  // create button for all sounds
  const btn = document.createElement("button");
  //   give a class name to button
  btn.classList.add("btn");
  //   button text
  btn.innerText = sound;
  //   append the button
  document.body.appendChild(btn);
  btn.addEventListener("click", () => {
    //     when click a once button pause all other sounds
    pauseSong();
    document.getElementById(sound).play();
    //     set the sound volume
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
