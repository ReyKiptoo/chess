// Getting elements

const playStop = document.querySelector(".fa-play");
const body = document.querySelector("body");

let playing = true;

console.log(playStop);
playStop.addEventListener("click", function () {
  if (playing) {
    playing = false;
    playStop.classList.remove("fa-play");
    playStop.classList.add("fa-pause");
  } else if (!playing) {
    playStop.classList.add("fa-play");
    playStop.classList.remove("fa-pause");
  }
});
