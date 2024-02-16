const Product = () => {
  const products = ["Laptop", "desktop", "phone", "Modem", "Ipad", "Laptop"];
//   const products = [
//     { id: 1, name: "Laptop", price: 500 },
//     { id: 2, name: "Desktop", price: 4500 },
//     { id: 3, name: "Iphone", price: 1500 },
//     { id: 4, name: "Modem", price: 50 },
//     { id: 5, name: "Ipad", price: 200 },
//     { id: 6, name: "Laptop", price: 500 }
//   ];
//   const productList = products.map((product) => (
//     <h3 key={product.id}>
//       {product.name} : $ {product.price}
//     </h3>
//   ));

const productList = products.map((product, index) => console.log(index));
    <div>{productList}</div>
// ));
//   return <div>{productList}</div>;
};

export default Product;
