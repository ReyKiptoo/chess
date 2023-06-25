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
const topPieces = document.querySelectorAll(".board .fa-solid");
const bottomPieces = document.querySelectorAll(".board .fa-regular");
const coordsQuizText = document.querySelector(".coordsQuiz");

// Selecting the grid
const squares1 = document.querySelectorAll(".row1 div");
const squares2 = document.querySelectorAll(".row2 div");
const squares3 = document.querySelectorAll(".row3 div");
const squares4 = document.querySelectorAll(".row4 div");
const squares5 = document.querySelectorAll(".row5 div");
const squares6 = document.querySelectorAll(".row6 div");
const squares7 = document.querySelectorAll(".row7 div");
const squares8 = document.querySelectorAll(".row8 div");

//Array of all possible coordinates
const array1 = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"];
const array2 = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"];
const array3 = ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"];
const array4 = ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"];
const array5 = ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"];
const array6 = ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"];
const array7 = ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"];
const array8 = ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"];

const fullCoordsArray = [
  ...array1,
  ...array2,
  ...array3,
  ...array4,
  ...array5,
  ...array6,
  ...array7,
  ...array8,
];

const fullSquaresArray = Array.from(squares1).concat(
  Array.from(squares2).concat(
    Array.from(squares3).concat(
      Array.from(squares4).concat(
        Array.from(squares5).concat(
          Array.from(squares6).concat(
            Array.from(squares7).concat(Array.from(squares8))
          )
        )
      )
    )
  )
);

fullSquaresArray.forEach(function (square, index) {
  square.addEventListener("click", checkAccuracyOfUserChoice);
});
const randomCoordinate = fullCoordsArray[randomIntFromInterval(0, 63)];
console.log(randomCoordinate);

let playing = false;
let piecesShowing = false;
let coordsShowing = false;
let whitePlay = false;
let playingTime = playingTimeText.innerHTML;

let gameTimer;
console.log(playingTime);
// Event listeners for clicks for changing UI
iconPlayStop.addEventListener("click", changeIcon);
iconBoardPiecesAndCoords.addEventListener("click", togglePiecesAndCoordinates);
iconTimer.addEventListener("click", togglePlayingTime);
iconBlackPlay.addEventListener("click", setPlayUIToBlack);
iconWhitePlay.addEventListener("click", setPlayUIToWhite);

// Function to countdown the 3 seconds timer then immediately begin the game timer

function countDown3() {
  playing = true;
  let timer = 3;
  const myTimer = setInterval(function () {
    coordsQuizText.textContent = timer;
    if (timer === 0) {
      clearInterval(myTimer);
      coordsQuizText.textContent = randomCoordinate;
      let time = Number(playingTime);
      gameTimer = setInterval(function () {
        playingTimeText.textContent = time;

        if (time === 0) {
          clearInterval(gameTimer);
          console.log(`GAME OVER`);
        }
        time--;
      }, 1000);
    }
    timer--;
  }, 1000);
}

function checkAccuracyOfUserChoice() {
  const square = this;
  const originalColor = getComputedStyle(this).backgroundColor;
  this.style.backgroundColor = "#a2d898";
  setTimeout(function () {
    square.style.backgroundColor = originalColor;
  }, 100);
}

function changeIcon() {
  if (!playing) {
    iconPlayStop.classList.remove("fa-play");
    iconPlayStop.classList.add("fa-pause");
  } else if (playing) {
    iconPlayStop.classList.add("fa-play");
    iconPlayStop.classList.remove("fa-pause");
  }
  countDown3();
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

  // Change top pieces to white and bottom pieces to black
  for (const piece of topPieces) {
    piece.classList.remove("fa-solid");
    piece.classList.add("fa-regular");
  }
  for (const piece of bottomPieces) {
    piece.classList.remove("fa-regular");
    piece.classList.add("fa-solid");
  }
}
function setPlayUIToWhite() {
  whitePlay = true;
  whiteWrapper.style.border = "2px solid black";
  blackWrapper.style.border = "none";
  rank.style.flexDirection = "column";
  file.style.flexDirection = "row";

  // change top pieces to black and bottom pieces to white
  for (const piece of topPieces) {
    piece.classList.remove("fa-regular");
    piece.classList.add("fa-solid");
  }
  for (const piece of bottomPieces) {
    piece.classList.remove("fa-solid");
    piece.classList.add("fa-regular");
  }
}

// Function to generate random number between two numbers
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
