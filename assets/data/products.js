const PRODUCTS = [
  { id: 1, name: "Fresh Apples", price: 3.99, category: "fruits", rating: 4.7, image: "images/apple.avif", description: "Crisp and juicy red apples freshly harvested." },
  { id: 2, name: "Bananas", price: 2.49, category: "fruits", rating: 4.6, image: "images/banans.avif", description: "Sweet ripe bananas rich in potassium." },
  { id: 3, name: "Grapes", price: 4.20, category: "fruits", rating: 4.5, image: "images/grapes.avif", description: "Seedless green grapes, fresh and sweet." },
  { id: 4, name: "Strawberries", price: 5.50, category: "fruits", rating: 4.8, image: "images/stawberry.avif", description: "Fresh strawberries packed with flavor." },
  { id: 5, name: "Orange", price: 4.10, category: "fruits", rating: 4.6, image: "images/oranges.avif", description: "Juicy oranges full of vitamin C." },

  { id: 6, name: "Carrots", price: 1.99, category: "vegetables", rating: 4.5, image: "images/carrot.avif", description: "Fresh crunchy carrots." },
  { id: 7, name: "Broccoli", price: 2.80, category: "vegetables", rating: 4.4, image: "images/broccoil.avif", description: "Green organic broccoli." },
  { id: 8, name: "Tomatoes", price: 3.00, category: "vegetables", rating: 4.6, image: "images/tomato.avif", description: "Fresh vine tomatoes." },
  { id: 9, name: "Potatoes", price: 2.20, category: "vegetables", rating: 4.3, image: "images/potato.avif", description: "Farm fresh potatoes." },
  { id: 10, name: "Spinach", price: 1.80, category: "vegetables", rating: 4.5, image: "images/spinach.avif", description: "Healthy green spinach leaves." },

  { id: 11, name: "Milk", price: 2.50, category: "dairy", rating: 4.7, image: "images/milk.avif", description: "Fresh full cream milk." },
  { id: 12, name: "Cheddar Cheese", price: 4.99, category: "dairy", rating: 4.8, image: "images/cheese.avif", description: "Aged cheddar cheese block." },
  { id: 13, name: "Butter", price: 3.20, category: "dairy", rating: 4.6, image: "images/butter.avif", description: "Creamy salted butter." },
  { id: 14, name: "Yogurt", price: 1.50, category: "dairy", rating: 4.5, image: "images/yogurt.avif", description: "Fresh plain yogurt." },
  { id: 15, name: "Eggs ", price: 3.10, category: "dairy", rating: 4.9, image: "images/egg.avif", description: "Farm fresh eggs dozen pack." },

  { id: 16, name: "Bread Loaf", price: 2.30, category: "bakery", rating: 4.6, image: "images/bread.avif", description: "Soft white bread loaf." },
  { id: 17, name: "Croissant", price: 1.80, category: "bakery", rating: 4.7, image: "images/cross.avif", description: "Buttery flaky croissant." },
  { id: 18, name: "Bagels", price: 3.90, category: "bakery", rating: 4.5, image: "images/bagel.avif", description: "Fresh baked bagels." },
  { id: 19, name: "Chocolate Muffin", price: 2.10, category: "bakery", rating: 4.8, image: "images/muffain.avif", description: "Rich chocolate muffins." },
  { id: 20, name: "Donuts", price: 4.50, category: "bakery", rating: 4.7, image:"images/donut.avif", description: "Assorted glazed donuts." },

  { id: 21, name: "Orange Juice", price: 3.20, category: "drinks", rating: 4.6, image: "images/orange-juice.avif", description: "Fresh orange juice bottle." },
  { id: 22, name: "Mineral Water", price: 1.00, category: "drinks", rating: 4.5, image: "images/water.avif", description: "Pure bottled water." },
  { id: 23, name: "Cola Can", price: 1.20, category: "drinks", rating: 4.4, image: "images/cola.avif", description: "Chilled cola drink." },
  { id: 24, name: "Green Tea", price: 2.80, category: "drinks", rating: 4.6, image: "images/green-tea.avif", description: "Organic green tea." },
  { id: 25, name: "Coffee Beans", price: 6.50, category: "drinks", rating: 4.9, image: "images/coffee.avif", description: "Premium roasted coffee beans." },

  { id: 26, name: "Potato Chips", price: 2.00, category: "snacks", rating: 4.5, image: "images/chips.avif", description: "Crunchy salted chips." },
  { id: 27, name: "Chocolate Bar", price: 1.50, category: "snacks", rating: 4.8, image: "images/chocolate.avif", description: "Milk chocolate bar." },
  { id: 28, name: "Popcorn ", price: 2.30, category: "snacks", rating: 4.4, image: "images/popcorn.avif", description: "Buttery popcorn." },
  { id: 29, name: "Cookies", price: 2.80, category: "snacks", rating: 4.7, image: "images/choco-chips.avif", description: "Chocolate chip cookies." },
  { id: 30, name: "Mixed Nuts", price: 5.20, category: "snacks", rating: 4.6, image: "images/nuts.avif", description: "Healthy mixed nuts." },

  { id: 31, name: "Chicken Breast", price: 6.80, category: "meat", rating: 4.7, image: "images/chicken.avif", description: "Fresh boneless chicken breast." },
  { id: 32, name: "Beef Steak", price: 9.50, category: "meat", rating: 4.8, image: "images/steak.avif", description: "Premium beef steak cut." },
  { id: 33, name: "Minced Meat", price: 5.60, category: "meat", rating: 4.6, image: "images/meat.avif", description: "Fresh ground meat." },
  { id: 34, name: "Fish Fillet", price: 7.20, category: "meat", rating: 4.7, image: "images/fish.avif", description: "Boneless fish fillet." },
  { id: 35, name: "Chicken Wings", price: 4.90, category: "meat", rating: 4.5, image: "images/wing.avif", description: "Spicy chicken wings." },

  { id: 36, name: "Avocados", price: 3.80, category: "fruits", rating: 4.7, image: "images/ava.avif", description: "Creamy ripe avocados." },
  { id: 37, name: "Mangoes", price: 4.60, category: "fruits", rating: 4.9, image: "images/mangoes.avif", description: "Sweet tropical mangoes." },
  { id: 38, name: "Pineapple", price: 3.40, category: "fruits", rating: 4.6, image: "images/pineapple.avif", description: "Fresh pineapple fruit." },
  { id: 39, name: "Peaches", price: 3.10, category: "fruits", rating: 4.5, image: "images/peach.avif", description: "Juicy ripe peaches." },
  { id: 40, name: "Blueberries", price: 5.80, category: "fruits", rating: 4.8, image: "images/blueberry.avif", description: "Fresh blueberries pack." },

  { id: 41, name: "Cucumber", price: 1.20, category: "vegetables", rating: 4.4, image: "images/cucumber.avif", description: "Crisp green cucumbers." },
  { id: 42, name: "Bell Peppers", price: 2.60, category: "vegetables", rating: 4.5, image: "images/bell.avif", description: "Colorful bell peppers." },
  { id: 43, name: "Onions", price: 1.90, category: "vegetables", rating: 4.3, image: "images/onion.avif", description: "Fresh onions pack." },
  { id: 44, name: "Garlic", price: 1.10, category: "vegetables", rating: 4.6, image: "images/garlic.avif", description: "Organic garlic cloves." },
  { id: 45, name: "Zucchini", price: 2.10, category: "vegetables", rating: 4.5, image: "images/zuc.avif", description: "Fresh zucchini." },

  { id: 46, name: "Ice Cream", price: 4.80, category: "dairy", rating: 4.9, image: "images/icecream.avif", description: "Creamy vanilla ice cream." },
  { id: 49, name: "Lassi Drink", price: 2.40, category: "drinks", rating: 4.7, image: "images/lassi.avif", description: "Traditional yogurt drink." },
  { id: 50, name: "Energy Drink", price: 2.90, category: "drinks", rating: 4.5, image: "images/drink.avif", description: "Boost energy drink." }
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* UPDATE CART COUNT */
function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}

/* RENDER PRODUCTS */
function renderProducts(list = PRODUCTS) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#6b7280;">No products found</p>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">

      <div class="card-content">
        <h4>${p.name}</h4>
        <div class="small">${p.category}</div>
        <div class="price">$${p.price.toFixed(2)}</div>

        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join("");
}

/* ADD TO CART */
function addToCart(id) {
  const item = PRODUCTS.find(p => p.id === id);
  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

/* FILTER */
function filterCategory(cat) {
  const buttons = document.querySelectorAll(".categories button");
  buttons.forEach(b => b.classList.remove("active"));

  event.target.classList.add("active");

  if (cat === "all") return renderProducts(PRODUCTS);

  renderProducts(PRODUCTS.filter(p => p.category === cat));
}

/* SEARCH */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();

  document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    renderProducts(
      PRODUCTS.filter(p => p.name.toLowerCase().includes(value))
    );
  });
});