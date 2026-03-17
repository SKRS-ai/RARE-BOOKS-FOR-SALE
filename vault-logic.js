let cart = [];

function addToCart(title, price) {
    cart.push({ title, price });
    updateCartDisplay();
    alert(`${title} has been added to your Private Satchel.`);
}

function updateCartDisplay() {
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.innerHTML = `The Satchel (${cart.length})`;
    
    // Logic to calculate total
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Current Vault Value: $${total.toFixed(2)}`);
}

// Logic for Secure Card Registration would go here
function registerPaymentCard() {
    // Encrypted portal logic
}