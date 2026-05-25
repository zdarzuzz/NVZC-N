<<<<<<< HEAD
console.log("about.js подключился");
const plusColumn = document.querySelector(".plus_column");

for (let i = 0; i < 6; i++) {
  const plus = document.createElement("img");
  plus.src = "./images/plus3.png";
  plus.classList.add("plus3");
  plusColumn.appendChild(plus);
}

window.addEventListener("load", function () {
  const preloader = document.createElementById("preloader");
  setTimeout(function () {
    preloader.classList.add("hidden");
  }, 13000);
  setTimeout(function () {
    preloader.remove();
  }, 14000);
});
=======
console.log("about.js подключился");
const plusColumn = document.querySelector(".plus_column");

for (let i = 0; i < 6; i++) {
  const plus = document.createElement("img");
  plus.src = "./images/plus3.png";
  plus.classList.add("plus3");
  plusColumn.appendChild(plus);
}

window.addEventListener("load", function () {
  const preloader = document.createElementById("preloader");
  setTimeout(function () {
    preloader.classList.add("hidden");
  }, 13000);
  setTimeout(function () {
    preloader.remove();
  }, 14000);
});
>>>>>>> 5ac43493634acee09e75b1eb845c9dc06dfa4528
