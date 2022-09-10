module.exports = () => {
    let api = {
        products: []
    }

    for(let i = 1; i <= 12; i++) {
        api.products.push({
            id: i,
            name: `Product ${i}`,
            description: `Product Description ${i}`,
            img: 'https://via.placeholder.com/300x200'
        });
    }

    return api;
}