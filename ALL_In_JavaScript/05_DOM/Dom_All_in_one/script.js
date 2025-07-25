// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h1 = document.querySelector("h1");
//   let randomColor = getRandomColor();
//   h1.innerText = randomColor;

//   let div = document.querySelector("div");

//   div.style.background = randomColor;
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }

// let button = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let para = document.querySelector("p");

// function changecolor() {
//   console.dir(this.innerText);
//   this.style.background = "red";
// }

// button.addEventListener("click", changecolor);
// h1.addEventListener("click", changecolor);
// para.addEventListener("click", changecolor);

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//   console.log("Events code: ", event.code);
//   if (event.code == "ArrowUp") {
//     console.log("charaters moves forward");
//   } else if (event.code == "ArrowDown") {
//     console.log("charaters moves backward");
//   } else if (event.code == "ArrowLeft") {
//     console.log("charaters moves Left");
//   } else if (event.code == "ArrowRight") {
//     console.log("charaters moves Right");
//   }
// });

// let inp = document.querySelector("input");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("Your form submit");
// });

// let elements = document.querySelector("div#scroll-box");
// let output = document.querySelector("p#output");

// elements.onscroll = function (event) {
//   output.textContent = "Element scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// };

let taskInput = document.querySelector(".addTaskInput");
let taskBtn = document.querySelector(".addTaskBtn");
let taskUl = document.querySelector(".addTaskUl");

taskBtn.addEventListener("click", () => {
  let createLi = document.createElement("li");
  createLi.innerText = taskInput.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.classList.add(".deleteBtn");

  createLi.appendChild(deleteBtn);
  taskUl.appendChild(createLi);
  taskInput.value = "";
});

// let delbtns = document.querySelectorAll(".deleteBtn");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }  this will not work on new elements create by js

taskUl.addEventListener("click", function (event) {
  if ((event.target.nodeName = "BUTTON")) {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
