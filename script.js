// script.js
const cart = [];

function addToCart(id) {
  const productName = `Hoa ${id}`;
  const productPrice = parseInt(document.querySelectorAll('.product-card')[id - 1].querySelector('p').textContent.replace(/\D/g, ''));
  cart.push({ id, name: productName, price: productPrice });
  updateCartCount();
  alert(`${productName} đã được thêm vào giỏ hàng!`);
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

document.getElementById('cart-btn').addEventListener('click', showCart);

function showCart() {
  const cartModal = document.getElementById('cart-modal');
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.style.marginLeft = '10px';
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = `Tổng cộng: ${total.toLocaleString()} VND`;
  cartModal.classList.remove('hidden');
}

function closeCart() {
  document.getElementById('cart-modal').classList.add('hidden');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
}

function checkout() {
  if (cart.length === 0) {
    alert('Giỏ hàng trống!');
    return;
  }
  alert('Đặt hàng thành công!');
  cart.length = 0;
  updateCartCount();
  closeCart();
}
