$(document).ready(function () {
    const storeItems = [
        {
            name: 'TV',
            price: 800.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Phone',
            price: 700.00,
            inStock: false,
            details: '5G'
        },
        {
            name: 'Game Console',
            price: 300.00,
            inStock: true,
            details: 'The latest and greatest'
        },
        {
            name: 'Laptop',
            price: 1200.00,
            inStock: true,
            details: '16GB RAM 1TB SSD'
        },
        {
            name: 'Smart Watch',
            price: 200.00,
            inStock: false,
            details: 'Counts your steps'
        },
        {
            name: 'Headphones',
            price: 100.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Keyboard',
            price: 100.00,
            inStock: true,
            details: 'Types for you'
        },
        {
            name: 'HDMI Cord',
            price: 100.00,
            inStock: true,
            details: 'HDMI to USB type C'
        },
        {
            name: 'Monitor',
            price: 300.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Speaker',
            price: 200.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Video Game',
            price: 60.00,
            inStock: true,
            details: 'Enjoy for hours'
        }
    ];

    function displayProducts() {
        const productsContainer = $('#products');
        productsContainer.empty();

        storeItems.forEach(function (item) {
            if (item.inStock) {
                const productBox = $('<div class="product-box"></div>');
                const price = $('<p class="product-price"></p>').text('$' + item.price.toFixed(2));
                const name = $('<p class="product-name"></p>').text(item.name);
                const details = $('<p class="product-details"></p>').text(item.details);

                productBox.append(price, name, details);
                productsContainer.append(productBox);
            }
        });
    }

    displayProducts();

    $('#toggleDarkMode').on('click', function () {
        $('body').toggleClass('dark-mode');
    });
});
