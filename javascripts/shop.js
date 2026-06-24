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

  for (let i = 0; i < 8; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn.appendChild(plus);
  }
});
window.addEventListener("DOMContentLoaded", function () {
  const plusColumn2 = document.querySelector(".plus_column2");

  for (let i = 0; i < 8; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn2.appendChild(plus);
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

const filterMenu = document.querySelector(".filter_menu");
const filterMainBtn = document.querySelector(".filter_main");

filterMainBtn.addEventListener("click", () => {
  filterMenu.classList.toggle("open");
});

// КАРТОЧКА ТОВАРА
const productCards = document.querySelectorAll(".product_card");
const productCloseButtons = document.querySelectorAll(".popup_close");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const popupId = card.dataset.popup;
    const popup = document.getElementById(popupId);

    popup.classList.add("active");
    document.body.classList.add("popup-open");
  });
});

productCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".product_popup");

    popup.classList.remove("active");
    document.body.classList.remove("popup-open");
  });
});

const cartCounter = document.querySelector(".menu_cart span");
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const count = cart.reduce((sum, item) => {
    return sum + (item.quantity || 1);
  }, 0);

  cartCounter.textContent = count;
}
const cartChip = document.querySelector(".cart_chip");
let cartCount = 0;

document.querySelectorAll(".product_cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    cartCount++;
    cartCounter.textContent = cartCount;

    cartChip.classList.remove("show");

    void cartChip.offsetWidth;

    cartChip.classList.add("show");
  });
});

const toast = document.querySelector(".toast_notification");

document.querySelectorAll(".product_fav").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      toast.style.background = "#ff5136";
      toast.textContent = "Товар добавлен в избранное ❤";
    } else {
      toast.style.background = "#4a3a56";
      toast.textContent = "Товар удалён из избранного";
    }

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  });
});

const popupContent = document.querySelector(".product_popup_content");

if (popupContent) {
  popupContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const productGalleries = {
  keyholder: {
    pink: [
      "images/key1.png",
      "images/key2.png",
      "images/key3.png",
      "images/key4.png",
      "images/key5.gif",
    ],
    blue: [
      "images/key_blue1.png",
      "images/key_blue2.png",
      "images/key_blue3.png",
      "images/key_blue4.png",
    ],
    grey: [
      "images/key_grey1.png",
      "images/key_grey2.png",
      "images/key_grey3.png",
      "images/key_grey4.png",
    ],
  },

  clutch: {
    pink: [
      "images/red_klatch1.png",
      "images/red_klatch2.png",
      "images/red_klatch3.png",
    ],
    blue: [
      "images/blue_klatch1.png",
      "images/blue_klatch2.png",
      "images/blue_klatch3.png",
    ],
    grey: [
      "images/grey_klatch1.png",
      "images/grey_klatch2.png",
      "images/grey_klatch3.png",
    ],
  },

  blanket: {
    pink: [
      "images/red_blanket1.png",
      "images/red_blanket2.png",
      "images/red_blanket3.png",
      "images/red_blanket4.png",
    ],
    blue: [
      "images/blue_blanket1.png",
      "images/blue_blanket2.png",
      "images/blue_blanket3.png",
      "images/blue_blanket4.png",
      "images/blue_blanket5.png",
    ],
  },

  shopper: {
    pink: [
      "images/red_shopper1.png",
      "images/red_shopper2.png",
      "images/red_shopper3.png",
      "images/red_shopper4.png",
      "images/red_shopper5.png",
    ],
    blue: [
      "images/blue_shopper1.png",
      "images/blue_shopper2.png",
      "images/blue_shopper3.png",
      "images/blue_shopper4.png",
      "images/blue_shopper5.png",
    ],
    grey: [
      "images/grey_shopper1.png",
      "images/grey_shopper2.png",
      "images/grey_shopper3.png",
      "images/grey_shopper4.png",
      "images/grey_shopper5.png",
    ],
  },

  metalCoat: {
    grey: [
      "images/metalCoat.png",
      "images/metalCoat2.png",
      "images/metalCoat3.png",
      "images/metalCoat4.png",
      "images/metalCoat5.png",
    ],
  },

  Coat: {
    grey: [
      "images/coat1.png",
      "images/coat2.png",
      "images/coat3.png",
      "images/coat4.png",
      "images/coat5.png",
    ],
  },
};

document.querySelectorAll(".product_popup").forEach((popup) => {
  const productName = popup.dataset.product;
  const galleries = productGalleries[productName];

  let currentColor =
    popup.querySelector(".popup_color.active")?.dataset.color ||
    Object.keys(galleries)[0];
  let currentImage = 0;

  const mainImage = popup.querySelector(".main_image");
  const thumbs = popup.querySelectorAll(".thumb");
  const nextButton = popup.querySelector(".gallery_next");
  const prevButton = popup.querySelector(".gallery_prev");
  const colorButtons = popup.querySelectorAll(".popup_color");

  function updateGallery() {
    const images = galleries[currentColor];

    mainImage.src = images[currentImage];

    thumbs.forEach((thumb, index) => {
      if (images[index]) {
        thumb.src = images[index];
        thumb.style.display = "block";
      } else {
        thumb.style.display = "none";
      }

      thumb.classList.toggle("active", index === currentImage);
    });
  }

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const images = galleries[currentColor];
    currentImage = (currentImage + 1) % images.length;

    updateGallery();
  });

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const images = galleries[currentColor];
    currentImage = (currentImage - 1 + images.length) % images.length;

    updateGallery();
  });

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      currentImage = index;
      updateGallery();
    });
  });

  colorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      colorButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      currentColor = button.dataset.color;
      currentImage = 0;

      updateGallery();
    });
  });

  updateGallery();
});

document.querySelectorAll(".add_to_cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const popup = button.closest(".product_popup");

    const product = {
      id: popup.dataset.product,
      title: popup.querySelector("h2").textContent,
      price: popup.querySelector(".popup_price").textContent,
      image: popup.querySelector(".main_image").src,
      color:
        popup.querySelector(".popup_color.active")?.dataset.color || "grey",
      quantity: 1,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      (item) => item.id === product.id && item.color === product.color,
    );

    if (existing) {
      existing.quantity++;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCounter();

    console.log("Товар добавлен:", product);
    alert("Товар добавлен в корзину");
  });
});

updateCartCounter();

const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    productCards.forEach((card) => {
      card.style.display =
        filter === "all" || card.dataset.category === filter ? "grid" : "none";
    });
  });
});
const bg_lines = document.querySelector(".bg_lines img");

if (bg_lines) {
  window.addEventListener("scroll", () => {
    const rect = bg_lines.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      bg_lines.classList.add("show");
    }
  });
}
