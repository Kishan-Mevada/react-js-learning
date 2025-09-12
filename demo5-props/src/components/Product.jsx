const Product = ({name, price}) => {
    return (
        <div>
            <hr />
            <h1> Product Name: {name}</h1>
            <h2> Product Price: {price}</h2>
        </div>
    );
}

export default Product;