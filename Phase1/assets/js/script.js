// Product data array
const products = [
    { name: 'Smartphone', category: 'Electronics', price: 599 },
    { name: 'T-shirt', category: 'Clothing', price: 19 },
    { name: 'Laptop', category: 'Electronics', price: 899 },
    { name: 'Jeans', category: 'Clothing', price: 49 },
    { name: 'Headphones', category: 'Electronics', price: 199 }
];

// Function to display products dynamically
function displayProducts(filteredProducts) {
    const displayArea = document.getElementById('product-display');
    displayArea.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="product">
                <h2>${product.name}</h2>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
            </div>`;
        displayArea.innerHTML += productHTML;
    });
}

// Function to filter products by category
function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

// Display all products on page load
displayProducts(products);
