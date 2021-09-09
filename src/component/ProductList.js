import { useProduct } from "../stateManager/ProductProvider";
import Product from "./Product";

const ProductList = () => {
  const product = useProduct();
  if (!product.length) {
    return <div>cart is null</div>;
  }
  return (
    <div className="productList">
      {product.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ProductList;
