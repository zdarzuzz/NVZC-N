const orderButton = document.querySelector(".order_btn");
const orderSuccess = document.querySelector(".order_success");

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

  for (let i = 0; i < 7; i++) {
    const plus = document.createElement("img");
    plus.src = "images/plus3.png";
    plus.classList.add("plus3");
    plusColumn.appendChild(plus);
  }
});
window.addEventListener("DOMContentLoaded", function () {
  const plusColumn2 = document.querySelector(".plus_column2");

  for (let i = 0; i < 7; i++) {
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

const cartItems = document.querySelector(".cart_items");
const totalCount = document.querySelector(".total_count");
const totalPrice = document.querySelector(".total_price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCounter = document.querySelector(".menu_cart span");

function updateCartCounter() {
  if (!cartCounter) return;

  const count = cart.reduce((sum, item) => {
    return sum + (item.quantity || 1);
  }, 0);

  cartCounter.textContent = count;
}

function getPriceNumber(price) {
  return Number(String(price).replace(/[^\d]/g, ""));
}

function getCategoryText(id) {
  if (id === "keyholder" || id === "clutch" || id === "shopper") {
    return "Сумки и аксессуары";
  }

  if (id === "blanket") {
    return "Дом и комфорт";
  }

  return "Верхняя одежда";
}

function renderCart() {
  cartItems.innerHTML = "";

  orderButton.addEventListener("click", () => {
    const total = cart.reduce((sum, item) => {
      const price = getPriceNumber(item.price);
      const quantity = item.quantity || 1;

      return sum + price * quantity;
    }, 0);

    if (total === 0) return;

    localStorage.removeItem("cart");

    cart = [];

    renderCart();

    orderSuccess.textContent = `Ваш заказ на сумму ${total} ₽ успешно оформлен`;
    orderSuccess.classList.add("show");
  });

  setTimeout(() => {
    orderSuccess.classList.remove("show");
  }, 12000);

  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    const quantity = item.quantity || 1;
    const price = getPriceNumber(item.price);
    const title = item.title || item.name || "Товар";

    total += price * quantity;
    count += quantity;

    cartItems.innerHTML += `
      <div class="cart_item">
        <img class="cart_item_img" src="${item.image}" alt="" />

        <div class="cart_item_info">
          <h2>${title}</h2>
          <span class="cart_category">${getCategoryText(item.id)}</span>

          <div class="cart_colors">
            <span class="color_dot ${item.color}"></span>
          </div>

          <p class="cart_stock">✓ В наличии ${quantity} шт</p>
        </div>

        <div class="cart_item_right">
          <div class="cart_item_price">${price * quantity} ₽</div>

          <div class="quantity_controls">
            <button class="qty_minus" data-index="${index}">−</button>
            <span>${quantity}</span>
            <button class="qty_plus" data-index="${index}">+</button>
          </div>
        </div>
      </div>
    `;
  });

  totalCount.textContent = `${count} товар`;
  totalPrice.textContent = `${total} ₽`;
  updateCartCounter();

  document.querySelectorAll(".qty_plus").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      cart[index].quantity = (cart[index].quantity || 1) + 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  document.querySelectorAll(".qty_minus").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      cart[index].quantity = (cart[index].quantity || 1) - 1;

      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}
renderCart();
