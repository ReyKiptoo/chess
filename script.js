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
const scoreText = document.querySelector("header h3");

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

const whitePlayMap = new Map([
  ["11", "a8"],
  ["12", "b8"],
  ["13", "c8"],
  ["14", "d8"],
  ["15", "e8"],
  ["16", "f8"],
  ["17", "g8"],
  ["18", "h8"],
  ["21", "a7"],
  ["22", "b7"],
  ["23", "c7"],
  ["24", "d7"],
  ["25", "e7"],
  ["26", "f7"],
  ["27", "g7"],
  ["28", "h7"],
  ["31", "a6"],
  ["32", "b6"],
  ["33", "c6"],
  ["34", "d6"],
  ["35", "e6"],
  ["36", "f6"],
  ["37", "g6"],
  ["38", "h6"],
  ["41", "a5"],
  ["42", "b5"],
  ["43", "c5"],
  ["44", "d5"],
  ["45", "e5"],
  ["46", "f5"],
  ["47", "g5"],
  ["48", "h5"],
  ["51", "a4"],
  ["52", "b4"],
  ["53", "c4"],
  ["54", "d4"],
  ["55", "e4"],
  ["56", "f4"],
  ["57", "g4"],
  ["58", "h4"],
  ["61", "a3"],
  ["62", "b3"],
  ["63", "c3"],
  ["64", "d3"],
  ["65", "e3"],
  ["66", "f3"],
  ["67", "g3"],
  ["68", "h3"],
  ["71", "a2"],
  ["72", "b2"],
  ["73", "c2"],
  ["74", "d2"],
  ["75", "e2"],
  ["76", "f2"],
  ["77", "g2"],
  ["78", "h2"],
  ["81", "a1"],
  ["82", "b1"],
  ["83", "c1"],
  ["84", "d1"],
  ["85", "e1"],
  ["86", "f1"],
  ["87", "g1"],
  ["88", "h1"],
]);

const blackPlayMap = new Map([
  ["11", "h1"],
  ["12", "g1"],
  ["13", "f1"],
  ["14", "e1"],
  ["15", "d1"],
  ["16", "c1"],
  ["17", "b1"],
  ["18", "a1"],
  ["21", "h2"],
  ["22", "g2"],
  ["23", "f2"],
  ["24", "e2"],
  ["25", "d2"],
  ["26", "c2"],
  ["27", "b2"],
  ["28", "a2"],
  ["31", "h3"],
  ["32", "g3"],
  ["33", "f3"],
  ["34", "e3"],
  ["35", "d3"],
  ["36", "c3"],
  ["37", "b3"],
  ["38", "a3"],
  ["41", "h4"],
  ["42", "g4"],
  ["43", "f4"],
  ["44", "e4"],
  ["45", "d4"],
  ["46", "c4"],
  ["47", "b4"],
  ["48", "a4"],
  ["51", "h5"],
  ["52", "g5"],
  ["53", "f5"],
  ["54", "e5"],
  ["55", "d5"],
  ["56", "c5"],
  ["57", "b5"],
  ["58", "a5"],
  ["61", "h6"],
  ["62", "g6"],
  ["63", "f6"],
  ["64", "e6"],
  ["65", "d6"],
  ["66", "c6"],
  ["67", "b6"],
  ["68", "a6"],
  ["71", "h7"],
  ["72", "g7"],
  ["73", "f7"],
  ["74", "e7"],
  ["75", "d7"],
  ["76", "c7"],
  ["77", "b7"],
  ["78", "a7"],
  ["81", "h8"],
  ["82", "g8"],
  ["83", "f8"],
  ["84", "e8"],
  ["85", "d8"],
  ["86", "c8"],
  ["87", "b8"],
  ["88", "a8"],
]);

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

// adding event listener to board for event propagation
board.addEventListener("click", function (e) {
  checkAccuracyOfUserChoice(e, "12");
});
let boardActive = false;
let playing = false;
let piecesShowing = false;
let coordsShowing = false;
let whitePlay = true;
let playingTime = playingTimeText.innerHTML;
let currentQuiz = fullCoordsArray[randomIntFromInterval(0, 63)];
let score;

// Event listeners for clicks for changing UI
iconPlayStop.addEventListener("click", startGame);
iconBoardPiecesAndCoords.addEventListener("click", togglePiecesAndCoordinates);
iconTimer.addEventListener("click", togglePlayingTime);
iconBlackPlay.addEventListener("click", setPlayUIToBlack);
iconWhitePlay.addEventListener("click", setPlayUIToWhite);

function changeIcon() {
  if (playing) {
    iconPlayStop.classList.remove("fa-play");
    iconPlayStop.classList.add("fa-pause");
  } else if (!playing) {
    iconPlayStop.classList.add("fa-play");
    iconPlayStop.classList.remove("fa-pause");
  }
}

function startGame() {
  if (!playing) {
    playing = true;
    playingTime = playingTimeText.innerHTML;
    scoreText.textContent = "0";
    changeIcon();
    let timer = 3;
    const startTimer = setInterval(function () {
      coordsQuizText.textContent = timer;
      if (timer === 0) {
        boardActive = true;
        playingTime--;
        clearInterval(startTimer);
        coordsQuizText.textContent = currentQuiz;
        const runTimer = setInterval(function () {
          playingTimeText.textContent = String(playingTime).padStart(2, "0");
          if (playingTime === 0) {
            boardActive = false;
            clearInterval(runTimer);
            setTimeout(function () {
              resetGame();
            }, 2500);
          }
          playingTime--;
        }, 1000);
      }
      timer--;
    }, 1000);
  }
}

function resetGame() {
  playing = false;
  playingTimeText.textContent = "30";
  changeIcon();
}
function checkAccuracyOfUserChoice(e) {
  if (boardActive) {
    coordsQuizText.textContent = currentQuiz;
    const square = e.target.closest(".col");
    const col = square.classList[1];
    const row = square.parentNode.classList[1];
    const userSol = row
      .charAt(row.length - 1)
      .concat(col.charAt(col.length - 1));
    const originalColor = getComputedStyle(square).backgroundColor;
    if (whitePlay) {
      if (whitePlayMap.get(userSol) == currentQuiz) {
        square.style.backgroundColor = "#00FF00";
        scoreText.textContent++;
      } else {
        square.style.backgroundColor = "#FF0000";
      }
    } else {
      if (blackPlayMap.get(userSol) == currentQuiz) {
        square.style.backgroundColor = "#00FF00";
        scoreText.textContent++;
      } else {
        square.style.backgroundColor = "#FF0000";
      }
    }
    setTimeout(function () {
      square.style.backgroundColor = originalColor;
    }, 100);
    currentQuiz = fullCoordsArray[randomIntFromInterval(0, 63)];
    coordsQuizText.textContent = currentQuiz;
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
  if (!playing) {
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
}
function setPlayUIToWhite() {
  if (!playing) {
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
}

// Function to generate random number between two numbers
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
