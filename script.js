// Getting elements

const playStop = document.querySelector(".fa-play");
const body = document.querySelector("body");

playStop.addEventListener("click", function () {
  console.log("Play Clicked");
  playStop.classList.remove("fa-play");
  playStop.classList.remove("fa-pause");
});
