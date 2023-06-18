// Getting elements
// Icons
const iconPlayStop = document.querySelector(".fa-play");
const iconBoardPiecesAndCoords = document.querySelector(".fa-chess");
const iconTimer = document.querySelector(".fa-clock");
const iconWhitePlay = document.querySelector(".whiteWrapper i");
const iconBlackPlay = document.querySelector(".blackWrapper i");

//Other Elements
const body = document.querySelector("body");
const board = document.querySelector(".board");
const playingTimeText = document.querySelector(".playingTime");
const rank = document.querySelector(".rank");
const file = document.querySelector(".file");
const pieces = document.querySelectorAll(".piece");
const whiteWrapper = document.querySelector(".whiteWrapper");
const blackWrapper = document.querySelector(".blackWrapper");

let playing = true;
let piecesShowing = false;
let coordsShowing = false;
let whitePlay = false;
let playingTime = playingTimeText.innerHTML;

// Event listeners for clicks
iconPlayStop.addEventListener("click", changeIcon);
iconBoardPiecesAndCoords.addEventListener("click", togglePiecesAndCoordinates);
iconTimer.addEventListener("click", togglePlayingTime);
iconBlackPlay.addEventListener("click", setPlayUIToBlack);
iconWhitePlay.addEventListener("click", setPlayUIToWhite);

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
  if (!coordsShowing) {
    coordsShowing = true;
    rank.style.display = "flex";
    file.style.display = "flex";
  } else if (coordsShowing) {
    if (!piecesShowing) {
      piecesShowing = true;
      for (const piece of pieces) {
        piece.style.visibility = "visible";
      }
    } else if (piecesShowing) {
      // This means peices and coords are showing so hide pieces, then hide coords
      piecesShowing = false;
      coordsShowing = false;
      rank.style.display = "none";
      file.style.display = "none";
      for (const piece of pieces) {
        piece.style.visibility = "hidden";
      }
    }
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

function setPlayUIToBlack() {
  whitePlay = false;
  whiteWrapper.style.border = "none";
  blackWrapper.style.border = "2px solid black";
  rank.style.flexDirection = "column-reverse";
  file.style.flexDirection = "row-reverse";
}
function setPlayUIToWhite() {
  whitePlay = true;
  whiteWrapper.style.border = "2px solid black";
  blackWrapper.style.border = "none";
  rank.style.flexDirection = "column";
  file.style.flexDirection = "row";
}
