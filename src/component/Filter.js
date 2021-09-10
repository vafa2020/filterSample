import { useProductAction } from "../stateManager/ProductProvider";
import { useState } from "react";
import SelectComponent from "../common/SelectComponent";
import Search from "../common/Search";
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

const optionsModel = [
  { value: "All", label: "All" },
  { value: "acer", label: "acer" },
  { value: "samsung", label: "samsung" },
  { value: "asus", label: "asus" },
  { value: "del", label: "del" },
  { value: "canon", label: "canon" },
];
const Filter = () => {
  const dispatch = useProductAction();
  const [sizeValue, setSizeValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const sizeHandler = (selectOption) => {
    dispatch({ type: "filterModel", value: selectOption.value });
    dispatch({ type: "filterSize", value: selectOption.value });
    dispatch({ type: "filterSort", value: sortValue });
    setSizeValue(selectOption);
  };
  const modelHandler = (selectOption) => {
    dispatch({ type: "filterModel", value: selectOption.value });
    dispatch({ type: "filterSort", value: sortValue });
    setModelValue(selectOption)
  };
  const sortHandler = (selectOption) => {
    dispatch({ type: "filterSort", value: selectOption.value });
    setSortValue(selectOption);
  };
  return (
    <div className="filter">
      <Search size={sizeValue} model={modelValue} />
      <div className="filters">
        <SelectComponent
          title={"sizeProduct:"}
          value={sizeValue}
          options={optionsSize}
          onChange={sizeHandler}
        />
        <SelectComponent
          title={"sortProduct:"}
          value={sortValue}
          options={optionsSort}
          onChange={sortHandler}
        />
        <SelectComponent
          title={"modelProduct:"}
          value={modelValue}
          options={optionsModel}
          onChange={modelHandler}
        />
      </div>
    </div>
  );
};

export default Filter;
