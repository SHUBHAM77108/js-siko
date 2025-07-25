let gameSqe = [];
let userSqe = [];

let started = false;
let level = 0;
let highestScore = 0;

let btns = ["red", "green", "yellow", "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("games is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSqe = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randInx = Math.floor(Math.random() * 3);
  let randColor = btns[randInx];
  let randBtn = document.querySelector(`.${randColor}`);

  // console.log(randInx);
  // console.log(randColor);
  // console.log(randBtn);

  gameSqe.push(randColor);
  console.log(gameSqe);
  gameFlash(randBtn);
}

function checkAns(indx) {
  if (gameSqe[indx] === userSqe[indx]) {
    if (gameSqe.length === userSqe.length) {
      setTimeout(levelUp(), 2000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    if (highestScore <= level) {
      highestScore = level;
    }
    document.querySelector(
      ".highestScore"
    ).innerHTML = `Your highest score (${highestScore})`;
    resetGame();
  }
}

function checkQues (ind) {
  if (checkAns === )
}

function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSqe.push(userColor);
  console.log(userColor);

  checkAns(userSqe.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function resetGame() {
  started = false;
  level = 0;
  gameSqe = [];
  userSqe = [];
}
