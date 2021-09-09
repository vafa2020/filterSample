import { useProductAction } from "../stateManager/ProductProvider";
import Select from "react-select";
import { useState } from "react";

const optionsSort = [
  { value: "asc", label: "asc" },
  { value: "desc", label: "desc" },
];
const optionsSize = [
  { value: "All", label: "All" },
  { value: "large", label: "large" },
  { value: "medium", label: "medium" },
  { value: "small", label: "small" },
];
const Filter = () => {
  const dispatch = useProductAction();
  const [sizeValue, setSizeValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const sizeHandler = (selectOption) => {
    dispatch({ type: "filterSize", value: selectOption.value });
    dispatch({ type: "filterSort", value: sizeValue });
    setSizeValue(selectOption);
  };
  const sortHandler = (selectOption) => {
    dispatch({ type: "filterSort", value: selectOption.value });
    setSortValue(selectOption);
  };
  return (
    <div className="filter">
      <div>
        <label className="label">sortProduct:</label>
        <Select
          className="filters"
          value={sortValue}
          onChange={sortHandler}
          options={optionsSort}
        />
      </div>
      <div>
        <label className="label">sizeProduct:</label>
        <Select
          className="filters"
          value={sizeValue}
          onChange={sizeHandler}
          options={optionsSize}
        />
      </div>
    </div>
  );
};

export default Filter;
