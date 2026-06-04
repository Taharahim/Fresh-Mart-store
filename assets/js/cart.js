let cart =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

const cartItems =
  document.getElementById("cartItems");

const totalEl =
  document.getElementById("total");

const itemCountEl =
  document.getElementById("itemCount");

function saveCart() {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}

function renderCart() {

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>
          Add products to continue shopping.
        </p>
      </div>
    `;

    totalEl.textContent = "$0.00";

    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map(
    (item, index) => {

      const subtotal =
        item.price * item.quantity;

      total += subtotal;

      return `

      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div class="item-info">

          <h4>${item.name}</h4>

          <p>${item.category}</p>

          <div class="quantity-controls">

            <button
              onclick="decreaseQty(${index})"
            >
              -
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              onclick="increaseQty(${index})"
            >
              +
            </button>

          </div>

        </div>

        <div class="item-price">

          $${subtotal.toFixed(2)}

        </div>

        <button
          class="remove-btn"
          onclick="removeItem(${index})"
        >
          Remove
        </button>

      </div>

      `;
    }
  ).join("");

  totalEl.textContent =
    "$" + total.toFixed(2);

  itemCountEl.textContent =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );
}

function increaseQty(index) {

  cart[index].quantity++;

  saveCart();

  renderCart();
}

function decreaseQty(index) {

  if (
    cart[index].quantity > 1
  ) {

    cart[index].quantity--;

  } else {

    cart.splice(index, 1);
  }

  saveCart();

  renderCart();
}

function removeItem(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();
}

renderCart();