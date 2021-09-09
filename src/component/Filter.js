import { useProductAction } from "../stateManager/ProductProvider";
import Select from 'react-select';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]; 
const Filter = () => {
  const dispatch = useProductAction();
  return <div className="filter">
  <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
  </div>;
};

export default Filter;
