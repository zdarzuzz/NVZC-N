window.addEventListener("load", function () {
  window.scrollTo(0, 0);
  const loading = document.getElementById("loading");
  const page = document.querySelector(".page_content");
  setTimeout(function () {
    loading.classList.add("hidden");
    page.classList.add("show");
  }, 1000);
  setTimeout(function () {
    loading.remove();
  }, 2000);
});

// const menu = document.querySelector(".side_menu");
// const ornament = document.querySelector(".background_lines1");
// const blurOrnament = document.querySelector(".background_lines1_blur");

// window.addEventListener("scroll", function () {
//   const menuRect = menu.getBoundingClientRect();
//   const ornamentRect = ornament.getBoundingClientRect();

//   const isCrossing =
//     menuRect.bottom > ornamentRect.top && menuRect.top < ornamentRect.bottom;

//   if (isCrossing) {
//     blurOrnament.classList.add("active");
//   } else {
//     blurOrnament.classList.remove("active");
//   }
// });

window.addEventListener("DOMContentLoaded", function () {
  const plusColumn = document.querySelector(".plus_column");

  for (let i = 0; i < 18; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn.appendChild(plus);
  }
});
window.addEventListener("DOMContentLoaded", function () {
  const plusColumn2 = document.querySelector(".plus_column2");

  for (let i = 0; i < 18; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn2.appendChild(plus);
  }
});

const track = document.querySelector(".slider_track");

let currentSlide = 0;
function moveSlider() {
  track.style.transform = `translateX(-${currentSlide * 38}vw)`;
}

const lines1 = document.querySelector(".lines1");

window.addEventListener("scroll", () => {
  const rect = lines1.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    lines1.classList.add("show");
  }
});

const background_lines2 = document.querySelector(".background_lines2 img");

window.addEventListener("scroll", () => {
  const rect = background_lines2.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    background_lines2.classList.add("show");
  }
});

const background_lines3 = document.querySelector(".background_lines3 img");

window.addEventListener("scroll", () => {
  const rect = background_lines3.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    background_lines3.classList.add("show");
  }
});

const cards = document.querySelectorAll(".flip_inner");
cards.forEach((card) => {
  card.style.animationDelay = `${Math.random() * 4}s`;
});

const background_lines4 = document.querySelector(".background_lines4 img");

window.addEventListener("scroll", () => {
  const rect = background_lines4.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    background_lines4.classList.add("show");
  }
});

const scrollArrow = document.querySelector(".scroll_arrow");

if (scrollArrow) {
  scrollArrow.addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  });
}
