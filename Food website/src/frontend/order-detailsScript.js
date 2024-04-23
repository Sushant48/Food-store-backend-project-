// Function to display order details
function displayOrderDetails(orderId) {
    // Fetch order details from the server using orderId and update the DOM
    const orderDetails = document.getElementById('order-details');

    // Sample order details for demonstration
    const order = {
        id: orderId,
        date: '2024-04-20',
        total: 29.99,
        products: [
            { name: 'Product 1', price: 9.99, quantity: 2 },
            { name: 'Product 2', price: 14.99, quantity: 1 }
        ]
    };

    // Update order details in the DOM
    orderDetails.innerHTML = `
        <h2>Order #${order.id}</h2>
        <p>Date: ${order.date}</p>
        <p>Total: $${order.total.toFixed(2)}</p>
        <h3>Products:</h3>
        <ul>
            ${order.products.map(product => `
                <li>${product.name} - $${product.price.toFixed(2)} x ${product.quantity}</li>
            `).join('')}
        </ul>
        <button onclick="window.history.back()">Back to Order History</button>
    `;
}

// Get order ID from query parameters
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('id');

// Display order details when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayOrderDetails(orderId);
});
