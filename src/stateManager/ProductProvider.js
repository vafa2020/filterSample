import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react/cjs/react.development";
import { ProductDataList } from "../component/db/ProductDataList";

const productContext = createContext();
const productContextDispatch = createContext();
// const initialSatte = [
//   { title: "React.js", price: "99$", id: 1, qty: 2 },
//   { title: "JavaScript.js", price: "80$", id: 2, qty: 3 },
//   { title: "Node.js", price: "69$", id: 3, qty: 5 },
// ];
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      const index = state.findIndex((p) => p.id === action.value);
      const selectObject = { ...state[index] };
      selectObject.qty++;
      const updateProduct = [...state];
      updateProduct[index] = selectObject;
      return updateProduct;
    }
    case "decrement": {
      const index = state.findIndex((p) => p.id === action.value);
      const selectObject = { ...state[index] };
      if (selectObject.qty === 1) {
        console.log(selectObject.qty);
        const filterdProduct = state.filter((p) => p.id !== action.value);
        return filterdProduct;
      }
      selectObject.qty--;
      const updateProduct = [...state];
      updateProduct[index] = selectObject;
      return updateProduct;
    }
    case "Delete": {
      const deleteProduct = state.filter((p) => p.id !== action.value);
      return deleteProduct;
    }
    case "edit": {
      const index = state.findIndex((p) => p.id === action.value);
      const selectObject = { ...state[index] };
      selectObject.title = action.event;
      const updateProduct = [...state];
      updateProduct[index] = selectObject;
      return updateProduct;
    }
    default:
      return state;
  }
};
const ProductProvider = ({ children }) => {
  //  useReducer به کمک useContextروش استفاده از
  const [product, dispatch] = useReducer(reducer, ProductDataList);

  //  useState به کمک useContextروش استفاده از
  // const [product, setProduct] = useState([
  //   { title: "React.js", price: "99$", id: 1, qty: 2 },
  //   { title: "JavaScript.js", price: "80$", id: 2, qty: 3 },
  //   { title: "Node.js", price: "69$", id: 3, qty: 5 },
  // ]);
  return (
    <productContext.Provider value={product}>
      <productContextDispatch.Provider value={dispatch}>
        {children}
      </productContextDispatch.Provider>
    </productContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(productContext);
export const useProductAction = () => useContext(productContextDispatch);
// const product = useContext(productContext);
// const setProduct = useContext(productContextDispatch);

// const Increment = (id) => {
//   const index = product.findIndex((p) => p.id === id);
//   const selectObject = { ...product[index] };
//   selectObject.qty++;
//   const updateProduct = [...product];
//   updateProduct[index] = selectObject;
//   setProduct(updateProduct);
// };
// const decrement = (id) => {
//   const index = product.findIndex((p) => p.id === id);
//   const selectObject = { ...product[index] };
//   if (selectObject.qty === 1) {
//     console.log(selectObject.qty);
//     const filterdProduct = product.filter((p) => p.id !== id);
//     setProduct(filterdProduct);
//   } else {
//     selectObject.qty--;
//     const updateProduct = [...product];
//     updateProduct[index] = selectObject;
//     setProduct(updateProduct);
//   }
// };
// const Delete = (id) => {
//   const deleteProduct = product.filter((p) => p.id !== id);
//   setProduct(deleteProduct);
// };
// const edit = (id, event) => {
//   const index = product.findIndex((p) => p.id === id);
//   const selectObject = { ...product[index] };
//   selectObject.title = event.target.value;
//   const updateProduct = [...product];
//   updateProduct[index] = selectObject;
//   setProduct(updateProduct);
// };
// return { Increment, decrement, Delete, edit };
