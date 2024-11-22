function loadCartItems() {
    
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    let cartContainer = document.getElementById('cart-container');
    let totalCostContainer = document.getElementById('total-cost');
    
    
    cartContainer.innerHTML = '';
    let totalCost = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        totalCostContainer.innerHTML = 'Total: $0';
        return;
    }

    cart.forEach((item, index) => {
        
        let itemTotal = item.price * item.quantity;
        totalCost += itemTotal;

        
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <img src="${item.imageUrl}" alt="${item.name}" style="width: 80px; height: 80px; margin-right: 10px;">
                <div style="flex-grow: 1;">
                    <p style="margin: 0; font-weight: bold;">${item.name}</p>
                    <p style="margin: 0;">Price: $${item.price}</p>
                </div>
                <div>
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span style="margin: 0 10px;">${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <p style="margin-left: 20px;">Total: $${itemTotal}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    
    totalCostContainer.innerHTML = `Total: $${totalCost}`;
}


function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    
    cart[index].quantity += change;

    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    loadCartItems();
}


function clearCart() {
    localStorage.removeItem("shoppingCart");
    loadCartItems();
}


window.onload = loadCartItems;
