// Getting elements

const playStop = document.querySelector(".fa-play");
const boardPiecesAndCoords = document.querySelector(".fa-chess");
const body = document.querySelector("body");
const board = document.querySelector(".board");

let playing = true;
let piecesShowing = false;

playStop.addEventListener("click", function () {
  changeIcon();
});

boardPiecesAndCoords.addEventListener("click", togglePiecesAndCoordinates);

function changeIcon() {
  if (playing) {
    playing = false;
    playStop.classList.remove("fa-play");
    playStop.classList.add("fa-pause");
  } else if (!playing) {
    playing = true;
    playStop.classList.add("fa-play");
    playStop.classList.remove("fa-pause");
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
