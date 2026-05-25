<<<<<<< HEAD
const preloader = document.getElementById("preloader");

const layout = [
  0, 2, 1, 2, 0, 1, 2, 2, 1, 1, 2, 0, 2, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
  0, 0, 2, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1,
  0, 1, 1, 2, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 1, 1, 2, 2,
  0, 0, 2, 0, 2, 0,
];
let isGrid = false;

function createCell(type) {
  const cell = document.createElement("div");

  if (type === 0) {
    cell.classList.add("cell");
  } else {
    cell.classList.add("cell1");
  }

  const plus1 = document.createElement("img");
  plus1.src = "./images/plus1.png";
  plus1.classList.add("plus1");

  const plus2 = document.createElement("img");
  plus2.src = "./images/plus2.png";
  plus2.classList.add("plus2");

  cell.appendChild(plus1);
  cell.appendChild(plus2);

  return cell;
}

function showOnePlus() {
  preloader.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("start-plus");

  const topLine = document.createElement("div");
  topLine.classList.add("click-line", "top-line");

  const rightLine = document.createElement("div");
  rightLine.classList.add("click-line", "right-line");

  const bottomLine = document.createElement("div");
  bottomLine.classList.add("click-line", "bottom-line");

  const leftLine = document.createElement("div");
  leftLine.classList.add("click-line", "left-line");

  const cell = createCell(0);

  wrapper.appendChild(topLine);
  wrapper.appendChild(rightLine);
  wrapper.appendChild(bottomLine);
  wrapper.appendChild(leftLine);
  wrapper.appendChild(cell);

  preloader.appendChild(wrapper);
  preloader.style.gridTemplateColumns = "90px";

  cell.addEventListener("click", function () {
    if (isGrid === false) {
      showGrid();
      isGrid = true;
    }
  });
}

function showGrid() {
  preloader.innerHTML = "";
  preloader.style.gridTemplateColumns = "repeat(14, 90px)";

  for (let i = 0; i < 84; i++) {
    const type = layout[i];

    if (type === 2) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("empty-cell");
      preloader.appendChild(emptyCell);
      continue;
    }

    const cell = createCell(type);
    preloader.appendChild(cell);
  }
  setTimeout(function () {
    preloader.style.opacity = "0";
    setTimeout(function () {
      window.location.href = "./index.html";
    }, 1000);
  }, 5000);
}

showOnePlus();
=======
const preloader = document.getElementById("preloader");

const layout = [
  0, 2, 1, 2, 0, 1, 2, 2, 1, 1, 2, 0, 2, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
  0, 0, 2, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1,
  0, 1, 1, 2, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 1, 1, 2, 2,
  0, 0, 2, 0, 2, 0,
];
let isGrid = false;

function createCell(type) {
  const cell = document.createElement("div");

  if (type === 0) {
    cell.classList.add("cell");
  } else {
    cell.classList.add("cell1");
  }

  const plus1 = document.createElement("img");
  plus1.src = "./images/plus1.png";
  plus1.classList.add("plus1");

  const plus2 = document.createElement("img");
  plus2.src = "./images/plus2.png";
  plus2.classList.add("plus2");

  cell.appendChild(plus1);
  cell.appendChild(plus2);

  return cell;
}

function showOnePlus() {
  preloader.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("start-plus");

  const topLine = document.createElement("div");
  topLine.classList.add("click-line", "top-line");

  const rightLine = document.createElement("div");
  rightLine.classList.add("click-line", "right-line");

  const bottomLine = document.createElement("div");
  bottomLine.classList.add("click-line", "bottom-line");

  const leftLine = document.createElement("div");
  leftLine.classList.add("click-line", "left-line");

  const cell = createCell(0);

  wrapper.appendChild(topLine);
  wrapper.appendChild(rightLine);
  wrapper.appendChild(bottomLine);
  wrapper.appendChild(leftLine);
  wrapper.appendChild(cell);

  preloader.appendChild(wrapper);
  preloader.style.gridTemplateColumns = "90px";

  cell.addEventListener("click", function () {
    if (isGrid === false) {
      showGrid();
      isGrid = true;
    }
  });
}

function showGrid() {
  preloader.innerHTML = "";
  preloader.style.gridTemplateColumns = "repeat(14, 90px)";

  for (let i = 0; i < 84; i++) {
    const type = layout[i];

    if (type === 2) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("empty-cell");
      preloader.appendChild(emptyCell);
      continue;
    }

    const cell = createCell(type);
    preloader.appendChild(cell);
  }
  setTimeout(function () {
    preloader.style.opacity = "0";
    setTimeout(function () {
      window.location.href = "./index.html";
    }, 1000);
  }, 5000);
}

showOnePlus();
>>>>>>> 5ac43493634acee09e75b1eb845c9dc06dfa4528
