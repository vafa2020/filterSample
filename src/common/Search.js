import { useEffect, useState } from "react";
import { useProductAction } from "../stateManager/ProductProvider";

const Search = (props) => {
  const dispatch = useProductAction();
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    if (!props.size) {
      dispatch({ type: "filterModel", value: props.model.value });
      dispatch({ type: "searchFilter", value: e.target.value });
      return setInputValue(e.target.value);
    }
    dispatch({ type: "filterSize", value: props.size.value });
    dispatch({ type: "searchFilter", value: e.target.value });
    setInputValue(e.target.value);
  };

  return (
    <div className="searchBox">
      <input
        className="search"
        type="text"
        value={inputValue}
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;
