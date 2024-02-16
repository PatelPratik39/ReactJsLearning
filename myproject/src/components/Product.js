const Product = () => {
    const products = ['Laptop','desktop', 'phone']
    return ( <div>
        {products.map( (product) => (
            <h3>{product}</h3>
        ))}
    </div> );
}
 
export default Product;