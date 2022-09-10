const fs = require('fs');
const getProducts = () => {
    let api = {
        products: []
    }

    for (let i = 1; i <= 12; i++) {
        api.products.push({
            id: i,
            name: `Product ${i}`,
            description: `Product Description ${i}`,
            img: 'https://via.placeholder.com/300x200'
        });
    }

    fs.writeFileSync('products.json', JSON.stringify(api));
    return api;
}

//getProducts();
module.exports = getProducts