document.addEventListener("DOMContentLoaded", function() {
    const selectedProductsList = document.getElementById('selected-products');
    const totalCostElement = document.getElementById('total-cost');

    // Retrieve the selected products and total from localStorage
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    const total = localStorage.getItem('total');

    // Check if there are selected products
    if (selectedProducts && total) {
        let productHTML = '';

        // Loop through selected products and display them in a list
        selectedProducts.forEach(product => {
            productHTML += `<li>${product.label} - $${product.price}</li>`;
        });

        selectedProductsList.innerHTML = productHTML;
        totalCostElement.textContent = "$" + total;
    } else {
        selectedProductsList.innerHTML = '<li>No products selected.</li>';
        totalCostElement.textContent = "$0";
    }
});

function confirmPurchase() {
    alert("Thank you for your purchase!");

    // Clear the localStorage data after purchase
    localStorage.removeItem('selectedProducts');
    localStorage.removeItem('total');

   
}

