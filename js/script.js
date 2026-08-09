/**
 * FreshBite - Online Food Ordering Platform
 * Main JavaScript File
 */

// Sample Master Dataset
const sampleData = {
  restaurants: [
    {
      id: 1,
      name: "Spice Garden",
      cuisine: "North Indian",
      rating: 4.6,
      priceRange: "₹₹",
      deliveryTime: "30-40 min",
      location: "Main Street, Kakinada",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      description: "Authentic North Indian curries, rich tandoori grills, and freshly baked naans."
    },
    {
      id: 2,
      name: "Royal Biryani House",
      cuisine: "Indian",
      rating: 4.8,
      priceRange: "₹₹₹",
      deliveryTime: "25-35 min",
      location: "Royal Complex, Hyderabad",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      description: "Famous Dum Biryani crafted with aromatic basmati rice, secret spices, and tender meats."
    },
    {
      id: 3,
      name: "Pizza Italia",
      cuisine: "Italian",
      rating: 4.5,
      priceRange: "₹₹",
      deliveryTime: "20-30 min",
      location: "Downtown Avenue",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted wood-fired pizzas, creamy pastas, and fresh Italian salads."
    },
    {
      id: 4,
      name: "Dragon Express",
      cuisine: "Chinese",
      rating: 4.4,
      priceRange: "₹",
      deliveryTime: "25-35 min",
      location: "Chinatown Square",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
      description: "Sizzling Schezwan noodles, spicy dumplings, and Manchurian delicacies."
    },
    {
      id: 5,
      name: "South Feast",
      cuisine: "South Indian",
      rating: 4.7,
      priceRange: "₹",
      deliveryTime: "15-25 min",
      location: "Temple Road",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
      description: "Crispy ghee roast dosas, fluffy idlis, vada, and authentic Filter Coffee."
    },
    {
      id: 6,
      name: "Sweet Treats & Bakes",
      cuisine: "Desserts",
      rating: 4.9,
      priceRange: "₹₹",
      deliveryTime: "20-30 min",
      location: "Baker Street",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      description: "Decadent cakes, warm molten lava, ice creams, and artisanal pastries."
    },
    {
      id: 7,
      name: "Green Leaf Bistro",
      cuisine: "Healthy Food",
      rating: 4.6,
      priceRange: "₹₹",
      deliveryTime: "20-35 min",
      location: "Fitness Hub",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      description: "Nutritious salad bowls, cold-pressed juices, and protein-packed quinoa bowls."
    },
    {
      id: 8,
      name: "Burger & Fry Co.",
      cuisine: "Fast Food",
      rating: 4.3,
      priceRange: "₹",
      deliveryTime: "15-25 min",
      location: "Central Mall",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      description: "Smash burgers, loaded fries, crispy chicken wings, and thick shakes."
    }
  ],

  foodItems: [
    {
      id: 101,
      restaurantId: 1,
      restaurantName: "Spice Garden",
      name: "Paneer Butter Masala",
      description: "Soft cottage cheese cubes cooked in a rich, velvety tomato and butter gravy garnished with fresh cream.",
      price: 249,
      rating: 4.7,
      type: "Veg",
      dietaryTags: ["Veg", "Gluten-Free", "Bestseller"],
      ingredients: ["Paneer", "Tomato Puree", "Butter", "Fresh Cream", "Cashew Paste", "Indian Spices"],
      nutrition: { calories: 380, protein: "14g", carbohydrates: "22g", fat: "26g", fiber: "3g" },
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 102,
      restaurantId: 1,
      restaurantName: "Spice Garden",
      name: "Garlic Butter Naan",
      description: "Leavened flatbread topped with minced garlic and brushed with clarified butter.",
      price: 59,
      rating: 4.6,
      type: "Veg",
      dietaryTags: ["Veg", "Bestseller"],
      ingredients: ["Refined Flour", "Garlic", "Butter", "Milk", "Yogurt"],
      nutrition: { calories: 210, protein: "6g", carbohydrates: "35g", fat: "5g", fiber: "1g" },
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 103,
      restaurantId: 2,
      restaurantName: "Royal Biryani House",
      name: "Special Dum Chicken Biryani",
      description: "Traditional Hyderabadi biryani marinated chicken cooked sealed with long grain basmati rice.",
      price: 329,
      rating: 4.9,
      type: "Non-Veg",
      dietaryTags: ["Non-Veg", "Spicy", "Bestseller"],
      ingredients: ["Chicken", "Basmati Rice", "Saffron", "Fried Onions", "Ghee", "Mint & Coriander"],
      nutrition: { calories: 540, protein: "32g", carbohydrates: "65g", fat: "18g", fiber: "2g" },
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 104,
      restaurantId: 3,
      restaurantName: "Pizza Italia",
      name: "Margherita Supreme Pizza",
      description: "Classic Neapolitan style pizza with fresh mozzarella, San Marzano tomato sauce, and fresh basil leaves.",
      price: 299,
      rating: 4.5,
      type: "Veg",
      dietaryTags: ["Veg", "Bestseller"],
      ingredients: ["Pizza Dough", "San Marzano Tomatoes", "Fresh Mozzarella", "Extra Virgin Olive Oil", "Basil"],
      nutrition: { calories: 420, protein: "16g", carbohydrates: "52g", fat: "16g", fiber: "3g" },
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 105,
      restaurantId: 4,
      restaurantName: "Dragon Express",
      name: "Schezwan Veg Hakka Noodles",
      description: "Stir-fried noodles tossed with crisp vegetables in spicy house Schezwan sauce.",
      price: 189,
      rating: 4.4,
      type: "Veg",
      dietaryTags: ["Veg", "Spicy"],
      ingredients: ["Noodles", "Bell Peppers", "Cabbage", "Carrots", "Schezwan Chili Paste", "Garlic"],
      nutrition: { calories: 310, protein: "8g", carbohydrates: "48g", fat: "10g", fiber: "4g" },
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 106,
      restaurantId: 5,
      restaurantName: "South Feast",
      name: "Ghee Masala Dosa",
      description: "Crispy golden rice crepe roasted in pure ghee, stuffed with spiced potato masala, served with chutney and sambar.",
      price: 139,
      rating: 4.8,
      type: "Veg",
      dietaryTags: ["Veg", "Gluten-Free", "Bestseller"],
      ingredients: ["Rice & Urad Dal Batter", "Potato Masala", "Pure Ghee", "Mustard Seeds", "Curry Leaves"],
      nutrition: { calories: 290, protein: "7g", carbohydrates: "42g", fat: "11g", fiber: "3g" },
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 107,
      restaurantId: 6,
      restaurantName: "Sweet Treats & Bakes",
      name: "Belgian Chocolate Lava Cake",
      description: "Warm individual chocolate cake with a soft, gooey molten chocolate center.",
      price: 149,
      rating: 4.9,
      type: "Veg",
      dietaryTags: ["Veg", "Bestseller"],
      ingredients: ["Belgian Dark Chocolate", "Butter", "Flour", "Sugar", "Vanilla"],
      nutrition: { calories: 360, protein: "5g", carbohydrates: "40g", fat: "20g", fiber: "2g" },
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 108,
      restaurantId: 7,
      restaurantName: "Green Leaf Bistro",
      name: "Avocado & Quinoa Power Bowl",
      description: "Nutritious bowl filled with organic quinoa, sliced avocado, cherry tomatoes, cucumbers, and lemon tahini dressing.",
      price: 279,
      rating: 4.7,
      type: "Veg",
      dietaryTags: ["Veg", "Gluten-Free", "Vegan"],
      ingredients: ["Quinoa", "Fresh Avocado", "Cherry Tomatoes", "Cucumber", "Chickpeas", "Tahini Dressing"],
      nutrition: { calories: 320, protein: "12g", carbohydrates: "38g", fat: "14g", fiber: "9g" },
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    }
  ],

  categories: [
    { name: "Indian", icon: "bi-bowl-hot", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80" },
    { name: "Chinese", icon: "bi-box-seam", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=300&q=80" },
    { name: "Italian", icon: "bi-pie-chart", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80" },
    { name: "South Indian", icon: "bi-sun", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=300&q=80" },
    { name: "North Indian", icon: "bi-fire", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80" },
    { name: "Fast Food", icon: "bi-egg-fried", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
    { name: "Desserts", icon: "bi-heart-fill", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80" },
    { name: "Healthy Food", icon: "bi-flower1", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80" }
  ],

  offers: [
    {
      code: "FRESH20",
      title: "20% OFF First Order",
      desc: "Get 20% discount on your first order. Max discount ₹120.",
      type: "percentage",
      value: 20,
      maxDiscount: 120,
      minSubtotal: 200
    },
    {
      code: "WELCOME100",
      title: "Flat ₹100 OFF",
      desc: "Enjoy flat ₹100 discount on orders above ₹499.",
      type: "flat",
      value: 100,
      minSubtotal: 499
    },
    {
      code: "FREEDELIVERY",
      title: "Free Delivery",
      desc: "Zero delivery fee on all orders above ₹299.",
      type: "free_delivery",
      value: 40,
      minSubtotal: 299
    },
    {
      code: "WEEKEND50",
      title: "Flat ₹50 OFF",
      desc: "Weekend treat! ₹50 off on orders above ₹250.",
      type: "flat",
      value: 50,
      minSubtotal: 250
    }
  ]
};

// Application State Management
class FreshBiteApp {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('freshbite_cart')) || [];
    this.appliedCoupon = JSON.parse(localStorage.getItem('freshbite_coupon')) || null;
    this.orders = JSON.parse(localStorage.getItem('freshbite_orders')) || [];
    this.currentUser = JSON.parse(localStorage.getItem('freshbite_user')) || null;
    this.wishlist = JSON.parse(localStorage.getItem('freshbite_wishlist')) || [];
    this.savedAddresses = JSON.parse(localStorage.getItem('freshbite_addresses')) || [
      { id: 1, name: "Home", fullName: "Alex Smith", mobile: "+91 98765 43210", address: "Door No 4-12, Green Park Avenue", city: "Kakinada", state: "Andhra Pradesh", pincode: "533001", default: true }
    ];

    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateNavbarUI();
      this.bindGlobalEvents();
      this.routePage();
    });
  }

  // Local Storage Sync
  saveCart() {
    localStorage.setItem('freshbite_cart', JSON.stringify(this.cart));
    localStorage.setItem('freshbite_coupon', JSON.stringify(this.appliedCoupon));
    this.updateNavbarUI();
  }

  saveOrders() {
    localStorage.setItem('freshbite_orders', JSON.stringify(this.orders));
  }

  saveUser() {
    localStorage.setItem('freshbite_user', JSON.stringify(this.currentUser));
    this.updateNavbarUI();
  }

  saveWishlist() {
    localStorage.setItem('freshbite_wishlist', JSON.stringify(this.wishlist));
  }

  saveAddresses() {
    localStorage.setItem('freshbite_addresses', JSON.stringify(this.savedAddresses));
  }

  // Toast System
  showToast(message, icon = 'bi-check-circle-fill') {
    let toast = document.getElementById('freshbiteToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'freshbiteToast';
      toast.className = 'freshbite-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="bi ${icon} text-warning fs-5"></i> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // UI Updates
  updateNavbarUI() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadges = document.querySelectorAll('.cart-item-count');
    cartBadges.forEach(badge => {
      badge.textContent = totalItems;
    });

    const userLink = document.getElementById('navUserLink');
    if (userLink) {
      if (this.currentUser) {
        userLink.innerHTML = `<i class="bi bi-person-circle"></i> ${this.currentUser.name}`;
        userLink.href = 'account.html';
      } else {
        userLink.innerHTML = `<i class="bi bi-box-arrow-in-right"></i> Login/Register`;
        userLink.href = 'login.html';
      }
    }
  }

  // Cart Operations
  addToCart(foodId, qty = 1) {
    const food = sampleData.foodItems.find(f => f.id === parseInt(foodId));
    if (!food) return;

    const existingIndex = this.cart.findIndex(item => item.id === food.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({ ...food, quantity: qty });
    }

    this.saveCart();
    this.showToast(`Added "${food.name}" to cart!`);
    
    // Re-render cart if on cart page
    if (document.getElementById('cartContainer')) {
      this.renderCartPage();
    }
  }

  updateQuantity(foodId, change) {
    const index = this.cart.findIndex(item => item.id === parseInt(foodId));
    if (index > -1) {
      this.cart[index].quantity += change;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
      if (document.getElementById('cartContainer')) {
        this.renderCartPage();
      }
    }
  }

  removeFromCart(foodId) {
    this.cart = this.cart.filter(item => item.id !== parseInt(foodId));
    this.saveCart();
    this.showToast('Item removed from cart');
    if (document.getElementById('cartContainer')) {
      this.renderCartPage();
    }
  }

  // Calculations
  getCalculations() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let deliveryFee = subtotal > 0 ? 40 : 0;
    let discount = 0;

    if (this.appliedCoupon) {
      if (this.appliedCoupon.type === 'percentage') {
        discount = Math.min((subtotal * this.appliedCoupon.value) / 100, this.appliedCoupon.maxDiscount || Infinity);
      } else if (this.appliedCoupon.type === 'flat') {
        discount = this.appliedCoupon.value;
      } else if (this.appliedCoupon.type === 'free_delivery') {
        deliveryFee = 0;
      }
    }

    // Free delivery threshold check
    if (subtotal >= 500) {
      deliveryFee = 0;
    }

    const tax = Math.round((subtotal - discount) * 0.05); // 5% GST
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee + tax);

    return { subtotal, deliveryFee, discount, tax, grandTotal };
  }

  applyCoupon(code) {
    if (!code) {
      this.showToast('Please enter a coupon code', 'bi-exclamation-triangle-fill');
      return false;
    }
    const coupon = sampleData.offers.find(o => o.code.toUpperCase() === code.toUpperCase().trim());
    const { subtotal } = this.getCalculations();

    if (!coupon) {
      this.showToast('Invalid Coupon Code', 'bi-x-circle-fill');
      return false;
    }

    if (subtotal < (coupon.minSubtotal || 0)) {
      this.showToast(`Minimum order ₹${coupon.minSubtotal} required for ${coupon.code}`, 'bi-info-circle-fill');
      return false;
    }

    this.appliedCoupon = coupon;
    this.saveCart();
    this.showToast(`Coupon ${coupon.code} applied successfully!`);
    if (document.getElementById('cartContainer')) {
      this.renderCartPage();
    }
    return true;
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.saveCart();
    this.showToast('Coupon removed');
    if (document.getElementById('cartContainer')) {
      this.renderCartPage();
    }
  }

  // Global Event Listeners
  bindGlobalEvents() {
    document.addEventListener('click', (e) => {
      // Add to Cart
      if (e.target.closest('.btn-add-cart')) {
        const btn = e.target.closest('.btn-add-cart');
        const foodId = btn.dataset.foodId;
        this.addToCart(foodId);
      }

      // View Product Details
      if (e.target.closest('.btn-view-details')) {
        const btn = e.target.closest('.btn-view-details');
        const foodId = btn.dataset.foodId;
        this.openProductModal(foodId);
      }

      // Wishlist Toggle
      if (e.target.closest('.btn-wishlist')) {
        const btn = e.target.closest('.btn-wishlist');
        const foodId = parseInt(btn.dataset.foodId);
        this.toggleWishlist(foodId, btn);
      }
    });
  }

  toggleWishlist(foodId, btnElement) {
    const idx = this.wishlist.indexOf(foodId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast('Removed from wishlist', 'bi-heart');
      if (btnElement) btnElement.classList.remove('text-danger');
    } else {
      this.wishlist.push(foodId);
      this.showToast('Added to wishlist!', 'bi-heart-fill');
      if (btnElement) btnElement.classList.add('text-danger');
    }
    this.saveWishlist();
  }

  // Product Details Modal/View
  openProductModal(foodId) {
    const food = sampleData.foodItems.find(f => f.id === parseInt(foodId));
    if (!food) return;

    let modalEl = document.getElementById('productDetailModal');
    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = 'productDetailModal';
      modalEl.className = 'modal fade';
      modalEl.setAttribute('tabindex', '-1');
      document.body.appendChild(modalEl);
    }

    modalEl.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 rounded-4 overflow-hidden">
          <div class="row g-0">
            <div class="col-md-6 bg-light position-relative">
              <img src="${food.image}" class="img-fluid h-100 w-100 object-fit-cover" alt="${food.name}">
              <span class="rating-badge"><i class="bi bi-star-fill text-warning"></i> ${food.rating}</span>
            </div>
            <div class="col-md-6 p-4 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <span class="food-type-icon ${food.type === 'Veg' ? 'veg' : 'non-veg'}"></span>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <h4 class="fw-bold mb-1">${food.name}</h4>
                <p class="text-muted small mb-2"><i class="bi bi-shop"></i> ${food.restaurantName}</p>
                <div class="mb-3">
                  ${food.dietaryTags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                </div>
                <p class="text-secondary small mb-3">${food.description}</p>
                
                <h6 class="fw-bold fs-7 text-uppercase text-muted mb-2">Ingredients:</h6>
                <div class="d-flex flex-wrap gap-1 mb-3">
                  ${food.ingredients.map(ing => `<span class="badge bg-light text-dark border">${ing}</span>`).join('')}
                </div>

                <h6 class="fw-bold fs-7 text-uppercase text-muted mb-2">Nutritional Info:</h6>
                <div class="row g-2 text-center small mb-3">
                  <div class="col-4"><div class="p-2 bg-light rounded"><strong>${food.nutrition.calories}</strong><br><span class="text-muted">Calories</span></div></div>
                  <div class="col-4"><div class="p-2 bg-light rounded"><strong>${food.nutrition.protein}</strong><br><span class="text-muted">Protein</span></div></div>
                  <div class="col-4"><div class="p-2 bg-light rounded"><strong>${food.nutrition.carbohydrates}</strong><br><span class="text-muted">Carbs</span></div></div>
                  <div class="col-6"><div class="p-2 bg-light rounded"><strong>${food.nutrition.fat}</strong><br><span class="text-muted">Fat</span></div></div>
                  <div class="col-6"><div class="p-2 bg-light rounded"><strong>${food.nutrition.fiber}</strong><br><span class="text-muted">Fiber</span></div></div>
                </div>
              </div>

              <div class="d-flex align-items-center justify-content-between pt-3 border-top">
                <h4 class="fw-bold mb-0 text-orange">₹${food.price}</h4>
                <div class="d-flex gap-2">
                  <div class="qty-control">
                    <button class="qty-btn" id="modalQtyMinus">-</button>
                    <span class="qty-val" id="modalQtyVal">1</span>
                    <button class="qty-btn" id="modalQtyPlus">+</button>
                  </div>
                  <button class="btn btn-primary-orange" id="modalAddToCart"><i class="bi bi-cart-plus"></i> Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();

    let qty = 1;
    const qtyValEl = modalEl.querySelector('#modalQtyVal');
    modalEl.querySelector('#modalQtyMinus').addEventListener('click', () => {
      if (qty > 1) {
        qty--;
        qtyValEl.textContent = qty;
      }
    });
    modalEl.querySelector('#modalQtyPlus').addEventListener('click', () => {
      qty++;
      qtyValEl.textContent = qty;
    });

    modalEl.querySelector('#modalAddToCart').addEventListener('click', () => {
      this.addToCart(food.id, qty);
      bsModal.hide();
    });
  }

  // Page Routing Logic
  routePage() {
    const path = window.location.pathname;

    if (path.includes('restaurants.html') || document.getElementById('restaurantGrid')) {
      this.renderRestaurantsPage();
    }
    if (path.includes('menu.html') || document.getElementById('menuGrid')) {
      this.renderMenuPage();
    }
    if (path.includes('cart.html') || document.getElementById('cartContainer')) {
      this.renderCartPage();
    }
    if (path.includes('checkout.html') || document.getElementById('checkoutForm')) {
      this.renderCheckoutPage();
    }
    if (path.includes('orders.html') || document.getElementById('ordersContainer')) {
      this.renderOrdersPage();
    }
    if (path.includes('account.html') || document.getElementById('accountContainer')) {
      this.renderAccountPage();
    }
    if (path.includes('login.html') || document.getElementById('loginForm')) {
      this.setupAuthPage();
    }
    if (document.getElementById('categoriesGrid')) {
      this.renderHomePage();
    }
    if (document.getElementById('contactForm')) {
      this.setupContactPage();
    }
  }

  // Home Page Rendering
  renderHomePage() {
    // Categories Grid
    const catContainer = document.getElementById('categoriesGrid');
    if (catContainer) {
      catContainer.innerHTML = sampleData.categories.map(cat => `
        <div class="col-6 col-md-3 col-lg-2">
          <div class="category-card" onclick="window.location.href='restaurants.html?category=${encodeURIComponent(cat.name)}'">
            <div class="category-icon"><i class="bi ${cat.icon}"></i></div>
            <h6 class="fw-bold mb-0 text-dark">${cat.name}</h6>
          </div>
        </div>
      `).join('');
    }

    // Featured Dishes Grid
    const featuredContainer = document.getElementById('featuredDishesGrid');
    if (featuredContainer) {
      featuredContainer.innerHTML = sampleData.foodItems.slice(0, 6).map(food => this.createFoodCardHTML(food)).join('');
    }

    // Offers Grid
    const offersContainer = document.getElementById('offersGrid');
    if (offersContainer) {
      offersContainer.innerHTML = sampleData.offers.map(offer => `
        <div class="col-md-6 col-lg-3">
          <div class="p-4 rounded-4 bg-white border border-warning h-100 d-flex flex-column justify-content-between shadow-sm">
            <div>
              <span class="badge bg-warning text-dark fw-bold mb-2">${offer.code}</span>
              <h5 class="fw-bold text-dark">${offer.title}</h5>
              <p class="text-muted small">${offer.desc}</p>
            </div>
            <button class="btn btn-outline-brown btn-sm w-100 rounded-pill mt-3" onclick="navigator.clipboard.writeText('${offer.code}'); app.showToast('Code ${offer.code} copied!');">
              <i class="bi bi-copy"></i> Copy Code
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  // Food Card Template Component
  createFoodCardHTML(food) {
    const isWishlisted = this.wishlist.includes(food.id);
    return `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="custom-card">
          <div class="card-img-container">
            <img src="${food.image}" alt="${food.name}">
            <span class="rating-badge"><i class="bi bi-star-fill text-warning"></i> ${food.rating}</span>
            <button class="btn btn-sm btn-light rounded-circle position-absolute top-0 start-0 m-2 btn-wishlist ${isWishlisted ? 'text-danger' : ''}" data-food-id="${food.id}">
              <i class="bi bi-heart-fill"></i>
            </button>
          </div>
          <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
            <div>
              <div class="d-flex align-items-center mb-1">
                <span class="food-type-icon ${food.type === 'Veg' ? 'veg' : 'non-veg'}"></span>
                <h6 class="fw-bold mb-0 text-truncate text-dark">${food.name}</h6>
              </div>
              <p class="text-muted small mb-2"><i class="bi bi-shop"></i> ${food.restaurantName}</p>
              <p class="text-secondary small mb-3 text-truncate-2">${food.description}</p>
              <div class="mb-3">
                ${food.dietaryTags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between pt-2 border-top">
              <span class="fw-bold fs-5 text-orange">₹${food.price}</span>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-outline-brown rounded-pill btn-view-details" data-food-id="${food.id}">Details</button>
                <button class="btn btn-sm btn-primary-orange rounded-pill btn-add-cart" data-food-id="${food.id}"><i class="bi bi-plus-lg"></i> Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Restaurants Page Rendering
  renderRestaurantsPage() {
    const grid = document.getElementById('restaurantGrid');
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');

    let filtered = [...sampleData.restaurants];

    const searchInput = document.getElementById('restaurantSearchInput');
    const cuisineSelect = document.getElementById('cuisineFilterSelect');
    const ratingSelect = document.getElementById('ratingFilterSelect');

    if (categoryFilter && cuisineSelect) {
      cuisineSelect.value = categoryFilter;
    }

    const filterHandler = () => {
      const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const cuisine = cuisineSelect ? cuisineSelect.value : '';
      const rating = ratingSelect ? parseFloat(ratingSelect.value) : 0;

      filtered = sampleData.restaurants.filter(r => {
        const matchesQ = r.name.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q) || r.location.toLowerCase().includes(q);
        const matchesCuisine = !cuisine || r.cuisine.toLowerCase() === cuisine.toLowerCase();
        const matchesRating = !rating || r.rating >= rating;
        return matchesQ && matchesCuisine && matchesRating;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center py-5"><i class="bi bi-search fs-1 text-muted"></i><h5 class="mt-3">No restaurants found matching your criteria</h5></div>`;
      } else {
        grid.innerHTML = filtered.map(r => `
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="custom-card">
              <div class="card-img-container">
                <img src="${r.image}" alt="${r.name}">
                <span class="rating-badge"><i class="bi bi-star-fill text-warning"></i> ${r.rating}</span>
              </div>
              <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <h5 class="fw-bold mb-1 text-dark">${r.name}</h5>
                  <p class="text-muted small mb-2"><i class="bi bi-geo-alt-fill text-danger"></i> ${r.location}</p>
                  <div class="d-flex gap-2 mb-2">
                    <span class="badge bg-light text-dark border">${r.cuisine}</span>
                    <span class="badge bg-light text-dark border">${r.priceRange}</span>
                    <span class="badge bg-light text-dark border"><i class="bi bi-clock"></i> ${r.deliveryTime}</span>
                  </div>
                  <p class="text-secondary small mb-3">${r.description}</p>
                </div>
                <a href="menu.html?restaurantId=${r.id}" class="btn btn-primary-orange w-100 rounded-pill text-center"><i class="bi bi-book"></i> View Menu</a>
              </div>
            </div>
          </div>
        `).join('');
      }
    };

    if (searchInput) searchInput.addEventListener('input', filterHandler);
    if (cuisineSelect) cuisineSelect.addEventListener('change', filterHandler);
    if (ratingSelect) ratingSelect.addEventListener('change', filterHandler);

    filterHandler();
  }

  // Menu Page Rendering
  renderMenuPage() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('restaurantId')) || 1;

    const restaurant = sampleData.restaurants.find(r => r.id === restaurantId) || sampleData.restaurants[0];

    // Render Restaurant Header Banner
    const banner = document.getElementById('restaurantHeaderBanner');
    if (banner) {
      banner.innerHTML = `
        <div class="p-4 p-md-5 rounded-4 bg-white border shadow-sm mb-4">
          <div class="row align-items-center">
            <div class="col-md-3 mb-3 mb-md-0">
              <img src="${restaurant.image}" class="img-fluid rounded-4 object-fit-cover w-100" style="height:160px;" alt="${restaurant.name}">
            </div>
            <div class="col-md-9">
              <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                <h2 class="fw-bold mb-0 text-dark">${restaurant.name}</h2>
                <span class="rating-badge position-static fs-6"><i class="bi bi-star-fill text-warning"></i> ${restaurant.rating} / 5.0</span>
              </div>
              <p class="text-muted mb-2"><i class="bi bi-geo-alt text-orange"></i> ${restaurant.location} • <i class="bi bi-clock"></i> ${restaurant.deliveryTime} • <i class="bi bi-tag"></i> ${restaurant.cuisine}</p>
              <p class="text-secondary mb-0">${restaurant.description}</p>
            </div>
          </div>
        </div>
      `;
    }

    // Filter Menu Items
    let items = sampleData.foodItems.filter(f => f.restaurantId === restaurant.id);
    if (items.length === 0) {
      // Fallback show all food items if specific menu empty
      items = sampleData.foodItems;
    }

    let activeFilter = 'All';

    const renderItems = () => {
      let filtered = items;
      if (activeFilter === 'Veg') filtered = items.filter(f => f.type === 'Veg');
      if (activeFilter === 'Non-Veg') filtered = items.filter(f => f.type === 'Non-Veg');
      if (activeFilter === 'Gluten-Free') filtered = items.filter(f => f.dietaryTags.includes('Gluten-Free'));
      if (activeFilter === 'Bestseller') filtered = items.filter(f => f.dietaryTags.includes('Bestseller'));

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">No items available in this category.</p></div>`;
      } else {
        grid.innerHTML = filtered.map(food => this.createFoodCardHTML(food)).join('');
      }
    };

    // Bind Filter Tabs
    const filterTabs = document.querySelectorAll('.menu-filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabs.forEach(t => t.classList.remove('btn-primary-orange', 'active'));
        filterTabs.forEach(t => t.classList.add('btn-outline-brown'));
        e.target.classList.remove('btn-outline-brown');
        e.target.classList.add('btn-primary-orange', 'active');
        activeFilter = e.target.dataset.filter;
        renderItems();
      });
    });

    renderItems();
  }

  // Cart Page Rendering
  renderCartPage() {
    const container = document.getElementById('cartContainer');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-5 my-4">
          <div class="mb-4">
            <i class="bi bi-cart-x text-muted" style="font-size: 5rem;"></i>
          </div>
          <h3 class="fw-bold mb-2">Your Cart is Empty</h3>
          <p class="text-muted mb-4">Looks like you haven't added any delicious food items to your cart yet.</p>
          <a href="restaurants.html" class="btn btn-primary-orange px-4 py-2"><i class="bi bi-shop"></i> Explore Restaurants</a>
        </div>
      `;
      return;
    }

    const { subtotal, deliveryFee, discount, tax, grandTotal } = this.getCalculations();

    container.innerHTML = `
      <div class="row g-4">
        <!-- Cart Items List -->
        <div class="col-lg-8">
          <div class="p-4 bg-white rounded-4 border shadow-sm mb-3">
            <h5 class="fw-bold mb-4 border-bottom pb-3"><i class="bi bi-cart3 text-orange"></i> Your Selected Dishes (${this.cart.length})</h5>
            <div class="d-flex flex-column gap-3">
              ${this.cart.map(item => `
                <div class="d-flex flex-wrap align-items-center justify-content-between p-3 rounded-3 bg-light gap-3">
                  <div class="d-flex align-items-center gap-3">
                    <img src="${item.image}" class="rounded-3 object-fit-cover" style="width: 70px; height: 70px;" alt="${item.name}">
                    <div>
                      <h6 class="fw-bold mb-1 text-dark">${item.name}</h6>
                      <p class="text-muted small mb-0"><i class="bi bi-shop"></i> ${item.restaurantName}</p>
                      <span class="fw-bold text-orange">₹${item.price}</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 ms-auto">
                    <div class="qty-control bg-white">
                      <button class="qty-btn" onclick="app.updateQuantity(${item.id}, -1)">-</button>
                      <span class="qty-val">${item.quantity}</span>
                      <button class="qty-btn" onclick="app.updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <span class="fw-bold text-dark fs-6" style="min-width: 70px; text-align: right;">₹${item.price * item.quantity}</span>
                    <button class="btn btn-sm text-danger border-0" onclick="app.removeFromCart(${item.id})"><i class="bi bi-trash fs-5"></i></button>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <a href="restaurants.html" class="btn btn-outline-brown btn-sm"><i class="bi bi-arrow-left"></i> Add More Food</a>
              <button class="btn btn-sm text-danger" onclick="app.cart=[]; app.saveCart(); app.renderCartPage();"><i class="bi bi-x-circle"></i> Clear Cart</button>
            </div>
          </div>
        </div>

        <!-- Order Summary & Coupons -->
        <div class="col-lg-4">
          <!-- Coupon Box -->
          <div class="p-4 bg-white rounded-4 border shadow-sm mb-4">
            <h6 class="fw-bold mb-3"><i class="bi bi-ticket-perforated text-orange"></i> Apply Promo Coupon</h6>
            ${this.appliedCoupon ? `
              <div class="alert alert-success d-flex align-items-center justify-content-between py-2 px-3 mb-0">
                <div>
                  <strong>${this.appliedCoupon.code}</strong> Applied!
                </div>
                <button class="btn-close" onclick="app.removeCoupon()"></button>
              </div>
            ` : `
              <div class="input-group">
                <input type="text" id="couponInput" class="form-control" placeholder="Enter coupon code (e.g. FRESH20)">
                <button class="btn btn-primary-orange" onclick="app.applyCoupon(document.getElementById('couponInput').value)">Apply</button>
              </div>
              <div class="mt-2 text-muted fs-7">Try: <strong>FRESH20</strong> or <strong>WELCOME100</strong></div>
            `}
          </div>

          <!-- Price Summary -->
          <div class="p-4 bg-white rounded-4 border shadow-sm">
            <h5 class="fw-bold mb-3 border-bottom pb-2">Order Summary</h5>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Item Subtotal</span>
              <span class="fw-semibold">₹${subtotal}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Delivery Fee</span>
              <span class="fw-semibold">${deliveryFee === 0 ? '<span class="text-success fw-bold">FREE</span>' : '₹' + deliveryFee}</span>
            </div>
            ${discount > 0 ? `
              <div class="d-flex justify-content-between mb-2 text-success">
                <span>Coupon Discount</span>
                <span>- ₹${discount}</span>
              </div>
            ` : ''}
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Taxes & Charges (5% GST)</span>
              <span class="fw-semibold">₹${tax}</span>
            </div>
            <hr class="my-3">
            <div class="d-flex justify-content-between mb-4 fs-5 fw-bold text-dark">
              <span>Grand Total</span>
              <span class="text-orange">₹${grandTotal}</span>
            </div>
            <a href="checkout.html" class="btn btn-primary-orange w-100 py-3 rounded-pill fw-bold text-center"><i class="bi bi-shield-check"></i> Proceed to Checkout</a>
          </div>
        </div>
      </div>
    `;
  }

  // Checkout Page Rendering
  renderCheckoutPage() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;

    if (this.cart.length === 0) {
      window.location.href = 'cart.html';
      return;
    }

    const { subtotal, deliveryFee, discount, tax, grandTotal } = this.getCalculations();

    const summaryEl = document.getElementById('checkoutSummary');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <h5 class="fw-bold mb-3 border-bottom pb-2">Order Details</h5>
        <ul class="list-group list-group-flush mb-3">
          ${this.cart.map(i => `
            <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-2">
              <div>
                <span class="fw-semibold">${i.name}</span>
                <span class="text-muted small"> x ${i.quantity}</span>
              </div>
              <span>₹${i.price * i.quantity}</span>
            </li>
          `).join('')}
        </ul>
        <div class="d-flex justify-content-between text-muted small mb-1">
          <span>Subtotal</span>
          <span>₹${subtotal}</span>
        </div>
        <div class="d-flex justify-content-between text-muted small mb-1">
          <span>Delivery</span>
          <span>${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}</span>
        </div>
        ${discount > 0 ? `<div class="d-flex justify-content-between text-success small mb-1"><span>Discount</span><span>-₹${discount}</span></div>` : ''}
        <div class="d-flex justify-content-between text-muted small mb-2">
          <span>GST (5%)</span>
          <span>₹${tax}</span>
        </div>
        <hr>
        <div class="d-flex justify-content-between fw-bold fs-5 text-dark mb-3">
          <span>Total Payable</span>
          <span class="text-orange">₹${grandTotal}</span>
        </div>
      `;
    }

    // Auto-fill user address if available
    if (this.currentUser) {
      document.getElementById('cName').value = this.currentUser.name || '';
      document.getElementById('cEmail').value = this.currentUser.email || '';
      document.getElementById('cPhone').value = this.currentUser.phone || '';
    }

    // Handle Place Order
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newOrder = {
        id: 'FB-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
        items: [...this.cart],
        summary: { subtotal, deliveryFee, discount, tax, grandTotal },
        address: {
          name: document.getElementById('cName').value,
          phone: document.getElementById('cPhone').value,
          email: document.getElementById('cEmail').value,
          street: document.getElementById('cAddress').value,
          city: document.getElementById('cCity').value,
          state: document.getElementById('cState').value,
          pincode: document.getElementById('cPincode').value,
        },
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        deliveryTime: document.getElementById('cDeliveryTime').value,
        status: 'Order Placed'
      };

      this.orders.unshift(newOrder);
      this.saveOrders();

      // Clear Cart
      this.cart = [];
      this.appliedCoupon = null;
      this.saveCart();

      // Show Order Confirmation Modal
      this.showOrderSuccessModal(newOrder);
    });
  }

  showOrderSuccessModal(order) {
    let modalEl = document.getElementById('orderSuccessModal');
    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = 'orderSuccessModal';
      modalEl.className = 'modal fade';
      modalEl.setAttribute('data-bs-backdrop', 'static');
      document.body.appendChild(modalEl);
    }

    modalEl.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center p-4 rounded-4 border-0">
          <div class="modal-body">
            <div class="text-success display-1 mb-3"><i class="bi bi-check-circle-fill"></i></div>
            <h3 class="fw-bold mb-2">Order Placed Successfully!</h3>
            <p class="text-muted">Thank you for ordering with FreshBite.</p>
            <div class="p-3 bg-light rounded-3 text-start mb-3 small">
              <p class="mb-1"><strong>Order ID:</strong> ${order.id}</p>
              <p class="mb-1"><strong>Estimated Delivery:</strong> ${order.deliveryTime}</p>
              <p class="mb-1"><strong>Total Paid:</strong> ₹${order.summary.grandTotal}</p>
              <p class="mb-0"><strong>Deliver To:</strong> ${order.address.street}, ${order.address.city}</p>
            </div>
            <a href="orders.html" class="btn btn-primary-orange w-100 py-2 rounded-pill">View Order History</a>
          </div>
        </div>
      </div>
    `;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  }

  // Orders History Page Rendering
  renderOrdersPage() {
    const container = document.getElementById('ordersContainer');
    if (!container) return;

    if (this.orders.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-receipt text-muted" style="font-size: 4rem;"></i>
          <h4 class="fw-bold mt-3">No Past Orders Yet</h4>
          <p class="text-muted">You haven't placed any food orders yet.</p>
          <a href="restaurants.html" class="btn btn-primary-orange px-4 mt-2">Order Now</a>
        </div>
      `;
      return;
    }

    container.innerHTML = this.orders.map(order => `
      <div class="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
        <div class="card-header bg-white p-3 d-flex flex-wrap align-items-center justify-content-between border-bottom">
          <div>
            <span class="fw-bold text-dark fs-6 me-2">Order ID: #${order.id}</span>
            <span class="badge bg-success">${order.status}</span>
          </div>
          <span class="text-muted small"><i class="bi bi-calendar3"></i> ${order.date}</span>
        </div>
        <div class="card-body p-4">
          <div class="row g-3">
            <div class="col-md-8">
              <h6 class="fw-bold text-muted mb-2 fs-7 text-uppercase">Items Ordered:</h6>
              ${order.items.map(item => `
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span class="food-type-icon ${item.type === 'Veg' ? 'veg' : 'non-veg'}"></span>
                  <span class="fw-semibold text-dark">${item.name}</span>
                  <span class="text-muted small">x${item.quantity}</span>
                  <span class="ms-auto fw-bold">₹${item.price * item.quantity}</span>
                </div>
              `).join('')}
              <div class="mt-3 text-muted small">
                <i class="bi bi-geo-alt"></i> <strong>Deliver to:</strong> ${order.address.name}, ${order.address.street}, ${order.address.city} (${order.address.phone})
              </div>
            </div>
            <div class="col-md-4 border-start-md ps-md-4 d-flex flex-column justify-content-between">
              <div>
                <h6 class="fw-bold text-muted mb-2 fs-7 text-uppercase">Payment:</h6>
                <p class="mb-1 fw-bold text-dark">${order.paymentMethod.toUpperCase()}</p>
                <div class="fs-5 fw-bold text-orange">Total: ₹${order.summary.grandTotal}</div>
              </div>
              <button class="btn btn-outline-brown btn-sm rounded-pill mt-3 w-100" onclick="app.reorder('${order.id}')">
                <i class="bi bi-arrow-repeat"></i> Reorder Items
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  reorder(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.items.forEach(item => this.addToCart(item.id, item.quantity));
      window.location.href = 'cart.html';
    }
  }

  // Account Page Rendering
  renderAccountPage() {
    const container = document.getElementById('accountContainer');
    if (!container) return;

    if (!this.currentUser) {
      window.location.href = 'login.html';
      return;
    }

    container.innerHTML = `
      <div class="row g-4">
        <!-- Sidebar Navigation -->
        <div class="col-lg-3">
          <div class="p-4 bg-white rounded-4 border shadow-sm text-center">
            <div class="display-4 text-orange mb-2"><i class="bi bi-person-circle"></i></div>
            <h5 class="fw-bold text-dark mb-1">${this.currentUser.name}</h5>
            <p class="text-muted small mb-3">${this.currentUser.email}</p>
            <button class="btn btn-sm btn-outline-danger w-100 rounded-pill" onclick="app.logoutUser()"><i class="bi bi-box-arrow-right"></i> Logout</button>
          </div>
        </div>

        <!-- Main Account Content -->
        <div class="col-lg-9">
          <!-- Profile Card -->
          <div class="p-4 bg-white rounded-4 border shadow-sm mb-4">
            <h5 class="fw-bold mb-3 border-bottom pb-2">Profile Information</h5>
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label text-muted small">Full Name</label>
                <input type="text" class="form-control" value="${this.currentUser.name}" readonly>
              </div>
              <div class="col-md-6">
                <label class="form-label text-muted small">Email Address</label>
                <input type="email" class="form-control" value="${this.currentUser.email}" readonly>
              </div>
              <div class="col-md-6">
                <label class="form-label text-muted small">Mobile Number</label>
                <input type="text" class="form-control" value="${this.currentUser.phone || '+91 98765 43210'}" readonly>
              </div>
            </div>
          </div>

          <!-- Saved Addresses -->
          <div class="p-4 bg-white rounded-4 border shadow-sm mb-4">
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h5 class="fw-bold mb-0">Saved Addresses</h5>
              <button class="btn btn-sm btn-primary-orange rounded-pill" onclick="app.openAddressModal()"><i class="bi bi-plus-lg"></i> Add Address</button>
            </div>
            <div class="row g-3">
              ${this.savedAddresses.map(addr => `
                <div class="col-md-6">
                  <div class="p-3 border rounded-3 bg-light position-relative">
                    <span class="badge bg-secondary mb-2">${addr.name}</span>
                    <h6 class="fw-bold text-dark mb-1">${addr.fullName}</h6>
                    <p class="text-muted small mb-1">${addr.address}, ${addr.city}, ${addr.state} - ${addr.pincode}</p>
                    <p class="text-muted small mb-0"><i class="bi bi-telephone"></i> ${addr.mobile}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Wishlist -->
          <div class="p-4 bg-white rounded-4 border shadow-sm">
            <h5 class="fw-bold mb-3 border-bottom pb-2">Your Wishlist (${this.wishlist.length})</h5>
            ${this.wishlist.length === 0 ? `
              <p class="text-muted">Your wishlist is empty. Click the heart icon on any dish to save it!</p>
            ` : `
              <div class="row g-3">
                ${this.wishlist.map(id => {
                  const item = sampleData.foodItems.find(f => f.id === id);
                  if (!item) return '';
                  return `
                    <div class="col-md-6">
                      <div class="d-flex align-items-center p-2 border rounded-3 bg-light justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                          <img src="${item.image}" class="rounded object-fit-cover" style="width: 50px; height: 50px;" alt="${item.name}">
                          <div>
                            <h6 class="mb-0 fw-bold small text-dark">${item.name}</h6>
                            <span class="text-orange fw-bold small">₹${item.price}</span>
                          </div>
                        </div>
                        <button class="btn btn-sm btn-primary-orange rounded-circle" onclick="app.addToCart(${item.id})"><i class="bi bi-plus-lg"></i></button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }

  // Simulated Auth
  setupAuthPage() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        this.currentUser = { name: email.split('@')[0], email: email, phone: '+91 98765 43210' };
        this.saveUser();
        this.showToast('Login successful!');
        setTimeout(() => window.location.href = 'index.html', 1000);
      });
    }

    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const phone = document.getElementById('regPhone').value;
        this.currentUser = { name, email, phone };
        this.saveUser();
        this.showToast('Account registered successfully!');
        setTimeout(() => window.location.href = 'index.html', 1000);
      });
    }
  }

  logoutUser() {
    this.currentUser = null;
    this.saveUser();
    this.showToast('Logged out');
    window.location.href = 'index.html';
  }

  // Contact Page
  setupContactPage() {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.showToast('Thank you! Your message has been submitted successfully.');
        form.reset();
      });
    }
  }
}

// Global App Instance
const app = new FreshBiteApp();
