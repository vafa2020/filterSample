import { useProductAction } from "../stateManager/ProductProvider";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "large", label: "large" },
  { value: "medium", label: "medium" },
  { value: "small", label: "small" },
];
const Filter = () => {
  const dispatch = useProductAction();
  const [sizeValue, setSizeValue] = useState();
  const sizeHandler = (selectOption) => {
    console.log(selectOption);
    dispatch({ type: "filterSize", value: selectOption.value });
    setSizeValue(selectOption);
  };
  return (
    <div className="filter">
      <Select
        className="filters"
        value={sizeValue}
        onChange={sizeHandler}
        options={options}
      />
    </div>
  );
};

export default Filter;
