
// Fetch product data from the backend
fetch('http://localhost:3000/api/product/products')
    .then(response => response.json())
    .then(products => {
        // Select the container to display products
        const productList = document.querySelector('.product-list');

        // Loop through the products and create product cards
        products.forEach(product => {
            // Create a product card
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Product image
            const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = product.name;
            img.classList.add('product-img');
            productCard.appendChild(img);

            // Product info
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            // Product name
            const productName = document.createElement('h2');
            productName.textContent = product.name;
            productName.classList.add('product-name');
            productInfo.appendChild(productName);

            // Product price
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;
            productPrice.classList.add('product-price');
            productInfo.appendChild(productPrice);

            // Add to cart button
            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.classList.add('add-to-cart-btn');
            productInfo.appendChild(addToCartBtn);

            // Append product info to product card
            productCard.appendChild(productInfo);

            // Append product card to product list container
            productList.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching product data:', error));
