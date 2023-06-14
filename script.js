// Getting elements
// Icons
const iconPlayStop = document.querySelector(".fa-play");
const iconBoardPiecesAndCoords = document.querySelector(".fa-chess");
const iconTimer = document.querySelector(".fa-clock");

//Other Elements
const body = document.querySelector("body");
const board = document.querySelector(".board");
const playingTimeText = document.querySelector(".playingTime");

let playing = true;
let piecesShowing = false;
let playingTime = playingTimeText.innerHTML;

// EVENT LISTENERS
iconPlayStop.addEventListener("click", function () {
  changeIcon();
});

iconBoardPiecesAndCoords.addEventListener("click", togglePiecesAndCoordinates);
iconTimer.addEventListener("click", togglePlayingTime);

function changeIcon() {
  if (playing) {
    playing = false;
    iconPlayStop.classList.remove("fa-play");
    iconPlayStop.classList.add("fa-pause");
  } else if (!playing) {
    playing = true;
    iconPlayStop.classList.add("fa-play");
    iconPlayStop.classList.remove("fa-pause");
  }
}

function togglePiecesAndCoordinates() {
  if (!piecesShowing) {
    piecesShowing = true;
    board.style.border = "2px solid #ffffff";
  } else if (piecesShowing) {
    piecesShowing = false;
    board.style.border = "2px solid #ffd585";
  }
}

function togglePlayingTime() {
  if (playingTime == "30") {
    playingTimeText.innerHTML = "45";
    playingTime = "45";
  } else if (playingTime == "45") {
    playingTimeText.innerHTML = "60";
    playingTime = "60";
  } else if (playingTime == "60") {
    playingTimeText.innerHTML = "30";
    playingTime = "30";
  }
}
