// Function to handle checkout
function handleCheckout(event) {
    event.preventDefault();

    // Extract form data
    const formData = new FormData(event.target);
    const products = formData.getAll('product');
    const total = formData.get('total');

    // Perform checkout process (e.g., send order to server)
    console.log('Products:', products);
    console.log('Total:', total);

    // Redirect to order confirmation page
    window.location.href = 'order-confirmation.html';
}

// Add event listener for form submission
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', handleCheckout);
