let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const count = document.getElementById("cartCount");

  if (!count) return;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  count.textContent = totalItems;
}

function showToast(message) {

  const toast = document.createElement("div");

  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

function renderProducts(list = PRODUCTS) {

  const grid = document.getElementById("productGrid");

  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-products">
        <h3>No products found</h3>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(product => `

    <div class="card">

      <div class="badge">
        ⭐ ${product.rating}
      </div>

      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="card-content">

        <div class="small">
          ${product.category}
        </div>

        <h4>${product.name}</h4>

        <p class="description">
          ${product.description}
        </p>

        <div class="card-bottom">

          <div class="price">
            $${product.price.toFixed(2)}
          </div>

          <button
            onclick="addToCart(${product.id})"
          >
            Add
          </button>

        </div>

      </div>

    </div>

  `).join("");
}

function addToCart(id) {

  const product = PRODUCTS.find(
    p => p.id === id
  );

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }

  saveCart();
  updateCartCount();

  showToast(
    `${product.name} added to cart`
  );
}

function filterCategory(category) {

  const searchValue =
    document
      .getElementById("search")
      ?.value
      .toLowerCase() || "";

  let filtered = PRODUCTS;

  if (category !== "all") {

    filtered = filtered.filter(
      p => p.category === category
    );
  }

  if (searchValue) {

    filtered = filtered.filter(
      p =>
        p.name
          .toLowerCase()
          .includes(searchValue)
    );
  }

  renderProducts(filtered);
}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProducts();
    updateCartCount();

    const search =
      document.getElementById("search");

    if (search) {

      search.addEventListener(
        "input",
        e => {

          const value =
            e.target.value.toLowerCase();

          const filtered =
            PRODUCTS.filter(product =>
              product.name
                .toLowerCase()
                .includes(value)
            );

          renderProducts(filtered);
        }
      );
    }
  }
);

function showToast(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  div.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2ecc71;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 9999;
  `;

  document.body.appendChild(div);

  setTimeout(() => div.remove(), 2000);
};
showToast("Added to cart");