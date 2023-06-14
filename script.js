// Getting elements

const playStop = document.querySelector(".fa-play");
const body = document.querySelector("body");

console.log(playStop);
playStop.addEventListener("click", function () {
  console.log("Play Clicked");
  playStop.classList.remove("fa-play");
  console.log(playStop);
  playStop.classList.add("fa-pause");
  console.log(playStop);
});
