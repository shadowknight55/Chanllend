// Function to generate random stock levels
function generateStock() {
    const products = [
        { id: 'laptop', name: 'Laptop' },
        { id: 'shirt', name: 'Shirt' },
        { id: 'milk', name: 'Milk' }
    ];

    products.forEach(product => {
        const quantity = Math.floor(Math.random() * 101); // Random quantity between 0 and 100
        const statusElement = document.querySelector(`#${product.id} .status`);
        const quantityElement = document.querySelector(`#${product.id} .quantity`);

        quantityElement.textContent = quantity; // Update quantity display

        // Determine stock status
        if (quantity <= 0) {
            statusElement.textContent = "Out of Stock";
        } else if (quantity > 50) {
            statusElement.textContent = "Overstocked";
        } else {
            statusElement.textContent = "In Stock";
        }
    });
}

// Generate stock on page load
window.onload = generateStock;
