const ProductInfo = () => {
    const product = {
        name: 'Laptop',
        price: 1300,
        availability: 'In Stock'
    };

    return (
        <div>
            <p>Product Name: {product.name}</p>
            <p>Product Price: ${product.price}</p>
            <p>Product Availability: {product.availability}</p>
        </div>
    );
}

export default ProductInfo;