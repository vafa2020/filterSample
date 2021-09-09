import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
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
        <span className="qty">{data.qty}</span>
      </div>
      <div className="boxInput">
        <input
          className="input"
          type="text"
          onChange={(event) =>
            dispatch({
              type: "edit",
              value: data.id,
              event: event.target.value,
            })
          }
        />
      </div>

      <div className="controler">
        <button
          onClick={()=>dispatch({ type: "Increment", value: data.id })}
          className="btn"
        >
          <BsPlus />
        </button>
        <button
          onClick={()=>dispatch({ type: "decrement", value: data.id })}
          className="btn"
        >
          <BsDash />
        </button>
        <button
          onClick={()=>dispatch({ type: "Delete", value: data.id })}
          className="btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
