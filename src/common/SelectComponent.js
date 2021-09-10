import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div>
      <label className="label">{title}</label>
      <Select {...rest} className="select" />
    </div>
  );
};

export default SelectComponent;
