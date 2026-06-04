

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ---------------- SAVE CART ---------------- */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ---------------- CART COUNT ---------------- */
function updateCartCount() {
  const count = document.getElementById("cartCount");
  if (!count) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  count.textContent = totalItems;
}

/* ---------------- TOAST SYSTEM ---------------- */
function showToast(message, type = "success") {

  const oldToast = document.querySelector(".toast");

  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");

  toast.className = "toast";
  toast.textContent = message;

  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${type === "success" ? "#2ecc71" : "#e74c3c"};
    color: white;
    padding: 12px 18px;
    border-radius: 10px;
    z-index: 9999;
    font-size: 14px;
    box-shadow: 0 10px 25px rgba(0,0,0,.2);
    animation: slideIn .3s ease;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 1800);

  setTimeout(() => {
    toast.remove();
  }, 2200);
}

/* ---------------- RENDER PRODUCTS ---------------- */
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

      <div class="badge">⭐ ${product.rating}</div>

      <img src="${product.image}" alt="${product.name}" loading="lazy">

      <div class="card-content">

        <div class="small">${product.category}</div>

        <h4>${product.name}</h4>

        <p class="description">${product.description}</p>

        <div class="card-bottom">

          <div class="price">$${product.price.toFixed(2)}</div>

          <button onclick="addToCart(${product.id})">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  `).join("");
}

/* ---------------- ADD TO CART ---------------- */
function addToCart(id) {

  const product = PRODUCTS.find(
    p => p.id === id
  );

  if (!product) {
    showToast("Product not found", "error");
    return;
  }

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {

    existing.quantity++;

    showToast(
      `${product.name} quantity updated`
    );

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

    showToast(
      `${product.name} added to cart`
    );
  }

  saveCart();
  updateCartCount();
}
/* ---------------- FILTER ---------------- */
function filterCategory(category) {
  const searchValue =
    document.getElementById("search")?.value.toLowerCase() || "";

  let filtered = PRODUCTS;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchValue) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchValue)
    );
  }

  renderProducts(filtered);
}
function sortProducts(type) {

  let products = [...PRODUCTS];

  switch (type) {

    case "low-high":
      products.sort(
        (a, b) => a.price - b.price
      );
      break;

    case "high-low":
      products.sort(
        (a, b) => b.price - a.price
      );
      break;

    case "rating":
      products.sort(
        (a, b) => b.rating - a.rating
      );
      break;
  }

  renderProducts(products);
}
/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();

  const search = document.getElementById("search");

  if (search) {
    search.addEventListener("input", e => {
      const value = e.target.value.toLowerCase();

      const filtered = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(value)
      );

      renderProducts(filtered);
    });
  }
});