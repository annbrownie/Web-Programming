
const products = [
    { id: "item1", name: "FC BARCELONA Away 14/15", price: 5000 },
    { id: "item2", name: "FC BARCELONA Away 15/16", price: 6000 },
    { id: "item3", name: "FC BARCELONA Away 16/17", price: 6000 },
    { id: "item4", name: "FC BARCELONA Away 16/17", price: 7000 },
    { id: "item5", name: "FC BARCELONA Away 17/18", price: 6000 },
    { id: "item6", name: "FC BARCELONA Away 18/19", price: 5000 },
    { id: "item7", name: "FC BARCELONA Away 19/20", price: 5000 },
    { id: "item8", name: "FC BARCELONA Away 21/22", price: 6500 },
    { id: "item9", name: "FC BARCELONA Away 22/23", price: 7000 }
];

localStorage.setItem("AllProducts", JSON.stringify(products));



function addToCart(name, price, imageUrl) {
    // Create object for products
    const product = {
        name: name,
        price: price,
        imageUrl: imageUrl,
        quantity: 1
    };

    // Get the cart from localStorage or create a new array if it doesnt already exist
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Check if the product is already in the cart
    let productIndex = cart.findIndex(item => item.name === name);
    if (productIndex !== -1) {
        //  increase the quantity if the product is already in the cart
        cart[productIndex].quantity += 1;
    } else {
        // Add it to the cart if it is not already there
        cart.push(product);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));

    alert(`${name} has been added to your cart!`);
}


function clearCart() {
    localStorage.removeItem("shoppingCart"); // Remove the shoppingCart entry from localStorage
    loadCartItems();
}

    
    

    
