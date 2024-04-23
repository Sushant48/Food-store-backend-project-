// Sample data for demonstration
const orders = [
    { id: 1, date: '2024-04-20', total: 29.99 },
    { id: 2, date: '2024-04-21', total: 39.99 },
    { id: 3, date: '2024-04-22', total: 49.99 }
];

// Function to display order history
function displayOrderHistory() {
    const orderHistory = document.getElementById('order-history');
    orderHistory.innerHTML = '';

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');

        const orderId = document.createElement('h2');
        orderId.textContent = `Order #${order.id}`;
        orderItem.appendChild(orderId);

        const orderDate = document.createElement('p');
        orderDate.textContent = `Date: ${order.date}`;
        orderItem.appendChild(orderDate);

        const orderTotal = document.createElement('p');
        orderTotal.textContent = `Total: $${order.total.toFixed(2)}`;
        orderItem.appendChild(orderTotal);

        const viewDetailsBtn = document.createElement('button');
        viewDetailsBtn.textContent = 'View Details';
        viewDetailsBtn.addEventListener('click', () => {
            window.location.href = `order-details.html?id=${order.id}`;
        });
        orderItem.appendChild(viewDetailsBtn);

        orderHistory.appendChild(orderItem);
    });
}

// Display order history when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayOrderHistory();
});
