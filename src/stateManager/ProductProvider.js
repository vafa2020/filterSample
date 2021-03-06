import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react/cjs/react.development";
import { ProductDataList } from "../component/db/ProductDataList";
import _ from "lodash";

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
      selectObject.quantity++;
      const updateProduct = [...state];
      updateProduct[index] = selectObject;
      return updateProduct;
    }
    case "decrement": {
      const index = state.findIndex((p) => p.id === action.value);
      const selectObject = { ...state[index] };
      if (selectObject.quantity === 1) {
        console.log(selectObject.qty);
        const filterdProduct = state.filter((p) => p.id !== action.value);
        return filterdProduct;
      }
      selectObject.quantity--;
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
    case "filterSize": {
      if (action.value === "All") {
        return ProductDataList;
      }
      const filterProduct = ProductDataList.filter(
        (p) => p.display.indexOf(action.value) !== -1
      );
      return filterProduct;
    }
    case "filterModel": {
      if (action.value === "All") {
        return ProductDataList;
      }
      const filteredModel = ProductDataList.filter(
        (p) => p.model === action.value
      );

      return filteredModel;
    }
    case "filterSort": {
      const cloneProduct = [...state];
      if (action.value === "asc") {
        return _.orderBy(cloneProduct, ["price"], ["desc"]);
      }
      return _.orderBy(cloneProduct, ["price"], ["asc"]);
    }
    case "searchFilter": {
      if (!action.value) {
        return state;
      }
      const searchProduct = state.filter((p) =>
        p.title.toLowerCase().includes(action.value.toLowerCase())
      );
      return searchProduct;
    }

    default:
      return state;
  }
};
const ProductProvider = ({ children }) => {
  //  useReducer ???? ?????? useContext?????? ?????????????? ????
  const [product, dispatch] = useReducer(reducer, ProductDataList);

  //  useState ???? ?????? useContext?????? ?????????????? ????
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
