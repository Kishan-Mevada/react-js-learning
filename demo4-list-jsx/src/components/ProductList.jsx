const ProductList = () => {
    const productList = [
        {id: 1, name: 'Laptop', price: '$1400'},
        {id: 1, name: 'Phone', price: '$1000'},
        {id: 1, name: 'Tablet', price: '$700'}
    ];

    return (
        <>
            {
                productList.map((product) => (
                    <div key={product.id}>
                        <p> Product Name: {product.name} </p>
                        <p> Product Price: {product.price} </p>
                    </div>
                ))
            }
        </>
    );
}

export default ProductList;