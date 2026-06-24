window.addEventListener("load", function () {
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

window.addEventListener("DOMContentLoaded", function () {
  const plusColumn = document.querySelector(".plus_column");

  for (let i = 0; i < 14; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn.appendChild(plus);
  }
});
window.addEventListener("DOMContentLoaded", function () {
  const plusColumn2 = document.querySelector(".plus_column2");

  for (let i = 0; i < 14; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn2.appendChild(plus);
  }
});

const background_lines6 = document.querySelector(".background_lines6 img");

window.addEventListener("scroll", () => {
  const rect = background_lines6.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    background_lines6.classList.add("show");
  }
});

const buttons = document.querySelectorAll(".course_more");
const closeButtons = document.querySelectorAll(".popup_close");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.dataset.popup;
    const popup = document.getElementById(popupId);

    popup.classList.add("active");

    document.body.classList.add("popup-open");
  });
});
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");

    popup.classList.remove("active");

    document.body.classList.remove("popup-open");
  });
});

const feedback = document.querySelector(".feedback");
const form = document.querySelector(".feedback_form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const requestInput = document.querySelector("#request");

const sendButton = document.querySelector("#sendButton");

function checkFields() {
  const filled =
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    requestInput.value.trim() !== "";

  sendButton.disabled = !filled;

  if (filled) {
    sendButton.classList.add("active");
  } else {
    sendButton.classList.remove("active");
  }
}

nameInput.addEventListener("input", checkFields);
emailInput.addEventListener("input", checkFields);
requestInput.addEventListener("input", checkFields);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  feedback.classList.add("success");

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 2000);
});

const background_lines7 = document.querySelector(".background_lines7 img");

if (background_lines7) {
  window.addEventListener("scroll", () => {
    const rect = background_lines7.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      background_lines7.classList.add("show");
    }
  });
}
const background_lines8 = document.querySelector(".background_lines8 img");

if (background_lines8) {
  window.addEventListener("scroll", () => {
    const rect = background_lines8.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      background_lines8.classList.add("show");
    }
  });
}

const scrollArrow = document.querySelector(".scroll_arrow");

if (scrollArrow) {
  scrollArrow.addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  });
}
