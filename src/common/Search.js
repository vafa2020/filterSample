import { useState } from "react";
import { useProductAction } from "../stateManager/ProductProvider";

const Search = () => {
  const dispatch = useProductAction();
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
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
