import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { useProductAction } from "../stateManager/ProductProvider";
const Product = ({ data }) => {
  const dispatch = useProductAction();
  return (
    <div className="product">
      <label className="label">ProductName:</label>
      <p className="cource">{data.title}</p>
      <label className="label">ProductPrice:</label>
      <p className="price">{data.price}</p>
      <div className="boxQty">
        <span className="qty">{data.quantity}</span>
      </div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "Increment", value: data.id })}
      >
        <BsPlus />
      </button>
      <button
        className={`${"btn"} ${data.quantity === 1 && "remove"}`}
        onClick={() => dispatch({ type: "decrement", value: data.id })}
      >
        {data.quantity === 1 ? <BsTrash /> : <BsDash />}
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "Delete", value: data.id })}
      >
        Delete
      </button>
    </div>
  );
};

export default Product;
